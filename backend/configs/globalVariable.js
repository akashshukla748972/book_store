import dotenv from "dotenv";
dotenv.config();

const gb = {
  port: process.env.PORT,
  mongoDbUrl: process.env.MONGODB_URL,
};

export default gb;
