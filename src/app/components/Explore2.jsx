import { url } from "inspector";

function Explore2() {
  return (
    <div className="w-full p-[10rem] bg-white text-black flex justify-center items-center">
      <div className="flex flex-col gap-10">
        <h1
          style={{ fontFamily: "Merriweather" }}
          className="text-5xl text-center"
        >
          Explore New Arrivals
        </h1>
        <p className="text-base text-center">
          Lorem ipsum dolor sit amet, adiping elit
        </p>
        <div className="grid gap-10 grid-cols-4 w-[75vw] h-[80vh]">
          <div className="relative col-span-2 row-span-2 min-w-[10rem] min-h-[10rem] overflow-hidden">
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
  );
}

export default Explore2;
