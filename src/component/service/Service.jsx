import React from "react";
import img1 from "../../assets/biryani2-0YgeW9Uq.png";

const ServiceData = [
  {
    id: 1,
    img: img1,
    name: "Biyandi",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quae est laboriosam, praesentium eius iste, qui pariatur commodi doloremque ad ipsum quas suscipit veritatis alias? Reiciendis voluptatum minima dolores illo?",
  },
  {
    id: 2,
    img: img1,
    name: "Chick soup",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quae est laboriosam, praesentium eius iste, qui pariatur commodi doloremque ad ipsum quas suscipit veritatis alias? Reiciendis voluptatum minima dolores illo?",
  },
  {
    id: 3,
    img: img1,
    name: "Cold Coffee",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit quae est laboriosam, praesentium eius iste, qui pariatur commodi doloremque ad ipsum quas suscipit veritatis alias? Reiciendis voluptatum minima dolores illo?",
  },
];

const Service = () => {
  return (
    <>
      <div className="py-10 dark:bg-gray-800">
        <div className="container">
          {/** HEADER SECTION */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Service
            </p>
            <h1 className="text-3xl font-bold dark:text-white">Service</h1>
            <p className="text-xs text-gray-400">
              {" "}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum,
              qui facere excepturi nesciunt autem, vero non cupiditate cum esse
              possimus tempore dolor libero pariatur doloribus ducimus
              voluptates. Ab, atque obcaecati?
            </p>
          </div>
          {/** CARD SECTION */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
              {ServiceData.map(({ id, img, name, description }) => {
                return (
                  <div
                    data-aos="zoom-in"
                    data-aos-duration="400"
                    key={id}
                    className="max-w-[300px] group rounded-2xl bg-white 
                     hover:bg-primary hover:text-white duration-300 shadow-xl cursor-pointer
                      dark:hover:bg-primary dark:text-white dark:bg-gray-600 dark:hover:text-gray-900"
                  >
                    <div className="h-[100px]">
                      <img
                        src={img}
                        alt={name}
                        className="max-w-[200px] mx-auto block tranform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                      />
                    </div>
                    <div className="py-4 text-center">
                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500 text-sm line-clamp-2 dark:text-gray-100 group-hover:text-gray-900 group-hover:font-bold:">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Service;
