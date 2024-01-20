import { useState } from "react";

import cardAnimation from "../../../../assets/animation/cardLoading.json";
import "aos/dist/aos.css";
Aos.init();
import Lottie from "lottie-react";
import useAuth from "../../../../hooks/useAuth";
import Aos from "aos";
const SingleCard2 = ({ data, setFoodData, setInitialPrice }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [imgloaded, setImgLoaded] = useState(false);
  const [onfocus, setOnfocus] = useState(false);

  return (
    <div
      data-aos="fade-in"
      className="w-full cursor-pointer relative justify-center flex"
    >
      {" "}
      <div
        onClick={() => {
          setTimeout(() => {
            setShowDetails(true);
          }, 500);
          setOnfocus(true);
        }}
        onMouseOut={() => {
          setShowDetails(false);

          setOnfocus(false);
        }}
        className=" relative flex flex-col items-center transform duration-500 lg:w-[255px] xl:w-[290px] xl:min-h-[500px] min-h-[420px] w-[280px]"
      >
        <div className="xl:w-[253px] w-[303px]  relative flex justify-center xl:-mb-24 -mb-24 items-center transform duration-500 z-40 lg:w-[195px] h-[253px]">
          <div className="lg:w-[160px] lg:h-[160px] w-[168px] h-[168px] xl:w-[198px] xl:h-[198px] lg:-ms-10 relative -ms-16 xl:mt-8 object-cover rounded-full">
            {!imgloaded && (
              <Lottie
                className="w-full bg-white border-2 border-accent border-opacity-30 h-full object-cover absolute rounded-full"
                animationData={cardAnimation}
              />
            )}
            <img
              src={data?.imgUrl}
              onLoadCapture={() => setImgLoaded(true)}
              className={`${
                onfocus
                  ? "scale-105 duration-300 transform"
                  : "scale-100 duration-300 transform"
              } w-full z-20 h-full object-cover  rounded-full`}
              alt=""
            />
          </div>
          <div className="w-[60px] flex justify-center items-center h-[60px] bg-white absolute bottom-12 xl:top-48 right-20 lg:right-0  xl:right-10 shadow rounded-full">
            <h1 className=" bg-accent w-full h-full rounded-full flex justify-center items-center  text-white">
              {data.price}$
            </h1>
          </div>
        </div>
        <div
          // style={{ boxShadow: "2px 2px 5px black" }}
          className={`w-[260px] ${
            onfocus ? "h-[380px] xl:h-[450px]" : "xl:h-[350px] h-[300px]"
          } duration-500 bg-white transform  border-2 z-0 rounded-br-[20px]  rounded-tl-[20px] `}
        >
          {/* <h1 className="h-[50px] "></h1> */}
          <div className="h-[48px] mb-12 lg:mb-0 xl:h-[120px] gap-x-3 justify-center items-center flex w-full "></div>
          <h1 className="mt-[30px] text-center text-accent  font-semibold">
            {data.name}
          </h1>
          <h1 className="mx-[30px] transform duration-300 mb-5 text-start mt-4 ">
            {showDetails
              ? data.description
              : `${data.description.slice(0, 90)}`}

            {!showDetails && <span className="text-accent">...</span>}
          </h1>
        </div>
      </div>
      <div className="w-full z-20 h-10">
        <button
          onClick={() => {
            setInitialPrice(data.price);
            setFoodData(data);

            document.getElementById("my_modal_1").showModal();
          }}
          className="w-[131px] bg-accent h-[45px] rounded-[3rem] -bottom-3  text-white mt-5 absolute mx-auto right-5"
        >
          Order Now
        </button>
      </div>
      {/* orderNowModal */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
    </div>
  );
};

export default SingleCard2;
