import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="mt-6">
        <hr />
        <footer className="footer footer-horizontal footer-center text-gray-800 bg-white dark:bg-gray-900 dark:text-gray-100  rounded p-10">
          <nav className="grid grid-flow-col gap-4">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4">
              <Link to={"https://x.com/AkashShukl56981"}>
                <FaTwitter
                  size={25}
                  className="hover:text-pink-500 transition-all duration-300 ease-in-out"
                />
              </Link>
              <Link to={"https://www.instagram.com/iamakashshukla92/"}>
                <AiFillInstagram size={25} className="hover:text-pink-500" />
              </Link>
              <Link
                to={"https://www.facebook.com/profile.php?id=100022302574814"}
              >
                <FaFacebook size={25} className="hover:text-pink-500" />
              </Link>
            </div>
          </nav>
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by SKY
              BOOK STORE
            </p>
          </aside>
        </footer>
      </div>
    </>
  );
};

export default Footer;
