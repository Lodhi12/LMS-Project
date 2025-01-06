import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config({});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB has been connected");
  } catch (error) {
    console.log("An error has occured", error);
  }
};

export default connectDB;
