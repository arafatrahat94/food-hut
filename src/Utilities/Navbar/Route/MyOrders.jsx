const MyOrders = ({ data }) => {
  return (
    <div>
      <div className="w-[90%] mt-6 my-3 mx-auto  bg-accent bg-opacity-10 relative rounded-2xl">
        <div className=" relative flex">
          <div className="absolute -top-5 -left-1">
            <img
              className="h-[80px] w-[80px] rounded-full"
              src={data.food.imgUrl}
              alt=""
            />
          </div>
          <div className="ms-20 text-[16px] mt-1 font-mono">
            <h1>{data.food.name}</h1>
            <span className="text-sm text-accent">x</span>
            {data.totalCountOfFood}
          </div>
        </div>
        <h1 className="text-sm mt-3 ms-3">
          Payment Method : {data.paymentMethod}
        </h1>
        <h1 className="text-sm  ms-3">Payment Status : {data.paid}</h1>
        <h1 className="text-sm pb-3 ms-3">OrderId : {data._id}</h1>
        <div className="absolute  z-30 flex justify-center w-[85px]  right-2 text-accent top-10  p-3 rounded-3xl flex-col items-center">
          <h1>Total</h1>
          <h1>{data.totalAmmount} $</h1>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
