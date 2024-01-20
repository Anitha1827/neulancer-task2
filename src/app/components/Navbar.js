"use client";
import Image from "next/image";

export default function Navbar({ open, setOpen }) {
  return (
    <div className="">
      <div
        className="bg-[#6AAF2E] md:flex items-center w-screen md:bg-[#0E1031] h-[130px] relative"
        // style={{ backgroundColor: "#0E1031" }}
      >
        <Image
          alt="nav"
          loading="lazy"
          height={130}
          className="w-[100%] h-[130px] md:w-[603px] "
          srcset="https://expertbuildcare.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FheaderBG.0f597304.png&w=640&q=75"
        />
        <div className="absolute bottom-2 left-3 flex flex-row md:mt-10  md:gap-6 md:mx-4 xl:mx-10">
          <a href="/" className="flex gap-6">
            <Image
              alt="logo"
              loading="lazy"
              width={69}
              height={70}
              className="md:h-14 md:mt-3 md:w-14"
              srcset="https://expertbuildcare.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.9d4d352e.png&w=96&q=75"
            />
            <p className="align-bottom mt-2 w-24 font-bold md:text-2xl">
              Expert BuildCare
            </p>
          </a>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="absolute right-6 bottom-9 w-9 h-9 md:hidden"
          onClick={() => setOpen(!open)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <nav className="hidden absolute right-9 bottom-5 z-10 md:flex flex-row gap-8 justify-center items-center">
          <ul className="flex flex-row text-white xl:gap-10 md:gap-4 mt-3">
            <li>
              <div
                className="m-1 ml-0 h-1 w-12  rounded-sm"
                style={{ backgroundColor: "#6AAF2E" }}
              ></div>
              <a className=" font-bold md:text-sm xl:text-lg" href="/">
                Home
              </a>
            </li>
            <li>
              <div
                className="m-1 ml-0 h-1 w-12  bg-transparent rounded-sm"
                // style={{ backgroundColor: "#FFFFFF" }}
              ></div>
              <a href="/aboutus" className=" font-normal md:text-sm xl:text-lg">
                About Us
              </a>
            </li>
            <li>
              <div className="m-1 ml-0 h-1 w-12  bg-transparent rounded-sm md:text-sm lg:text-2xl"></div>
              <a href="/service" className=" font-normal md:text-sm xl:text-lg">
                Services
              </a>
            </li>
            <li>
              <div className="m-1 ml-0 h-1 w-12  bg-transparent rounded-sm"></div>
              <a
                href="/product"
                className="  font-normal md:text-sm xl:text-lg"
              >
                Products
              </a>
            </li>
            <li>
              <div className="m-1 ml-0 h-1 w-12  bg-transparent rounded-sm"></div>
              <a href="gallery" className=" font-normal md:text-md xl:text-lg">
                Gallery
              </a>
            </li>
          </ul>
          <a href="/contact" className="mt-3">
            <button
              style={{ backgroundColor: "#6AAF2E" }}
              className="bg-[#6AAF2E] hover:bg-[#0E1031] hover:border-t-4 hover:border-t-[#6AAF2E] transition-all ease-in-out duration-400 text-white md:px-4 xl:px-8 py-3 font-bold"
            >
              Contact Us
            </button>
          </a>
        </nav>
      </div>
    </div>
  );
}
