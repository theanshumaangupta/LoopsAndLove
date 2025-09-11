"use client";
import React, { useEffect, useRef, useState } from "react";
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
            <p style={{ fontFamily: "Merriweather,serif" }} className="mb-5 text-3xl tracking-widest">
              Explore New Arrivals
            </p>
            <p className="text-base">Shop Now</p>
          </div>
          <div className="flex gap-5">
            <img
              className="w-12 cursor-pointer"
              src="/images/line-arrow.svg"
              alt="Left"
              onClick={prevSlide}
            />
            <img
              className="w-12 cursor-pointer"
              src="/images/line-arrow2.svg"
              alt="Right"
              onClick={nextSlide}
            />
          </div>
        </div>

        {/* Infinite Step Slide */}
        <div className="overflow-hidden relative">
          <div ref={trackRef} className="flex gap-2 md:gap-5 lg:gap-10 flex-nowrap">
            {images.map((src, index) => (
              <div
                key={index}
                className="flex-none mx-auto w-[50vw] sm:w-[33vw] md:w-1/4 h-[50vw] sm:h-[33vw] md:h-[25vw] bg-cover bg-center"
                style={{ backgroundImage: `url("${src}")` }}
              ></div>
            ))}
          </div>

        </div>
          {/* Progress Bar */}
          {/* <div className="relative mt-5 bottom-2 left-0 w-full h-2 bg-[#F3F0EC] rounded-full">
            <div
              className="h-2 bg-[#ffcfcf] rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div> */}
      </div>
    </div>
  );
}

export default Explore;
