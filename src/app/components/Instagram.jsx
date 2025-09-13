"use client";
import React, { useRef, useState, useEffect } from "react";

function Instagram() {
  const images = [
    "images/insta-gllery-1.jpg",
    "images/insta-gllery-2.jpg",
    "images/insta-gllery-3.jpg",
    "images/insta-gllery-4.jpg",
    "images/insta-gllery-5.jpg",
    "images/insta-gllery-7.jpg",
  ];

  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      let newIndex;
      if (direction === "left") {
        newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      } else {
        newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      }

      const scrollAmount = scrollRef.current.offsetWidth * 0.7;
      const newScrollPosition = newIndex * scrollAmount;

      scrollRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });

      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const handleManualScroll = () => {
      if (scrollRef.current) {
        const index = Math.round(
          scrollRef.current.scrollLeft /
            (scrollRef.current.offsetWidth * 0.7)
        );
        setCurrentIndex(index);
      }
    };

    scrollRef.current?.addEventListener("scroll", handleManualScroll);
    return () =>
      scrollRef.current?.removeEventListener("scroll", handleManualScroll);
  }, []);

  return (
    <div
      style={{ fontFamily: "Merriweather" }}
      className="w-full gap-10 text-3xl bg-[#F3F0EC] py-30 px-10 text-[#090909] min-h-[80vh] flex flex-col items-center justify-center"
    >
      <p>Instagram Story</p>
      <img src="images/arrow.png" className="h-10 mb-6" alt="Arrow" />

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 w-full max-w-[110rem]">
        {images.map((src, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url("${src}")` }}
            className="bg-cover bg-center min-h-[80vh] rounded-lg shadow-md"
          ></div>
        ))}
      </div>

      {/* Mobile Story Scroll */}
      <div className="md:hidden relative w-full max-w-[110rem]">

        {/* Progress Indicator Bar */}
        <div className="flex justify-center gap-2 mb-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded ${
                index <= currentIndex
                  ? "bg-black"
                  : "bg-gray-400"
              } transition-all duration-300`}
              style={{ width: `${100 / images.length}%` }}
            ></div>
          ))}
        </div>

        {/* Left Tap Area */}
        <div
          className="absolute top-0 left-0 w-1/2 h-full z-20 cursor-pointer"
          onClick={() => handleScroll("left")}
        ></div>

        {/* Right Tap Area */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full z-20 cursor-pointer"
          onClick={() => handleScroll("right")}
        ></div>

        {/* Story Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden gap-3 snap-x snap-mandatory px-[10vw]"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url("${src}")` }}
              className="bg-cover bg-center min-w-[70vw] aspect-[9/16] rounded-lg shadow-md snap-center flex-shrink-0"
            ></div>
          ))}
        </div>
      </div>

      <p className="text-base mt-6">@ Beautiful Products Made With Love</p>
    </div>
  );
}

export default Instagram;
