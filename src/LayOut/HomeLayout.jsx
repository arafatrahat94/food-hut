import { Outlet, useNavigation } from "react-router-dom";
import Nav from "../Utilities/Navbar/Nav";
import Footer from "../Utilities/Footer/Footer";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import globalAnimation from "../assets/animation/3dBurger.json";
import gradientImg from "../assets/ErrorPageElement/gardientBg.png";
import { Toaster } from "react-hot-toast";
const HomeLayout = () => {
  const location = window.location.pathname === ("/SignIn" || "/SignUp");
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    if (navigation.state !== "loading") {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, []);
  return (
    <div className="">
      <div>
        <div
          style={{
            backgroundImage: `url(${gradientImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className={`${
            loading === true
              ? "scale-100 transform bg-white duration-500 opacity-100"
              : "scale-0 bg-white  transform duration-500 opacity-0"
          } z-50 absolute w-full min-h-screen flex justify-center items-center`}
        >
          <Lottie
            className={`${
              loading === true
                ? "scale-100 duration-300 transform"
                : "scale-0 duration-300 transform"
            } w-[300px] h-[300px]`}
            animationData={globalAnimation}
          />
        </div>
        <div
          className={`${
            loading !== true
              ? "opacity-100 block transform duration-500"
              : "opacity-0 hidden  transform duration-500"
          }`}
        >
          {!location && <Nav></Nav>}
          <Outlet />
          {!location && <Footer />}
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
