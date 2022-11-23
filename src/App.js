import React, { Suspense } from 'react';
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
/* Containers */
import Navigation from 'components/navigation/Navigation';

function App() {
    return (
        <div>
            <Suspense fallback={<div />}>
                <Navigation />
            </Suspense>

            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
                style={{ zIndex: 9999 }}
            />
        </div>
    );
}

export default App;
