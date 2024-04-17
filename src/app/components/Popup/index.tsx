import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { X as CloseIcon } from "lucide-react";
import DOMPurify from "dompurify";
import axios from "axios";
import "./index.css";

function Index({ setIsOpen }: any) {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event: any) => {
    const newValue = event.target.value;
    setInput(newValue);

    if (!input) {
      setResponse(null);
    }
  };

  async function postData() {
    try {
      // console.log("response called");
      setError(false);
      setLoading(true);

      const response = await axios.post("https://jh-demo-ai.onrender.com/api", {
        userQuery: input,
        clientId: "JamesHardie",
      });
      // const response = await axios.get("/ ");
      setResponse(response.data);
      console.log(response.data, "response");
      // setError(false);
    } catch (error) {
      setError(true);
      console.log(error, "error");
    } finally {
      setLoading(false);
    }
  }

  const handleButtonClick = (followup: string) => {
    setInput(followup);

    postData();
  };

  const handleClick = (e: any) => {
    if (e.keyCode === 13 && input) {
      postData();
    }
  };

  const handleBlur = () => {
    setIsOpen(false);
  };
  const [placeholder, setPlaceholder] = useState(
    "What are some of the best products we have here?"
  );

  return (
    <>
      <div
        className="MainContent max-sm:W-[90%]"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}

        // onClick={handleBlur}
      >
        <div className="InnerContent max-sm:items-start max-sm:width-[90%]">
          <div className=" InnerinnerContent max-sm:flex max-sm:items-start">
            <div
              className="absolute top-16 right-4 cursor-pointer"
              onClick={handleBlur}
            >
              <CloseIcon />
            </div>
            <div
              className="w-full bg-white mx-auto flex flex-col p-8 h-full max-sm:p-4"
              style={{ borderTop: "4px solid green" }}
            >
              <div className="flex mx-auto justify-start w-3/6 gap-2 border-2 border-gray-300 rounded-full items-center cursor-pointer mb-8 max-sm:w-full max-sm:mt-8">
                <div className="ml-4">
                  <Search />
                </div>
                <input
                  type="text"
                  className="text-gray-700 px-2 py-3 flex-grow font-montserrat text-2sm outline-none font-sans font-normal w-3/6 leading-[18.4px] rounded-full md:w-full"
                  style={{ color: "#343B4E" }}
                  value={input}
                  placeholder={placeholder}
                  onChange={handleChange}
                  onKeyDown={input ? handleClick : undefined}
                />
              </div>

              {loading ? (
                <div className=" flex justify-center my-10">
                  <span className="loader"></span>
                </div>
              ) : error ? (
                <b className="text-center ">
                  Some error occurred, please try again.
                </b>
              ) : response && input ? (
                <>
                  <div
                    className="leading-6 text-center font-sans font-normal text-base pr-4 pl-4 max-sm:pr-0 max-sm:pl-0 "
                    style={{ color: "#343B4E" }}
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(response?.summarizationText),
                    }}
                  ></div>

                  <div className="pr-16 pl-16 items-center mt-5 max-sm:mt-7 grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 max-sm:grid-cols-1 max-sm:pr-0 max-sm:pl-0">
                    {response?.products &&
                      response?.products?.map((product: any, index: any) => (
                        <a
                          key={index}
                          href={product?.url}
                          className=" flex gap-4 items-center w-full mb-4"
                          // style={{ minWidth: "calc(33.33% - 2rem)" }}
                        >
                          <img
                            src={product?.productImg}
                            className="w-1/3"
                            alt={product?.title}
                          />
                          <div className="flex flex-col gap-1">
                            <b className="text-sm">{product?.title}</b>
                          </div>
                        </a>
                      ))}
                  </div>

                  <a
                    className="mt-5"
                    href="https://www.jameshardie.com.au/categories/cladding"
                  >
                    <button className="bg-green-900 text-white p-6 mx-auto flex justify-center font-normal font-montserrat text-lg leading-5 h-10 items-center">
                      <h2>View All Products</h2>
                      <ArrowUpRight />
                    </button>
                  </a>

                  <div className="flex flex-wrap justify-center mt-5 gap-6">
                    {response.followup &&
                      response.followup.map((followup: any, index: number) => (
                        <button
                          key={index}
                          className="bg-gradient-to-br from-gray-100 via-gray-100 to-gray-100 hover:bg-gradient-to-br hover:from-green-900 hover:via-green-900 hover:to-green-900 hover:text-white text-gray-900 text-opacity-50 rounded-md font-normal font-montserrat text-sm leading-5 items-center p-2"
                          onClick={() => handleButtonClick(followup)}
                        >
                          <p>{followup}</p>
                        </button>
                      ))}
                  </div>
                </>
              ) : (
                <div
                  className="flex flex-col justify-center items-center align-middle h-full leading-6 text-center font-sans font-semibold text-base pr-4 pl-4 my-6 "
                  style={{ color: "#343b4e99" }}
                >
                  <em>
                    "Welcome to the James Hardie Chatbot! Wondering which
                    products from the Hardie™ Architectural Collection give your
                    space that sleek modern edge? Need to know which cladding
                    options offer top-notch bush fire protection? Or maybe you
                    re envisioning a cozy rustic vibe for your home? Our teams
                    here to help. Whether its about modernizing, fireproofing,
                    or rusticating (yes, we just made that word up), just ask
                    away! Let us team up and turn your ideas into James Hardie
                    reality."
                  </em>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
