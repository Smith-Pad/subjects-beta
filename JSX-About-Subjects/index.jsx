import { useNavigate } from "react-router-dom";


export default function About() {

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