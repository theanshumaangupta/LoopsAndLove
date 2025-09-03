import React from "react";

function Explore() {
  return (
    <div className="bg-[#F3F0EC] text-black">
      <div className="px-20 py-30  text-black">
        <div className="flex justify-between text-3xl min-h-[8rem] ">
          <div>
            <p
              style={{ fontFamily: "Merriweather,serif" }}
              className="mb-5 text-3xl tracking-widest"
            >
              Explore New Arrivals
            </p>
            <p className="text-base">Shop Now</p>
          </div>
          <div className="flex gap-5">
            <img className="w-12" src="/images/line-arrow.svg" alt="" />
            <img className="w-12" src="/images/line-arrow2.svg" alt="" />
          </div>
        </div>
        <div className="flex gap-10">
          <div
            style={{ backgroundImage: 'url("/images/shop-img-1.jpg")' }}
            className="w-[25vw] h-[50vh] bg-cover"
          ></div>
          <div
            style={{ backgroundImage: 'url("/images/shop-img-2.jpg")' }}
            className="w-[25vw] h-[50vh] bg-cover"
          ></div>
          <div
            style={{ backgroundImage: 'url("/images/shop-img-3.jpg")' }}
            className="w-[25vw] h-[50vh] bg-cover"
          ></div>
          <div
            style={{ backgroundImage: 'url("/images/shop-img-4.jpg")' }}
            className="w-[25vw] h-[50vh] bg-cover"
          ></div>
        </div>
      </div>
      <div className=" flex flex-col gap-10 items-center justify-center">
        <h1 style={{fontFamily: 'Merriweather', fontWeight: '300'}} className=" text-3xl md:text-4xl font-serif font-bold" >Best of Handmade Goods</h1>
        <img style={{filter: 'invert(1)'}} src="images/thread.png" alt="" />
        <p style={{fontFamily: 'Roboto'}} className="text-base max-w-3xl text-[#4A4848] mx-auto text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t mcididunt ut labore et dolore. Ut enim ad minim veniam, quis nostrud exercitation ullam ris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reerit in voluptate velit</p>
        <div className="flex gap-20 mb-[12vh]" >
            <div>
                <img className="w-[6rem]" src="/images/h1-icon-1-x2.png" alt="" />
                <h2>Biodegraduate</h2>
                <p>Recent in voluptate suis amet</p>
            </div>
            <div>
                <img className="w-[6rem]" src="/images/h1-icon-2-x2.png" alt="" />
                <h2>Biodegraduate</h2>
                <p>Recent in voluptate suis amet</p>
            </div>
            <div>
                <img className="w-[6rem]" src="/images/h1-icon-3-x2.png" alt="" />
                <h2>Biodegraduate</h2>
                <p>Recent in voluptate suis amet</p>
            </div>
            <div>
                <img className="w-[6rem]" src="/images/h1-icon-4-x2.png" alt="" />
                <h2>Biodegraduate</h2>
                <p>Recent in voluptate suis amet</p>
            </div>
        </div>
      </div>

    </div>
  );
}

export default Explore;
