import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/bannerAndNavbarElements/Logo.svg";
import { HiMenuAlt1 } from "react-icons/hi";
import useAuth from "../../hooks/useAuth";
import { FaFire, FaRegCircleQuestion } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";
import {
  PiBowlFoodBold,
  PiBowlFoodDuotone,
  PiShoppingCartSimpleBold,
  PiShoppingCartSimpleDuotone,
  PiStarDuotone,
} from "react-icons/pi";
import { AiTwotoneFire, AiTwotoneQuestionCircle } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import { CgProfile } from "react-icons/cg";
import gradientImg from "../../assets/ErrorPageElement/gardientBg.png";
import profileImg from "../../assets/cartPicture/PersonMale.svg";
import Order from "./Route/Order";
import { SiBlockchaindotcom } from "react-icons/si";
import { useState } from "react";
const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const [offer, setOffer] = useState(false);
  const [whyFoodHut, setwhyFoodHut] = useState(false);
  const [OurMenu, setOurMenu] = useState(false);
  const [Popular, setPopular] = useState(false);
  const [Cart, setCart] = useState(false);
  const [Home, setHome] = useState(true);
  const { user, LogOut, setUser } = useAuth();
  const handleLogOut = () => {
    LogOut()
      .then(() => {
        setUser(null);
        toast.success("user signed out");
      })
      .catch((err) => toast.error(err.message));
  };
  const [cartCheck, setcartCheck] = useState(false);
  const confirmLogout = () => {
    toast((t) => (
      <span className="p-3 ">
        <h1 className="text-accent text-center">Are you sure?</h1>
        <div className="flex justify-between gap-x-2 mt-3">
          <button
            onClick={() => {
              handleLogOut();
              toast.dismiss(t.id);
            }}
            className="px-5 py-2 bg-accent text-white rounded-[3rem]"
          >
            yes
          </button>
          <button
            className="text-accent border border-accent rounded-[.5rem] px-4 py-2"
            onClick={() => toast.dismiss(t.id)}
          >
            cancel
          </button>
        </div>
      </span>
    ));
  };
  return (
    <div className="lg:py-3 lg:pt-6 w-full  z-50 top-0 flex items-center   fixed">
      <div className="flex h-[50px] items-center justify-between w-full py-3">
        <div className="h-full flex mt-4 ms-3 items-center lg:ms-10 lg:mt-1 xl:mt-2">
          <img className="lg:w-[121px] w-[90px]" src={logo} alt="" />
        </div>
        <div
          onClick={() => setShowNav(!showNav)}
          className="text-3xl lg:hidden mt-4 text-accent me-3"
        >
          <HiMenuAlt1 />
        </div>
        <div className="lg:flex hidden items-center">
          <div className="lg:flex xl:text-[18px] gap-x-5 xl:gap-x-[50px]  me-10 xl:me-[80px] text-black">
            <Link
              to={"/"}
              onClick={() => {
                setOffer(false);
                setCart(false);
                setOurMenu(false);
                setPopular(false);
                setShowNav(!showNav);
                setwhyFoodHut(false);
                setHome(true);
              }}
              className={`${
                window.location.pathname === "/" && Home ? "activeC" : ""
              } text-sm flex items-center gap-x-1 `}
            >
              Home <SiBlockchaindotcom />
            </Link>
            {window.location.pathname !== "/" &&
            window.location.pathname !== "/TodaysOffer" ? (
              <Link to={"/"}>
                <a
                  href="#Special"
                  onClick={() => {
                    setTimeout(() => {
                      document.getElementById("click1").click();
                    }, 2000);
                    setOffer(true);
                    setCart(false);
                    setOurMenu(false);
                    setPopular(false);
                    setShowNav(!showNav);
                    setwhyFoodHut(false);
                  }}
                  className={`${
                    offer || window.location.pathname === "/TodaysOffer"
                      ? "activeC"
                      : ""
                  } text-sm flex items-center gap-x-1 `}
                >
                  Today&apos;s Offer <FaFire />
                </a>
              </Link>
            ) : (
              <a
                href="#Special"
                id="click1"
                onClick={() => {
                  setOffer(true);
                  setCart(false);
                  setOurMenu(false);
                  setPopular(false);
                  setShowNav(!showNav);
                  setwhyFoodHut(false);
                }}
                className={`${
                  offer || window.location.pathname === "/TodaysOffer"
                    ? "activeC"
                    : ""
                } text-sm flex items-center gap-x-1 `}
              >
                Today&apos;sOffer <FaFire />
              </a>
            )}
            {/* <Link
              onClick={() => {
                setOffer(false);
                setCart(false);
                setOurMenu(false);
                setPopular(false);
                setShowNav(!showNav);
                setwhyFoodHut(true);
              }}
              className={`${
                whyFoodHut ? "activeC" : ""
              } text-sm flex items-center gap-x-1 `}
            >
              Why FoodHut <FaRegCircleQuestion />
            </Link> */}
            {window.location.pathname !== "/" &&
            window.location.pathname !== "/Menu" ? (
              <Link to={"/"}>
                <a
                  href="#Menu"
                  onClick={() => {
                    setTimeout(() => {
                      document.getElementById("click2").click();
                    }, 2000);
                    setOffer(false);
                    setCart(false);
                    setOurMenu(true);
                    setPopular(false);
                    setShowNav(false);
                    setwhyFoodHut(false);
                  }}
                  className={`${
                    OurMenu || window.location.pathname === "/Menu"
                      ? "activeC"
                      : ""
                  } text-sm flex items-center gap-x-1 `}
                >
                  Our Menu <PiBowlFoodBold />
                </a>
              </Link>
            ) : (
              <a
                href="#Menu"
                id="click2"
                onClick={() => {
                  setOffer(false);
                  setCart(false);
                  setOurMenu(true);
                  setPopular(false);
                  setShowNav(false);
                  setwhyFoodHut(false);
                }}
                className={`${
                  OurMenu || window.location.pathname === "/Menu"
                    ? "activeC"
                    : ""
                } text-sm flex items-center gap-x-1 `}
              >
                Our Menu <PiBowlFoodBold />
              </a>
            )}

            {/* <Link
              onClick={() => {
                setOffer(false);
                setCart(false);
                setOurMenu(false);
                setPopular(true);
                setShowNav(!showNav);
                setwhyFoodHut(false);
              }}
              className={`${
                Popular ? "activeC" : ""
              } text-sm flex items-center gap-x-1 `}
            >
              Our Popular Food <TiStarFullOutline />
            </Link> */}
            <div
              onClick={() => {
                setOffer(false);
                setCart(true);
                setOurMenu(false);
                setPopular(false);
                setShowNav(!showNav);
                setwhyFoodHut(false);
                setcartCheck(!cartCheck);
              }}
              className={`${
                Cart ? "activeC" : ""
              } text-sm flex items-center gap-x-1 `}
            >
              Cart <PiShoppingCartSimpleBold />
            </div>
          </div>
          {user ? (
            <>
              <button
                onClick={confirmLogout}
                type="button"
                className="border-accent border xl:w-[145px] xl:h-[56px] text-center text-base-200 w-[80px] h-[40px]  me-[40px] bg-transparent flex items-center justify-center rounded-3xl "
              >
                <IoLogOutOutline className="text-xl text-accent" />
              </button>
            </>
          ) : (
            <>
              <Link
                to={"/SignIn"}
                className="text-accent xl:w-[145px] xl:h-[56px] text-center  w-[100px] h-[40px]  me-[40px] bg-transparent border border-accent flex items-center justify-center rounded-3xl "
              >
                Sign in
              </Link>
            </>
          )}
        </div>
      </div>
      <div></div>
      <div
        style={{
          backgroundImage: `url(${gradientImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className={`${
          cartCheck
            ? "left-3 mobileL:left-[34px] transform duration-500"
            : "left-[-120%] transform duration-500"
        } mt-20 border-opacity-35 border-accent border-2 rounded-[24px] w-[350px]  bg-white  fixed lg:top-4 top-0`}
      >
        <div className="m-5 flex justify-center items-center gap-x-2">
          <img
            className="border-2 rounded-full border-accent border-opacity-30"
            src={profileImg}
            alt=""
          />
          <div>
            <h1 className="text-sm text-opacity-80 font-semibold text-accent font-Poppins">
              {user?.name}
            </h1>
            <h1 className="text-xs font-Poppins">{user?.email}</h1>
          </div>
        </div>
        <div>
          <Order />
        </div>
        <button
          onClick={() => setcartCheck(!cartCheck)}
          className="rotate-45 rounded-full p-2 absolute bottom-5 right-5 bg-opacity-55 text-white bg-accent text-xl"
        >
          +
        </button>
      </div>

      {/* sidenav */}
      <div
        style={{
          backgroundImage: `url(${gradientImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className={` lg:hidden rounded-2xl border-opacity-35 fixed top-16 ${
          showNav ? "left-4 opacity-100" : "opacity-0 -left-[120%] "
        } border-2 transform duration-300 border-accent w-[215px] bg-white`}
      >
        {" "}
        <div className="flex flex-col m-5 gap-y-2">
          <Link
            to={"/"}
            onClick={() => {
              setOffer(false);
              setCart(false);
              setOurMenu(false);
              setPopular(false);
              setShowNav(!showNav);
              setwhyFoodHut(false);
              setHome(true);
            }}
            className={`${
              window.location.pathname === "/" && Home ? "activeC" : ""
            } text-sm flex items-center gap-x-1 `}
          >
            Home <SiBlockchaindotcom />
          </Link>

          {window.location.pathname !== "/" &&
          window.location.pathname !== "/TodaysOffer" ? (
            <Link to={"/"}>
              <a
                href="#Special"
                onClick={() => {
                  setTimeout(() => {
                    document.getElementById("click1").click();
                  }, 2000);
                  setOffer(true);
                  setCart(false);
                  setOurMenu(false);
                  setPopular(false);
                  setShowNav(false);
                  setwhyFoodHut(false);
                }}
                className={`${
                  offer || window.location.pathname === "/TodaysOffer"
                    ? "activeC"
                    : ""
                } text-sm flex items-center gap-x-1 `}
              >
                Today&apos;s Offer <FaFire />
              </a>
            </Link>
          ) : (
            <a
              href="#Special"
              id="click1"
              onClick={() => {
                setOffer(true);
                setCart(false);
                setOurMenu(false);
                setPopular(false);
                setShowNav(false);
                setwhyFoodHut(false);
              }}
              className={`${
                offer || window.location.pathname === "/TodaysOffer"
                  ? "activeC"
                  : ""
              } text-sm flex items-center gap-x-1 `}
            >
              Today&apos;sOffer <FaFire />
            </a>
          )}
          {/* !&&
            
           */}
          {window.location.pathname !== "/" &&
          window.location.pathname !== "/Menu" ? (
            <Link to={"/"}>
              <a
                href="#Menu"
                onClick={() => {
                  setTimeout(() => {
                    document.getElementById("click2").click();
                  }, 2000);
                  setOffer(false);
                  setCart(false);
                  setOurMenu(true);
                  setPopular(false);
                  setShowNav(false);
                  setwhyFoodHut(false);
                }}
                className={`${
                  OurMenu || window.location.pathname === "/Menu"
                    ? "activeC"
                    : ""
                } text-sm flex items-center gap-x-1 `}
              >
                Our Menu <PiBowlFoodBold />
              </a>
            </Link>
          ) : (
            <a
              href="#Menu"
              id="click2"
              onClick={() => {
                setOffer(false);
                setCart(false);
                setOurMenu(true);
                setPopular(false);
                setShowNav(false);
                setwhyFoodHut(false);
              }}
              className={`${
                OurMenu || window.location.pathname === "/Menu" ? "activeC" : ""
              } text-sm flex items-center gap-x-1 `}
            >
              Our Menu <PiBowlFoodBold />
            </a>
          )}

          <Link
            onClick={() => {
              setOffer(false);
              setCart(false);
              setOurMenu(false);
              setPopular(true);
              setShowNav(!showNav);
              setwhyFoodHut(false);
            }}
            className={`${
              Popular ? "activeC" : ""
            } text-sm flex items-center gap-x-1 `}
          >
            Our Popular Food <TiStarFullOutline />
          </Link>
          <div
            onClick={() => {
              setOffer(false);
              setCart(true);
              setOurMenu(false);
              setPopular(false);
              setShowNav(!showNav);
              setwhyFoodHut(false);
              setcartCheck(!cartCheck);
            }}
            className={`${
              Cart ? "activeC" : ""
            } text-sm flex items-center gap-x-1 `}
          >
            Cart <PiShoppingCartSimpleBold />
          </div>
          {user ? (
            <>
              <button
                onClick={confirmLogout}
                type="button"
                className="border-accent border xl:w-[145px] xl:h-[56px] text-center text-base-200 w-[80px] h-[40px]  me-[40px] bg-transparent flex items-center justify-center rounded-3xl "
              >
                <IoLogOutOutline className="text-xl text-accent" />
              </button>
            </>
          ) : (
            <>
              <Link
                to={"/SignIn"}
                className="text-accent xl:w-[145px] xl:h-[56px] text-center  w-[100px] h-[40px]  me-[40px] bg-transparent border border-accent flex items-center justify-center rounded-3xl "
              >
                Sign in
              </Link>
            </>
          )}
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Nav;
