import bgGradient from "../../../../assets/bannerAndNavbarElements/cardGradient.svg";
import ellipse from "../../../../assets/bannerAndNavbarElements/Ellipse3.svg";
import { TiStarFullOutline } from "react-icons/ti";
const SingleCard = () => {
  return (
    <div>
      {" "}
      <div className=" relative flex flex-col items-center  h-[490px] lg:w-[235px] xl:w-[300px] w-[300px]">
        <div
          style={{
            backgroundImage: `url(${ellipse})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="xl:w-[253px] w-[253px]  relative flex justify-center xl:-mb-24 -mb-24 items-center lg:w-[195px] h-[253px]"
        >
          <div className="lg:w-[160px] lg:h-[160px] w-[198px] h-[198px] xl:w-[198px] xl:h-[198px] lg:ms-1 mt-8 lg:mt-2 xl:mt-8 object-cover rounded-full">
            <img
              src="https://i.ibb.co/zxWDtsW/IMG-20240103-222330-197.jpg"
              className="w-full  h-full object-cover  rounded-full"
              alt=""
            />
          </div>
          <div className="w-[60px] flex justify-center items-center h-[60px] bg-white absolute bottom-0 right-8 rounded-full">
            <h1 className="w-[50px] bg-secondary rounded-full flex justify-center items-center h-[50px] text-white">
              1$
            </h1>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${bgGradient})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-full h-full    rounded-[20px] "
        >
          <h1 className="h-[120px] "></h1>
          <div className="h-[38px] gap-x-3 justify-center items-center flex w-full ">
            <div className="flex  relative h-full w-[80px]  ">
              <img
                src="https://i.ibb.co/zxWDtsW/IMG-20240103-222330-197.jpg"
                className="w-[38px] absolute right-0 z-20 bg-white p-[2px] h-[38px] object-cover  rounded-full"
                alt=""
              />
              <img
                src="https://i.ibb.co/zxWDtsW/IMG-20240103-222330-197.jpg"
                className="w-[38px] absolute right-5 z-10 bg-white p-[2px] h-[38px] object-cover  rounded-full"
                alt=""
              />
              <img
                src="https://i.ibb.co/zxWDtsW/IMG-20240103-222330-197.jpg"
                className="w-[38px] bg-white absolute right-10 z-0 p-[2px] h-[38px] object-cover  rounded-full"
                alt=""
              />
            </div>
            <div className="flex gap-x-1 items-center">
              <TiStarFullOutline className="text-3xl text-secondary" />
              <h1 className="text-xl font-semibold text-accent">(4.8)</h1>
            </div>
          </div>
          <h1 className="mt-[30px] text-center text-accent text-2xl font-semibold">
            Kabab
          </h1>
          <h1 className="mx-[30px] text-center mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </h1>

          <button className="w-[131px] bg-accent h-[45px] rounded-[3rem] text-white mt-5 absolute mx-auto xl:left-[27%] left-[27%] lg:left-[22%]">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
