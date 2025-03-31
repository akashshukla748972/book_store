import userModel from "../models/user.model.js";
import CustomError from "../utils/customError.js";
import bcrypt from "bcrypt";

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
          `${errorField > 0 && errorField.join(", ")} is required`
        )
      );
    }

    const user = await userModel.find({ email: email });
    if (user) {
      return next(new CustomError("Email already exist"), 409);
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
      data: user,
      isSuccess: true,
      isError: false,
    });
  } catch (error) {
    console.error(`Error: ${error}`);
    return next(new CustomError("Internal server error", 500));
  }
};
