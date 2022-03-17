import { createStore } from "redux";
var initState = {
  mode: "READ",
  welcome_content: {
    title: "WEB",
    desc: "Hello, WEB",
  },
  selected_content_id: 1,
  contents: [
    { id: 1, title: "HTML", dec: "HTML is ..." },
    { id: 2, title: "CSS", dec: "CSS is ..." },
    { id: 3, title: "JAVASCRIPT", dec: "JS is ..." },
  ],
};

function reducer(state = initState, action) {
  switch (action.type) {
    case "CHANGE_MODE":
      return { ...state, mode: action.mode };
      break;
  }
  return state;
}
export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
