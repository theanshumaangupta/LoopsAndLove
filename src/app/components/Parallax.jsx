"use client";
import { useEffect, useRef } from "react";

export default function Parallax() {
  const parallaxRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect();
        const offset = rect.top;

        // Adjust background position smoothly around center
        const move = offset * 0.1; // Adjust multiplier for desired speed

        parallaxRef.current.style.backgroundPosition = `center ${
          50 + move * 0.5
        }%`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={parallaxRef}
      className="parallax flex items-center justify-center flex-col text-center gap-5 md:gap-10 text-white"
      style={{
        height: "50vw",
        backgroundImage: "url('images/h1-img-8.jpg')",
        backgroundAttachment: "scroll",
        backgroundSize: "140%",
        backgroundPosition: "center",
        transition: "background-position 0.01s ease-in-out",
        fontFamily: "Merriweather",
      }}
    >
      <h1  className="text-xs sm:text-2xl md:text-4xl lg:text-5xl max-w-[50vw]">Handmade Knitwear That Are Made With Love</h1>
      <p className="text-xs sm:text-1xl max-w-[60%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit soutr.</p>
    </div>
  );
}
