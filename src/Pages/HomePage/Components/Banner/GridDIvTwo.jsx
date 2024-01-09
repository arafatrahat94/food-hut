import women from "../../../../assets/bannerAndNavbarElements/women.png";
import elipse from "../../../../assets/bannerAndNavbarElements/Ellipse2.png";
const GridDIvTwo = () => {
  return (
    <div className=" flex relative justify-center me-[60px]">
      <div className="xl:w-[460px] h-[310px] w-[300px] xl:h-[468px] bg-accent rounded-full absolute left-[100px] z-0 bottom-10"></div>
      <img className="absolute top-[42px]" src={elipse} alt="" />
      <div className="z-10">
        <img
          className="rounded-b-full xl:w-full lg:w-[320px]"
          src={women}
          alt=""
        />
      </div>
    </div>
  );
};

export default GridDIvTwo;
