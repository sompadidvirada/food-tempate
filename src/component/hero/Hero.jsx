import React, { useState } from "react";
import Food1 from "../../assets/biryani2-0YgeW9Uq.png";
import Food2 from "../../assets/biryani3-2P17nmNK.png";
import Food3 from "../../assets/biryani5-Dqmynf2n.png";
import bgImg from "../../assets/vector3-rNAzasPw.png";

const imageList = [
  {
    id: 1,
    image: Food1,
  },
  {
    id: 2,
    image: Food2,
  },
  {
    id: 3,
    image: Food3,
  },
];

const bgImage = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  const [image, setImage] = useState(Food1);
  return (
    <>
      <div
        style={bgImage}
        className="min-h-[500px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center"
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">

            {/**text content section */}
            <div></div>
            {/**image section */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
