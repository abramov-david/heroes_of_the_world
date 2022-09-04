import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal_slice",
  initialState: { isLoginModal: false, isRegisterModal: false },
  reducers: {
    showLoginModal(state) {
      state.isLoginModal = true;
    },
    hideLoginModal(state) {
      state.isLoginModal = false;
    },
    showRegisterModal(state) {
      state.isRegisterModal = true;
    },
    hideRegisterModal(state) {
      state.isRegisterModal = false;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
