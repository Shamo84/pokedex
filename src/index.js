import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import PokeGrid from "./PokeGrid";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

const App = () => {
  return (
    <div>
      <h1>Cerca un Pokemon!</h1>
        <SearchParams/>
      <hr/>
        <PokeGrid/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
