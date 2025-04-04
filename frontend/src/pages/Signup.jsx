import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/slices/userSlice";
import Loader from "./Loader";
import toast from "react-hot-toast";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    dispatch(registerUser(e));
  };
  useEffect(() => {
    if (user.errorMessage) {
      toast.error(user.errorMessage);
    }
    if (user.user) {
      toast.success(user.successMessage);
      setTimeout(() => {
        navigate(-1);
      }, 500);
      navigate(-1);
    }
  }, [user.errorMessage, user.successMessage]);

  return (
    <div className="flex justify-center items-center h-screen bg-white dark:bg-slate-900">
      {user.isLoading && <Loader />}
      <div className="w-[400px] sm:w-[450px] md:w-[500px] text-gray-800  dark:bg-slate-800 dark:text-gray-200 relative p-6 rounded-md shadow-2xl">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-30"
        >
          ✕
        </button>
        <h3 className="font-bold text-lg my-2 text-center">Register</h3>
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-3">
          <div className="form-group flex flex-col space-y-1">
            <label htmlFor="name" className="">
              Name
            </label>
            <input
              {...register("name", { required: "Name is required!" })}
              type="text"
              className="p-2 bg-gray-200 dark:bg-slate-900 outline-none"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-group flex flex-col space-y-1">
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              {...register("email", { required: "Email is required!" })}
              type="text"
              className="p-2 bg-gray-200 dark:bg-slate-900 outline-none"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="form-group flex flex-col space-y-1">
            <label htmlFor="password" className="">
              Password
            </label>
            <input
              {...register("password", { required: "Password is required!" })}
              type="password"
              className="p-2 bg-gray-200 dark:bg-slate-900 outline-none"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="space-y-2 sm:space-x-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <button
              className="bg-pink-500 text-gray-200 px-6 py-2 rounded-md"
              type="submit"
            >
              Sign up
            </button>
            <span className="">
              Already have account?{" "}
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="text-pink-500 font-semibold hover:text-blue-500 hover:underline transition-all duration-300 ease-in-out"
              >
                Login
              </button>
            </span>
          </div>
        </form>
        <Login />
      </div>
    </div>
  );
};

export default Signup;
