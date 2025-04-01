import React from "react";

const About = () => {
  return (
    <div className="max-w-[95%] min-h-fit container mx-auto md-px-20 px-4 pt-20 pb-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-x-20 my-10">
          <div className="w-[100%] md:w-[70%] text-center md:text-left mx-auto space-y-6">
            <h2 className="text-3xl font-semibold">About Us</h2>
            <p className="text-base font-medium text-gray-800 dark:text-gray-200">
              Welcome to our online book store, your one-stop destination for a
              vast collection of books across all genres, including fiction,
              non-fiction, mystery, romance, self-help, and more. Explore
              bestsellers, new arrivals, and exclusive deals. Enjoy seamless
              browsing, secure payments, and fast delivery. Start your reading
              journey with us today!
            </p>
          </div>
          <div className="">
            <img
              className="containe rounded-md"
              src="https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-6 md:gap-20 my-10">
          <div className="w-[100%] md:w-[70%] text-center md:text-left mx-auto space-y-6 order-2">
            <h2 className="text-3xl font-semibold">
              Our Mission: Bringing Stories to Life{" "}
            </h2>
            <p className="text-base font-medium text-gray-800 dark:text-gray-200">
              We believe that books have the incredible power to inspire
              creativity, educate minds, and entertain readers of all ages.
              Stories connect us to different cultures, ideas, and perspectives,
              enriching our lives in countless ways. Our mission is to make
              reading accessible, enjoyable, and convenient for everyone. We
              strive to offer a seamless online shopping experience with a vast
              collection of books across multiple genres, from bestsellers to
              hidden gems. Whether you're looking for fiction, non-fiction,
              academic resources, or self-help books, our platform ensures a
              hassle-free experience with secure payments, fast delivery, and
              excellent customer support. Start your reading journey today!
            </p>
          </div>
          <div className="order-1">
            <img
              className="containe rounded-md"
              src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-x-20 my-10">
          <div className="w-[100%] md:w-[70%] text-center md:text-left mx-auto space-y-6">
            <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
            <p className="text-base font-medium text-gray-800 dark:text-gray-200">
              <ul className="text-left list-disc px-10 space-y-3">
                <li className="">A diverse collection of books</li>
                <li className="">Easy and secure online ordering</li>
                <li className="">Fast and reliable delivery</li>
              </ul>
            </p>
          </div>
          <div className="flex flex-col md:flex-row space-y-6 md:space-x-6">
            <img
              className="containe w-52 h-52 rounded-full"
              src="https://images.pexels.com/photos/814544/pexels-photo-814544.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <img
              className="containe w-52 h-52 rounded-full"
              src="https://images.pexels.com/photos/735871/pexels-photo-735871.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <img
              className="containe w-52 h-52 rounded-full"
              src="https://images.pexels.com/photos/7005693/pexels-photo-7005693.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
