import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGODB_URI;
    if (!dbURI) {
      throw new Error("MongoDB URI is not defined in the environment variables.");
    }
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;
