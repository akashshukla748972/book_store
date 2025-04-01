import React from "react";

const ContactCard = ({ cardData }) => {
  return (
    <>
      <div className="card w-80 md:w-96 bg-white dark:bg-base-100 shadow-sm rounded-md h-[300px] border-t-8 border-t-pink-500 relative">
        <div className="card-body">
          <div className="flex flex-col justify-between space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
              {cardData.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-200">{cardData.disc}</p>
          </div>
          <div className="mt-6 absolute bottom-10 flex">
            <button className={`btn w-full rounded-4xl ${cardData.style}`}>
              {cardData.btnText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
