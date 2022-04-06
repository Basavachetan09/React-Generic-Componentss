import React from "react";
import ReactDOM from "react-dom";
import 'react-calendar/dist/Calendar.css';



import Search from "./Components/SearchBarComponent";
import "./styles.css";
import CalendarComponent from "./Components/CalendarComponent/CalendarComponent";


function App() {
  return (
    <div className="App">
      <CalendarComponent/>
      <br></br>
      <Search />
    
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
