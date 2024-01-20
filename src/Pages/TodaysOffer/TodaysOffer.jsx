import { Helmet } from "react-helmet-async";
import Banner from "../../Utilities/Banner/Banner";
import SwipeCardSection from "../HomePage/Components/SpecialOffer/SwipeCardSection";

const TodaysOffer = () => {
  return (
    <div>
      <Helmet>
        <title>Today&apos;sOffer | FoodHut</title>
      </Helmet>
      <Banner secondTitle={"Today's offer"}></Banner>
      <SwipeCardSection />
    </div>
  );
};

export default TodaysOffer;
