"use client";
import Headers from "@/app/components/Headers";
import Navbar from "@/app/components/Navbar";
import Carousel from "@/app/components/Carousel";
import Services from "@/app/components/Services";
import { useState } from "react";

export default function Home() {
  let [open, setOpen] = useState(false);

  return (
    <main className="overflow-hidden">
      {open && (
        <div className="flex flex-col md:hidden w-[100vw] h-[100vh] bg-[#0E1031] overflow-y-auto items-center">
          <div className="flex flex-row justify-around items-center w-[100vw] ">
            <img
              alt="logo"
              className="md:h-14 md:mt-3 md:w-14"
              src="https://expertbuildcare.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.9d4d352e.png&w=96&q=75"
            />
            <p className="align-bottom mt-2 w-24 font-bold md:text-2xl text-white">
              Expert BuildCare
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              onClick={() => setOpen(!open)}
            >
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="#FCFFF9"
              />
            </svg>
          </div>
          <br />
          <div className="px-[50px] w-[100vw] flex items-start mt-[44px]">
            <div className="inline-flex flex-col items-start gap-[17px] text-[white]">
              <p className="font-inter text-[24px] font-bold cursor-pointer">
                Home
              </p>
              <p className="font-inter text-[24px] font-bold cursor-pointer">
                About US
              </p>
              <p className="font-inter text-[24px] font-bold cursor-pointer">
                Our Services
              </p>
              <p className="font-inter text-[24px] font-bold cursor-pointer ">
                Our Products
              </p>
              <p className="font-inter text-[24px] font-bold cursor-pointer">
                Gallery
              </p>
              <p className="font-inter text-[24px] font-bold cursor-pointer">
                Contact us
              </p>
            </div>
          </div>
          <div className="inline-flex py-[23px] px-[31px] items-center gap-[45px] mt-[44px] bg-[#6AAF2E]">
            <button className="font-center font-bold text-[24px] text-white">
              Book a Call Today
            </button>
          </div>
        </div>
      )}
      {!open && (
        <>
          <Headers />
          <Navbar open={open} setOpen={setOpen} />
          <Carousel />
          <Services />
        </>
      )}
    </main>
  );
}
