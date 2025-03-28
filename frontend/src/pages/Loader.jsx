import React from "react";

const Loader = () => {
  return (
    <div className="bg-gray-900 inset-0 fixed flex justify-center items-center z-50">
      <div className="w-[60px] h-[60px] rounded-full border-4 border-gray-700 border-t-gray-200 animate-spin"></div>
    </div>
  );
};

export default Loader;
