import React from "react";
import classes from "./AuthInput.module.css";
import { useRef, useEffect } from "react";
import { useSelector } from "react-redux/es/exports";

export default function AuthInput(props) {
  const inputRef = useRef();
  const isLoginModal = useSelector((state) => state.modal.isLoginModal);
  const isRegisterModal = useSelector((state) => state.modal.isRegisterModal);

  console.log(props.queue);

  useEffect(() => {
    let authModal = isLoginModal || isRegisterModal;
    if (authModal && props.queue === "first") {
      inputRef.current.focus();
    }
  }, [isLoginModal, isRegisterModal]);

  return (
    <div className={classes.input_block}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={inputRef} />
    </div>
  );
}
