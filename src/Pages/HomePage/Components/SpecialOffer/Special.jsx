import SwipeCardSection from "./SwipeCardSection";

const Special = () => {
  return (
    <div id="Special">
      <h1 className="md:text-[38px] text-xl font-semibold text-center mt-5 lg:mt-[120px] mb-5">
        Today's <span className="text-accent">Special</span> Offers
      </h1>
      <p className="w-[350px] mx-auto text-center lg:w-[80%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum
        laborum minus odio eaque odit nam possimus dolorum saepe impedit?
      </p>

      <SwipeCardSection></SwipeCardSection>
    </div>
  );
};

export default Special;
