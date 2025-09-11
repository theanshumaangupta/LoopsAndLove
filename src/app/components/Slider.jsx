"use client";
import React, { useState, useEffect, useRef } from "react";




export default function Slider() {
  const images = [
    "/images/rs1.jpg",
    "/images/rs2.jpg",
    "/images/rs3.jpg",
  ];
  const [CurrentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const sliderRef = useRef(null);

  function setNextSlide() {
    setCurrentIndex((prev) => {
      return (prev + 1) % images.length;
    });
  }

  useEffect(() => {
    const interval = setInterval(setNextSlide, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setVisible(entries[0].isIntersecting),
      { threshold: 0.5}
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
      style={{ backgroundImage: `url(${images[CurrentIndex]})`, backgroundPosition: `${visible ? '0 -2vh' : '0 0'}` }}

      className={`h-screen relative w-full ${visible ? "opacity-100" : "opacity-50 "
        } bg-cover transition-all duration-2000 ease-in-out`}
    >
      <div className="pt-10 pl-14 top-0 left-0 flex flex-col gap-3 uppercase" style={{ fontFamily: 'Roboto' }} >
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p>Pages</p>
        <p>Shop</p>
      </div>
      <div className={`${visible ? "opacity-100 bottom-[25%]" : "opacity-50 bottom-[20%] "
        } p-[25px] flex flex-col items-center  transition-all duration-1000 linear  gap-5 justify-center text-center absolute  m-auto w-full text-5xl `} >
        <h1 style={{ fontFamily: "Merriweather" }} className="inline-block w- leading-snug text-3xl md:text-5xl ">Natural Wool For Comfy Winter Clothes</h1>
        <p className="text-[1rem]" style={{ fontFamily: 'Roboto' }}>Lorem ipsum dolor sit, consectuer adipliscing elit.</p>
        <img src="/images/thread.png" alt="" />
      </div>
    </div>
  );
}
