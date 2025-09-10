
import { url } from "inspector";

function Explore2() {
  return (
    <>
      {/* 5 box grid section*/}
      <div className="w-full px-5 md:px-20 py-10 md:py-20 bg-[#F3F0EC] text-black flex justify-center items-center">
        <div className="flex flex-col gap-10">
          <h1
            style={{ fontFamily: "Merriweather"}}
            className="text-5xl text-center"
          >
            Explore New Arrivals
          </h1>
          <p className="text-base text-center">
            Lorem ipsum dolor sit amet, adiping elit
          </p>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4  w-[90vw] sm:w-[75vw] lg:w-[80vw] sm:auto-rows-[125px] lg:auto-rows-[300px] auto-rows-[200px]">
            <div className="relative col-span-2 row-span-2 overflow-hidden">
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




      {/* section Of Comments */}
      <div className="w-full flex justify-center items-center min-h-[50vh] bg-white">

        <div className=" flex flex-col md:flex-row p-[2rem] text-center justify-between items-start gap-[5rem] md:gap-[5rem] bg-white text-black">
          {/* COmmement and Quote sticker holder */}
          <div className="flex flex-col lg:flex-row items-start gap-[2rem]">
            {/*Quote Sticker holder */}
            <div className="flex justify-center items-center relative">
              <svg
                className="left-0 bottom-10 absolute z-10 "
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
                  stroke-width="1"
                ></path>
                <path
                  d="M12.132,12.918S-2.541,13.251.386,5.147s15.285-5.6,17.575.366-5.036,38.559-5.276,38.751S12.132,12.918,12.132,12.918Z"
                  transform="translate(34.086 0.596) rotate(10)"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  class=""
                ></path>
              </svg>
              <div className=" w-[250px] h-[124px] block -rotate-[16deg] rounded-[50%] bg-[#f3f0ec] z-[1]"></div>
            </div>
            {/* Comment holder */}
            <div className=" w-full ">
              <h1
                style={{ fontFamily: "Merriweather" }}
                className="text-base md:text-2xl italic mb-5 max-w-[600px] md:max-w-[40rem] "
              >
                Morbi enim nunc faucibus a pellentesque. Condimentum lacinia quis
                vel eros donec ac odio tempor orci. Massa placerat duis ultricies
                lacus. Adipiscing enim eu turpis.
              </h1>
              <div className="flex items-center gap-5">
                <img src="images/p2-user-img.png"  height="20px" alt="" />
                <p>
                  <b>Nico Roots,</b> customer
                </p>
              </div>
            </div>
          </div>

          {/* Arrow image */}
          <div className="self-end">
            <img className="mb-5" src="images/line-arrow.svg" alt="" />
            <img src="images/line-arrow2.svg" alt="" />
          </div>
        </div>

      </div>
    </>
  );
}

export default Explore2;
