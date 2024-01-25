import chef from "../../../assets/bannerAndNavbarElements/MoreThanService/chef.svg";
import img1 from "../../../assets/bannerAndNavbarElements/MoreThanService/mobile.svg";
import img2 from "../../../assets/bannerAndNavbarElements/MoreThanService/image 17.svg";

import img3 from "../../..//assets/bannerAndNavbarElements/MoreThanService/image 18.svg";
const MoreThanService = () => {
  return (
    <div className="mt-[84px]">
      <div className="grid lg:grid-cols-2">
        <img src={chef} className="w-[80%] mx-auto" alt="" />
        <div className=" flex flex-col justify-center">
          <h1 className="text-[35px] ms-6 lg:ms-0 lg:text-[40px] xl:text-[48px] lg:w-[452px] font-bold">
            We are <span className="text-accent">more</span> than{" "}
            <span className="text-secondary">multiple </span>
            service
          </h1>
          <p className="lg:mt-5 mt-7 ms-6 lg:ms-0 text-sm me-5 lg:text-[18px] lg:me-10 xl:me-32">
            This is a type of resturent which typically serves food and drink,
            in addition to light refreshments such as baked goods or snacks. The
            term comes frome the rench word meaning food
          </p>
          <div className="grid lg:ms-0 ms-5 mt-8 lg:grid-cols-2 xl:text-xl w-[85%] text-black gap-y-8  font-semibold lg:mt-12">
            <h1 className="flex gap-x-1">
              <img src={img1} alt="" />
              Online Order
            </h1>
            <h1 className="flex gap-x-1">
              <img src={img2} alt="" />
              24/7 Service
            </h1>
            <h1 className="flex items-center gap-x-1">
              <img src={img3} alt="" className="w-[26px]" />
              Pre-Reservation
            </h1>
            <h1 className="flex gap-x-1 text-nowrap">
              <img src={img3} alt="" />
              Organized Food hut Place
            </h1>
            <h1 className="flex gap-x-1">
              <img src={img3} alt="" />
              Super Chef
            </h1>
            <h1 className="flex gap-x-1">
              <img src={img3} alt="" />
              Clean Kitchen
            </h1>
          </div>
          <button className="bg-accent text-base-200 text-xl h-[60px] rounded-[3rem] mt-10 w-[170px] lg:ms-0 ms-5">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreThanService;
