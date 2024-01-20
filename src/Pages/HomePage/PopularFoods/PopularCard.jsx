import { TbShoppingBag } from "react-icons/tb";
import { useState } from "react";
import Lottie from "lottie-react";
import cardAnimation from "../../../assets/animation/cardLoading.json";
import "aos/dist/aos.css";
import Aos from "aos";
Aos.init();
const PopularCard = ({ datas, setFoodData, setInitialPrice }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [imgloaded, setImgLoaded] = useState(false);
  const [onfocus, setOnfocus] = useState(false);
  return (
    <div data-aos="fade-down" className="">
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
        onMouseOver={() => {
          setOnfocus(true);
        }}
        className="cursor-pointer relative flex flex-col items-center   "
      >
        <div className="xl:w-[190px] w-[190px]  absolute -right-8 flex justify-end  items-start lg:w-[195px] -top-5  h-[163px]">
          {!imgloaded && (
            <Lottie
              style={{ boxShadow: "0px 0px 5px #F54748" }}
              className="h-[140px] bg-white 
               z-50 w-[140px] mx-auto object-cover absolute rounded-full"
              animationData={cardAnimation}
            />
          )}
          <img
            src={datas?.imgUrl}
            onLoad={() => setImgLoaded(true)}
            style={{ boxShadow: "0px 0px 5px #F54748" }}
            className={`${
              onfocus && "scale-105 transform duration-500"
            } w-[140px] hover:scale-105 mx-auto transform duration-500 z-30 h-[140px] object-cover  rounded-full ${
              imgloaded ? "block" : "hidden"
            }`}
            alt=""
          />
        </div>
        <div
          className={`${
            onfocus
              ? "bg-accent text-white transform duration-300"
              : "bg-white text-accent transform duration-300"
          } w-[284px] border-opacity-25 h-[200px]  border-2 border-accent  rounded-[20px] `}
        >
          {/* <h1 className="h-[120px] "></h1> */}

          <h1 className="mt-[45px] text-start mx-5   font-semibold">
            {datas.name}
          </h1>
          <h1 className="mx-5 h-[40px] text-sm text-start mt-4">
            {datas.orders} People Ordered
          </h1>

          <div className="mx-5 flex flex-col items-start mb-3">
            <h1 className="font-semibold ">$ {datas.price}</h1>
            <div
              className={`w-[30px] mt-1 rounded-full  flex items-center justify-center h-[30px] transform duration-500 ${
                onfocus ? "text-accent bg-white" : "text-white bg-accent"
              }`}
            >
              <TbShoppingBag
                onClick={() => {
                  setInitialPrice(datas.price);
                  setFoodData(datas);

                  document.getElementById("my_modal_5").showModal();
                }}
                className="text-xl "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
