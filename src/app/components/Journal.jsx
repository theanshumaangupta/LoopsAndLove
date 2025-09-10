function Journal() {
  return (
    <div className="w-full p-10 bg-[#F3F0EC] text-black">
      <h1 className="text-3xl mb-10">Journal Our Story</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Journal Item 1 */}
        <div className="flex flex-col">
          <div className="relative h-64">
            <img
              src="images/post-img-1.jpg"
              alt="Journal Post 1"
              className="w-full h-full object-cover"
            />
            <div className="w-20 h-10 flex justify-center items-center absolute top-5 left-5 -rotate-6 rounded-full bg-[#f3f0ec] z-10">
              <p className="text-sm text-center rotate-6 mt-1 text-black">19 May</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-5">
            <p className="text-base">Handmade</p>
            <p style={{ fontFamily: 'Merriweather' }} className="font-light text-3xl">
              Explore our custom made techniques
            </p>
            <p className="text-base text-[#4A4848]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magnali qua. Ut enim ad minim veniam, quis nostrud exercitation ullamc
            </p>
            
          </div>
        </div>

        {/* Journal Item 2 */}
        <div className="flex flex-col">
          <div className="relative h-64">
            <img
              src="images/post-list-1-img-1.jpg"
              alt="Journal Post 2"
              className="w-full h-full object-cover"
            />
            <div className="w-20 h-10 flex justify-center items-center absolute top-5 left-5 -rotate-6 rounded-full bg-[#f3f0ec] z-10">
              <p className="text-sm text-center rotate-6 mt-1 text-black">19 May</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-5">
            <p className="text-base">Handmade</p>
            <p style={{ fontFamily: 'Merriweather' }} className="font-light text-3xl">
              Explore our custom made techniques
            </p>
            <p className="text-base text-[#4A4848]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
            </p>
            
          </div>
        </div>

        {/* Journal Item 3 */}
        <div className="flex flex-col">
          <div className="relative h-64">
            <img
              src="images/post-list-1-img-3.jpg"
              alt="Journal Post 3"
              className="w-full h-full object-cover"
            />
            <div className="w-20 h-10 flex justify-center items-center absolute top-5 left-5 -rotate-6 rounded-full bg-[#f3f0ec] z-10">
              <p className="text-sm text-center rotate-6 mt-1 text-black">19 May</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-5">
            <p className="text-base">Handmade</p>
            <p style={{ fontFamily: 'Merriweather' }} className="font-light text-3xl">
              Explore our custom made techniques
            </p>
            <p className="text-base text-[#4A4848]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
            </p>
            
          </div>
        </div>

      </div>
    </div>
  );
}

export default Journal;
