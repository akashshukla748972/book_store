import jwt from "jsonwebtoken";
import gb from "../configs/globalVariable.js";
import CustomError from "./customError.js";

export const getJwtToken = async (payload) => {
  try {
    if (Object.keys(payload).length == 0) {
      return {
        isError: true,
        isSuccess: false,
        message: "Payload is required",
        statulCode: 400,
      };
    }
    const token = await jwt.sign(payload, gb.jwtSecret, { expiresIn: "1d" });
    return {
      isError: false,
      isSuccess: true,
      token,
    };
  } catch (error) {
    console.error(`Error: ${error}`);

    return {
      isError: true,
      isSuccess: false,
      message: "Internal server error",
      statulCode: 500,
    };
  }
};
