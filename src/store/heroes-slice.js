import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { generateRandom } from "../helpers/randomInt";

const API_URL = "https://akabab.github.io/superhero-api/api/all.json";

export const fetchHeroes = createAsyncThunk(
  "data_slice/fetchHeroes",
  async function (_, { rejectWithValue }) {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await res.json();

      /*       const marvel_heroes = data.filter(
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
      ]; */

      /*       const heroesData = [];

      for (let index = 0; index < filtered_data.length; index++) {
        const item = filtered_data[generateRandom(0, filtered_data.length)];
        heroesData.push(item);
      } */

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const heroesSlice = createSlice({
  name: "data_slice",
  initialState: { heroes_data: [], isLoading: null, error: null },

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
      state.error = "Loading data failed!";
    },
  },
});

export default heroesSlice;
