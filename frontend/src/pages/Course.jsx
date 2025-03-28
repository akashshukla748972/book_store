import React from "react";
import listBook from "../../public/list.json";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-[95%] container mx-auto md-px-20 px-4 my-10 space-y-6">
        <div className="mt-28 flex flex-col items-center justify-center space-y-6 text-center">
          <h1 className="text-2xl md:text-4xl font-semibold">
            We're delighted to have you{" "}
            <span className="text-pink-500">here! :)</span>
          </h1>
          <div className="space-y-6">
            <p className="text-[12px] md:text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
              provident temporibus nulla deleniti ad fuga, numquam odio maxime
              aspernatur ipsa? Ullam perferendis eos cupiditate eum quos fugit
              aliquid maiores debitis laborum quibusdam, est facilis eaque
              pariatur accusantium praesentium unde, dolores, veniam ducimus
              excepturi aliquam doloremque quaerat.
            </p>
            <button
              onClick={() => navigate(-1)}
              className="bg-pink-500 text-white font-medium p-6 py-2 rounded-md hover:bg-pink-700"
            >
              Back
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-y-6">
          {listBook &&
            listBook.map((book) => <Card key={book.name} book={book} />)}
        </div>
      </div>
    </>
  );
};

export default Course;
