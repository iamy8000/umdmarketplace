import React, { Suspense } from 'react';
import './App.css';
/* Containers */
import Navigation from 'components/navigation/Navigation';

function App() {
    return (
        <div>
            <Suspense fallback={<div />}>
                <Navigation />
            </Suspense>
        </div>
    );
}

export default App;
