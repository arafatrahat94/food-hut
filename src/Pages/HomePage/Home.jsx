import { createContext, useEffect, useState } from "react";
import AppDownload from "./AppDowload/AppDownload";
import Banner from "./Components/Banner/Banner";
import SingleCard2 from "./Components/SpecialOffer/SIngleCard2";
import Special from "./Components/SpecialOffer/Special";
import Menu from "./Menu/Menu";
import MoreThanService from "./MoreThanService/MoreThanService";
import { Toaster } from "react-hot-toast";
import Popular from "./PopularFoods/Popular";
import Search from "./Search/Search";
export const contexts = createContext(null);
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchResut, setSearchResult] = useState([]);
  console.log(searchResut);
  const sendingData = {
    setSearchResult,
    searchResut,
  };
  return (
    <>
      <contexts.Provider value={sendingData} className="">
        <Banner></Banner>
        {searchResut.length > 0 && <Search />}
        <Special></Special>

        <MoreThanService />
        <Menu />
        <Popular />
        <AppDownload />
        <Toaster />
      </contexts.Provider>
    </>
  );
};

export default Home;
