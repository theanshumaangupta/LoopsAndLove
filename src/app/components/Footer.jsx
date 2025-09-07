export default function Footer() {
  return (
    <div className="bg-[#F3F0EC] text-black p-4 w-full text-center">
      <hr />
      <div className="block justify-between flex-wrap">
        {/* Email Newsletter */}
        <div className="m-5 flex flex-col items-start gap-6 p-10">
          <h1 style={{ fontFamily: "Merriweather" }} className="text-3xl">
            Sign Up To Date{" "}
          </h1>
          <p>Keep up to date with new collections and design.</p>
          <div className="flex items-center gap-10  p-5 max-w-[40rem] border-black border-1 w-full">
            <input
              type="text"
              placeholder="hello@examples.com"
              className=" flex-1 border-none outline-none"
            />
            <p className="text-1xl">Send</p>
          </div>
        </div>
      </div>
      <hr />
      <footer>
        <p className="text-left p-5">
          © 2025 All rights reserved | Designed by Anshumaan Gupta
        </p>
      </footer>
    </div>
  );
}
