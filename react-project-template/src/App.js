import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import Product from './components/Product';

const App = () => {
    return (
        <div>
            <header>
                <h1>A template for React Project</h1>
            </header>
            <main>
                <h1>Welcome to React</h1>
            </main>
            <Product product = 'Hello'/>
        </div>
    );
};

export default App;
