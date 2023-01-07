import React, { Fragment } from "react";
import bannerLeftImg from "../../img/banner_left.jpg";

const Header = () => {
  return (
    <Fragment>
      <div
        className="py-14"
        style={{
          background: "linear-gradient(120deg, #6a1212, #831717,#dd1d1d)",
        }}
      >
        <div className="w-10/12 mx-auto flex justify-between items-center gap-8 text-white md:flex-row flex-col-reverse ">
          <img
            src={bannerLeftImg}
            alt="hero_left"
            className=" rounded-lg border-2 border-red-700"
            style={{ width: "32vmax" }}
          />
          <div className="flex justify-between">
            <p className="basis-2/3">
              31-01-2023 তারিখ পর্যন্ত কোর্সটি ৫০% ডিসকাউন্টে মাত্র ৫০০০ টাকায়
              কিনতে পারবেন। ১ই ফেব্রয়ারি ২০২৩ থেকে কোর্স মূল্য রেগুলার প্রাইস
              ১০,০০০ টাকা করা হবে
            </p>
            <div className="basis-1/3">
              <div className="flex flex-col justify-start pr-4">
                <span className="line-through">10,000</span>
                <h2 className="font-bold text-xl">
                  5,000<span className="text-3xl">৳</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
