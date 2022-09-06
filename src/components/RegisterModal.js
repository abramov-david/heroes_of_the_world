import React from "react";
import Modal from "../UI/Modal";
import Card from "../UI/Card";
import classes from "./RegisterModal.module.css";
import AuthButton from "../UI/AuthButton";
import AuthInput from "../UI/AuthInput";

import { useDispatch } from "react-redux/es/exports";
import { modalActions } from "../store/modal-slice";

import user_1 from "../assets/main_page/svg_reg/user_1.svg";
import user_2 from "../assets/main_page/svg_reg/user_2.svg";
import user_3 from "../assets/main_page/svg_reg/user_3.svg";
import user_4 from "../assets/main_page/svg_reg/user_4.svg";
import user_5 from "../assets/main_page/svg_reg/user_5.svg";
import user_6 from "../assets/main_page/svg_reg/user_6.svg";
import user_7 from "../assets/main_page/svg_reg/user_7.svg";
import user_8 from "../assets/main_page/svg_reg/user_8.svg";

export default function RegisterModal() {
  const input_name_val = {
    type: "text",
    id: "name",
  };

  const input_email_val = {
    type: "text",
    id: "email",
  };

  const input_password_val = {
    type: "text",
    id: "password",
  };

  const dispatch = useDispatch();

  const closeHandler = () => {
    dispatch(modalActions.hideRegisterModal());
  };

  return (
    <Modal>
      <Card className={classes.modal_container}>
        <div className={classes.closeIcon} onClick={closeHandler}>
          <svg
            className="closeIcon__item"
            width="22"
            height="24"
            viewBox="0 0 37 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="34.0896"
              y1="3.53553"
              x2="3.53554"
              y2="34.0896"
              stroke="url(#paint0_linear_62_2)"
              stroke-width="5"
              stroke-linecap="round"
            />
            <line
              x1="3.53556"
              y1="4"
              x2="34.0896"
              y2="34.5541"
              stroke="url(#paint1_linear_62_2)"
              stroke-width="5"
              stroke-linecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_62_2"
                x1="36.3395"
                y1="3.22248"
                x2="3.04297"
                y2="36.9027"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F0141E" />
                <stop offset="1" stop-color="#0376F2" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_62_2"
                x1="3.22251"
                y1="1.75011"
                x2="36.9027"
                y2="35.0467"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#0376F2" />
                <stop offset="1" stop-color="#F0141E" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <form className={classes.form} action="">
          <div className={classes.input_block}>
            <AuthInput input={input_name_val} label="Name" queue="first" />
            <AuthInput input={input_email_val} label="Email" />
            <div className={classes.form__passInput}>
              <AuthInput input={input_password_val} label="Password" />
              <p>(Must be six or greater signs)</p>
            </div>
          </div>

          <div className={classes.imgChoose}>
            <p>Choose profile image:</p>
            <div className={classes.imgChoose__container}>
              <img src={user_1} alt="user_1" />
              <img src={user_2} alt="user_2" />
              <img src={user_8} alt="user_8" />
              <img src={user_4} alt="user_4" />
              <img src={user_3} alt="user_3" />
              <img src={user_5} alt="user_5" />
              <img src={user_6} alt="user_6" />
              <img src={user_7} alt="user_7" />
            </div>
          </div>
          <div className={classes.footer}>
            <AuthButton text="Register" />
            <p className={classes.smallText}>(Agree with Terms and Polices)</p>
          </div>
        </form>
      </Card>
    </Modal>
  );
}
