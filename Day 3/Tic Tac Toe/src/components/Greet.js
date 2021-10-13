import React from 'react';

function Greet(props) {
    return (<div><h1>
         This is {props.name}
         </h1>
         <h2>
         My Age is {props.age}
         </h2></div>);
}

export default Greet;