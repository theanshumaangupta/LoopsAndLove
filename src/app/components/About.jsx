export default function About() {
    

    return (
        <div id="about" className="bg-[#ffffff] p-5  md:p-10">
            {/* <div className="h-[0.5px] w-full bg-black"></div> */}
            <h1 className="text-black text-2xl p-5 text-center bold md:text-4xl my-5">About Me</h1>
            <div className="gap-10  w-auto flex flex-col  items-center  lg:flex-row  ">
                <div className=" lg:flex-1 max-w-[60vw] flex justify-center items-center md:gap-0">
                    <img src="images/p2-img-1.jpg" alt="" className="w-full max-w-[35rem] h-auto object-cover"/>
                </div>
                <div className="flex flex-col justify-center items-center  gap-5 text-black text-center p-5 lg:flex-1">
                    <h1 className="text-2xl">Story of Anne Smith</h1>
                    <img className="invert w-[60%] max-w-[20rem]"   src="images/thread2.png" alt="" />
                    <p className="text-base max-w-[80%]"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor et dolore. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut commodo consequat. Duis aute irure dolor in reprerit in voluptate velit
                    </p>
                    <p className="text-base max-w-[80%]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor et dolore. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    </p>
                    <div className="flex text-center justify-center items-center flex-col p-5 gap-4 md:flex-row" >
                        <img src="images/p2-icon-1-x2.png" className=" w-15" alt="" />
                        <h1>Founder</h1>
                        <img src="images/p2-icon-2-x2.png" className=" w-15 md:ml-10" alt="" />
                        <h1>Artist</h1>
                    </div>
                    <img src="images/sign.png" alt="" className="w-25" />
                </div>
            </div>
        </div>
    );
}