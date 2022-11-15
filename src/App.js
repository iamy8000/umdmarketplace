import React, { Suspense, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
/* Containers */
import Navigation from 'components/navigation/Navigation';

function App() {
    useEffect(() => {
        if (window.location.href !== `${window.origin}/umdmarketplace`) {
            window.location.href = `${window.origin}/umdmarketplace`
        }
    }, [])

    return (
        <div>
            <Suspense fallback={<div />}>
                <BrowserRouter basename="/umdmarketplace">
                    <Navigation />
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
