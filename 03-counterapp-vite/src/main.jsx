import React from 'react'
import ReactDOM from 'react-dom/client';



import './style.css';
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={20}/>
        
        {/* <HelloWorldApp/> */}
        {/* <FirstApp  /> */}
    </React.StrictMode>
);