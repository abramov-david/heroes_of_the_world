import classes from "./Heroes.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer.js";
import Hero_card from "../components/Hero_card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Heroes(props) {
  const heroes_fetched_data = useSelector((state) => state.heroes.heroes_data);
  const loadingStatus = useSelector((state) => state.heroes.isLoading);

  const heroes_cards = heroes_fetched_data.map((item, i) => {
    return (
      <Link to={`/heroes/${item.id}`} key={item.id}>
        <Hero_card
          key={i}
          img={item.images.lg}
          name={item.name}
          publisher={item.biography.publisher}
        />
      </Link>
    );
  });

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

      {loadingStatus && <p>Loading...</p>}
      <Footer />
    </div>
  );
}
