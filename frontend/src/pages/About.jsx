import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            FOREVER is a modern fashion brand dedicated to creating timeless
            clothing that blends comfort, quality, and contemporary style. We
            believe great fashion should feel effortless and last beyond trends.
          </p>
          <p>
            From everyday essentials to statement pieces, our collections are
            designed to suit all occasions. Each product is thoughtfully crafted
            to deliver confidence, durability, and style you can rely on.
          </p>
          <b className="text-gray-800">OUR MISSION</b>
          <p>
            Our mission is to make premium fashion accessible to everyone by
            delivering high-quality clothing, seamless shopping experiences, and
            styles that never go out of fashion.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            Every product is crafted with premium materials and carefully
            checked to ensure lasting comfort, durability, and style.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenienc:</b>
          <p className="text-gray-600">
            Enjoy a seamless shopping experience with easy navigation, secure
            payments, and fast doorstep delivery.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional customer Service:</b>
          <p className="text-gray-600">
            Our support team is always ready to help you with orders, returns,
            and any questions you may have.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
