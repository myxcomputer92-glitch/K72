import React from "react";

const Images = () => {
  // public/images/Img-1.webp
  const Images = [
    "/images/Img-1.webp",
    "/images/img-2.webp",
    "/images/Img-1.webp",
    "/images/Img-1.webp",
    "/images/Img-1.webp",
    "/images/Img-1.webp",
    "/images/Img-1.webp",
    "/images/Img-1.webp",
    "/images/Img-1.webp",
    "/images/Img-1.webp",
    "/images/Img-1.webp",
    "/images/Img-1.webp",
    "/images/Img-1.webp",
    "/images/Img-1.webp",
    "/images/Img-1.webp",
    "/images/Img-1.webp",
    "/images/Img-1.webp",
  ];

  const Img_Heading = "Vior le projet";

  return (
    <div className="grid grid-cols-2 grid-rows-9 gap-5 mt-10 h-auto">
      {Images.map((img, index) => (
        <div className="contain-img group relative w-full mt-4 ml-4">
          <img
            src={img}
            key={index}
            alt=""
            className="w-full border-transparent h-[70vh] ml-4 mt-4 transition-all group-hover:scale-105 group-hover:duration-500 group-hover:border-2 group-hover:rounded-[70px]"
          />
          <h1
            className="absolute inset-y-[50%] inset-x-[19%] uppercase p-2 w-[30vw] text-nowrap border-2
 rounded-[40px] h-fit bg-transparent text-6xl flex items-center justify-center text-white font-medium transition-all opacity-0 group-hover:opacity-100 group-hover:duration-500"
          >
            {Img_Heading}
          </h1>
        </div>
      ))}

    </div>
  );
};

export default Images;
