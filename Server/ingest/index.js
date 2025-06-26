import { Inngest } from "inngest";
import User from "../models/User.js";

export const inngest = new Inngest({ id: "movie_ticket_booking" });

const syncUserFromClerk = inngest.createFunction(
  {
    id: "sync-user-from-clerk",
    name: "Sync User From Clerk",
    trigger: {
      event: "clerk/user.created",
    },
  },
  async ({ event }) => {
    const { id, first_name, last_name, image_url, email_addresses } = event.data;

    const userdata = {
      _id: id,
      email: email_addresses?.[0]?.email_address || "",
      name: `${first_name || ""} ${last_name || ""}`,
      image: image_url || "",
    };

    await User.create(userdata);
  }
);

const updateUserFromClerk = inngest.createFunction(
  {
    id: "update-user-from-clerk",
    name: "Update User From Clerk",
    trigger: {
      event: "clerk/user.updated",
    },
  },
  async ({ event }) => {
    const { id, first_name, last_name, image_url, email_addresses } = event.data;

    const updatedData = {
      email: email_addresses?.[0]?.email_address || "",
      name: `${first_name || ""} ${last_name || ""}`,
      image: image_url || "",
    };

    await User.findByIdAndUpdate(id, updatedData, { new: true });
  }
);

const deleteUserFromClerk = inngest.createFunction(
  {
    id: "delete-user-from-clerk",
    name: "Delete User From Clerk",
    trigger: {
      event: "clerk/user.deleted",
    },
  },
  async ({ event }) => {
    const { id } = event.data;

    await User.findByIdAndDelete(id);
  }
);

export const functions = [
  syncUserFromClerk,
  updateUserFromClerk,
  deleteUserFromClerk,
];
