import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { generateRandom } from "../helpers/randomInt";

const API_URL = "https://akabab.github.io/superhero-api/api/all.json";

export const fetchHeroes = createAsyncThunk(
  "data_slice/fetchHeroes",
  async function () {
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error("Could not fetch cart data!");
    }
    const data = await res.json();

    const marvel_heroes = data.filter(
      (item) => item.biography.publisher == "Marvel Comics"
    );
    const dark_horse_heroes = data.filter(
      (item) => item.biography.publisher == "Dark Horse Comics"
    );
    const dc_heroes = data.filter(
      (item) => item.biography.publisher == "DC Comics"
    );

    const filtered_data = [
      ...marvel_heroes,
      ...dark_horse_heroes,
      ...dc_heroes,
    ];

    const heroes_data = [];

    for (let index = 0; index < 100; index++) {
      const item = filtered_data[generateRandom(0, 439)];
      heroes_data.push(item);
    }
    return heroes_data;
  }
);

const heroesSlice = createSlice({
  name: "data_slice",
  initialState: { heroes_data: [], isLoading: false, error: null },

  extraReducers: {
    [fetchHeroes.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchHeroes.fulfilled]: (state, action) => {
      state.heroes_data = action.payload;
      state.isLoading = false;
    },
    [fetchHeroes.rejected]: (state) => {
      state.isLoading = false;
      state.error = "Something go wrong!";
    },
  },
});

export default heroesSlice;
