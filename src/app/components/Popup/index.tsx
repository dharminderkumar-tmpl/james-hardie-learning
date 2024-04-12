import { Search } from "lucide-react";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

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
        className="absolute top-0 h-screen w-screen"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        onClick={handleBlur}
      />

      <div className=" flex justify-center  absolute top-36 w-[91.666667%] h-screen   ">
        <div
          className="w-[2000px] bg-white mx-auto flex flex-col  items-center h-[550px] "
          style={{ borderTop: "4px solid green" }}
        >
          <div className="flex justify-start w-3/6 gap-2 border-2 border-gray-300 rounded-full items-center cursor-pointer mt-8">
            <div className="ml-4">
              <Search />
            </div>
            <input
              type="text"
              className="text-gray-700 px-2 py-3 flex-grow font-montserrat  text-2sm outline-none font-sans font-normal  leading-[18.4px]"
              style={{ color: "#343B4E" }}
              placeholder={placeholder}
            />
          </div>

          <div className="w-[93.666667%] mt-4">
            <p
              className="leading-6 text-center font-sans font-normal text-base"
              style={{ color: "#343B4E" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              officiis id quibusdam soluta suscipit nihil voluptatem dignissimos
              quia, blanditiis facilis? Natus perspiciatis itaque reprehenderit
              unde nobis consequuntur eius ad a.
            </p>
            <div className="flex flex-nowrap pr-16 pl-16  items-center mt-4">
              {data1.map((item, index) => (
                <div key={index} className="w-1/3 flex gap-3 items-center mt-4">
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
            <div className="flex flex-nowrap pr-16 pl-16  items-center mt-3">
              {data1.map((item, index) => (
                <div key={index} className="w-1/3 flex gap-3 items-center mt-4">
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

            <div className="mt-4">
              <button className="bg-green-900 text-white  p-6 mx-auto flex justify-center font-normal font-montserrat text-lg leading-5  h-10 items-center">
                <h2>View All Products</h2>
                <ArrowUpRight />
              </button>
            </div>
            <div className="flex gap-6 mt-4 justify-center">
              <button
                className="bg-gradient-to-br from-gray-100 via-gray-100 to-gray-100 hover:bg-gradient-to-br hover:from-green-900 hover:via-green-900 hover:to-green-900 hover:text-white text-gray-900 text-opacity-50 rounded-md   font-normal font-montserrat text-sm leading-5  items-center p-2"
                onClick={() =>
                  handleButtonClick("Which of these are low carb?")
                }
              >
                <p>Which of these are low carb?</p>
              </button>
              <button
                className="bg-gradient-to-br from-gray-100 via-gray-100 to-gray-100 hover:bg-gradient-to-br hover:from-green-900 hover:via-green-900 hover:to-green-900 hover:text-white text-gray-900 text-opacity-50 rounded-md   font-normal font-montserrat text-sm leading-5  items-center p-2"
                onClick={() =>
                  handleButtonClick("Which of these are low carb1?")
                }
              >
                <p>Which of these are low carb1?</p>
              </button>
              <button
                className="bg-gradient-to-br from-gray-100 via-gray-100 to-gray-100 hover:bg-gradient-to-br hover:from-green-900 hover:via-green-900 hover:to-green-900 hover:text-white text-gray-900 text-opacity-50 rounded-md   font-normal font-montserrat text-sm leading-5  items-center p-2"
                onClick={() =>
                  handleButtonClick("Which of these are low carb2?")
                }
              >
                <p>Which of these are low carb2?</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
