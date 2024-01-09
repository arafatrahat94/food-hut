import gradient from "../../../../assets/bannerAndNavbarElements/Rectangle.png";
import elipse from "../../../../assets/bannerAndNavbarElements/Ellipse.svg";

import arrow from "../../../../assets/bannerAndNavbarElements/arrow.svg";
import orrange from "../../../../assets/bannerAndNavbarElements/Orange.svg";
import { IoHeartCircleSharp, IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const GridDivOne = () => {
  return (
    <div>
      <img
        src={arrow}
        className="absolute left-[170px] lg:left-[160px] top-5 xl:-top-10 xl:w-[136px] lg:w-[100px]"
        alt=""
      />

      <IoIosArrowDown className="absolute left-[251px] xl:left-[286px] text-accent top-[124px] xl:top-[106px]" />
      <div className="ps-[100px] relative">
        <img
          src={orrange}
          className="absolute w-[216px] right-[-160px] xl:right-[-80px] top-20"
          alt=""
        />
        <h1 className="bg-accent bg-opacity-10 flex items-center w-[159px]  justify-center py-[2px] rounded-3xl gap-x-1">
          <IoHeartCircleSharp className="text-accent text-xl" /> People Trust us
        </h1>
        <h1 className="text-[45px] xl:text-[58px] font-bold mt-5">
          We're <span className="text-accent">Serious</span> For{" "}
          <span className="text-accent">Food</span> &{" "}
          <span className="text-secondary">Delivery</span>.
        </h1>
        <h1 className="xl:text-2xl w-[400px] xl:w-[510px] xl:mt-6 mt-3 text-black">
          Best cooks and best delivery guys all at your service. Hot tasty food
          will reach you in 60 minutes.
        </h1>
        <div className=" h-[50px] xl:h-[60px] rounded-[3rem] border-accent border-2 mt-7 w-[400px] xl:w-[467px] border-opacity-50 items-center flex">
          <input
            type="text"
            placeholder="Serch Food"
            className="m-[2px] focus:outline-none text-accent rounded-[3rem] ps-6 text-xl w-[90%] h-full"
          />
          <button className="p-[6px] me-1 rounded-full flex items-center justify-center  bg-secondary xl:m-[4px]">
            <IoSearch className="xl:text-3xl text-2xl text-white" />
          </button>
        </div>
        <div className="mt-5 xl:mt-10">
          <button className="py-4  font-semibold bg-accent px-7 text-base-200 rounded-[3rem]">
            Download App
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridDivOne;
