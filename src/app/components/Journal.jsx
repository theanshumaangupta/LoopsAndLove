
function Journal() {
  return (
    <div className="w-full p-10 min-h-screen bg-[#F3F0EC] text-black ">
      <h1 className="text-3xl mb-10 ">Journal Our Story</h1>
      <div className=" flex justify-center items-start gap-5">
        <div className="min-h-[60vh] flex-2 text-black">
          {/* image div with date tag */}
          <div
            style={{ backgroundImage: "url('images/post-img-1.jpg')" }}
            className="min-h-[60vh] relative bg-cover bg-center"
          >
            {/* Date Tag */}
            <div className=" w-[5rem] h-[2.5rem] justify-center items-center absolute top-5 left-5 -rotate-[16deg] rounded-[50%] bg-[#f3f0ec] z-[1]">
              <p className="text-sm text-center rotate-[16deg] mt-1 text-black">
                19 May
              </p>
            </div>
          </div>
          {/* twxt div */}
          <div className="flex flex-col gap-4">
            <p className="text-base mt-5">Handmade</p>
            <p style={{fontFamily: 'Merriweather'}} className="font-light text-3xl">Explore our custom made techniques</p>
            <p className="text-base max-w-[90%] text-[#4A4848]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magnali qua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamc
            </p>
            <p>Read More</p>
          </div>
        </div>

        <div className="min-h-[60vh] flex-1">
          <div
            style={{ backgroundImage: "url('images/post-list-1-img-1.jpg')" }}
            className=" relative bg-cover bg-center min-h-[60vh] flex-1"
          >
            <div className=" w-[5rem] h-[2.5rem] justify-center items-center absolute top-5 left-5 -rotate-[16deg] rounded-[50%] bg-[#f3f0ec] z-[1]">
              <p className="text-sm text-center rotate-[16deg] mt-1 text-black">
                19 May
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base mt-5">Handmade</p>
            <p style={{fontFamily: 'Merriweather'}} className="font-light text-3xl">Explore our custom made techniques</p>
            <p className="text-base max-w-[90%] text-[#4A4848]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
            <p>Read More</p>
          </div>
        </div>

        <div className="min-h-[60vh] flex-1">
          <div
            style={{ backgroundImage: "url('images/post-list-1-img-3.jpg')" }}
            className="relative bg-cover bg-center min-h-[60vh] flex-1"
          >
            <div className=" w-[5rem] h-[2.5rem] justify-center items-center absolute top-5 left-5 -rotate-[16deg] rounded-[50%] bg-[#f3f0ec] z-[1]">
              <p className="text-sm text-center rotate-[16deg] mt-1 text-black">
                19 May
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base mt-5">Handmade</p>
            <p style={{fontFamily: 'Merriweather'}} className="font-light text-3xl">Explore our custom made techniques</p>
            <p className="text-base max-w-[90%] text-[#4A4848]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
            <p>Read More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journal;
