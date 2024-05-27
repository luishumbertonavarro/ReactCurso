import { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

export const Layout = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(
        `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
    );

    const { author, quote } = !!data && data[0];
    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {
        if (pRef.current) {
            const { height, width } = pRef.current.getBoundingClientRect();
            setBoxSize({ height, width });
        }
    }, [quote]);
    

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    
    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />
            <>
                <blockquote className="blockquote text-end"
                    style={{ display: 'flex' }}
                >
                    <p ref={pRef} className="mb-1">{quote}</p>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>
                <code>{JSON.stringify(boxSize)}</code>
            </>
    
            <button disabled={isLoading} className="btn btn-primary" onClick={() => increment(1)}>Next Quote</button>
        </>
    );
    
};
