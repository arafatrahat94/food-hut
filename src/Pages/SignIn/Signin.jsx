import Lottie from "lottie-react";
import gradientImg from "../../assets/ErrorPageElement/gardientBg.png";

import burgerAnimation from "../../assets/SIgnInpage/Banner.svg";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import ComponentLoading from "../../Utilities/Componentloading/ComponentLoading";
const SignIn = () => {
  const [emailRef, setEmailfRef] = useState(null);
  const { user, login, gLogin, forgetPass } = useAuth();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    // watch,
    reset,
    // formState: { errors },
  } = useForm();
  const [showPass, setShowPass] = useState(false);
  const onSubmit = (data) => {
    setLoading(true);
    const { pass, userEmail } = data;
    console.log(data);
    login(userEmail, pass)
      .then(() => {
        setLoading(false);
        toast.success("welcome back user");
        reset();
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };

  const GLoginHandle = () => {
    setLoading(true);
    gLogin()
      .then(() => {
        toast.success("welcome back user");
        reset();
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  };

  const handleForgotPass = () => {
    forgetPass(emailRef)
      .then(() => toast.success("password reset link emailed"))
      .catch((err) => toast.error(err.message));
  };
  return (
    <div
      className="items-center flex min-h-screen lg:justify-start xl:ps-10 justify-center py-10 w-full "
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
              Sign In
            </h1>
            <h1 className="mt-5 text-black text-center lg:text-xl">
              Sign in to stay connected.
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="xl:w-[500px] lg:w-[400px] w-[300px] mt-5 mx-auto"
            >
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
                  onChange={(e) => setEmailfRef(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
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
                <label
                  onClick={handleForgotPass}
                  className="label mt-3 lg:text-base text-xs xl:w-[500px] lg:w-[400px]"
                >
                  <a
                    href="#"
                    className="label-text-alt text-accent lg:text-base text-xs link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
                <button
                  className="btn bg-accent
             text-white w-[190px] rounded-[3rem] mx-auto mt-7"
                >
                  Sign in
                </button>
                <h1 className="text-black font-semibold text-center mt-4">
                  Or Sign in with
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
              Don`t have an account ?{" "}
              <Link to={"/SignUp"} className="text-accent ">
                Click here to signUp
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

export default SignIn;
