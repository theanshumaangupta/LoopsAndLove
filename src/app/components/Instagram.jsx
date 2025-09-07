function Instagram() {
  return (
    <div
      style={{ fontFamily: "Merriweather" }}
      className="w-full gap-10 text-3xl bg-[#F3F0EC] py-30 px-10 text-[#090909] min-h-[50vh] flex flex-col items-center justify-center"
    >
      <p>Instagram Story</p>
      <img src="images/arrow.png" className="h-10" alt="" />
      <div className="flex w-full max-w-[110rem] flex-wrap justify-center items-center gap-3">
        <div style={{backgroundImage: 'url("images/insta-gllery-1.jpg")'}} className="bg-cover bg-center flex-1 min-h-[30vh]" ></div>
        <div style={{backgroundImage: 'url("images/insta-gllery-2.jpg")'}} className="bg-cover bg-center flex-1 min-h-[30vh]" ></div>
        <div style={{backgroundImage: 'url("images/insta-gllery-3.jpg")'}} className="bg-cover bg-center flex-1 min-h-[30vh]" ></div>
        <div style={{backgroundImage: 'url("images/insta-gllery-4.jpg")'}} className="bg-cover bg-center flex-1 min-h-[30vh]" ></div>
        <div style={{backgroundImage: 'url("images/insta-gllery-5.jpg")'}} className="bg-cover bg-center flex-1 min-h-[30vh]" ></div>
        <div style={{backgroundImage: 'url("images/insta-gllery-7.jpg")'}} className="bg-cover bg-center flex-1 min-h-[30vh]" ></div>
      </div>
      <p className="text-base" >@ Beautiful Products Made With Love</p>
    </div>
  );
}
export default Instagram;
