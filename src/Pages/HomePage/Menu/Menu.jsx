import Pizza from "../../../assets/bannerAndNavbarElements/menu/Pizza icon.svg";
import fruits from "../../../assets/bannerAndNavbarElements/menu/Fruits.svg";
import snacks from "../../../assets/bannerAndNavbarElements/menu/snacks.svg";
import drinks from "../../../assets/bannerAndNavbarElements/menu/Cokedrinks.svg";
import loadingAnimation from "../../../assets/animation/componentLoader.json";
import { IoArrowForwardCircle } from "react-icons/io5";
import { IoIosArrowDroprightCircle, IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import gradientImg from "../../../assets/ErrorPageElement/gardientBg.png";
import { ServerUrl } from "../../../Utilities/Server/Url";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { HiOutlineCash, HiOutlineCreditCard } from "react-icons/hi";
import { MdCheckCircle } from "react-icons/md";
import { TbBrandPaypal } from "react-icons/tb";
const Menu = () => {
  const [category, setCategory] = useState("pizza");
  const [foods, setFoods] = useState([]);
  const [loadingCheck, setLoadingCheck] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [foodCOunt, setFoodCount] = useState(0);
  //
  const totalPage = Math.ceil(foodCOunt / itemsPerPage);
  const pageNumber = [...Array(totalPage).keys()];
  const [pageNum, setPageNum] = useState(0);
  const [intialPrice, setInitialPrice] = useState(0);
  const [foodData, setFoodData] = useState([]);
  const [CreditCard, setCreditCard] = useState(true);
  const [Paypal, setPaypal] = useState(false);
  const [Cash, setCash] = useState(false);
  const [loding, setLoading] = useState(false);
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [orderId, setOrderId] = useState("");
  const onSubmit = (data) => {
    console.log(data);
    const newData = {
      userEmail: user?.email,
      userName: user?.name,
      food: foodData,
      totalCountOfFood: data.totalMeal,
      orderNote: data.orderNote,
      deliveryAddress: data.deliveryAddress,
      totalAmmount: `${
        intialPrice !== undefined && (intialPrice + 1).toFixed(2)
      }`,
    };
    if (CreditCard === true && !Paypal && !Cash) {
      const newData2 = {
        ...newData,
        creditCardHolderName: data.creditCardHolderName,
        creditCardNumber: data.creditCardNumber,
        paymentMethod: "CreditCard",
        paid: "paid",
      };
      setLoading(true);
      fetch(ServerUrl + `OrderComplete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData2),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          console.log(data);

          setOrderId(data.insertedId);
          document.getElementById("my_modal_3").close();
          document.getElementById("my_modal_4").showModal();
          setTimeout(() => {
            document.getElementById("my_modal_4").close();
            setOrderId("");
          }, 5000);
        });
    }
    if (Paypal && !CreditCard && !Cash) {
      const newData2 = {
        ...newData,
        payPalEMail: data.payPalEMail,
        payPalName: data.payPalName,
        paymentMethod: "Paypal",
        paid: "paid",
      };
      setLoading(true);
      fetch(ServerUrl + `OrderComplete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData2),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          console.log(data);

          setOrderId(data.insertedId);
          document.getElementById("my_modal_3").close();
          document.getElementById("my_modal_4").showModal();
          setTimeout(() => {
            document.getElementById("my_modal_4").close();
            setOrderId("");
          }, 5000);
        });
    }
    if (!Paypal && !CreditCard && Cash) {
      const newData2 = {
        ...newData,
        paymentMethod: "Cash",
        paid: "not paid",
      };
      setLoading(true);
      fetch(ServerUrl + `OrderComplete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData2),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          console.log(data);

          setCash(false);
          setCreditCard(true);
          setPaypal(false);
          document.getElementById("my_modal_3").close();

          setOrderId(data.insertedId);
          document.getElementById("my_modal_4").showModal();
          setTimeout(() => {
            document.getElementById("my_modal_4").close();
            setOrderId("");
          }, 5000);
        });
    }
    reset();
  };
  const fetching = (categorys) => {
    if (
      window.location.pathname === "/" &&
      window.location.pathname !== "/Menu"
    ) {
      fetch(ServerUrl + `Foods?category=${categorys}`)
        .then((res) => res.json())
        .then((data) => {
          setFoods(data);
          setLoadingCheck(false);
          console.log(data);
        });
    }
    if (window.location.pathname === "/Menu") {
      setPageNum(0);
      fetch(
        ServerUrl +
          `FoodsPagination?category=${categorys}&page=${0}&limit=${itemsPerPage}`
      )
        .then((res) => res.json())
        .then((data) => {
          setTimeout(() => {
            setLoadingCheck(false);
          }, 2000);

          setFoodCount(data.count);
          setFoods(data.data);
        });
    }
    if (window.screen.width <= 425) {
      setItemsPerPage(4);
      return;
    }
    if (768 > window.screen.width <= 1024 && window.location.pathname === "/") {
      setItemsPerPage(6);
    }
    if (1025 <= window.screen.width && window.location.pathname === "/") {
      setItemsPerPage(8);
    }
  };
  useEffect(() => {
    fetching("pizza");
  }, []);
  const [showMore, setShowMore] = useState(false);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  useEffect(() => {
    if (window.screen.width <= 425 && window.location.pathname === "/") {
      setFrom(0);
      setTo(3);
      setShowMore(true);
      return;
    }
    if (768 > window.screen.width <= 1024 && window.location.pathname === "/") {
      setFrom(0);
      setShowMore(true);
      setTo(6);
    }
    if (1025 <= window.screen.width && window.location.pathname === "/") {
      setFrom(0);
      setTo(8);
      setShowMore(true);
    }
  }, []);
  console.log(totalPage);
  console.log(pageNum);
  return (
    <div
      id="Menu"
      className={`${window.location.pathname === "/" && "my-[120px]"} mx-4`}
    >
      {window.location.pathname === "/" && (
        <h1
          style={{ lineHeight: "normal" }}
          className="md:text-[38px] xl:text-[48px] w-[80%] mx-auto lg:w-[553px] xl:w-[703px] text-3xl font-semibold text-center mt-5 mb-[40px]"
        >
          <span className="text-accent">Menu</span> That{" "}
          <span className="text-secondary">Always</span> Make You Fall In{" "}
          <span className="text-accent">Love</span>
        </h1>
      )}
      <div className=" overflow-scroll mx-auto lg:w-[70%] w-full flex lg:gap-x-4 lg:justify-center containerWithoutScrollBar">
        <div
          onClick={() => {
            setCategory("pizza");
            setFoods([]);
            setLoadingCheck(true);
            fetching("pizza");
          }}
          className={`${
            category === "pizza"
              ? "bg-accent text-white bg-opacity-80"
              : "border border-accent bg-accent bg-opacity-5 text-accent"
          } cursor-pointer flex-shrink-0 rounded-3xl h-[180px] w-[90px] transform duration-300 ms-1 lg:w-[112px] lg:h-[236px]`}
        >
          <img className="w-[64px] mx-auto mt-5" src={Pizza} alt="" />
          <h1 className="text-center my-3 lg:my-6  font-bold ">Pizza</h1>
          <hr
            className={`w-[60%] ${
              category === "pizza" ? " border-white  " : " border-accent "
            }   mx-auto border bg-transparent`}
          />
          <IoIosArrowDroprightCircle
            className={`${
              category === "pizza" ? " text-white  " : " text-accent "
            }   text-2xl mt-2 lg:mt-5 mx-auto`}
          />
        </div>
        <div
          onClick={() => {
            setCategory("fruits");
            setFoods([]);
            setLoadingCheck(true);
            fetching("fruits");
          }}
          className={`${
            category === "fruits"
              ? "bg-accent text-white bg-opacity-80"
              : "border border-accent bg-accent bg-opacity-5 text-accent"
          } cursor-pointer transform duration-300 flex-shrink-0 rounded-3xl h-[180px] w-[90px] ms-1 lg:w-[112px] lg:h-[236px]`}
        >
          <img className="w-[64px] mx-auto mt-5" src={fruits} alt="" />
          <h1 className="text-center my-3 lg:my-6  font-bold ">Fruits</h1>
          <hr
            className={`w-[60%] ${
              category === "fruits" ? " border-white  " : " border-accent "
            }   mx-auto border bg-transparent`}
          />
          <IoIosArrowDroprightCircle
            className={`${
              category === "fruits" ? " text-white  " : " text-accent "
            }   text-2xl mt-2 lg:mt-5 mx-auto`}
          />
        </div>
        <div
          onClick={() => {
            setCategory("snacks");
            setFoods([]);
            setLoadingCheck(true);
            fetching("snacks");
          }}
          className={`${
            category === "snacks"
              ? "bg-accent text-white bg-opacity-80"
              : "border border-accent bg-accent bg-opacity-5 text-accent"
          } cursor-pointer flex-shrink-0 rounded-3xl h-[180px] w-[90px] ms-1 transform duration-300 lg:w-[112px] lg:h-[236px]`}
        >
          <img className="w-[64px] mx-auto mt-5" src={snacks} alt="" />
          <h1 className="text-center my-3 lg:my-6  font-bold ">Snacks</h1>
          <hr
            className={`w-[60%] ${
              category === "snacks" ? " border-white  " : " border-accent "
            }   mx-auto border bg-transparent`}
          />
          <IoIosArrowDroprightCircle
            className={`${
              category === "snacks" ? " text-white  " : " text-accent "
            }   text-2xl mt-2 lg:mt-5 mx-auto`}
          />
        </div>
        <div
          onClick={() => {
            setCategory("drinks");
            setFoods([]);
            setLoadingCheck(true);
            fetching("drinks");
          }}
          className={`${
            category === "drinks"
              ? "bg-accent text-white bg-opacity-80"
              : "border border-accent bg-accent bg-opacity-5 text-accent"
          } cursor-pointer transform duration-300 flex-shrink-0 rounded-3xl h-[180px] w-[90px] ms-1 lg:w-[112px] lg:h-[236px]`}
        >
          <img className="w-[64px] mx-auto mt-5" src={drinks} alt="" />
          <h1 className="text-center my-3 lg:my-6  font-bold ">Drinks</h1>
          <hr
            className={`w-[60%] ${
              category === "drinks" ? " border-white  " : " border-accent "
            }   mx-auto border bg-transparent`}
          />
          <IoIosArrowDroprightCircle
            className={`${
              category === "drinks" ? " text-white  " : " text-accent "
            }   text-2xl mt-2 lg:mt-5 mx-auto`}
          />
        </div>
      </div>

      {loadingCheck ? (
        <div className="min-h-screen h-full w-full flex items-center justify-center">
          <Lottie
            className="w-[60%] lg:w-[30%]"
            animationData={loadingAnimation}
          />
        </div>
      ) : (
        <div className="mt-10 flex flex-col justify-center items-center gap-x-2 gap-y-5 lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:w-[90%] xl:w-[90%] mx-auto">
          {window.location.pathname === "/" &&
            foods.slice(from, to).map((x, i) => (
              <>
                <SingleCard
                  setInitialPrice={setInitialPrice}
                  key={i}
                  setFoodData={setFoodData}
                  datas={x}
                ></SingleCard>
              </>
            ))}
          {window.location.pathname !== "/" &&
            foods?.map((x, i) => (
              <>
                <SingleCard
                  datas={x}
                  setInitialPrice={setInitialPrice}
                  key={i}
                  setFoodData={setFoodData}
                ></SingleCard>
              </>
            ))}

          <dialog id="my_modal_3" className="modal ">
            {loding ? (
              <>
                <div className=" w-full flex items-center justify-center">
                  <Lottie
                    className="w-[40%]"
                    animationData={loadingAnimation}
                  />
                </div>
              </>
            ) : (
              <div className="modal-box containerWithoutScrollBar p-0 py-2">
                <div className="pb-8 m-4 ">
                  <form onSubmit={handleSubmit(onSubmit)} className="relative">
                    <h1 className="font-Poppins font-semibold text-accent">
                      My Cart
                    </h1>
                    <hr className="mt-4  mx-auto border border-accent" />
                    <div className=" mt-8 my-3 mx-auto lg:h-[75px] bg-accent pb-1 bg-opacity-10 rounded-2xl relative flex flex-col lg:flex-row">
                      <div className="absolute -top-5 -left-1">
                        <img
                          className="h-[80px] w-[80px] rounded-full object-cover "
                          src={foodData?.imgUrl}
                          alt=""
                        />
                      </div>
                      <div className="ms-24 text-[16px] mt-1 font-mono">
                        <h1>{foodData.name}</h1>
                        <span className="text-sm text-accent">x</span>
                        <input
                          onChange={(e) => {
                            setInitialPrice(e.target.value * foodData.price);
                          }}
                          type="number"
                          required
                          defaultValue={1}
                          {...register("totalMeal")}
                          className="bg-transparent ps-1 w-[40px] focus:outline-none"
                        />
                      </div>
                      <div className="items-end justify-center  flex-col flex flex-grow me-4">
                        {/* <img className="w-5 me-2" src={deleteIcon} alt="" /> */}
                        <h1 className="text-sm mt-1">
                          {intialPrice !== undefined && intialPrice.toFixed(2)}{" "}
                          $
                        </h1>

                        <h1 className="text-sm ">
                          <span className="text-accent">Delivery :</span> &nbsp;
                          1.00 $
                        </h1>
                        <div className="border h-[1px] border-accent w-[50px] border-opacity-30" />
                        <h1 className="text-sm mt-1">
                          total :{" "}
                          {intialPrice !== undefined &&
                            (intialPrice + 1).toFixed(2)}{" "}
                          $
                        </h1>
                      </div>
                    </div>
                    <div className=" mx-auto mt-4">
                      <input
                        type="email"
                        className="bg-accent bg-opacity-10 py-3 px-3 rounded-xl mb-3 focus:outline-none text-accent w-full"
                        placeholder="email"
                        defaultValue={user?.email}
                      />
                      <input
                        type="text"
                        {...register("orderNote")}
                        className="bg-accent bg-opacity-10 py-3 px-3 rounded-xl mb-3 focus:outline-none text-accent w-full"
                        placeholder="order note"
                      />
                      <textarea
                        name=""
                        placeholder="Delivery address"
                        id=""
                        {...register("deliveryAddress")}
                        className="bg-accent bg-opacity-10 py-3 px-3 rounded-xl mb-3 focus:outline-none text-accent h-[140px] containerWithoutScrollBar w-full"
                        required
                      ></textarea>
                    </div>

                    <div className="w-full ">
                      <h1 className="font-semibold font-mono text-xl text-accent text-opacity-60">
                        Payment Method :
                      </h1>
                      {/* payment methods */}
                      <div className="mt-3 flex gap-x-1">
                        <div
                          onClick={() => {
                            setCash(false);
                            setCreditCard(true);
                            setPaypal(false);
                          }}
                          className={`${
                            CreditCard && "cardActive"
                          } cursor-pointer border-2 flex-col  lg:w-[25%] p-2 lg:p-0 rounded-md h-[65px] flex items-center relative justify-center`}
                        >
                          {CreditCard && (
                            <MdCheckCircle className="absolute top-1 right-1" />
                          )}
                          <HiOutlineCreditCard className="text-2xl" />
                          <h1 className="text-sm">Credit Card</h1>
                        </div>
                        <div
                          onClick={() => {
                            setCash(false);
                            setCreditCard(false);
                            setPaypal(true);
                          }}
                          className={`${
                            Paypal && "cardActive"
                          } cursor-pointer border-2 flex-col  w-[25%] rounded-md h-[65px] flex items-center relative justify-center`}
                        >
                          {Paypal && (
                            <MdCheckCircle className="absolute top-1 right-1" />
                          )}
                          <TbBrandPaypal className="text-2xl" />
                          <h1 className="text-sm">Paypal</h1>
                        </div>
                        <div
                          onClick={() => {
                            setCash(true);
                            setCreditCard(false);
                            setPaypal(false);
                          }}
                          className={`${
                            Cash && "cardActive"
                          } relative cursor-pointer border-2 flex-col  w-[25%] rounded-md h-[65px] flex items-center justify-center`}
                        >
                          {Cash && (
                            <MdCheckCircle className="absolute top-1 right-1" />
                          )}
                          <HiOutlineCash className="text-2xl" />
                          <h1 className="text-sm">Cash</h1>
                        </div>
                      </div>
                      {/*credit payment form */}
                      {CreditCard && (
                        <div className="mt-3">
                          <div>
                            <h1 className="text-sm text-accent text-opacity-60">
                              Cardholder Name
                            </h1>
                            <input
                              {...register("creditCardHolderName")}
                              className="focus:outline-none h-[48px] mt-1 px-4 text-accent rounded-lg bg-accent  bg-opacity-5 border-accent w-full"
                              type="text"
                              required
                            />
                          </div>
                          <div className="mt-4">
                            <h1 className="text-sm text-accent text-opacity-60">
                              Card Number
                            </h1>
                            <input
                              {...register("creditCardNumber")}
                              className="focus:outline-none h-[48px] mt-1 px-4 text-accent rounded-lg bg-accent  bg-opacity-5 border-accent w-full"
                              type="text"
                              required
                            />
                          </div>
                          <div className="mt-4 gap-x-3 w-full grid grid-cols-2 ">
                            <div>
                              <h1 className="text-sm text-accent text-opacity-60">
                                Expiration Date
                              </h1>
                              <input
                                className="focus:outline-none h-[48px] mt-1 px-4 text-accent rounded-lg bg-accent  bg-opacity-5 border-accent w-full"
                                type="date"
                                required
                              />
                            </div>
                            <div>
                              <h1 className="text-sm text-accent text-opacity-60">
                                CVV
                              </h1>
                              <input
                                className="focus:outline-none h-[48px] mt-1 px-4 text-accent rounded-lg bg-accent  bg-opacity-5 border-accent w-full flex flex-grow"
                                required
                                type="text"
                              />
                            </div>
                          </div>
                          <button
                            type="submit"
                            onClick={() => {
                              // setFoodData([]);
                              // document.getElementById("my_modal_1").close();
                            }}
                            className=" rounded-full p-2 absolute -bottom-12 right-[50px] bg-opacity-55 text-white px-3 bg-accent "
                          >
                            Confirm Payment
                          </button>
                        </div>
                      )}
                      {Paypal && (
                        <div className="mt-3">
                          <div>
                            <h1 className="text-sm text-accent text-opacity-60">
                              Name
                            </h1>
                            <input
                              {...register("payPalName")}
                              className="focus:outline-none h-[48px] mt-1 px-4 text-accent rounded-lg bg-accent  bg-opacity-5 border-accent w-full"
                              type="text"
                              required
                            />
                          </div>
                          <div className="mt-4">
                            <h1 className="text-sm text-accent text-opacity-60">
                              Email
                            </h1>
                            <input
                              {...register("payPalEMail")}
                              className="focus:outline-none h-[48px] mt-1 px-4 text-accent rounded-lg bg-accent  bg-opacity-5 border-accent w-full"
                              type="text"
                              required
                            />
                          </div>
                          <div className="mt-4">
                            <h1 className="text-sm text-accent text-opacity-60">
                              Message
                            </h1>
                            <textarea
                              name=""
                              placeholder=""
                              id=""
                              {...register("paypalMessage")}
                              className="bg-accent bg-opacity-10 py-3 px-3 rounded-xl mb-3 focus:outline-none text-accent h-[140px] containerWithoutScrollBar w-full"
                              required
                            ></textarea>
                            <button
                              type="submit"
                              onClick={() => {
                                // setFoodData([]);
                                // document.getElementById("my_modal_1").close();
                              }}
                              className=" rounded-full p-2 absolute -bottom-12 right-[50px] bg-opacity-55 text-white px-3 bg-accent "
                            >
                              Confirm Payment
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                    {Cash && (
                      <button
                        type="submit"
                        onClick={() => {
                          // setFoodData([]);
                          // document.getElementById("my_modal_1").close();
                        }}
                        className=" rounded-full p-2 absolute -bottom-12 right-[50px] bg-opacity-55 text-white px-3 bg-accent "
                      >
                        Confirm Order
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setFoodData([]);
                        document.getElementById("my_modal_3").close();
                      }}
                      className="rotate-45 rounded-full p-2 absolute -bottom-12 right-2 bg-opacity-55 text-white bg-accent text-xl"
                    >
                      +
                    </button>
                  </form>
                </div>
              </div>
            )}

            <Toaster></Toaster>
          </dialog>
          <dialog id="my_modal_4" className="modal ">
            <div
              style={{
                backgroundImage: `url(${gradientImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="bg-white rounded-3xl border-2  border-accent border-opacity-20 w-[300px] h-[170px] relative flex flex-col justify-center items-center p-4"
            >
              <h1>
                <FaRegCircleCheck className="text-3xl text-green-700 text-center" />
              </h1>
              <h1 className="mt-2 text-accent">Order Is Placed</h1>
              <p className="flex text-nowrap text-sm my-1">
                OrderId: &nbsp;
                <span className="text-accent bg-accent bg-opacity-5">
                  {orderId}
                </span>
              </p>
              <button
                type="button"
                onClick={() => {
                  setFoodData([]);
                  document.getElementById("my_modal_4").close();
                }}
                className="rotate-45 rounded-full p-1 absolute bottom-1 right-3 bg-opacity-55 text-white bg-accent text-xl"
              >
                +
              </button>
            </div>
          </dialog>
        </div>
      )}

      {window.location.pathname === "/" && (
        <div className="flex cursor-pointer me-5 lg:me-10 justify-end mt-14">
          <Link
            to={"/Menu"}
            className="flex px-6 text-base hover:bg-white py-3 btn bg-white rounded-md hover:text-accent border  hover:border-accent rounded-bl-3xl rounded-tr-3xl gap-x-2 items-center"
          >
            View All{" "}
            <IoIosArrowDroprightCircle
              className={`${
                category === "snacks" ? " text-white  " : " text-accent "
              }   text-2xl  mx-auto`}
            />
          </Link>
        </div>
      )}
      {window.location.pathname === "/Menu" && (
        <div className="flex h-[50px] items-center mt-10 ms-10 transform duration-300 gap-x-[4px]">
          <div className={`w-[30px]  h-[30px]  `}>
            {pageNum > 0 && (
              <div
                onClick={() => {
                  if (pageNum === 0) {
                    return;
                  }
                  setPageNum(pageNum - 1);
                  fetch(
                    ServerUrl +
                      `FoodsPagination?category=${category}&&page=${
                        pageNum - 1
                      }&limit=${itemsPerPage}`
                  )
                    .then((res) => res.json())
                    .then((data) => {
                      setTimeout(() => {
                        setLoadingCheck(false);
                      }, 2000);
                      setFoodCount(data.count);
                      setFoods(data.data);
                    });
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
              className={`w-[30px]  h-[40px] border  ${
                pageNum === i
                  ? "text-white w-[30px]  h-[40px] transform duration-500 bg-accent  border-accent   rounded-3xl"
                  : "text-accent border-2 rounded-full w-[12px] text-opacity-0 h-[12px] border-accent transform duration-500"
              } `}
              onClick={() => {
                setPageNum(number);
                setLoadingCheck(true);
                if (window.screen.width <= 425) {
                  window.scrollTo(0, 250);
                } else {
                  window.scrollTo(0, 300);
                }

                fetch(
                  ServerUrl +
                    `FoodsPagination?category=${category}&&page=${number}&limit=${itemsPerPage}`
                )
                  .then((res) => res.json())
                  .then((data) => {
                    setTimeout(() => {
                      setLoadingCheck(false);
                    }, 2000);
                    setFoodCount(data.count);
                    setFoods(data.data);
                  });
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
                  window.scrollTo(0, 250);
                } else {
                  window.scrollTo(0, 300);
                }

                fetch(
                  ServerUrl +
                    `FoodsPagination?category=${category}&&page=${
                      pageNum + 1
                    }&limit=${itemsPerPage}`
                )
                  .then((res) => res.json())
                  .then((data) => {
                    setTimeout(() => {
                      setLoadingCheck(false);
                    }, 2000);
                    setFoodCount(data.count);
                    setFoods(data.data);
                  });
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
    </div>
  );
};

export default Menu;
