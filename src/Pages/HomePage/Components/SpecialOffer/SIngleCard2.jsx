import bgGradient from "../../../../assets/bannerAndNavbarElements/cardGradient.svg";
import ellipse from "../../../../assets/bannerAndNavbarElements/Ellipse3.svg";
import { TiStarFullOutline } from "react-icons/ti";
const SingleCard2 = () => {
  return (
    <div className="w-full justify-center flex">
      {" "}
      <div className=" relative flex flex-col items-center xl:h-[450px] h-[370px] lg:w-[255px] xl:w-[290px] w-[280px]">
        <div className="xl:w-[253px] w-[303px]  relative flex justify-center xl:-mb-24 -mb-24 items-center lg:w-[195px] h-[253px]">
          <div className="lg:w-[160px] lg:h-[160px] w-[168px] h-[168px] xl:w-[198px] xl:h-[198px] lg:-ms-10  -ms-16 xl:mt-8 object-cover rounded-full">
            <img
              src="https://i.ibb.co/zxWDtsW/IMG-20240103-222330-197.jpg"
              className="w-full  h-full object-cover  rounded-full"
              alt=""
            />
          </div>
          <div className="w-[60px] flex justify-center items-center h-[60px] bg-white absolute top-8 xl:top-48 right-16 lg:right-0 xl:right-10 shadow rounded-full">
            <h1 className=" bg-accent w-full h-full rounded-full flex justify-center items-center  text-white">
              1$
            </h1>
          </div>
        </div>
        <div
          style={{ boxShadow: "2px 2px 5px black" }}
          className="w-full h-full border-2 rounded-br-[20px] rounded-tl-[20px] "
        >
          {/* <h1 className="h-[50px] "></h1> */}
          <div className="h-[58px] mb-12 lg:mb-0 xl:h-[120px] gap-x-3 justify-center items-center flex w-full "></div>
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

export default SingleCard2;
