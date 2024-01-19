import { TbShoppingBag } from "react-icons/tb";
import { useState } from "react";
import Lottie from "lottie-react";
import cardAnimation from "../../../assets/animation/cardLoading.json";
const SingleCard = ({ datas, setFoodData, setInitialPrice }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [imgloaded, setImgLoaded] = useState(false);
  const [onfocus, setOnfocus] = useState(false);
  return (
    <div>
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
        <div className="xl:w-[253px] w-[253px]  relative flex justify-center xl:-mb-24 -mb-24 items-center lg:w-[195px] h-[253px]">
          {!imgloaded && (
            <Lottie
              className="h-[160px] bg-white border-2 border-accent border-opacity-30 z-50 w-[160px] object-cover absolute rounded-full"
              animationData={cardAnimation}
            />
          )}
          <img
            src={datas?.imgUrl}
            onLoad={() => setImgLoaded(true)}
            style={{ boxShadow: "0px 0px 5px #F54748" }}
            className={`${
              onfocus && "scale-105 transform duration-500"
            } w-[160px] hover:scale-105 mx-auto transform duration-500 z-30 h-[160px] object-cover  rounded-full`}
            alt=""
          />
        </div>
        <div
          className={`${
            onfocus
              ? "bg-accent text-white transform duration-300"
              : "bg-white text-accent transform duration-300"
          } w-[251px] border-opacity-25 h-[242px]  border-2 border-accent  rounded-[20px] `}
        >
          {/* <h1 className="h-[120px] "></h1> */}

          <h1 className="mt-[80px] text-start mx-5   font-semibold">
            {datas.name}
          </h1>
          <h1 className="mx-5 text-sm text-start mt-4">
            {showDetails
              ? datas.description
              : `${datas.description.slice(0, 90)}`}

            {!showDetails && <span className="text-accent">...</span>}
          </h1>

          <div className="mx-5 flex justify-between mt-3">
            <h1 className="font-semibold ">$ {datas.price}</h1>
            <TbShoppingBag
              onClick={() => {
                setInitialPrice(datas.price);
                setFoodData(datas);

                document.getElementById("my_modal_3").showModal();
              }}
              className="text-xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
