import PropTypes from 'prop-types';
import {useState} from 'react';


export const CounterApp = ({value}) => {

    const[ counter,setCounter]=useState(value);

    const handleAdd=()=> {
        //setCounter(counter+1);
        setCounter((c)=>c+1);
    }
    const menosUno=()=> {
        //setCounter(counter+1);
        setCounter((c)=>c-1);
    }
    const resetHandler=()=> {
        //setCounter(counter+1);
        setCounter(value);
    }
    return (  
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={menosUno}>-1</button>
            <button onClick={resetHandler}>reset</button>
        </>

    );
}
CounterApp.propTypes={
    value: PropTypes.number.isRequired
} 
