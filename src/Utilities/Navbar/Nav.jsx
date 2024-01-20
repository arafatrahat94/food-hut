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
import { useEffect, useState } from "react";
import { ServerUrl } from "../Server/Url";
import MyOrders from "./Route/MyOrders";
import { IoIosArrowForward } from "react-icons/io";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/animation/componentLoader.json";
const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const [offer, setOffer] = useState(false);
  const [whyFoodHut, setwhyFoodHut] = useState(false);
  const [OurMenu, setOurMenu] = useState(false);
  const [Popular, setPopular] = useState(false);
  const [Cart, setCart] = useState(false);
  const [Home, setHome] = useState(true);
  const { user, LogOut, setUser } = useAuth();

  const [Orders, setOrders] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [OrdersCount, setOrdersCount] = useState(0);
  //
  const [loadingCheck, setLoadingCheck] = useState(true);
  const totalPage = Math.ceil(OrdersCount / itemsPerPage);
  const pageNumber = [...Array(totalPage).keys()];
  const [pageNum, setPageNum] = useState(0);
  const fetching = (number) => {
    setOrders([]);
    fetch(
      ServerUrl +
        `Orders?email=${user?.email}&page=${number}&limit=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setLoadingCheck(false);
        }, 2000);
        console.log(data.data);
        setOrdersCount(data.count);
        setOrders(data.data);
      });
  };
  useEffect(() => {
    setOrders([]);
    fetch(
      ServerUrl + `Orders?email=${user?.email}&page=${0}&limit=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setLoadingCheck(false);
        }, 2000);
        console.log(data.data);
        setOrdersCount(data.count);
        setOrders(data.data);
      });
    if (window.screen.width <= 425) {
      setItemsPerPage(4);
    } else if (426 <= window.screen.width && window.location.pathname === "/") {
      setItemsPerPage(4);
    }
  }, []);

  const handleLogOut = (t) => {
    LogOut()
      .then(() => {
        setUser(null);
        toast.success("user signed out", {
          id: "signedOut",
        });
        setShowNav(false);
        setTimeout(() => {
          toast.dismiss();
        }, 2000);
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
              handleLogOut(t);
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
          <div className="lg:flex xl:text-[18px] gap-x-5 xl:gap-x-[50px]  me-10 cursor-pointer xl:me-[80px] text-black">
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
            {window.location.pathname !== "/" &&
            window.location.pathname !== "/Popular" ? (
              <Link to={"/"}>
                <a
                  href="#Popular"
                  onClick={() => {
                    setTimeout(() => {
                      document.getElementById("click3").click();
                    }, 2000);
                    setOffer(false);
                    setCart(false);
                    setOurMenu(false);
                    setPopular(true);
                    setShowNav(false);
                    setwhyFoodHut(false);
                  }}
                  className={`${
                    Popular || window.location.pathname === "/Popular"
                      ? "activeC"
                      : ""
                  } text-sm flex items-center gap-x-1 `}
                >
                  OurPopularFood <TiStarFullOutline />
                </a>
              </Link>
            ) : (
              <a
                href="#Popular"
                id="click3"
                onClick={() => {
                  setOffer(false);
                  setCart(false);
                  setOurMenu(false);
                  setPopular(true);
                  setShowNav(false);
                  setwhyFoodHut(false);
                }}
                className={`${
                  Popular || window.location.pathname === "/Popular"
                    ? "activeC"
                    : ""
                } text-sm flex items-center gap-x-1 `}
              >
                OurPopularFood <TiStarFullOutline />
              </a>
            )}

            <div
              onClick={() => {
                setOffer(false);
                setCart(!Cart);
                setOurMenu(false);
                setPopular(false);
                setShowNav(false);
                setwhyFoodHut(false);
                setcartCheck(!cartCheck);
                fetching(0);
              }}
              className={`${
                Cart ? "activeC" : ""
              } text-sm flex items-center gap-x-1 `}
            >
              MyOrders <PiShoppingCartSimpleBold />
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
        <h1 className="ms-[24px] font-Poppins font-semibold text-accent">
          My Orders
        </h1>
        <hr className="mt-4 w-[90%] mx-auto border border-accent" />
        {user ? (
          <>
            {loadingCheck ? (
              <div className="h-[370px] lg:h-[500px] w-full flex items-center justify-center">
                <Lottie
                  className="w-[60%] lg:w-[30%]"
                  animationData={loadingAnimation}
                />
              </div>
            ) : (
              <>
                {Orders.length > 0 ? (
                  <>
                    {Orders.map((x) => (
                      <>
                        <MyOrders data={x} />
                      </>
                    ))}
                  </>
                ) : (
                  <>
                    <div className="text-center my-10 text-accent">
                      No Orders Found
                    </div>
                  </>
                )}
              </>
            )}
          </>
        ) : (
          <>
            <div className="text-center my-10 text-accent">
              Please{" "}
              <Link to={"/SignIn"} className="link btn-link">
                Sign in
              </Link>{" "}
              first
            </div>
          </>
        )}

        {user && pageNumber.length > 0 && (
          <div className="flex h-[50px] items-center my-5 ms-5 transform duration-300 gap-x-[4px]">
            <div className={`w-[30px]  h-[30px]  `}>
              {pageNum > 0 && (
                <div
                  onClick={() => {
                    if (pageNum === 0) {
                      return;
                    }
                    if (window.screen.width <= 425) {
                      window.scrollTo(0, 40);
                    } else {
                      window.scrollTo(0, 40);
                    }
                    setLoadingCheck(true);
                    setPageNum(pageNum - 1);
                    fetching(pageNum - 1);
                  }}
                  className="animate-pulse"
                >
                  <button
                    className={`w-[30px]  h-[30px] border  text-accent hover:scale-100 border-accent transform duration-500  flex justify-center items-center text-center ${
                      pageNum > 0
                        ? "opacity-100 transform duration-300"
                        : "opacity-0 transform duration-300"
                    } rounded-xl`}
                  >
                    <IoIosArrowForward className="text-center rotate-180" />
                  </button>
                </div>
              )}
            </div>
            {pageNumber.map((number, i) => (
              <button
                className={` border  ${
                  pageNum === i
                    ? "text-white w-[30px]  h-[40px] transform duration-500 bg-accent  border-accent   rounded-3xl"
                    : "text-accent border-2 rounded-full w-[12px] text-opacity-0 h-[12px] border-accent transform duration-500"
                } `}
                onClick={() => {
                  setPageNum(number);
                  setLoadingCheck(true);
                  if (window.screen.width <= 425) {
                    window.scrollTo(0, 40);
                  } else {
                    window.scrollTo(0, 40);
                  }

                  fetching(number);
                }}
                key={number}
              >
                {number}
              </button>
            ))}

            {pageNum + 1 !== totalPage && (
              <div
                onClick={() => {
                  if (pageNum + 1 === totalPage) {
                    return;
                  }
                  setLoadingCheck(true);
                  setPageNum(pageNum + 1);
                  if (window.screen.width <= 425) {
                    window.scrollTo(0, 40);
                  } else {
                    window.scrollTo(0, 40);
                  }

                  fetching(pageNum + 1);
                }}
                className="animate-pulse"
              >
                <button
                  className={`w-[30px]  h-[30px] border  text-accent hover:scale-100 border-accent transform duration-500  flex justify-center items-center text-center  rounded-xl`}
                >
                  <IoIosArrowForward className="text-center" />
                </button>
              </div>
            )}
          </div>
        )}
        <button
          onClick={() => {
            setcartCheck(false);
            setCart(false);
            setPageNum(0);
            fetching(0);
          }}
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
        <div className="flex cursor-pointer flex-col m-5 gap-y-4">
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
            }  flex items-center gap-x-1 `}
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
                }  flex items-center gap-x-1 `}
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
              }  flex items-center gap-x-1 `}
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
                }  flex items-center gap-x-1 `}
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
              }  flex items-center gap-x-1 `}
            >
              Our Menu <PiBowlFoodBold />
            </a>
          )}

          {window.location.pathname !== "/" &&
          window.location.pathname !== "/Popular" ? (
            <Link to={"/"}>
              <a
                href="#Popular"
                onClick={() => {
                  setTimeout(() => {
                    document.getElementById("click3").click();
                  }, 2000);
                  setOffer(false);
                  setCart(false);
                  setOurMenu(false);
                  setPopular(true);
                  setShowNav(false);
                  setwhyFoodHut(false);
                }}
                className={`${
                  Popular || window.location.pathname === "/Popular"
                    ? "activeC"
                    : ""
                }  flex items-center gap-x-1 `}
              >
                OurPopularFood <TiStarFullOutline />
              </a>
            </Link>
          ) : (
            <a
              href="#Popular"
              id="click3"
              onClick={() => {
                setOffer(false);
                setCart(false);
                setOurMenu(false);
                setPopular(true);
                setShowNav(false);
                setwhyFoodHut(false);
              }}
              className={`${
                Popular || window.location.pathname === "/Popular"
                  ? "activeC"
                  : ""
              }  flex items-center gap-x-1 `}
            >
              OurPopularFood <TiStarFullOutline />
            </a>
          )}
          <div
            onClick={() => {
              setOffer(false);
              setCart(!Cart);
              setOurMenu(false);
              setPopular(false);
              setShowNav(!showNav);
              setwhyFoodHut(false);
              setcartCheck(!cartCheck);
              fetching(0);
            }}
            className={`${Cart ? "activeC" : ""}  flex items-center gap-x-1 `}
          >
            MyOrders <PiShoppingCartSimpleBold />
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
          <button
            onClick={() => {
              setShowNav(false);
            }}
            className="rotate-45 rounded-full p-2 absolute bottom-5 right-5 bg-opacity-55 text-white bg-accent text-xl"
          >
            +
          </button>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Nav;
