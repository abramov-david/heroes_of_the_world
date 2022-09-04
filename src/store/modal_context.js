import React from "react";
import { useState } from "react";

const ModalContext = React.createContext({
  isModal: false,
  showModal: () => {},
  hideModal: () => {},
});

export const ModalContextProvider = (props) => {
  const [isModal, setIsModal] = useState(false);

  const showModal = () => {
    setIsModal(true);
  };

  const hideModal = () => {
    setIsModal(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isModal: isModal,
        showModal: showModal,
        hideModal: hideModal,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
