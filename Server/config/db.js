import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/MovieTicket");
    console.log("db connected");
  } catch (err) {
    console.error("DB connection error:", err);
  }
};

export default connection;
