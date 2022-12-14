import { Fragment, useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchHeroes } from "./store/heroes-slice";

import { Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import Heroes from "./pages/Heroes";
import Hero_page from "./pages/Hero_page";
import Contacts from "./pages/Contacts";
import Community from "./pages/Community";
import Collection from "./pages/Collection";

import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";

function App() {
  const [scrollY, setScrollY] = useState(0);

  const isLoginModal = useSelector((state) => state.modal.isLoginModal);
  const isRegisterModal = useSelector((state) => state.modal.isRegisterModal);

  const dispatch = useDispatch();

  function logit() {
    setScrollY(window.scrollY);
    console.log(new Date().getTime());
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  useEffect(() => {
    dispatch(fetchHeroes());
  }, [dispatch]);

  return (
    <Fragment>
      {isRegisterModal && <RegisterModal></RegisterModal>}
      {isLoginModal && <LoginModal></LoginModal>}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/heroes" exact element={<Heroes scroll={scrollY} />} />
        <Route path="/heroes/:heroId" element={<Hero_page />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/collection" element={<Collection />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
