import Lottie from "lottie-react";
import gradientImg from "../../assets/ErrorPageElement/gardientBg.png";
import fourImg from "../../assets/ErrorPageElement/Vector.png";
import burgurAnimation from "../../assets/ErrorPageElement/burgurAnimation.json";
const ErrorPage = () => {
  return (
    <div
      className="min-h-screen justify-center flex-col  flex w-full items-center"
      style={{
        backgroundImage: `url(${gradientImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex w-[300px] justify-center items-center md:w-full lg:w-[700px] xl:w-full">
        <div className="lg:w-[200px] w-[70px] md:w-[150px] xl:w-[300px]">
          <img className="w-full h-full" src={fourImg} alt="4Imageone" />
        </div>
        <div>
          <Lottie
            className="lg:w-[350px] xl:w-[400px] w-[100px] md:w-[250px] "
            animationData={burgurAnimation}
          />
        </div>
        <div className="lg:w-[200px] w-[70px] md:w-[150px] xl:w-[300px]">
          <img className="w-full h-full" src={fourImg} alt="4Imageone" />
        </div>
      </div>
      <h1 className="font-Poppins mt-5 md:text-3xl font-semibold text-accent">
        Page not found
      </h1>
      <button className="btn rounded-3xl px-7 bg-accent text-base-200 mt-5 scale-75 lg:scale-100 font-Poppins">
        Back To Home
      </button>
    </div>
  );
};

export default ErrorPage;
