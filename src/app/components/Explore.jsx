"use client";
import React from "react";
import "./explore.css";

function Explore() {
  const images = [
    "/images/shop-img-2.jpg",
    "/images/shop-img-3.jpg",
    "/images/shop-img-5.jpg",
    "/images/shop-img-6.jpg",
    "/images/shop-img-7.jpg",
    "/images/shop-img-8.jpg",
  ];

  return (
    <div className="bg-[#F3F0EC] text-black">
      <div className="px-5 xl:px-20 py-10 md:py-30 text-black">
        {/* Heading */}
        <div className="flex justify-between text-3xl min-h-[8rem]">
          <div>
            <p style={{ fontFamily: "Merriweather,serif" }} className="mb-5 text-3xl tracking-widest">
              Explore New Arrivals
            </p>
            <p className="text-base">Shop Now</p>
          </div>
          <div className="flex gap-5">
            <img className="w-12" src="/images/line-arrow.svg" alt="" />
            <img className="w-12" src="/images/line-arrow2.svg" alt="" />
          </div>
        </div>

        {/* Infinite Slide */}
        <div className="overflow-hidden">
          <div className="flex gap-2 md:gap-5 lg:gap-10 flex-nowrap animate-slide">
            {/* Render two copies of the images array */}
            {[...images, ...images].map((src, index) => (
              <div
                key={index}
                className="flex-none mx-auto w-[50vw] sm:w-[33vw] md:w-1/4 h-[50vw] sm:h-[33vw] md:h-[25vw] bg-cover bg-center"
                style={{ backgroundImage: `url("${src}")` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Remaining content unchanged */}
      <div className="flex flex-col gap-10 p-10 lg:p-15 text-center items-center justify-center">
        <h1 style={{ fontFamily: "Merriweather", fontWeight: "300" }} className="text-3xl md:text-4xl font-serif font-bold">
          Best of Handmade Goods
        </h1>
        <img style={{ filter: 'invert(1)' }} src="images/thread.png" alt="" />
        <p style={{ fontFamily: 'Roboto' }} className="text-base text-gray-600 max-w-3xl mx-auto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t mcididunt ut labore et dolore. Ut enim ad minim veniam, quis nostrud exercitation ullam ris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reerit in voluptate velit
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-15 mb-24">
          {/* Category items */}
          {Array(4).fill(0).map((_, idx) => (
            <div key={idx} className="flex flex-col justify-between items-center gap-2">
              <img className="w-24 md:w-32" src={`/images/h1-icon-${idx + 1}-x2.png`} alt="" />
              <div>
                <h2>Biodegraduate</h2>
                <p>Recent in voluptate suis amet</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;
