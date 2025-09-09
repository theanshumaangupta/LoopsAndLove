function Explore2() {
  return (
    <>
      {/* 5 box grid section */}
      <div className="w-full px-5 md:px-20 py-10 md:py-20 bg-[#F3F0EC] text-black flex justify-center items-center">
        <div className="flex flex-col gap-10 max-w-[1200px] w-full">
          <h1
            style={{ fontFamily: "Merriweather" }}
            className="text-3xl md:text-5xl text-center"
          >
            Explore New Arrivals
          </h1>
          <p className="text-base text-center">
            Lorem ipsum dolor sit amet, adiping elit
          </p>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px]">
            <div className="relative sm:col-span-2 sm:row-span-2 overflow-hidden">
              <div
                style={{
                  backgroundImage: "url('images/shop-category-img-1.jpg')",
                }}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out hover:scale-110"
              ></div>
            </div>

            <div className="relative overflow-hidden">
              <div
                style={{
                  backgroundImage: "url('images/shop-category-img-2.jpg')",
                }}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out hover:scale-110"
              ></div>
            </div>

            <div className="relative overflow-hidden">
              <div
                style={{
                  backgroundImage: "url('images/shop-category-img-3.jpg')",
                }}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out hover:scale-110"
              ></div>
            </div>

            <div className="relative overflow-hidden">
              <div
                style={{
                  backgroundImage: "url('images/shop-category-img-4.jpg')",
                }}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out hover:scale-110"
              ></div>
            </div>

            <div className="relative overflow-hidden">
              <div
                style={{
                  backgroundImage: "url('images/shop-category-img-5.jpg')",
                }}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out hover:scale-110"
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Of Comments */}
      <div className="w-full flex justify-center items-center py-10 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-[20rem] max-w-[1200px] w-full px-5 md:px-0">

          {/* Comment and Quote Sticker */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="relative">
              <svg
                className="absolute left-0 bottom-10 z-10"
                xmlns="http://www.w3.org/2000/svg"
                width="100.798"
                height="100.992"
                viewBox="0 0 52.798 47.992"
                data-label="svg.qodef-svg--quote"
              >
                <path
                  d="M12.132,12.918S-2.541,13.251.386,5.147s15.285-5.6,17.575.366-5.036,38.559-5.276,38.751S12.132,12.918,12.132,12.918Z"
                  transform="translate(8.276 0.596) rotate(10)"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <path
                  d="M12.132,12.918S-2.541,13.251.386,5.147s15.285-5.6,17.575.366-5.036,38.559-5.276,38.751S12.132,12.918,12.132,12.918Z"
                  transform="translate(34.086 0.596) rotate(10)"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
              <div className="w-[200px] h-[100px] rounded-full bg-[#f3f0ec] z-[1] -rotate-[16deg]"></div>
            </div>

            {/* Comment text */}
            <div className="max-w-[600px]">
              <h1
                style={{ fontFamily: "Merriweather" }}
                className="text-xl md:text-2xl italic mb-5"
              >
                Morbi enim nunc faucibus a pellentesque. Condimentum lacinia quis vel eros donec ac odio tempor orci. Massa placerat duis ultricies lacus. Adipiscing enim eu turpis.
              </h1>
              <div className="flex items-center gap-5">
                <img src="images/p2-user-img.png" height="40" alt="user" />
                <p><b>Nico Roots,</b> customer</p>
              </div>
            </div>
          </div>

          {/* Arrow image */}
          <div className="flex flex-col items-center">
            <img className="mb-5 w-10 h-10 md:w-auto md:h-auto" src="images/line-arrow.svg" alt="arrow" />
            <img src="images/line-arrow2.svg" alt="arrow2" />
          </div>

        </div>
      </div>
    </>
  );
}

export default Explore2;
