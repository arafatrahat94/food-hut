import { useEffect } from "react";
import Banner from "../../Utilities/Banner/Banner";
import Popular from "../HomePage/PopularFoods/Popular";

const PopularItems = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner secondTitle={"Our Popular Foods"}></Banner>
      <Popular></Popular>
    </div>
  );
};

export default PopularItems;
