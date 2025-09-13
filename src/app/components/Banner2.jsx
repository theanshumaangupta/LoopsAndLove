function Banner2() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url("/images/banner2.jpg")' }}
    >
      <img
        className="hidden md:block w-[20rem] absolute top-[3rem] left-[3rem]"
        src="/images/off-1.jpg"
        alt=""
      />
      <img
        className="hidden md:block w-[20rem] absolute bottom-[3rem] right-[3rem]"
        src="/images/off-2.jpg"
        alt=""
      />
      <div className="absolute flex flex-col gap-4 left-4 md:left-10 bottom-10 ">
        <img className="w-[20rem]" src="images/off30.png" alt="" />
        <div className="p-2">
          <h1 style={{fontFamily: "Merriweather"}} className="text-3xl ">Explore New Arrivals</h1>
          <p style={{fontFamily: "Roboto"}} className="text-base">Lorem ipsum dolor sit amet consectetur, contenuer</p>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
