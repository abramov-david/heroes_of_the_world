import React, { Fragment } from "react";
import "./Hero_page.css";

import { use3dEffect } from "use-3d-effect";
import { animated } from "react-spring";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Hero_page(props) {
  const ref = React.useRef(null);
  const { style, ...mouseHandlers } = use3dEffect(ref);

  const heroes_fetched_data = useSelector((state) => state.heroes.heroes_data);
  const params = useParams();
  const cur_hero_id = params.heroId;

  const hero_data = heroes_fetched_data[0]?.map((item) => item);
  const cur_hero = hero_data?.filter((hero) => hero.id == cur_hero_id);

  return (
    <div className="hero-page">
      <Header />
      <div className="hero-page__mainContent">
        <div className="hero-page__header">
          <img
            src={cur_hero ? cur_hero[0].images.lg : ""}
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
              ...style,
            }}
            {...mouseHandlers}
          >
            <img
              src={cur_hero ? cur_hero[0].images.lg : ""}
              alt=""
              className="hero-page__biography__img"
            />
          </animated.div>
          <div className="hero-page__title">
            <h1>{cur_hero ? cur_hero[0].name : ""}</h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
