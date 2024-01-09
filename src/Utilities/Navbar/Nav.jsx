import { Link } from "react-router-dom";
import logo from "../../assets/bannerAndNavbarElements/Logo.svg";
const Nav = () => {
  return (
    <div className=" w-full z-50 flex items-center fixed top-3">
      <div className="flex h-[50px] justify-between w-full mt-3">
        <div className="h-full flex items-center ms-4 mt-3">
          <img className="w-[121px]" src={logo} alt="" />
        </div>
        <div className="flex items-center">
          <div className="flex xl:text-[18px] gap-x-5 xl:gap-x-[50px] me-10 xl:me-[80px] text-black">
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
