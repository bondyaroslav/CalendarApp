import "./App.css"
import React from "react";
import Calendar from "./Components/Calendar";
import TaskList from "./Components/TaskList";
import ThisDate from "./Components/ThisDate";

function App(props) {

    return (
        <div className="App">
            <ThisDate year={props.store.state.year} month={props.store.state.month} day={props.store.state.day} />
            <div className="calendar-wrapper">
                <Calendar state={props.store.state}/>
            </div>
            <TaskList isShown={true}/>
        </div>
    );
}

export default App;
