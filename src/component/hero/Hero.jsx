import React, { useState } from "react";
import bgImg from "../../assets/wallpaper-coffee.jpg";


const Hero = () => {
  return (
    <>
      <div
        className="min-h-[500px] sm:min-h-[600px] bg-gray-300 dark:bg-gray-950/50 dark:text-white duration-200 flex justify-center items-center "
      >
        <div className="container pb-8 sm:pb-0">
          <div>
            {/**text content section */}
            <div
              data-aos="zoom-out"
              data-aos-duration="400"
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left items-center"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900">
                START YOUR DAY WITH TREEKOFF
              </h1>
              <p className="max-w-[800px] text-gray-900">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt fuga blanditiis recusandae neque odit nemo error
                facilis repellendus aspernatur veritatis molestias rerum, ullam
                minima voluptatibus cupiditate cum sequi natus magnam.
              </p>
              <div>
                <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200 font-laos">
                  ສະໝັກສະມາຊິກ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
