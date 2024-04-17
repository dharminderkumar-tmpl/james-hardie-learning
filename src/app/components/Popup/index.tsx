import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { X as CloseIcon } from "lucide-react";
import DOMPurify from "dompurify";
import axios from "axios";
import "./index.css";

function page({ setIsOpen }: any) {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);
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
      setError(null);
      setLoading(true);

      const response = await axios.post("http://tunica.zapto.org:6060/api", {
        userQuery: input,
        clientId: "JamesHardie",
      });
      setResponse(response.data);
      console.log(response.data, "response");
      // setError(false);
    } catch (error) {
      setError("error");
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
        className="MainContent"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        // onClick={handleBlur}
      >
        <div className="InnerContent">
          <div className=" InnerinnerContent">
            <div
              className="absolute top-16 right-4 cursor-pointer"
              onClick={handleBlur}
            >
              <CloseIcon />
            </div>
            <div
              className="w-full bg-white mx-auto flex flex-col p-8 h-full "
              style={{ borderTop: "4px solid green" }}
            >
              <div className="flex mx-auto justify-start w-3/6 gap-2 border-2 border-gray-300 rounded-full items-center cursor-pointer mb-8 max-sm:w-full ">
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
                <div className=" flex justify-center ">
                  <span className="loader"></span>
                </div>
              ) : response && input ? (
                <>
                  <div
                    className="leading-6 text-center font-sans font-normal text-base pr-4 pl-4 max-sm:pr-0 max-sm:pl-0"
                    style={{ color: "#343B4E" }}
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(response.summarizationText),
                    }}
                  ></div>

                  <div className="pr-16 pl-16  items-center mt-5 grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 max-sm:grid-cols-1 max-sm:pr-0 max-sm:pl-0">
                    {response.products &&
                      response.products.map((product: any, index: any) => (
                        <a
                          key={index}
                          href={product.url}
                          className=" flex gap-3 items-center hover:bg-gray-200 w-full mb-4 max-sm:flex-col"
                          // style={{ minWidth: "calc(33.33% - 2rem)" }}
                        >
                          <img
                            src={product.productImg}
                            className="w-1/3 max-sm:w-full"
                            alt={product.title}
                          />
                          <div className="flex flex-col gap-1">
                            <b className="text-sm">{product.title}</b>
                            <div className="flex gap-2">
                              <img src="./images/phool.png" alt="phool" />
                              <img src="./images/plant.png" alt="plant" />
                            </div>
                            <b className="text-sm">Rs.239</b>
                          </div>
                        </a>
                      ))}
                  </div>

                  <a className="mt-5" href="https://www.jameshardie.com/">
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
                  className="flex flex-col justify-center items-center align-middle h-full leading-6 text-center font-sans font-semibold text-base pr-4 pl-4 "
                  style={{ color: "#343B4E" }}
                >
                  <p>Welcome to the James Hardie Chatbot!</p>
                  <p>
                    Wondering which products from the Hardie™ Architectural
                    Collection give your space that sleek modern edge?
                  </p>
                  <p>
                    Need to know which cladding options offer top-notch bush
                    fire protection?
                  </p>
                  <p>
                    Or maybe you're envisioning a cozy rustic vibe for your
                    home?
                  </p>
                  <p>
                    Our team's here to help. Whether it's about modernizing,
                    fireproofing, or rusticating (yes, we just made that word
                    up), just ask away!
                  </p>
                  <p>
                    Let's team up and turn your ideas into James Hardie reality.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
