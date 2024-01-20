import { useEffect } from "react";
import Banner from "../../Utilities/Banner/Banner";
import Popular from "../HomePage/PopularFoods/Popular";
import { Helmet } from "react-helmet-async";

const PopularItems = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>PopularFoods | FoodHut</title>
      </Helmet>
      <Banner secondTitle={"Our Popular Foods"}></Banner>
      <Popular></Popular>
    </div>
  );
};

export default PopularItems;
