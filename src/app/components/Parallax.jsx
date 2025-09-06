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
      className="parallax"
      style={{
        height: "30vw",
        backgroundImage: "url('images/h1-img-8.jpg')",
        backgroundAttachment: "scroll",
        backgroundSize: "120%",
        backgroundPosition: "center",
        transition: "background-position 0.01s ease-in-out",
      }}
    ></div>
  );
}
