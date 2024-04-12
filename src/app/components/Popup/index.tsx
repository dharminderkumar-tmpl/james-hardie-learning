import { Search } from "lucide-react";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { X as CloseIcon } from "lucide-react";

function page({ setIsOpen }: any) {
  const data1 = [
    {
      src: "./images/cookie.png",
      alt: "Image",
      title: "KETO Vegan Almond Cookie",
    },
    {
      src: "./images/cookie.png",
      alt: "Image",
      title: "KETO Vegan Almond Cookie",
    },
    {
      src: "./images/cookie.png",
      alt: "Image",
      title: "KETO Vegan Almond Cookie",
    },
  ];
  const buttons = [
    {
      id: 1,
      text: "Which of these are low carbs",
    },
    {
      id: 2,
      text: "Which of these are low carbs",
    },
    {
      id: 3,
      text: "Which of these are low carbs",
    },
    {
      id: 4,
      text: "Which of these are low carbs",
    },
    {
      id: 5,
      text: "Which of these are low carbs",
    },
    {
      id: 6,
      text: "Which of these are low carbs",
    },
  ];
  const handleBlur = () => {
    setIsOpen(false);
  };
  const [placeholder, setPlaceholder] = useState(
    "What are some of the best products we have here?"
  );

  const handleButtonClick = (text: any) => {
    setPlaceholder(text);
  };

  return (
    <>
      <div
        className="relative  top-0 h-screen w-screen"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        onClick={handleBlur}
      />

      <div className="h-screen w-full overflow-y-auto absolute flex justify-center">
        <div className=" relative top-6 w-[90%] my-8 h-fit">
          <div
            className="absolute top-5 right-4 cursor-pointer"
            onClick={handleBlur}
          >
            <CloseIcon />
          </div>
          <div
            className="w-full bg-white mx-auto flex flex-col p-8"
            style={{ borderTop: "4px solid green" }}
          >
            <div className="flex mx-auto justify-start w-3/6 gap-2 border-2 border-gray-300 rounded-full items-center cursor-pointer mb-8">
              <div className="ml-4">
                <Search />
              </div>
              <input
                type="text"
                className="text-gray-700 px-2 py-3 flex-grow font-montserrat  text-2sm outline-none font-sans font-normal  w-3/6  leading-[18.4px] rounded-full"
                style={{ color: "#343B4E" }}
                placeholder={placeholder}
              />
            </div>

            <div className="">
              <p
                className="leading-6 text-center font-sans font-normal text-base pr-4 pl-4"
                style={{ color: "#343B4E" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus officiis id quibusdam soluta suscipit nihil voluptatem
                dignissimos quia, blanditiis facilis? Natus perspiciatis itaque
                reprehenderit unde nobis consequuntur eius ad a. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Doloribus officiis
                id quibusdam soluta suscipit nihil voluptatem dignissimos quia,
                blanditiis facilis? Natus perspiciatis itaque reprehenderit unde
                nobis consequuntur eius ad a. reprehenderit unde nobis
                consequuntur eius ad a. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Doloribus officiis id quibusdam soluta
                suscipit nihil voluptatem dignissimos quia, blanditiis facilis?
                Natus perspiciatis itaque reprehenderit unde nobis consequuntur
                eius ad a. consequuntur eius ad a. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Doloribus officiis id quibusdam
                soluta suscipit nihil voluptatem dignissimos quia, blanditiis
                facilis? Natus perspiciatis itaque reprehenderit unde nobis
                consequuntur eius ad a.
              </p>
              <div className="flex flex-nowrap pr-16 pl-16  items-center mt-5">
                {data1.map((item, index) => (
                  <div key={index} className="w-1/3 flex gap-3 items-center ">
                    <img src={item.src} alt={item.alt} className="w-1/3" />

                    <div className="flex flex-col gap-1">
                      <b className="text-sm">{item.title}</b>
                      <div className="flex gap-2">
                        <img src="./images/phool.png" />
                        <img src="./images/plant.png" />
                      </div>
                      <b className="text-sm">Rs.239</b>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-nowrap pr-16 pl-16  items-center mt-4">
                {data1.map((item, index) => (
                  <div key={index} className="w-1/3 flex gap-3 items-center ">
                    <img src={item.src} alt={item.alt} className="w-1/3" />

                    <div className="flex flex-col gap-1">
                      <b className="text-sm">{item.title}</b>
                      <div className="flex gap-2">
                        <img src="./images/phool.png" />
                        <img src="./images/plant.png" />
                      </div>
                      <b className="text-sm">Rs.239</b>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <button className="bg-green-900 text-white  p-6 mx-auto flex justify-center font-normal font-montserrat text-lg leading-5  h-10 items-center">
                  <h2>View All Products</h2>
                  <ArrowUpRight />
                </button>
              </div>
              <div className="flex flex-wrap justify-center mt-5 gap-6">
                {buttons.map((button) => (
                  <button
                    key={button.id}
                    className="bg-gradient-to-br from-gray-100 via-gray-100 to-gray-100 hover:bg-gradient-to-br hover:from-green-900 hover:via-green-900 hover:to-green-900 hover:text-white text-gray-900 text-opacity-50 rounded-md font-normal font-montserrat text-sm leading-5 items-center p-2"
                    onClick={() => handleButtonClick(button.text)}
                  >
                    <p>{button.text}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
