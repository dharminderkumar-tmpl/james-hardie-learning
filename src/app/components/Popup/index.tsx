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
  // const [placeholder, setPlaceholder] = useState(
  //   "What are some of the best products we have here?"
  // );

  const [showPlaceholder, setShowPlaceholder] = useState(true)
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const placeHolders = [
    'Which styles are popular in Modern Homes Forecast 2024 report?',
    'Which design elements are characteristic of Modern Farmhouse style?',
    'What are the popular and emerging residential styles?',
    'Which products in the Hardie™ Architectural Collection would be best for a modern look?',
    'What product should I use to make my house look more aesthetic?',
  ]

  const currentPlaceholder = Array.isArray(placeHolders)
    ? placeHolders[currentPlaceholderIndex]
    : placeHolders

  useEffect(() => {
    if (Array.isArray(placeHolders) && placeHolders.length > 1) {
      const timer = setInterval(() => {
        setShowPlaceholder(false)
        setTimeout(() => {
          setCurrentPlaceholderIndex(
            (prevIndex: number) => (prevIndex + 1) % placeHolders.length
          )
          setShowPlaceholder(true)
        }, 300)
      }, 3000)

      return () => clearInterval(timer)
    }
  }, [placeHolders])

  return (
    <>
      <div
        className="MainContent max-sm:W-[90%]"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}

        // onClick={handleBlur}
      >
        <div className={`InnerContent ${response ? 'items-start' : 'items-center'}`}>
          <div className=" InnerinnerContent max-sm:flex max-sm:items-start max-sm:width-[85vw]">
            <div
              className="absolute top-16 right-4 max-sm:right-2 cursor-pointer"
              onClick={handleBlur}
            >
              <CloseIcon />
            </div>
            <div
              className="w-full bg-white mx-auto flex flex-col py-10 px-6 h-fit max-sm:p-3"
              style={{ borderTop: "4px solid green" }}
            >
              <div className="flex mx-auto justify-start w-[60%] gap-2 border-2 border-gray-300 rounded-full items-center cursor-pointer mb-8 max-sm:w-full max-sm:mt-8">
                <div className="ml-4">
                  <Search />
                </div>
                <input
                  type="text"
                  className={`text-gray-700 px-2 py-3 flex-grow font-montserrat text-2sm outline-none font-sans font-normal w-[60%] leading-[18.4px] rounded-full md:w-full ${'input'} ${showPlaceholder ? '' : 'placeholderHidden'
          }`}
                  style={{ color: "#343B4E" }}
                  value={input}
                  placeholder={currentPlaceholder}
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

                  <div className="pr-16 pl-16 items-center mt-5 max-sm:mt-7 grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 max-sm:grid-cols-1 max-sm:pr-0 max-sm:pl-0 gap-4">
                    {response?.products &&
                      response?.products?.map((product: any, index: any) => (
                        <a
                          key={index}
                          href={product?.url}
                          className="flex gap-4 items-center w-full mb-4"
                          // style={{ minWidth: "calc(33.33% - 2rem)" }}
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={product?.productImg}
                            className="w-[100px] h-[100px] object-fill max-sm:h-[86px]"
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
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
