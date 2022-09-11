import { Fragment, useState, useEffect } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Main from "./pages/Main";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import { useSelector } from "react-redux";
import Heroes from "./pages/Heroes";
import { fetchHeroes } from "./store/heroes-slice";
import { useDispatch } from "react-redux";

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
        <Route path="/" element={<Main />}></Route>
        <Route path="/heroes" element={<Heroes scroll={scrollY} />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
