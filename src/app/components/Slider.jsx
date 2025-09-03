"use client";
import React, { useState, useEffect, useRef } from "react";
import { Roboto } from "next/font/google";
import { Merriweather } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], 
});


const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"], // choose weights you need
});


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
      { threshold: 1 }
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
      // backgroundSize: `${visible ? '100vw 100vh' : '100vw 105vh'}`
      style={{ backgroundImage: `url(${images[CurrentIndex]})`, backgroundPosition: `${visible ? '0 -2vh' : '0 0'}` }}
      
      className={`h-screen relative w-full ${
        visible ? "opacity-100" : "opacity-50 "
      } bg-cover transition-all duration-2000 ease-in-out` }
    >
      <div className="pt-10 pl-14 top-0 left-0 flex flex-col gap-3 uppercase" style={{fontFamily : 'Roboto'}} >
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>  
        <p>Pages</p>
        <p>Shop</p>
      </div>
      <div className=" flex flex-col items-center  gap-5 justify-center text-center absolute bottom-1/4 m-auto w-full text-5xl " >
        <h1 style={{fontFamily: "Merriweather"}} className="inline-block w-[40rem] leading-[67px] text-[50px] ">Natural Wool For Comfy Winter Clothes</h1>
        <p className="text-[1rem]" style={{fontFamily: 'Roboto'}}>Lorem ipsum dolor sit, consectuer adipliscing elit.</p>
        <img src="/images/thread.png" alt="" />
      </div>
    </div>
  );
}
