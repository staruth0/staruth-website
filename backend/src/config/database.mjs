import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const connection = async () => {
  const connectionString = process.env.MONGODBURL || "";
  try {
    console.log("Connecting to MongoDB Atlas...");
      if (mongoose.connection.readyState !== 1) {
        await mongoose.connect(connectionString, {
          dbName: process.env.DB_NAME,
          socketTimeoutMS: 30000
    });
      }
      console.log('Connected to MongoDB');
    return mongoose.connection;
  } catch (error) {
    console.error(error);
    throw new Error('Unable to connect to MongoDB');
  }
};
export default connection;