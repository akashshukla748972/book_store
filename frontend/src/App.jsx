import React, { useEffect } from "react";
import MainRouting from "./utils/MainRouting";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "./store/slices/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (token) {
      const { _id } = jwtDecode(token);
      dispatch(getUserData(_id));
    }
  }, [token]);
  return (
    <>
      <MainRouting />
    </>
  );
};

export default App;
