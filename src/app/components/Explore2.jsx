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
      {/* Explore New Arrivals Section */}
      <div className="w-full px-5 md:px-20 py-10 md:py-20 bg-[#F3F0EC] text-black flex justify-center items-center">
        <div className="flex flex-col gap-10">
          <h1
            style={{ fontFamily: "Merriweather" }}
            className="text-3xl md:text-5xl text-center"
          >
            Explore New Arrivals
          </h1>
          <p className="text-base text-center">
            Lorem ipsum dolor sit amet, adiping elit
          </p>
<div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 w-[90vw] sm:w-[75vw] lg:w-[80vw] auto-rows-[200px] sm:auto-rows-[125px] lg:auto-rows-[300px]">
  {/* Image 1 */}
  <div className="relative col-span-2 row-span-2 overflow-hidden">
    <div
      style={{ backgroundImage: "url('images/shop-category-img-1.jpg')" }}
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out hover:scale-110"
    ></div>
    <p className="absolute bottom-3 left-3 text-white font-semibold text-lg">Category 1</p>
  </div>

  {/* Image 2 */}
  <div className="relative overflow-hidden">
    <div
      style={{ backgroundImage: "url('images/shop-category-img-2.jpg')" }}
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out hover:scale-110"
    ></div>
    <p className="absolute bottom-3 left-3 text-white font-semibold">Category 2</p>
  </div>

  {/* Image 3 */}
  <div className="relative overflow-hidden">
    <div
      style={{ backgroundImage: "url('images/shop-category-img-3.jpg')" }}
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out hover:scale-110"
    ></div>
    <p className="absolute bottom-3 left-3 text-white font-semibold">Category 3</p>
  </div>

  {/* Image 4 */}
  <div className="relative overflow-hidden">
    <div
      style={{ backgroundImage: "url('images/shop-category-img-4.jpg')" }}
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out hover:scale-110"
    ></div>
    <p className="absolute bottom-3 left-3 text-white font-semibold">Category 4</p>
  </div>

  {/* Image 5 */}
  <div className="relative overflow-hidden">
    <div
      style={{ backgroundImage: "url('images/shop-category-img-5.jpg')" }}
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out hover:scale-110"
    ></div>
    <p className="absolute bottom-3 left-3 text-white font-semibold">Category 5</p>
  </div>
</div>

        </div>
      </div>

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
