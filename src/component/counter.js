//import react
import React from 'react';
//import the css
import '../styles/counter.css';
//function of Counter
function Counter({ counter }) {
    return (
        <div className="counter-container">
            <h1 className="counter-title">Counter</h1>
            <h2 className="counter-number">{ counter }</h2>
            <p> Developer Anyel EC </p>
        </div>
    )
}
//export the component
export default Counter;

