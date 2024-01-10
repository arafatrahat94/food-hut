import SingleCard2 from "./SIngleCard2";

const SwipeCardSection = () => {
  return (
    <div className="xl:w-[90%] lg:w-[85%] mx-auto grid lg:grid-cols-3 xl:grid-cols-4 gap-x-3 mb-10 items-center gap-y-6 justify-center mt-10">
      <SingleCard2></SingleCard2>
      <SingleCard2></SingleCard2>
      <SingleCard2></SingleCard2>
      {/* <SingleCard2></SingleCard2> */}
    </div>
  );
};

export default SwipeCardSection;
