import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";

const APT_KEY = 'AIzaSyDXOkXAF9-PGCt34IV4UfaVZAPfWoDlQOo';

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );

};

ReactDOM.render(<App />, document.querySelector(".container"));