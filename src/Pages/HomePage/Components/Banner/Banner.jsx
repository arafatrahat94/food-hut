import gradient from "../../../../assets/bannerAndNavbarElements/Rectangle.png";
import elipse from "../../../../assets/bannerAndNavbarElements/Ellipse.svg";

import arrow from "../../../../assets/bannerAndNavbarElements/arrow.svg";
import orrange from "../../../../assets/bannerAndNavbarElements/Orange.svg";
import { IoHeartCircleSharp, IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import GridDivOne from "./GridDivOne";
import GridDIvTwo from "./GridDIvTwo";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${gradient})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-[768px] "
    >
      <img className="absolute top-0 right-0" src={elipse} alt="" />

      <div className=" h-[650px] top-28 relative pt-20 grid grid-cols-2">
        <GridDivOne />
        <GridDIvTwo />
      </div>
    </div>
  );
};

export default Banner;
