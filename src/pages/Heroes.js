import classes from "./Heroes.module.css";

import Header from "../components/Header";
import Footer from "../components/Footer.js";
import Hero_card from "../components/Hero_card";
import Loading from "../components/Loading";
import ErrorFetchPage from "../components/ErrorFetchPage";
import Pagination from "../UI/Pagination";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useState } from "react";

export default function Heroes(props) {
  const [active, setActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [heroesPerPage, setHeroesPerPage] = useState(49);

  const heroes_fetched_data = useSelector((state) => state.heroes.heroes_data);
  const loadingStatus = useSelector((state) => state.heroes.isLoading);
  const errorStatus = useSelector((state) => state.heroes.error);

  if (!heroes_fetched_data.length > 0) {
    if (loadingStatus) {
      return (
        <div className={classes.main}>
          <Header scroll={props.scroll} />
          <Loading />
          <Footer />
        </div>
      );
    }
    if (errorStatus) {
      return (
        <div className={classes.main}>
          <Header scroll={props.scroll} />
          <ErrorFetchPage />
          <Footer />
        </div>
      );
    }
    return;
  }

  //Get current hero
  const indexOfTheLastHero = currentPage * heroesPerPage;
  const indexOfTheFirstHero = indexOfTheLastHero - heroesPerPage;
  const currentHeroes = heroes_fetched_data.slice(
    indexOfTheFirstHero,
    indexOfTheLastHero
  );

  //Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const heroes_cards = currentHeroes.map((item, i) => (
    <Link to={`/heroes/${item.id}`} key={item.id + Math.random()}>
      <Hero_card
        key={i}
        img={item.images.lg}
        name={item.name}
        publisher={item.biography.publisher}
      />
    </Link>
  ));

  return (
    <div className={classes.main}>
      <Header scroll={props.scroll} />
      {!loadingStatus && (
        <section className={classes.heroes}>
          <ul className={classes.ully} id="heroes">
            {heroes_cards}
          </ul>
        </section>
      )}
      <Pagination
        heroesPerPage={heroesPerPage}
        totalHeroes={heroes_fetched_data.length}
        paginate={paginate}
        currentPage={currentPage}
        active={active}
      />
      <Footer />
    </div>
  );
}
