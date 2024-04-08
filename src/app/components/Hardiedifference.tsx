import React from "react";

function Hardiedifference() {
  return (
    <div className="mt-20">
      <div className="mt-10 bg-white">
        <h1 className="text-center font-bold font-montserrat text-xl leading-10 mt-10">
          The Hardie™ difference
        </h1>
        <div className="flex justify-center w-full p-20">
          <div className="flex flex-col items-center">
            <div>
              <img src="./images/Beautifuleye.svg" alt="Easy Icon" />
            </div>
            <h1 className="text-center font-semibold font-montserrat  leading-6 mt-5 text-lg">
              Beautiful
            </h1>
            <p className="text-center font-normal font-helvetica  text-gray-700 leading-6 text-lg mt-5">
              Endless versatility so you can create your unique dream home.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div>
              <img src="./images/Enduring_icon.svg" alt="Easy Icon" />
            </div>
            <h1 className="text-center font-semibold font-montserrat  leading-6 mt-5 text-lg">
              Enduring
            </h1>
            <p className="text-center font-normal font-helvetica text-gray-700 leading-6 text-lg mt-5">
              Built for tough Australian conditions.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <img src="./images/Easy_icon.svg" alt="Easy Icon" />
            </div>
            <h1 className="text-center font-semibold font-montserrat  leading-6 mt-5 text-lg">
              Space maximising
            </h1>
            <p className="text-center font-normal font-helvetica  text-gray-700 leading-6 text-lg mt-5">
              Live larger and make the most of space.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <img src="./images/Easy_icon.svg" alt="Easy Icon" />
            </div>
            <h1 className="text-center font-semibold font-montserrat  leading-6 mt-5 text-lg">
              Easy
            </h1>
            <p className="text-center font-normal font-helvetica  text-gray-700 leading-6 text-lg mt-5">
              Faster, easier construction so you can start living sooner.
            </p>
          </div>
        </div>

        <button className="bg-gradient-to-br from-green-600 via-green-500 to-green-400 hover:bg-gradient-to-br hover:from-green-900 hover:via-green-900 hover:to-green-900 text-white py-2 px-4 mx-auto flex justify-center font-semibold font-montserrat text-lg leading-5 ">
          DISCOVER THE DIFFERENCE
        </button>
      </div>
    </div>
  );
}

export default Hardiedifference;
