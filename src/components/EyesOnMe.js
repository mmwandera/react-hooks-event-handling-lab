// Code EyesOnMe Component Here

import React from 'react';

// In the components/EyesOnMe.js file, create an EyesOnMe React component.
// In that component, render a button with the text 'Eyes on me'.
// On that button, add an event handler that listens for the focus and blur events.
// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Bad!'.

function EyesOnMe (){
    function handleFocus(event) {
        console.log('Good!');
    }
    function handleBlur(event) {
        console.log('Hey! Eyes on me!');
    }
    return (
        <div>
            <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
        </div>
    );
}
export default EyesOnMe;

// function handleFocus(event) {
//     console.log('Good!');
// }
// function handleBlur(event) {
//     console.log('Hey! Eyes on me!');
// }

