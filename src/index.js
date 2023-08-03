// 1) Import the React and ReactDom libraries 
import React from "react";
import  ReactDOM  from 'react-dom/client';
//  2) Get a refrance to the div with ID  root 
const el = document.getElementById('root');
// 3) tell React to take control of that element 
const root = ReactDOM.createRoot(el);
// 4) create a componnet  
function App(){
    const inoutType = 'number';
    const minValue = 5;
    return <input type={inoutType} min={minValue}/>;
}
// 5) show compont on scren 
root.render(<App />);