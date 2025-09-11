"use client"
import { useEffect, useState } from "react";

function Explore2() {
  const comments = [
    {
      text: "Morbi enim nunc faucibus a pellentesque. Condimentum lacinia quis vel eros donec ac odio tempor orci. Massa placerat duis ultricies lacus. Adipiscing enim eu turpis.",
      name: "Nico Roots",
      role: "customer",
      img: "images/p2-user-img.png",
    },
    {
      text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque id diam vel quam elementum pulvinar.",
      name: "Sara White",
      role: "customer",
      img: "images/p2-user-img.png",
    },
    {
      text: "Suspendisse potenti. Nulla facilisi. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi.",
      name: "John Doe",
      role: "customer",
      img: "images/p2-user-img.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto rotate comments every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % comments.length);
      setFade(true);
    }, 300); // fade out for 300ms then fade in
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + comments.length) % comments.length);
      setFade(true);
    }, 300);
  };

  const currentComment = comments[currentIndex];

  return (
    <>
      {/* Comment Section */}
      <div className="w-full flex justify-center items-center min-h-[50vh] bg-white">
        <div className="flex flex-col md:flex-row p-[2rem] text-center justify-between items-start gap-[5rem] md:gap-[5rem] bg-white text-black">
          <div className="flex flex-col lg:flex-row items-start gap-[2rem] relative w-full">
            {/* Quote Sticker */}
            <div className="flex justify-center items-center relative z-10">
              <svg
                className="left-0 bottom-10 absolute z-10 "
                xmlns="http://www.w3.org/2000/svg"
                width="100.798"
                height="100.992"
                viewBox="0 0 52.798 47.992"
              >
                <path
                  d="M12.132,12.918S-2.541,13.251.386,5.147s15.285-5.6,17.575.366-5.036,38.559-5.276,38.751S12.132,12.918,12.132,12.918Z"
                  transform="translate(8.276 0.596) rotate(10)"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                ></path>
                <path
                  d="M12.132,12.918S-2.541,13.251.386,5.147s15.285-5.6,17.575.366-5.036,38.559-5.276,38.751S12.132,12.918,12.132,12.918Z"
                  transform="translate(34.086 0.596) rotate(10)"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                ></path>
              </svg>
              <div className="w-[250px] h-[124px] block -rotate-[16deg] rounded-[50%] bg-[#f3f0ec] z-[1]"></div>
            </div>

            {/* Comment Holder */}
            <div className="w-full relative h-auto">
              <div
                className={`transition-opacity duration-500`}
                style={{ opacity: fade ? 1 : 0 }}
              >
                <h1
                  style={{ fontFamily: "Merriweather" }}
                  className="text-base md:text-2xl italic mb-5 min-h-[10rem] max-w-[600px] md:max-w-[40rem]"
                >
                  {currentComment.text}
                </h1>
                <div className="flex items-center gap-5">
                  <img src={currentComment.img} height="20px" alt={currentComment.name} />
                  <p>
                    <b>{currentComment.name},</b> {currentComment.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Controls */}
          <div className="self-end flex flex-col gap-2">
            <img
              className="cursor-pointer"
              src="images/line-arrow.svg"
              alt="Previous"
              onClick={handlePrev}
            />
            <img
              className="cursor-pointer"
              src="images/line-arrow2.svg"
              alt="Next"
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore2;
