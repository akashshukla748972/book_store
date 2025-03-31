import dotenv from "dotenv";
dotenv.config();

const gb = {
  port: process.env.PORT,
  mongoDbUrl: process.env.MONGODB_URL,
  mongoDbUser: process.env.MONGODB_USER,
  mongoDbPassword: process.env.MONGODB_PASSWORD,
  jwtSecret: process.env.JWT_SECRET,
};

export default gb;
