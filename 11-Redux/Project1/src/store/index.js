import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
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

//create unique action identifiers for actions and adds the type property
// counterSlice.actions.toggleCounter;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     // never change the state
//     // state.counter ++
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.value,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'toggle') {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };
