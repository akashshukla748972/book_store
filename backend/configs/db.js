import mongoose from "mongoose";
import gb from "./globalVariable.js";

const connectToDb = async () => {
  try {
    await mongoose.connect(gb.mongoDbUrl);
    console.log(`Database connected successfully`);
  } catch (error) {
    console.error(`Error while connecting to database ${error}`);
    process.exit(1);
  }
};

export default connectToDb;
