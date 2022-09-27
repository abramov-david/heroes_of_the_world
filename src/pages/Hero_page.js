import React, { Fragment } from "react";
import "./Hero_page.css";

import good from "../assets/hero_page/good.png";
import bad from "../assets/hero_page/bad.png";

import marvel_logo from "../assets/marvel_logo.png";
import dc_logo from "../assets/dc_logo_white.png";
import dark_horse_logo from "../assets/dark_horse_logo.png";
import nbc_heroes from "../assets/nbcHeroes.png";
import wildstorm from "../assets/wildstorm.png";
import lukas from "../assets/lukas.png";

import { use3dEffect } from "use-3d-effect";
import { animated } from "react-spring";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import ErrorFetchPage from "../components/ErrorFetchPage";
import Powerstats from "../components/Powerstats";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import HeroInfo from "../components/HeroInfo";

export default function Hero_page(props) {
  const ref = React.useRef(null);
  const { style, ...mouseHandlers } = use3dEffect(ref);

  const heroes_fetched_data = useSelector((state) => state.heroes.heroes_data);
  const loadingStatus = useSelector((state) => state.heroes.isLoading);
  const errorStatus = useSelector((state) => state.heroes.error);

  const params = useParams();
  const cur_hero_id = params.heroId;

  if (!heroes_fetched_data.length > 0) {
    if (loadingStatus) {
      return (
        <div className="hero-page">
          <Header scroll={props.scroll} />
          <Loading />
          <Footer />
        </div>
      );
    }
    if (errorStatus) {
      return (
        <div className="hero-page">
          <Header scroll={props.scroll} />
          <ErrorFetchPage />
          <Footer />
        </div>
      );
    }
    return;
  }

  const cur_hero = heroes_fetched_data.filter((hero) => hero.id == cur_hero_id);

  let heroStatus;

  if (cur_hero[0].biography.alignment == "bad") {
    heroStatus = <img src={bad} alt="" />;
  }
  if (cur_hero[0].biography.alignment == "good") {
    heroStatus = <img src={good} alt="" />;
  }

  let heroPublisher;
  switch (cur_hero[0].biography.publisher) {
    case "Marvel Comics":
      heroPublisher = (
        <img src={marvel_logo} alt="" className="hero-page__marvel-publisher" />
      );
      break;
    case "Dark Horse Comics":
      heroPublisher = (
        <img src={dark_horse_logo} alt="" className="hero-dark-publisher" />
      );
      break;
    case "DC Comics":
      heroPublisher = (
        <img src={dc_logo} alt="" className="hero-page__dc-publisher" />
      );
      break;
    case "NBC - Heroes":
      heroPublisher = (
        <img src={nbc_heroes} alt="" className="hero-page__marvel-publisher" />
      );
      break;
    case "Wildstorm":
      heroPublisher = (
        <img src={wildstorm} alt="" className="hero-dark-publisher" />
      );
    case "George Lucas":
      heroPublisher = (
        <img src={lukas} alt="" className="hero-page__marvel-publisher" />
      );
      break;

      break;

    default:
      break;
  }

  const powerStats = cur_hero[0].powerstats;

  return (
    <div className="hero-page">
      <Header />
      <div className="hero-page__mainContent">
        <div className="hero-page__header">
          <img
            src={cur_hero[0].images.lg}
            alt=""
            className="hero-page__biography--wrapper"
          />
          <animated.div
            ref={ref}
            style={{
              color: "white",
              padding: "2em",
              position: "absolute",
              top: "5px",
              left: "5px",
              zIndex: "8",
              ...style,
            }}
            {...mouseHandlers}
          >
            <img
              src={cur_hero[0].images.lg}
              alt=""
              className="hero-page__biography__img"
            />
          </animated.div>
          <div className="hero-page__title">
            <h1>{cur_hero[0].name}</h1>
          </div>
          <div className="hero-page__align">{heroStatus}</div>
          <div className="hero-page__publisher">{heroPublisher}</div>
          <Powerstats
            intelligence={powerStats.intelligence}
            combat={powerStats.combat}
            durability={powerStats.durability}
            power={powerStats.power}
            speed={powerStats.speed}
            strength={powerStats.strength}
          />
          <HeroInfo />
        </div>
      </div>
      <Footer />
    </div>
  );
}
