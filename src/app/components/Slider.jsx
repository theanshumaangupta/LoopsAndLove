"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Slider() {
  const images = [
    "/images/rs1.jpg",
    "/images/rs2.jpg",
    "/images/rs3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  function setNextSlide() {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }

  useEffect(() => {
    const interval = setInterval(setNextSlide, 4000); // Increased interval for visibility
    return () => clearInterval(interval);
  }, []);

  const sliderRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setVisible(entries[0].isIntersecting),
      { threshold: 0.7 }
    );

    if (sliderRef.current) {
      observer.observe(sliderRef.current);
    }

    return () => {
      if (sliderRef.current) observer.unobserve(sliderRef.current);
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      className={`h-screen relative w-full overflow-hidden duration-1000 ease-in-out ${visible ? "border-10" : "border-0"} `}
    >
      {images.map((src, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-2000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* <div className="pt-10 pl-14 top-0 left-0 flex flex-col gap-3 uppercase" style={{ fontFamily: "Roboto" }}>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p>Pages</p>
        <p>Shop</p>
      </div> */}

      <div
        className={`${
          visible ? "opacity-100 bottom-[25%]" : "opacity-50 bottom-[20%]"
        } p-[25px] flex flex-col items-center transition-all duration-1000 linear gap-5 justify-center text-center absolute m-auto w-full text-5xl`}
        style={{ fontFamily: "Roboto" }}
      >
        <h1 style={{ fontFamily: "Merriweather" }} className="inline-block leading-snug text-3xl md:text-5xl text-center">
          Natural Wool For Comfy Winter Clothes
        </h1>
        <p className="text-[1rem]">Lorem ipsum dolor sit, consectuer adipliscing elit.</p>
        <img src="/images/thread.png" alt="" />
      </div>
    </div>
  );
}
