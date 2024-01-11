import gradientImg from "../../assets/ErrorPageElement/gardientBg.png";
import burgerAnimation from "../../assets/SIgnInpage/Banner.svg";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import ComponentLoading from "../../Utilities/Componentloading/ComponentLoading";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
const SignUp = () => {
  const { user, createNew, gLogin } = useAuth();
  const {
    register,
    handleSubmit,
    // watch,
    reset,
    // formState: { errors },
  } = useForm();
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSubmit = (data) => {
    const { Phone, conPass, firstName, lastName, pass, terms, userEmail } =
      data;
    if (pass !== conPass) {
      return toast.error("Both password not match", {
        id: "passNotMatch",
      });
    }
    if (terms === false) {
      return toast.error("please first agree to the terms and conditions");
    }
    const newData = {
      Phone: Phone,
      name: firstName + "" + lastName,
      email: userEmail,
    };
    setLoading(true);
    createNew(userEmail, pass)
      .then((res) => {
        axios
          .post(`http://localhost:7000/User`, newData)
          .then((res) => {
            if (res.data) {
              toast.success("user created");
              reset();
            }
            setLoading(false);
            console.log(res);
          })
          .catch((error) => {
            setLoading(false);
            return toast.error(error);
          });

        console.log(res);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message, {
          id: "signUpError",
        });
      });
  };

  const GLoginHandle = () => {
    setLoading(true);
    gLogin()
      .then((res) => {
        console.log(res);
        const newData = {
          Phone: "",
          name: res?.user?.displayName,
          email: res.user?.email,
        };
        axios
          .post(`http://localhost:7000/User`, newData)
          .then((res) => {
            if (res.data) {
              toast.success("user created");
              reset();
            }
            setLoading(false);
            console.log(res);
          })
          .catch((error) => {
            setLoading(false);
            return toast.error(error);
          });
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  };
  return (
    <div
      className="flex items-center min-h-screen lg:justify-start xl:ps-10 justify-center py-10 w-full "
      style={{
        backgroundImage: `url(${gradientImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {loading ? (
        <ComponentLoading></ComponentLoading>
      ) : (
        <>
          <div className="xl:w-[500px] lg:lg:w-[400px] z-10 lg:ms-20 xl:ms-[100px] ">
            <h1 className="text-3xl text-center font-semibold text-accent mt-8">
              Sign Up
            </h1>
            <h1 className="mt-5 text-black text-center lg:text-xl">
              create Your Food hut account
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="xl:w-[500px] lg:w-[400px] w-[300px] mt-5 mx-auto"
            >
              <div className="flex justify-between xl:w-[500px] lg:w-[400px] flex-col xl:flex-row">
                <div className="form-control mb-5">
                  <label className="label">
                    <span className="label-text text-xl text-accent font-semibold">
                      First Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="text-accent input  bg-transparent rounded-3xl border-2 focus:border-accent border-accent focus:outline-none input-bordered"
                    {...register("firstName")}
                    required
                  />
                </div>
                <div className="form-control mb-5">
                  <label className="label">
                    <span className="label-text text-xl text-accent font-semibold">
                      Last Name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="text-accent input  bg-transparent rounded-3xl border-2 focus:border-accent border-accent focus:outline-none input-bordered"
                    {...register("lastName")}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-between xl:w-[500px] lg:w-[400px] flex-col xl:flex-row">
                <div className="form-control mb-5">
                  <label className="label">
                    <span className="label-text text-xl text-accent font-semibold">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder=""
                    className="text-accent input  bg-transparent rounded-3xl border-2 focus:border-accent border-accent focus:outline-none input-bordered"
                    {...register("userEmail")}
                    required
                  />
                </div>
                <div className="form-control mb-5">
                  <label className="label">
                    <span className="label-text text-xl text-accent font-semibold">
                      Phone
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder=""
                    className="text-accent input  bg-transparent rounded-3xl border-2 focus:border-accent border-accent focus:outline-none input-bordered"
                    {...register("Phone")}
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <div className="flex gap-x-10 justify-between xl:w-[500px] lg:w-[400px] flex-col xl:flex-row">
                  <div className="w-full xl:w-1/2 relative">
                    <label className="label">
                      <span className="label-text text-xl text-accent font-semibold">
                        Password
                      </span>
                    </label>
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder=""
                      className="text-accent w-full  input bg-transparent  rounded-3xl border-2 focus:border-accent border-accent focus:outline-none input-bordered"
                      {...register("pass")}
                      required
                    />
                    <div
                      onClick={() => setShowPass(!showPass)}
                      className="absolute text-accent text-xl right-4 top-[57px]"
                    >
                      {showPass ? <FiEye /> : <FiEyeOff />}
                    </div>
                  </div>
                  <div className="w-full xl:w-1/2 relative">
                    <label className="label">
                      <span className="label-text text-xl text-accent font-semibold">
                        Confirm Password
                      </span>
                    </label>
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder=""
                      className="w-full input bg-transparent  rounded-3xl border-2 focus:border-accent border-accent focus:outline-none input-bordered text-accent"
                      {...register("conPass")}
                      required
                    />
                    <div
                      onClick={() => setShowPass(!showPass)}
                      className="absolute text-accent text-xl right-4 top-[57px]"
                    >
                      {showPass ? <FiEye /> : <FiEyeOff />}
                    </div>
                  </div>
                </div>
                <label className="label mt-3 lg:text-base text-xs xl:w-[500px] lg:w-[400px]">
                  <div className="flex items-center gap-x-3 justify-center w-full">
                    <input type="checkbox" {...register("terms")} /> Agree Terms
                    And Conditions
                  </div>
                </label>
                <button
                  className="btn bg-accent
           text-white w-[190px] rounded-[3rem] mx-auto mt-7"
                >
                  Sign Up
                </button>
                <h1 className="text-black font-semibold text-center mt-4">
                  Or Sign Up with
                </h1>

                <button
                  type="button"
                  onClick={GLoginHandle}
                  className="flex gap-x-2 border-accent text-accent btn items-center bg-transparent w-[150px] mx-auto h-[50px] rounded-[.5rem] mt-5  text-xl"
                >
                  <FcGoogle /> Google
                </button>
              </div>
            </form>
            <h1 className="text-center lg:text-base text-sm mt-8 lg:mt-4">
              Already have an account ?{" "}
              <Link to={"/SignIn"} className="text-accent ">
                Click here to SignIn
              </Link>
            </h1>
          </div>
          <img
            className="z-0 absolute top-0 right-0 w-full hidden lg:block lg:w-[600px] xl:w-[800px]"
            src={burgerAnimation}
            alt=""
          />
        </>
      )}

      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default SignUp;
