import { createStore } from "redux";
function cardListReducer(state = [], action) {
  switch (action.type) {
    case "card/add":
      return [action.newCard, ...state];
    case "card/remove":
      return state.filter((card) => card.title !== action.title);
    default:
      return state;
  }
}

const store = createStore(cardListReducer);
store.subscribe(() => console.log(store.getState()));
store.dispatch({ type: "card/add", newCard: { title: "card1" } });
store.dispatch({ type: "card/add", newCard: { title: "card2" } });

