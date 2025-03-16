import { createSlice } from "@reduxjs/toolkit";

const addOneDay = (dateString) => {
  const date = new Date(dateString);
  date.setDate(date.getDate() + 1);
  return date.toISOString();
};

const initialState = {
  startDate: new Date().toISOString(),
  endDate: addOneDay(new Date().toISOString()),
};

const dateSlice = createSlice({
  name: "dates",
  initialState,
  reducers: {
    setStartDate(state, action) {
      state.startDate = action.payload;
      state.endDate = addOneDay(action.payload);
    },
    setEndDate(state, action) {
      state.endDate = action.payload;
    },
  },
});

export const { setStartDate, setEndDate } = dateSlice.actions;
export default dateSlice.reducer;
