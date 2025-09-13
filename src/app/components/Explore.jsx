"use client";
import React, { useEffect, useRef, useState } from "react";
import "./explore.css";

function Explore() {
  const images = [
    // "/images/explore-a-1.jpg",
    // "/images/explore-a-3.jpg",
    // "/images/explore-a-4.jpg",
    // "/images/explore-a-2.jpg",
    // "/images/explore-a-5.jpg",
    // "/images/explore-a-6.jpg",
    "/images/shop-img-2.jpg",
    "/images/shop-img-3.jpg",
    "/images/shop-img-5.jpg",
    "/images/shop-img-6.jpg",
    "/images/shop-img-7.jpg",
    "/images/shop-img-8.jpg",
  ];

  const prices = ["$29.99", "$49.99", "$19.99", "$39.99", "$24.99", "$34.99"];

  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = images.length;

  useEffect(() => {
    const track = trackRef.current;

    // Clone children for seamless infinite effect
    const children = Array.from(track.children);
    children.forEach((child) => {
      const clone = child.cloneNode(true);
      track.appendChild(clone);
    });

    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Auto slide

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    updateSlide();
  }, [currentIndex]);

  const updateSlide = () => {
    const track = trackRef.current;
    const slideWidth = track.children[0].offsetWidth + parseInt(getComputedStyle(track).gap);

    track.style.transition = "transform 0.8s ease-in-out";
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    // Reset for infinite effect
    if (currentIndex >= totalItems) {
      setTimeout(() => {
        track.style.transition = "none";
        track.style.transform = `translateX(0)`;
        setCurrentIndex(0);
      }, 800);
    } else if (currentIndex < 0) {
      setTimeout(() => {
        track.style.transition = "none";
        track.style.transform = `translateX(-${(totalItems - 1) * slideWidth}px)`;
        setCurrentIndex(totalItems - 1);
      }, 800);
    }
  };

  const nextSlide = () => setCurrentIndex((prev) => prev + 1);
  const prevSlide = () => setCurrentIndex((prev) => prev - 1);

  // Calculate progress percentage
  const progressPercent = ((currentIndex % totalItems) / (totalItems - 1)) * 100;

  return (
    <div className="bg-[#F3F0EC] text-black">
      <div className="px-5 xl:px-20 py-10 md:py-30 text-black">
        {/* Heading */}
        <div className="flex justify-between text-3xl min-h-[8rem]">
          <div>
            <p style={{ fontFamily: "Merriweather,serif" }} className="mb-5 text-xl sm:text-3xl tracking-widest">
              Explore New Arrivals
            </p>
            <p className="text-base">Shop Now</p>
          </div>
          <div className="flex gap-5">
            <img className="w-12 cursor-pointer" src="/images/line-arrow.svg" alt="Left" onClick={prevSlide} />
            <img className="w-12 cursor-pointer" src="/images/line-arrow2.svg" alt="Right" onClick={nextSlide} />
          </div>
        </div>

        {/* Infinite Step Slide */}
        <div className="overflow-hidden relative">
          <div ref={trackRef} className="flex gap-2 md:gap-5 lg:gap-10 flex-nowrap">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative flex-none mx-auto w-[80vw] sm:w-[70vw] md:w-[60vw] h-[25rem] sm:h-[35rem] md:h-[35rem] lg:w-[25%] lg:h-[25rem]"
              >
                <div
                  className="w-full h-full bg-cover bg-center rounded-lg shadow-md"
                  style={{ backgroundImage: `url("${src}")` }}
                ></div>

                {/* Price tag */}
                <div className="absolute bottom-4 left-4 bg-white bg-opacity-70 text-black px-3 py-1 rounded">
                  {prices[index]}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10  mt-25 lg:p-15 text-center items-center justify-center">
          <h1 style={{ fontFamily: "Merriweather", fontWeight: "300" }} className="text-3xl md:text-4xl font-serif font-bold">
            Best of Handmade Goods
          </h1>
          <img style={{ filter: 'invert(1)' }} src="images/thread.png" alt="" />
          <p style={{ fontFamily: 'Roboto' }} className="text-base text-gray-600 max-w-3xl mx-auto text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t mcididunt ut labore et dolore. Ut enim ad minim veniam, quis nostrud exercitation ullam ris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reerit in voluptate velit
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-15 mb-24">
            {/* Category items */}
            <div className="flex flex-col justify-between items-center gap-2">
              <img className="w-24 md:w-32" src={`/images/h1-icon-4-x2.png`} alt="" />
              <div>
                <h2>Biodegraduate</h2>
                <p>Recent in voluptate suis amet</p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center gap-2">
              <img className="w-24 md:w-32" src={`/images/h1-icon-1-x2.png`} alt="" />
              <div>
                <h2>Biodegraduate</h2>
                <p>Recent in voluptate suis amet</p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center gap-2">
              <img className="w-24 md:w-32" src={`/images/h1-icon-1-x2.png`} alt="" />
              <div>
                <h2>Biodegraduate</h2>
                <p>Recent in voluptate suis amet</p>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center gap-2">
              <img className="w-24 md:w-32" src={`/images/h1-icon-2-x2.png`} alt="" />
              <div>
                <h2>Biodegraduate</h2>
                <p>Recent in voluptate suis amet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
