import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  propertyName: "",
  totalRooms: 0,
  rooms: [],
  logo: null
};

const motelSlice = createSlice({
  name: "motel",
  initialState,
  reducers: {
    addMotelDetails: (state, action) => {
      state.propertyName = action.payload.propertyName;
      state.totalRooms = action.payload.totalRooms;
      state.logo = action.payload.logo; 
    },
    addRooms: (state, action) => {
      state.rooms = action.payload;
    },
  },
});

export const { addMotelDetails, addRooms } = motelSlice.actions;
export default motelSlice.reducer;
