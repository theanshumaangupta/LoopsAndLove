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
  const slideRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const slideDuration = 2 * 1000; // 10 seconds per slide

  const getSlideWidth = () => slideRef.current?.offsetWidth || 0;

  const goToSlide = (index) => {
    if (scrollRef.current) {
      const slideWidth = getSlideWidth();
      const newScrollPosition = index * (slideWidth + 12);
      scrollRef.current.scrollTo({ left: newScrollPosition, behavior: "smooth" });
      setCurrentIndex(index);
      setProgress(0);
    }
  };

  const handleScroll = (direction) => {
    const newIndex =
      direction === "left"
        ? currentIndex === 0
          ? images.length - 1
          : currentIndex - 1
        : currentIndex === images.length - 1
        ? 0
        : currentIndex + 1;
    goToSlide(newIndex);
  };

  // Auto-slide every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      goToSlide(nextIndex);
    }, slideDuration);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Update progress for active slide
  useEffect(() => {
    let startTime = Date.now();
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / slideDuration) * 100, 100);
      setProgress(newProgress);
      if (newProgress < 100) requestAnimationFrame(updateProgress);
    };
    updateProgress();
  }, [currentIndex]);

  // Update current index on manual scroll (mobile)
  useEffect(() => {
    const handleManualScroll = () => {
      if (scrollRef.current) {
        const slideWidth = getSlideWidth() + 12;
        const index = Math.round(scrollRef.current.scrollLeft / slideWidth);
        setCurrentIndex(index);
        setProgress(0);
      }
    };
    scrollRef.current?.addEventListener("scroll", handleManualScroll);
    return () => scrollRef.current?.removeEventListener("scroll", handleManualScroll);
  }, []);

  return (
    <div
      style={{ fontFamily: "Merriweather" }}
      className="w-full gap-10 text-3xl bg-[#F3F0EC] py-30 px-5 text-[#090909] min-h-[80vh] flex flex-col items-center justify-center"
    >
      <p>Instagram Story</p>
      <img src="images/arrow.png" className="h-10 mb-6" alt="Arrow" />

      {/* Desktop Progress Bar Strip */}
      <div className="hidden md:flex gap-2 w-full max-w-[20rem] mb-4">
        {images.map((_, index) => (
          <div key={index} className="flex-1 h-1 rounded bg-gray-300 overflow-hidden relative">
            <div
              className="absolute top-0 left-0 h-full bg-black opacity-70 linear transition-all duration-300"
            style={{
                width:
                  index < currentIndex
                    ? "100%"
                    : index === currentIndex
                    ? `${progress}%`
                    : "0%",
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Desktop Grid with active slide highlight */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 w-full max-w-[110rem]">
        {images.map((src, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url("${src}")` }}
            className={`
              bg-cover bg-center min-h-[60vh] rounded-lg shadow-md
              transition-all duration-500
              ${index === currentIndex ? "opacity-100 blur-0 scale-105" : "opacity-60 blur-sm scale-95"}
            `}
          ></div>
        ))}
      </div>

      {/* Mobile Story Scroll */}
      <div className="md:hidden relative w-full max-w-[110rem]">
        <div className="flex justify-center gap-2 mb-4">
          {images.map((_, index) => (
            <div
              key={index}
              className="h-1 rounded bg-gray-400 relative overflow-hidden"
              style={{ width: `${100 / images.length}%` }}
            >
              {index === currentIndex && (
                <div
                  key={currentIndex}
                  className="absolute top-0 left-0 h-full bg-[#000000] opacity-70 animate-progress"
                  style={{ width: `${progress}%` }}
                />
              )}
              {index < currentIndex && (
                <div className="absolute top-0 left-0 h-full w-full bg-black opacity-70" />
              )}
            </div>
          ))}
        </div>

        <div
          className="absolute top-0 left-0 w-1/2 h-full z-20 cursor-pointer"
          onClick={() => handleScroll("left")}
        ></div>
        <div
          className="absolute top-0 right-0 w-1/2 h-full z-20 cursor-pointer"
          onClick={() => handleScroll("right")}
        ></div>

        <div
          ref={scrollRef}
          className="flex overflow-x-hidden gap-3 snap-x snap-mandatory px-[10vw]"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              ref={index === 0 ? slideRef : null}
              style={{ backgroundImage: `url("${src}")` }}
              className="bg-cover bg-center min-w-[80vw] aspect-[9/16] rounded-lg shadow-md snap-center flex-shrink-0"
            ></div>
          ))}
        </div>
      </div>

      <p className="text-base mt-6">@ Beautiful Products Made With Love</p>
    </div>
  );
}

export default Instagram;
