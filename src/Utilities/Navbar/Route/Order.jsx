import img from "../../../assets/bannerAndNavbarElements/meal/meal (1).png";
import deleteIcon from "../../../assets/cartPicture/Delete.svg";

const Order = () => {
  return (
    <div>
      <h1 className="ms-[24px] font-Poppins font-semibold text-accent">
        My Cart
      </h1>
      <hr className="mt-4 w-[90%] mx-auto border border-accent" />
      <div className="w-[90%] mt-6 my-3 mx-auto h-[65px] bg-accent bg-opacity-10 rounded-2xl relative flex">
        <div className="absolute -top-5 -left-1">
          <img className="h-[80px] " src={img} alt="" />
        </div>
        <div className="ms-20 text-[16px] mt-1 font-mono">
          <h1>Mushroom Pizza</h1>
          <span className="text-sm text-accent">x</span>
          <input
            type="number"
            defaultValue={1}
            className="bg-transparent ps-1 w-[40px] focus:outline-none"
          />
        </div>
        <div className="items-end justify-center  flex-col flex flex-grow me-4">
          <img className="w-5 me-2" src={deleteIcon} alt="" />
          <h1 className="text-sm mt-1">Price</h1>
        </div>
      </div>
      <div className="w-full ms-5 mb-5">
        <button className="text-white rounded-md bg-accent bg-opacity-50 px-4 text-sm rounded-bl-xl py-2 ">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Order;
