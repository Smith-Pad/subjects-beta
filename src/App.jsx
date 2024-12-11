import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './position-text.css'
import { Link } from 'react-router-dom';
// import './UI.css'


function App() {
    const [count, setCount] = useState(0)

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

                <button class="button">3D Sphere Test</button>
            </div>
        </>
    )
}

export default App
