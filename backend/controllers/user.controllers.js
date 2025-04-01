import userModel from "../models/user.model.js";
import CustomError from "../utils/customError.js";
import bcrypt from "bcrypt";
import { getJwtToken } from "../utils/jwtToken.js";
import mongoose from "mongoose";

export const handleUserRegister = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      const errorField = [];
      if (!name) errorField.push("Name");
      if (!email) errorField.push("Email");
      if (!password) errorField.push("Password");

      return next(
        new CustomError(
          `${errorField.length > 0 && errorField.join(", ")} is required`,
          400
        )
      );
    }

    const user = await userModel.findOne({ email: email });
    if (user) {
      return next(new CustomError("Email already exist", 409));
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    let newUser = await userModel.create({
      name: name,
      email: email,
      password: hash,
    });

    newUser = await userModel.findById(newUser._id).select("-password");

    const payload = {
      _id: newUser._id,
      email: newUser.email,
    };

    const token = await getJwtToken(payload);
    if (token.isError) {
      return next(new CustomError(token?.message, token?.statulCode));
    }
    return res.status(201).json({
      message: "Successfully user registerd",
      token: token?.token,
    });

    return res.status(201).json({
      message: "User registered successfully",
      data: newUser,
      isSuccess: true,
      isError: false,
    });
  } catch (error) {
    console.error(`Error: ${error}`);
    return next(new CustomError("Internal server error", 500));
  }
};

export const handleUserLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      const errorField = [];
      if (!email) errorField.push("Email");
      if (!password) errorField.push("Password");

      return next(
        new CustomError(
          `${errorField.length > 0 && errorField.join(", ")} is required`,
          400
        )
      );
    }

    const user = await userModel.findOne({ email: email });
    if (!user) {
      return next(new CustomError("Email or password is wrong", 404));
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(new CustomError("Email or password is wrong", 404));
    }

    const payload = {
      _id: user._id,
      email: user.email,
    };

    const token = await getJwtToken(payload);
    if (token.isError) {
      return next(new CustomError(token?.message, token?.statulCode));
    }
    return res.status(200).json({
      message: "Successfully logged in",
      token: token?.token,
    });
  } catch (error) {
    console.error(`Error: ${error}`);
    return next(new CustomError("Internal server error", 500));
  }
};

export const handleGetUserData = async (req, res, next) => {
  try {
    const { user_id } = req.params;
    console.log("id:", user_id);
    if (!mongoose.isValidObjectId(user_id)) {
      return next(new CustomError("Invalid user id", 400));
    }

    const user = await userModel.findById(user_id).select("-password");
    if (!user) {
      return next(new CustomError("User not fount", 404));
    }

    return res.status(200).json({
      message: "Get user data successfully",
      data: user,
      isSuccess: true,
      isError: false,
    });
  } catch (error) {
    console.error(`Error: ${error}`);
    return next(new CustomError("Internal server error", 500));
  }
};
