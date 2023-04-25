import React from "react";
import "./App.css";

export default function App3Component() {

    return (
      <div className='app3component'>
        <p>This component is from App3</p>
        <button onClick={() => alert("App3 Button clicked")}>
          App3 Button
        </button>
      </div>
    );

}

