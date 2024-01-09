import women from "../../../../assets/bannerAndNavbarElements/women.png";
import elipse from "../../../../assets/bannerAndNavbarElements/Ellipse2.png";

import all from "../../../../assets/bannerAndNavbarElements/all.svg";
const GridDIvTwo = () => {
  return (
    <div className="hidden lg:flex  justify-center items-center order-1 lg:order-2 me-[60px]">
      {/* <div className="xl:w-[460px] h-[310px] w-[300px] xl:h-[468px] bg-accent 2xl:left-[140px] rounded-full absolute left-[100px] z-0 bottom-10"></div>
      {/* <img className="absolute top-[42px]" src={elipse} alt="" /> */}
      {/* <img src={all} alt="" /> */}
      <div className="z-10 -mt-10 absolute">
        <img
          className="rounded-b-full xl:-mt-20 xl:w-full lg:w-full"
          src={women}
          alt=""
        />
      </div>
    </div>
  );
};

export default GridDIvTwo;
