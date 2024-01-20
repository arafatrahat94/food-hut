import imgs from "../../../assets/bannerAndNavbarElements/Rectanglereverse.svg";
import chef from "../../../assets/AppDownLoad/chef.svg";
const AppDownload = () => {
  return (
    <div className="mt-[84px]">
      <div
        style={{
          backgroundImage: `url(${imgs})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="grid lg:grid-cols-2"
      >
        <div className="lg:order-1 order-2 flex flex-col lg:ms-10 xl:ms-20 justify-center">
          <h1 className="text-[35px] ms-6 lg:ms-0 lg:text-[40px] xl:text-[48px] xl:w-[646px] font-bold">
            It’s Now <span className="text-accent">More Easy</span> to{" "}
            <span className="text-secondary">Order </span> by Our Mobile{" "}
            <span className="text-accent">App</span>
          </h1>
          <p className="lg:mt-5 mt-7 ms-6 lg:ms-0 text-sm me-5 lg:text-[18px] lg:me-10 xl:me-32">
            All you need to do is downlode one of the best delivery apps, make a
            and most companies are opting for mobile app devlopment for food
            delivery
          </p>
          <div className="flex gap-x-3 lg:ms-0 ms-5 mt-8  xl:text-xl w-[85%] text-black gap-y-8  font-semibold lg:mt-12 pb-10">
            <img
              src="../../../assets/AppDownLoad/Mobile app store badge (1).svg"
              alt=""
            />
            <img
              src="../../../assets/AppDownLoad/Mobile app store badge.svg"
              alt=""
            />
          </div>
        </div>
        <img src={chef} className="w-[80%] lg:order-2 order-1 mx-auto" alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
