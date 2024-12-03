import { createSlice, configureStore } from "@reduxjs/toolkit";
// 用redux/toolkit改写redux carList的例子
// 把switch直接变成了函数操作 不容易出错
const cardListSlice = createSlice({
  name: "card",
  initialState: {
    cards: [],
  },
  reducers: {
    addCard: (state, action) => {
      state.cards.unshift(action.payload.newCard);
    },
    removeCard: (state, action) => {
      state.cards = state.cards.filter(
        (card) => card.title !== action.payload.title
      );
    },
  },
});
const {
  reducer: cardListReducer,
  actions: { addCard, removeCard },
} = cardListSlice;

const store = configureStore({
  reducer: cardListReducer,
});
store.subscribe(() => console.log(store.getState()));
store.dispatch(addCard({ newCard: { title: "card1" } }));
store.dispatch(removeCard({ newCard: { title: "card2" } }));
