import React, { useState } from "react";
import Food1 from "../../assets/biryani2-0YgeW9Uq.png";
import Food2 from "../../assets/biryani3-2P17nmNK.png";
import Food3 from "../../assets/biryani5-Dqmynf2n.png";
import Marquee from "react-fast-marquee";

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
  {
    id: 4,
    image: Food3,
  },
  {
    id: 5,
    image: Food3,
  },
  {
    id: 6,
    image: Food3,
  },
];

const Coffee = () => {
  const [image, setImage] = useState(Food1);

  const handleSelectImage = (image) => {
    setImage(image);
  };
  return (
    <>
      <div className="py-10 dark:bg-gray-800">
        <div className="container">
          <div className="order-1 sm:order-2 min-h-[650px] flex justify-center items-center relative">
            {/**main image section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="400"
              className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden"
            >
              <img
                src={image}
                alt=""
                className="w-[300px] sm:w-[450px] mx-auto cursor-pointer"
              />
            </div>
            {/**main image section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="400"
              className="flex justify-center gap-4 absolute bottom-0 bg-white/30 overflow-hidden py-2"
              style={{
                transform: "translateY(0%)",
                width: `${Math.min(imageList.length, 6) * 136}px`, // max 6 items
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 30%, black 90%, transparent)",
                maskImage:
                  "linear-gradient(to right, transparent, black 30%, black 90%, transparent)",
              }}
            >
              {
                <Marquee
                  gradient={false}
                  speed={80}
                  pauseOnHover={true}
                  className="overflow-hidden"
                >
                  {imageList.map((img, index) => (
                    <img
                      key={index}
                      onClick={() => handleSelectImage(img.image)}
                      src={img.image}
                      className="w-[120px] h-[120px] object-contain mx-2 cursor-pointer hover:scale-110 transition-transform"
                      alt={`img-${index}`}
                    />
                  ))}
                </Marquee>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coffee;
