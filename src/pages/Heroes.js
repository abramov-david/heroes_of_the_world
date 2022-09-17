import classes from "./Heroes.module.css";

import Header from "../components/Header";
import Footer from "../components/Footer.js";
import Hero_card from "../components/Hero_card";
import Loading from "../components/Loading";

import { useSelector } from "react-redux";
import errorFetch from "../assets/error/error_fetch.jpg";
import { Link } from "react-router-dom";

export default function Heroes(props) {
  const heroes_fetched_data = useSelector((state) => state.heroes.heroes_data);
  const loadingStatus = useSelector((state) => state.heroes.isLoading);
  const errorStatus = useSelector((state) => state.heroes.error);

  console.log(heroes_fetched_data);
  console.log(loadingStatus);

  const error_page = (
    <div className={classes.errorFetchContainer}>
      <div className={classes.errorFetchContainer__img}>
        <img src={errorFetch} alt="" />
      </div>
      <h1>{errorStatus}</h1>
    </div>
  );

  if (!heroes_fetched_data.length > 0) {
    if (loadingStatus) {
      return <p>Loading..</p>;
    }
    if (errorStatus) {
      return (
        <div className={classes.main}>
          <Header scroll={props.scroll} />
          {error_page}
          <Footer />
        </div>
      );
    }
    return;
  }

  const heroes_cards = heroes_fetched_data[1].map((item, i) => (
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

      <Footer />
    </div>
  );
}
