import { configureStore } from "@reduxjs/toolkit";

import modalSlice from "./modal-slice";
import heroesSlice from "./heroes-slice";

const store = configureStore({
  reducer: { modal: modalSlice.reducer, heroes: heroesSlice.reducer },
});

export default store;
