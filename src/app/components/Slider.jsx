"use client";
import React, { useState, useEffect } from "react";

export default function Slider() {
  const images = [
    "/images/slider2.jpg",
    "/images/slider3.jpg",
    // "/images/slider2.jpg",
    "/images/slider5.webp",
  ];
  const [CurrentIndex, setCurrentIndex] = useState(0);

  function setNextSlide() {
    setCurrentIndex((prev) => {
      return (prev + 1) % images.length;
    });
  }

  useEffect(() => {
    const interval = setInterval(setNextSlide, 4000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="h-screen relative w-full">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt=""
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out ${
            index === CurrentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
