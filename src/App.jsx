// Group 1: React imports
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'; // Import useNavigate here



// Group 2: CSS
import './App.css';
import './position-text.css';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;



function Home() {

    const Navigate = useNavigate();

    const routeToAbout = () => {
        Navigate('/about');
    };

    return (
        <>
            <div class="layout indicator-side-round">
                <h1> Subjects </h1>
                <a href="http://127.0.0.1:3000" class="button small button is-red button-no-animate-mode">Back</a>
            </div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>


            <div class="layout side-round">
                <h1> List</h1>

                <button class="button small button button-no-animate-mode" onClick={routeToAbout}>Go to About</button>
            </div>
        </>
    );
}




function About() {

    const Navigate = useNavigate();

    const routeToHome = () => {
        Navigate('/');
    };

    return (
        <>
            <div class="layout indicator-side-round">
                <h1> About </h1> <button class="button small button button-no-animate-mode" onClick={routeToHome}>Back</button>
            </div>


            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
            <div class="space"></div>
        </>
    );
}