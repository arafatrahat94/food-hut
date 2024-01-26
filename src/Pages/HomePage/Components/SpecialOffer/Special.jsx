import SwipeCardSection from "./SwipeCardSection";

const Special = () => {
  return (
    <div id="Special">
      <h1 className="md:text-[38px] text-3xl font-semibold text-center mt-5 lg:mt-[120px] mb-5">
        Today's <span className="text-accent">Special</span> Offers
      </h1>

      <SwipeCardSection></SwipeCardSection>
    </div>
  );
};

export default Special;
