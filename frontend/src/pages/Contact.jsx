import React from "react";
import ContactCard from "../components/ContactCard";

const Contact = () => {
  const contactCardData = [
    {
      title: "New Arrivals",
      disc: "Explore our latest book collections, including bestsellers, new arrivals, and classic reads across various genres like fiction, mystery, and romance.",
      btnText: "Explore New Arrivals",
      style:
        "bg-transparent text-pink-500 border-2 border-pink-500 dark:text-gray-200 dark:border-gray-200",
    },
    {
      title: "Customer Support",
      disc: "Need assistance with your order, tracking, or any inquiries? Our support team is here to help you quickly and efficiently!",
      btnText: "Get Help",
      style: "bg-pink-600 border-none",
    },
    {
      title: "Sales",
      disc: "Connect with our sales team to explore partnership opportunities, bulk orders, special deals, and personalized solutions for your book needs.",
      btnText: "Contact Sales",
      style:
        "bg-transparent text-pink-500 border-2 border-pink-500 dark:text-gray-200 dark:border-gray-200",
    },
  ];
  return (
    <div className="max-w-[95%] min-h-fit container mx-auto md-px-20 px-4 pt-20 pb-10 space-y-6">
      <div className="text-center my-6">
        <h1 className="text-2xl font-semibold">Get in Touch</h1>
        <p className="">
          Looking for a book or need assistance? We're here to help!
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 py-10">
        {contactCardData.map((item) => (
          <div key={item.title}>
            <ContactCard cardData={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
