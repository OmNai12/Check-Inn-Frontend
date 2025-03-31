import { configureStore } from "@reduxjs/toolkit";
import motelReducer from "./features/motelSlice";

export const store = configureStore({
  reducer: {
    motel: motelReducer,
  },
});
