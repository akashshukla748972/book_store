import React from "react";

const Card = ({ book }) => {
  return (
    <div className="card bg-base-100 w-full md:w-96 shadow-xl hover:shadow-2xl p-2 hover:scale-105 duration-300 transition-all ease-in-out hover:z-30">
      <figure>
        <img src={book.image_url} alt="Shoes" className="h-52 w-[100%]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {book.name}
          <div className="badge badge-secondary">
            {book.price == 0 ? "Free" : "$" + book.price}
          </div>
        </h2>
        <p>
          {book.title.toString().slice(0, 35)}...
          <span className="text-[11px] text-pink-500 cursor-pointer">More</span>
        </p>
        <div className="card-actions justify-between my-2">
          <div className="border border-gray-100 text-gray-100 rounded-2xl py-[1px] px-4 hover:border-none hover:bg-pink-500 duration-300 transition-all ease-in-out">
            ${book.price}
          </div>
          <div className="border border-gray-100 text-gray-100 rounded-2xl py-[1px] px-4 hover:border-none hover:bg-pink-500 duration-300 transition-all ease-in-out">
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
