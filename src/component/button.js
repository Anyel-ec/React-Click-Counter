//importar react
import React from 'react';
//import css
import '../styles/button.css';
//functions the button
function Button({ text, isButtonClicked, managerClick }) {
    return (
        <button 
        className={ isButtonClicked ? "button-clic" : "button-restart" }
        onClick={ managerClick }>
            { text }
        </button>
    )
}


//export the component
export default Button;