import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const todoDetails = JSON.parse(localStorage.getItem("tasks"))  || [
  { id: "1", name: "Ngủ đúng giờ", isCompleted: false },
  { id: "2", name: "Tập thể dục", isCompleted: false },
];

const FILTER_MAP = {
  All: () => true,
  inProgress: (todo) => !todo.isCompleted,
  Completed: (todo) => todo.isCompleted,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App
      todos={todoDetails}
      FILTER_NAMES={FILTER_NAMES}
      FILTER_MAP={FILTER_MAP}
    />
  </React.StrictMode>
);

ReactDOM.render(<App todos={todoDetails} />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
