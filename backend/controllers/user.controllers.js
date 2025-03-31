import userModel from "../models/user.model.js";
import CustomError from "../utils/customError.js";
import bcrypt from "bcrypt";
import { getJwtToken } from "../utils/jwtToken.js";

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

    const newUser = await userModel.create({
      name: name,
      email: email,
      password: hash,
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
