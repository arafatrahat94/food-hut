import Lottie from "lottie-react";
import loadingAnimation from "../../assets/animation/componentLoader.json";

const ComponentLoading = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Lottie animationData={loadingAnimation} />
    </div>
  );
};

export default ComponentLoading;
