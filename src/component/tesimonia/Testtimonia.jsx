import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Samuel",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis error culpa doloribus voluptatum explicabo. Aut sapiente dolorum eaque, deleniti recusandae in beatae, temporibus fugiat laborum magni aperiam! Animi, tempore?",
    img: "https://www.meisterdrucke.us/kunstwerke/1000px/Unbekannt_-_Joseph_Stalin_1879-1953_Soviet_leader_c1940s_-_(MeisterDrucke-701674).jpg",
  },
  {
    id: 2,
    name: "Samuel",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis error culpa doloribus voluptatum explicabo. Aut sapiente dolorum eaque, deleniti recusandae in beatae, temporibus fugiat laborum magni aperiam! Animi, tempore?",
    img: "https://www.meisterdrucke.us/kunstwerke/1000px/Unbekannt_-_Joseph_Stalin_1879-1953_Soviet_leader_c1940s_-_(MeisterDrucke-701674).jpg",
  },
  {
    id: 3,
    name: "Samuel",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis error culpa doloribus voluptatum explicabo. Aut sapiente dolorum eaque, deleniti recusandae in beatae, temporibus fugiat laborum magni aperiam! Animi, tempore?",
    img: "https://www.meisterdrucke.us/kunstwerke/1000px/Unbekannt_-_Joseph_Stalin_1879-1953_Soviet_leader_c1940s_-_(MeisterDrucke-701674).jpg",
  },
];

const Testtimonia = () => {
  var setting = {
    dots: true,
    arrows: false,
    infinity: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnhover: true,
    pauseOnFocus: true,
  };

  return (
    <>
      <div className="py-10  dark:bg-gray-800">
        <div className="container">
          {/**HEADER SECTION */}
          <div data-aos="zoom-in" data-aos-duration="400">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Testimonial
            </p>
            <h1 className="text-3xl">Testimonial</h1>
            <p className="text-xs text-gray-400">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
              sequi velit nobis. Eius eaque, temporibus quibusdam reprehenderit
              natus quae fugit molestiae nesciunt laboriosam perferendis eveniet
              facilis. Nemo odio quasi explicabo.
            </p>
          </div>
          {/**textimonia section */}
          <div className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
            <Slider {...setting}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div
                    key={id}
                    className="my-6"
                    data-aos="zoom-in"
                    data-aos-duration="400"
                  >
                    <div className="flex flex-col justify-center items-center shadow-lg mx-4 rounded-xl dark:bg-gray-600 bg-primary/10 relativ p-4 dark:text-gray-50">
                      <img
                        src={img}
                        alt={name}
                        className="rounded-full block mx-auto w-[100px] h-[100px]"
                      />
                      <p>{text}</p>
                      <h1 className="text-xl">{name}</h1>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testtimonia;
