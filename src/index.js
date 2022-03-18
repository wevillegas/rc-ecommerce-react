import React from 'react';
import ReactDOM from 'react-dom';
import { App } from "./app"

// const element = <h1>Esto es un elemento con React</h1>

const container = document.getElementById("root")

ReactDOM.render(
    //<React.StrictMode>
        <App />,
    //</React.StrictMode>,
    container)

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
