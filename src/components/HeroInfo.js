import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "./Header";
import Footer from "./Footer";
import ErrorFetchPage from "./ErrorFetchPage";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./HeroInfo.css";

import { useSelector } from "react-redux";

export default function HeroInfo(props) {
  const heroes_fetched_data = useSelector((state) => state.heroes.heroes_data);
  const loadingStatus = useSelector((state) => state.heroes.isLoading);
  const errorStatus = useSelector((state) => state.heroes.error);

  const params = useParams();
  const cur_hero_id = params.heroId;

  if (!heroes_fetched_data.length > 0) {
    if (loadingStatus) {
      return (
        <div className="hero-page">
          <p>Loading...</p>
        </div>
      );
    }
    if (errorStatus) {
      return (
        <div className="hero-page">
          <p>Something go whrong!</p>
        </div>
      );
    }
    return;
  }
  console.log(heroes_fetched_data);
  const cur_hero = heroes_fetched_data.filter((hero) => hero.id == cur_hero_id);
  const hero_appearance = cur_hero[0].appearance;
  const hero_biography = cur_hero[0].biography;
  const hero_connections = cur_hero[0].connections;
  const hero_work = cur_hero[0].work;
  console.log(hero_appearance);

  return (
    <div className="heroInfo">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={1}
        //scrollbar={{ draggable: true }}
        navigation
        pagination={{ type: "progressbar" }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log("swiper active")}
      >
        <SwiperSlide className="swiperSlide">
          <div className="heroInfo__block">
            <h2>Appearance</h2>
            <p>
              <span>Eye Color:</span> {hero_appearance.eyeColor}
            </p>
            <p>
              <span>Gender:</span> {hero_appearance.gender}
            </p>
            <p>
              <span>Height:</span> {hero_appearance.height[1]}
            </p>
            <p>
              <span>Race:</span>{" "}
              {hero_appearance.race ? hero_appearance.race : "Unknown"}
            </p>
            <p>
              <span>Weight:</span> {hero_appearance.weight[1]}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          {" "}
          <div className="heroInfo__block">
            <h2>Biography</h2>
            <p>
              <span>Aliases:</span> {hero_biography.aliases}
            </p>
            <p>
              <span>Alter Egos:</span> {hero_biography.alterEgos}
            </p>
            <p>
              <span>First appearance:</span> {hero_biography.firstAppearance}
            </p>
            <p>
              <span>Full Name:</span> {hero_biography.fullName}
            </p>
            <p>
              <span>Place of Birth:</span> {hero_biography.placeOfBirth}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          {" "}
          <div className="heroInfo__block">
            <h2>Connections</h2>
            <p>
              <span>Group Affiliation:</span>{" "}
              {hero_connections.groupAffiliation}
            </p>
            <p>
              <span>Relatives:</span>{" "}
              {hero_biography.relatives
                ? hero_biography.relatives
                : "Not found"}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          {" "}
          <div className="heroInfo__block">
            <h2>Work</h2>
            <p>
              <span>Group Affiliation:</span>{" "}
              {hero_connections.groupAffiliation}
            </p>
            <p>
              <span>Relatives:</span>{" "}
              {hero_work.base ? hero_work.occupation : "Not found"}
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
