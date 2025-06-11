import React from "react";
import FooterLogo from "../../assets/food-logo-4PF6fRLL.png";
import { FaArrowPointer } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-950">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 py-5">
            <div
              className="py-8 px-4"
              data-aos="fade-right"
              data-aos-duration="400"
            >
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left ">
                <img src={FooterLogo} alt="" className="max-w-[50px]" />
              </h1>
              <p className="text-gray-900 dark:text-gray-50">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum, quasi earum quia id dolorem totam laboriosam atque
                dignissimos vel tempore sint, similique corrupti labore quas
                praesentium repellat maxime? Labore, explicabo.
              </p>
              <br />
              <div>
                <div className="flex items-center gap-3 mt-6 text-gray-900 dark:text-gray-50">
                  <FaArrowPointer />
                  <p>SOMPADID VIRADA</p>
                </div>
                <div className="flex items-center gap-3 mt-3 text-gray-900 dark:text-gray-50">
                  <FaPhone />
                  <p>+ 85620 51778411</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mt-6 text-gray-900 dark:text-gray-50">
                  <a href="#">
                    <CiInstagram className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaSquareXTwitter className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 text-gray-900 dark:text-gray-50">
              <div>
                <div
                  className="py-8 px-4"
                  data-aos="fade-right"
                  data-aos-duration="500"
                >
                  <h1 className="text-xl sm:text-3xl font-bold text-justify sm:text-left mb-3">
                    IMPORTAND LINKS
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
              <div>
                <div
                  className="py-8 px-4"
                  data-aos="fade-right"
                  data-aos-duration="600"
                >
                  <h1 className="text-xl sm:text-3xl font-bold text-justify sm:text-left mb-3">
                    IMPORTAND LINKS
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
              <div>
                <div
                  className="py-8 px-4"
                  data-aos="fade-right"
                  data-aos-duration="700"
                >
                  <h1 className="text-xl sm:text-3xl font-bold text-justify sm:text-left mb-3">
                    IMPORTAND LINKS
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
