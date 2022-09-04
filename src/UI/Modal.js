import React from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux/es/exports";
import { modalActions } from "../store/modal-slice";
import { useDispatch } from "react-redux/es/exports";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(modalActions.hideLoginModal());
    dispatch(modalActions.hideRegisterModal());
  };

  return <div className={classes.backdrop} onClick={closeHandler} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay-modal");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
