import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import Loader from "../pages/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllBook } from "../store/slices/bookSlice";

const FreeBook = () => {
  const [freeBook, setFreeBook] = useState([]);

  const { books, isLoading } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBook());
  }, [dispatch]);

  useEffect(() => {
    if (books) {
      const filteredBooks = books.filter((book) => book.price === "0");
      setFreeBook(filteredBooks);
    }
  }, [books]);

  if (isLoading) {
    return <Loader />;
  }

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[95%] container mx-auto md-px-20 px-4 my-10 space-y-6">
      <div>
        <h1 className="text-xl md:text-2xl font-semibold">
          Free Offered Course
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est animi, ad
          vero saepe eum laboriosam a error distinctio at sit deleniti odit
          officia commodi autem quia repellendus, ea impedit. Deleniti.
        </p>
      </div>
      <div>
        <Slider {...settings}>
          {freeBook.length > 0 ? (
            freeBook.map((book) => <Card key={book._id} book={book} />)
          ) : (
            <p className="text-center">No free books available</p>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default FreeBook;
