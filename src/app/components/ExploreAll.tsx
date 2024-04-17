import React from "react";
const data = [
  {
    id: 1,
    image: "./images/FarmHouse.webp",
    title: "OAK AND ORANGE DESIGN TIPS FOR MODERN FARMHOUSE STYLE",
    description: "Oak &amp; Orange on Modern Farmhouse style",
  },
  {
    id: 2,
    image: "./images/FarmHouse.webp",
    title: "OAK AND ORANGE DESIGN TIPS FOR MODERN FARMHOUSE STYLE",
    description: "Oak &amp; Orange on Modern Farmhouse style",
  },
];
interface ExploreAllProps {
  image: string;
  title: string;
  description: string;
}

const ExploreAll: React.FC<ExploreAllProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="w-full max-sm:hidden">
      <div className="ml-28">
        <div className="mt-20">
          <h1 className="text-center font-bold font-montserrat text-3xl leading-5 text-gray-700 mt-12">
            Explore what&apos;s possible
          </h1>
        </div>
        <div className="flex justify-center mt-12">
          <div className="grid grid-cols-2 gap-2 justify-center">
            <div>
              <img src={image} alt="Farm House" />
              <div>
                <h2 className="font-bold font-montserrat text-2xl text-gray-700 leading-relaxed line-height-1.167 w-3/4">
                  {title}
                </h2>
                <p>{description}</p>
              </div>
              <h1 className="mt-5 font-montserrat text-xl uppercase text-green-700 leading-2.66 hover:underline cursor-pointer">
                LEARN MORE
              </h1>
            </div>
            <div>
              <img src={image} alt="Farm House" />
              <div>
                <h2 className="font-bold font-montserrat text-2xl text-gray-700 leading-relaxed line-height-1.167 w-3/4">
                  {title}
                </h2>
                <p>{description}</p>
              </div>
              <h1 className="mt-5 font-montserrat text-xl uppercase text-green-700 leading-2.66 hover:underline cursor-pointer">
                LEARN MORE
              </h1>
            </div>
          </div>
        </div>
        <div className=" justify-center mt-12 grid grid-cols-2 gap-8 ">
          <div>
            <img src={image} alt="Farm House" />
            <h2 className="font-bold font-montserrat text-2xl text-gray-700 leading-relaxed line-height-1.167 w-3/4">
              {title}
            </h2>
            <p>{description}</p>
            <h1 className="mt-5 font-montserrat text-xl uppercase text-green-700 leading-2.66 hover:underline cursor-pointer ">
              LEARN MORE
            </h1>
          </div>
          <div>
            <img src={image} alt="Farm House" />
            <h2 className="font-bold font-montserrat text-2xl text-gray-700 leading-relaxed line-height-1.167 w-3/4">
              {title}
            </h2>
            <p>{description}</p>
            <h1 className="mt-5 font-montserrat text-xl uppercase text-green-700 leading-2.66 hover:underline cursor-pointer">
              LEARN MORE
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExploreAllContainer: React.FC = () => {
  const item = data[0];
  return (
    <ExploreAll
      image={item.image}
      title={item.title}
      description={item.description}
    />
  );
};

export default ExploreAllContainer;
