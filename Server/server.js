import express from "express";
import cors from "cors";
import "dotenv/config";
import connection from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { inngest, functions } from "./ingest/index.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

app.get("/", (req, res) => {
  res.send("Hello World server is running");
});

app.use("/api/inngest", serve({ client: inngest, functions }));
export const config = {
  runtime: "edge",
};
connection();

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
