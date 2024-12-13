import { useNavigate } from "react-router-dom";


export default function Home() {

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