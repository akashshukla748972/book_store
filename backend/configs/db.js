import mongoose from "mongoose";
import gb from "./globalVariable.js";

const connectToDb = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${gb.mongoDbUser}:${gb.mongoDbPassword}@cluster0.gsvplee.mongodb.net/book_store?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log(`Database connected successfully`);
  } catch (error) {
    console.error(`Error while connecting to database ${error}`);
    process.exit(1);
  }
};

export default connectToDb;
