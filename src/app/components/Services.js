"use client";
import data from "@/app/data";
import { useEffect, useState } from "react";

export default function Services() {
  let [service, setService] = useState("");
  useEffect(() => {
    setService(data);
  }, []);

  return (
    <>
      <div className="px-5 sm:px-12 my-10 mb-14 bg-white overflow-hidden">
        <div>
          <div
            className=" w-10 h-2 md:w-16 md:h-3 my-5"
            style={{ backgroundColor: "#6AAF2E" }}
          ></div>
          <h1 className=" text-3xl font-bold md:text-5xl md:font-bold pb-4 md:pb-10">
            OUR SERVICES
          </h1>
        </div>

        <div>
          <p className="text-sm sm:text-lg">
            In addition to our remarkable collection, Sarwinplast is proud to
            offer expert build care services, specializing in
            <b>gypsum plaster and waterproofing solutions.</b>
          </p>

          <p className="py-4 text-sm sm:text-lg ">
            Our team of skilled professionals ensures that your projects are
            built to withstand the test of time, with utmost attention to detail
            and quality.
          </p>
        </div>

        <div className="flex flex-row gap-10 mt-14">
          <div className="flex w-[1708px] h-[auto] items-start gap-[13px] self-stretch overflow-x-auto">
            {service &&
              service.map((val, ind) => <Card data={val} key={ind} />)}
          </div>
        </div>
      </div>
    </>
  );
}

function Card({ data }) {
  return (
    <div class="flex w-[350px] p-[12px] flex-col items-center justify-around gap-[8px] shrink-0 self-stretch redius-[8px] bg-[#FFFF]">
      <img class="w-[400px] h-[250px]" src={data.img} alt={data.title} />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 sm:text-2xl text-md">
          {data.title}
        </div>
        <p class="text-gray-700 text-base">{data.body}</p>
      </div>
      <div className="mt-auto px-6">
        <a href="#">
          <button
            className="text-[#6AAF2E] sm:text-lg text-sm  mb-4 px-6 py-2 border-2 transition-all hover:bg-[#0E1031] hover:text-white hover:translate-x-4 hover:border-t-4 font-bold hover:border-t-#6AAF2E"
            style={{ color: "#6AAF2E" }}
          >
            Know more
          </button>
        </a>
      </div>
    </div>
  );
}
