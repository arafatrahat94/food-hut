import { useEffect, useState } from "react";
import SingleCard2 from "./SIngleCard2";
import { ServerUrl } from "../../../../Utilities/Server/Url";
import { TbBrandPaypal } from "react-icons/tb";
import useAuth from "../../../../hooks/useAuth";
import { HiOutlineCash, HiOutlineCreditCard } from "react-icons/hi";
import { MdCheckCircle } from "react-icons/md";
import { set, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Lottie from "lottie-react";
import loadingAnimation from "../../../../assets/animation/componentLoader.json";
import gradientImg from "../../../../assets/ErrorPageElement/gardientBg.png";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
const SwipeCardSection = () => {
  const url = ServerUrl;
  const { user } = useAuth();

  const [intialPrice, setInitialPrice] = useState(0);
  const [foodData, setFoodData] = useState([]);
  const [CreditCard, setCreditCard] = useState(true);
  const [Paypal, setPaypal] = useState(false);
  const [Cash, setCash] = useState(false);
  const [loding, setLoading] = useState(false);
  console.log(foodData);
  const [foods, setFoods] = useState([]);
  console.log(foods);
  useEffect(() => {
    fetch(url + `Offers`)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [url]);
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
          document.getElementById("my_modal_1").close();
          document.getElementById("my_modal_2").showModal();
          setTimeout(() => {
            document.getElementById("my_modal_2").close();
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
          document.getElementById("my_modal_1").close();
          document.getElementById("my_modal_2").showModal();
          setTimeout(() => {
            document.getElementById("my_modal_2").close();
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
          document.getElementById("my_modal_1").close();

          setOrderId(data.insertedId);
          document.getElementById("my_modal_2").showModal();
          setTimeout(() => {
            document.getElementById("my_modal_2").close();
            setOrderId("");
          }, 5000);
        });
    }
    reset();
  };
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
  return (
    <div>
      <div className="xl: lg:w-[85%] mx-auto grid lg:grid-cols-3 xl:grid-cols-4 gap-x-3 mb-10 items-center gap-y-6 justify-center mt-10">
        {window.location.pathname === "/" &&
          foods.slice(from, to).map((x, i) => (
            <>
              <SingleCard2
                setInitialPrice={setInitialPrice}
                key={i}
                setFoodData={setFoodData}
                data={x}
              ></SingleCard2>
            </>
          ))}
        {window.location.pathname !== "/" &&
          foods?.map((x, i) => (
            <>
              <SingleCard2
                setInitialPrice={setInitialPrice}
                key={i}
                setFoodData={setFoodData}
                data={x}
              ></SingleCard2>
            </>
          ))}
        <dialog id="my_modal_1" className="modal ">
          {loding ? (
            <>
              <div className=" w-full flex items-center justify-center">
                <Lottie animationData={loadingAnimation} />
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
                        className="h-[80px] rounded-full object-cover "
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
                        {intialPrice !== undefined && intialPrice.toFixed(2)} $
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
                      document.getElementById("my_modal_1").close();
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
        <dialog id="my_modal_2" className="modal ">
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
                document.getElementById("my_modal_2").close();
              }}
              className="rotate-45 rounded-full p-1 absolute bottom-1 right-3 bg-opacity-55 text-white bg-accent text-xl"
            >
              +
            </button>
          </div>
        </dialog>
        {/* <button
          type="button"
          onClick={() => {
            setFoodData([]);
            document.getElementById("my_modal_2").showModal();
          }}
          className="rotate-45 rounded-full p-1 absolute -bottom-12 right-2 bg-opacity-55 text-white bg-accent text-xl"
        >
          +
        </button> */}

        {/* <SingleCard2></SingleCard2> */}
      </div>
      {showMore && (
        <div className="flex cursor-pointer justify-center mt-4">
          <Link
            to={"/TodaysOffer"}
            className="btn bg-accent rounded-bl-lg rounded-tl-3xl rounded-br-3xl hover:bg-transparent hover:border hover:border-accent hover:text-accent rounded-tr-lg px-8 text-white"
          >
            View All <IoIosArrowDropright className="text-xl" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default SwipeCardSection;
