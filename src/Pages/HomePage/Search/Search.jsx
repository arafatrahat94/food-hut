import Aos from "aos";
import SearchCard from "./SearchCard";
import "aos/dist/aos.css";
Aos.init();
const Search = () => {
  return (
    <div data-aos="fade-up">
      <div>
        <h1 className="md:text-[38px] text-xl font-semibold text-center mt-5 lg:mt-[120px] mb-5">
          <span className="text-accent">Search</span> Result
        </h1>
      </div>
      <SearchCard></SearchCard>
    </div>
  );
};

export default Search;
