import mongoose from "mongoose";
import config from "./config.js";

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI);
    console.log("Database connected sucessfully :)");
  } catch (error) {
    console.log(error)
    throw new Error("Database connection failed...");
  }
};

export default connectDB;
