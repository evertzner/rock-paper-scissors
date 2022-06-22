import { createSlice } from "@reduxjs/toolkit";

const gameValuesSlice = createSlice({
  name: "gameValues",
  initialState: {
    score: 0,
  },
  reducers: {
    newGame(state) {
      state.score = 0;
    },
    win(state) {
      state.score += 1;
    },
  },
});

export const gameValuesActions = gameValuesSlice.actions;

export default gameValuesSlice;
