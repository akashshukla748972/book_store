import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/userSlice";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div>
      <dialog id="my_modal_5" className="modal ">
        <div className="modal-box space-y-4 bg-gray-200 text-gray-800 dark:bg-slate-800 dark:text-gray-200">
          <div className="flex justify-center">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/034/324/148/small/front-view-of-an-animated-boy-standing-wearing-tshirt-character-design-free-photo.jpeg"
              className="w-[100px] h-[100px] rounded-full"
              alt=""
            />
          </div>
          <div className="">
            {user && user?.name && (
              <div className="flex flex-nowrap items-center space-x-2">
                <h3 className="font-semibold text-lg">Name: </h3>{" "}
                <span className="">{user.name}</span>
              </div>
            )}
            {user && user?.email && (
              <div className="flex flex-nowrap items-center space-x-2">
                <h3 className="font-semibold text-lg">Email: </h3>{" "}
                <span className="">{user.email}</span>
              </div>
            )}
          </div>
          <div className="modal-action justify-between">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
            <button
              onClick={() => dispatch(logout())}
              className="border-2 border-red-800 px-6 rounded-2xl text-red-800 cursor-pointer"
            >
              logout
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Profile;
