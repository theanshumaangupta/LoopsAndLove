"use client";
import React, { useState, useEffect, useRef } from "react";
export default function Slider() {
  const images = [
    "/images/slider2.jpg",
    "/images/slider3.jpg",
    "/images/slider5.webp",
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
    const interval = setInterval(setNextSlide, 4000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setVisible(entries[0].isIntersecting),
      { threshold: 0.1 }
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
      style={{ backgroundImage: `url(${images[CurrentIndex]})` }}
      
      className={`h-screen relative w-full ${
        visible ? "opacity-100" : "opacity-50"
      } bg-cover bg-position-center transition-all duration-1000 ease-in-out` }
    >
      
    </div>
  );
}
