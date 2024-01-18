import { useEffect } from "react";
import AppDownload from "./AppDowload/AppDownload";
import Banner from "./Components/Banner/Banner";
import SingleCard2 from "./Components/SpecialOffer/SIngleCard2";
import Special from "./Components/SpecialOffer/Special";
import Menu from "./Menu/Menu";
import MoreThanService from "./MoreThanService/MoreThanService";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Banner></Banner>
      <Special></Special>
      <MoreThanService />
      <Menu />
      <AppDownload />
    </>
  );
};

export default Home;
