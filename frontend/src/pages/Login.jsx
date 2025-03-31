import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUserData, loginUser } from "../store/slices/userSlice";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import Loader from "./Loader";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogin = (e) => {
    dispatch(loginUser(e));
  };

  useEffect(() => {
    if (user.token) {
      try {
        const decoded = jwtDecode(user.token);
        if (decoded._id) {
          dispatch(getUserData(decoded._id));
          toast.success("User logged in successfully");
        }
      } catch (error) {
        console.error("Invalid Token:", error);
      }
    }
  }, [user.token]);

  useEffect(() => {
    if (user.user) {
      navigate("/");
    }
  }, [user.user]);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        {user.isLoading && <Loader />}
        <div className="modal-box bg-white dark:bg-slate-800">
          <form method="dialog">
            <button
              onClick={() => navigate(-1)}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg my-2 text-center">Login</h3>
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-3">
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

            <div className="space-x-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <button
                className="bg-pink-500 text-gray-200 px-6 py-2 rounded-md"
                type="submit"
              >
                Login
              </button>
              <span className="">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-pink-500 font-semibold hover:text-blue-500 hover:underline transition-all duration-300 ease-in-out"
                >
                  Sign up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
