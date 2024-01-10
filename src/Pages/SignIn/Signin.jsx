import Lottie from "lottie-react";
import gradientImg from "../../assets/ErrorPageElement/gardientBg.png";
import fourImg from "../../assets/ErrorPageElement/Vector.png";
import burgurAnimation from "../../assets/ErrorPageElement/burgurAnimation.json";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const Signin = () => {
  return (
    <div
      className="flex min-h-screen  w-full "
      style={{
        backgroundImage: `url(${gradientImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-[500px] h-[500px]  ms-[100px] mt-[170px]">
        <h1 className="text-3xl text-center font-semibold text-accent mt-8">
          Sign In
        </h1>
        <h1 className="mt-5 text-black text-center text-xl">
          Sign in to stay connected.
        </h1>
        <div className="w-[430px] mt-5 mx-auto">
          <div className="form-control mb-5">
            <label className="label">
              <span className="label-text text-xl text-accent font-semibold">
                Email
              </span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input rounded-3xl border-2 border-accent focus:outline-none input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-accent font-semibold">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input rounded-3xl border-2 border-accent focus:outline-none input-bordered"
              required
            />
            <label className="label mt-3">
              <div className="flex items-center gap-x-3">
                <input type="checkbox" /> Remember me
              </div>
              <a
                href="#"
                className="label-text-alt text-accent text-base link link-hover"
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

            <button className="flex gap-x-2 border-accent text-accent btn items-center bg-transparent w-[250px] mx-auto h-[50px] rounded-[2rem] mt-5  text-xl">
              <FcGoogle /> Google
            </button>
          </div>
        </div>
        <h1 className="text-center mt-4">
          Don`t have an account ?{" "}
          <span className="text-accent ">Click here to signUp</span>
        </h1>
      </div>
      <img
        className=" absolute right-0 w-[900px]"
        src="src/assets/SIgnInpage/Banner.svg"
        alt=""
      />
    </div>
  );
};

export default Signin;
