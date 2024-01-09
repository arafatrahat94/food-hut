import { Link } from "react-router-dom";
import logo from "../../assets/bannerAndNavbarElements/Logo.svg";
import { HiMenuAlt1 } from "react-icons/hi";
const Nav = () => {
  return (
    <div className="lg:py-3 lg:pt-6 w-full  z-50 top-0 flex items-center fixed  ">
      <div className="flex h-[50px] items-center justify-between w-full py-3">
        <div className="h-full flex mt-4 ms-3 items-center lg:ms-10 lg:mt-1 xl:mt-2">
          <img className="lg:w-[121px] w-[90px]" src={logo} alt="" />
        </div>
        <div className="text-3xl lg:hidden mt-4 text-accent me-3">
          <HiMenuAlt1 />
        </div>
        <div className="lg:flex hidden items-center">
          <div className="lg:flex xl:text-[18px] gap-x-5 xl:gap-x-[50px]  me-10 xl:me-[80px] text-black">
            <Link>Todays Special Offers</Link>
            <Link>Why FoodHut</Link>
            <Link>Our Menu</Link>
            <Link>Our Popluar Food</Link>
          </div>
          <div className="xl:w-[145px] xl:h-[56px] text-center text-base-200 w-[100px] h-[40px]  me-[40px] bg-accent flex items-center justify-center rounded-3xl ">
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
