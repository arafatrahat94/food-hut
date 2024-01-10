import SingleCard from "../Components/SpecialOffer/SingleCard";

const Menu = () => {
  return (
    <div className="my-[120px] mx-4">
      <h1
        style={{ lineHeight: "normal" }}
        className="md:text-[38px] xl:text-[48px] w-[80%] mx-auto lg:w-[553px] xl:w-[703px] text-3xl font-semibold text-center mt-5 mb-[40px]"
      >
        <span className="text-accent">Menu</span> That{" "}
        <span className="text-secondary">Always</span> Make You Fall In{" "}
        <span className="text-accent">Love</span>
      </h1>
      <div className=" overflow-scroll mx-auto lg:w-[85%] w-full flex containerWithoutScrollBar">
        <div className="menuActive ms-1">Ramen</div>
        <div className="menuInActive">Breakfast</div>
        <div className="btn rounded-[3rem] me-3 px-8 bg-accent text-white">
          Launch
        </div>
        <div className="btn rounded-[3rem] me-3 px-8 bg-accent text-white">
          Dinner
        </div>
        <div className="btn rounded-[3rem] me-3 px-8 bg-accent text-white">
          Mexican
        </div>
        <div className="btn rounded-[3rem] me-3 px-8 bg-accent text-white">
          Italian
        </div>
        <div className="btn rounded-[3rem] me-3 px-8 bg-accent text-white">
          Desserts
        </div>
        <div className="btn rounded-[3rem] px-8 me-3 bg-accent text-white">
          Drink
        </div>
        <div className="btn rounded-[3rem] px-8 me-3 bg-accent text-white">
          Desi
        </div>
      </div>

      <div className="mt-10 flex flex-col justify-center items-center gap-y-10 lg:grid lg:grid-cols-4 xl:w-[90%] mx-auto">
        <SingleCard></SingleCard>
        <SingleCard></SingleCard>
        <SingleCard></SingleCard>
        <SingleCard></SingleCard>
      </div>
    </div>
  );
};

export default Menu;
