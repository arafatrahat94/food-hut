import { useEffect } from "react";
import Banner from "../../Utilities/Banner/Banner";
import Menu from "../HomePage/Menu/Menu";

const Menue = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="mb-5">
        <Banner secondTitle={"Our Menu"}></Banner>
      </div>
      <Menu></Menu>
    </div>
  );
};

export default Menue;