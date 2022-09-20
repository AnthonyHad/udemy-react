import { createSlice, configureStore } from '@reduxjs/toolkit';

//create unique action identifiers for actions and adds the type property
// counterSlice.actions.toggleCounter;

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      //we are allowed to mutate the sate here as toolkit uses immer which does the heavylifting
      //no need to create state copies manually
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
