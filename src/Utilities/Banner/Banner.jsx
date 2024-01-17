import banner from "../../assets/bannerAndNavbarElements/Banner_image.svg";
const Banner = ({ secondTitle }) => {
  return (
    <div className="lg:pt-20 -mt-5 lg:mt-0">
      <div
        style={{
          backgroundImage: `url(${banner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="mt-5 pt-10 lg:pt-0 h-[250px] lg:h-[200px] bg-white  lg:mx-10 rounded-2xl"
      >
        <h1 className="pt-14 ps-8 lg:ps-14 text-accent flex items-center ">
          👑 Deal of the weekend
        </h1>
        <h1 className="text-[35px] font-Poppins font-bold text-accent ps-20">
          {secondTitle}
        </h1>
        <h1 className="pt-1 ps-14 font-semibold text-accent">
          Get free <span className="text-secondary text-xl">delivery</span> on
          every weekend
        </h1>
      </div>
    </div>
  );
};

export default Banner;
