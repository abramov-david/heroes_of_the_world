import { Fragment } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Main from "./pages/Main";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import { useSelector } from "react-redux";

function App() {
  const isLoginModal = useSelector((state) => state.modal.isLoginModal);
  const isRegisterModal = useSelector((state) => state.modal.isRegisterModal);

  return (
    <Fragment>
      {isRegisterModal && <RegisterModal></RegisterModal>}
      {isLoginModal && <LoginModal></LoginModal>}
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
