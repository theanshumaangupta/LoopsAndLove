function Banner2() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url("/images/banner2.jpg")' }}
    >
      <img
        className="w-[20rem] absolute top-[8rem] left-[8rem]"
        src="/images/banner2-1.jpg"
        alt=""
      />
      <img
        className="w-[20rem] absolute bottom-[8rem] right-[8rem]"
        src="/images/banner2-2.jpg"
        alt=""
      />
      <div className="absolute flex flex-col gap-4 left-[5rem] bottom-[5rem]">
        <img className="w-[20rem]" src="images/off30.png" alt="" />
        <h1 style={{fontFamily: "Merriweather"}} className="text-3xl ">Explore New Arrivals</h1>
        <p style={{fontFamily: "Roboto"}} className="text-base">Lorem ipsum dolor sit amet consectetur, contenuer</p>
      </div>
    </div>
  );
}

export default Banner2;
