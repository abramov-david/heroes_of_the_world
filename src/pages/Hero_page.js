import React from "react";
import "./Hero_page.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Hero_page(props) {
  const heroes_fetched_data = useSelector((state) => state.heroes.heroes_data);
  const params = useParams();
  const cur_hero_id = params.heroId;

  const hero_data = heroes_fetched_data[0]?.map((item) => item);

  const cur_hero = hero_data?.filter((hero) => hero.id == cur_hero_id);

  console.log(hero_data);
  console.log(cur_hero);
  return (
    <div className="hero_page_container">
      <h1>Hero {cur_hero ? cur_hero[0].name : ""} page</h1>
    </div>
  );
}
