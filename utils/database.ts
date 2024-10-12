import mongoose from "mongoose";

let isConnected = false; 

export const connectDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB already connected!");
    return;
  }

  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    throw new Error("MONGODB_URI is not defined in the environment variables.");
  }

  try {
    // console.log("Attempting to connect...");

    await mongoose.connect(mongoUri, { dbName: "promptly" });

    isConnected = true;
    console.log("Connected to MongoDB!");

  } catch (error: unknown) {
    console.error("Failed to connect to MongoDB:", (error as Error).message);
    console.error((error as Error).stack);
  }
};
