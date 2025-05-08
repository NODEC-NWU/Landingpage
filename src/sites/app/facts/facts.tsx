import "./facts.scss"
import FactPoint from "../../../components/fact-point/fact-point.tsx";
import StarRating from "../../../components/star-rating/star-rating.tsx";
import Progress from "../../../components/progress/progress.tsx";
import Tooltip from "../../../components/tooltip/tooltip.tsx";
import Evaluation from "../../../components/evaluation/evaluation.tsx";


function Facts() {
    return (
        <section className="container facts-container">
            <div className="custom-shape-divider-top-1743000408 top">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="shape-fill"></path>
                </svg>
            </div>
            <div className={"header"}>
                <h1>Let's talk about <em>Facts</em></h1>
            </div>
            <div className={"content-container"}>
                <div className={"fact-points"}>
                    <FactPoint id={"fiverr"} iconPath={"vite.svg"}>
                        <StarRating stars={5}/>
                        <p>5 / 5</p>
                    </FactPoint>
                    <FactPoint id={"customer"} iconPath={"vite.svg"}>
                        <div>
                            <p>More then</p>
                            <p><em>40 satisfied</em></p>
                            <p>Customer</p>
                        </div>
                    </FactPoint>
                    <FactPoint id={"completion"} iconPath={"vite.svg"}>
                        <div>
                            <Progress value={100}/>
                            <p><em>Completion</em></p>
                            <p>Rate</p>
                        </div>
                    </FactPoint>
                    <Tooltip text={"IdeenExpo 22 Winner"} position={"center"}>
                        <FactPoint id={"ideenExpo"} iconPath={"ideenExpo22.png"}>

                        </FactPoint>
                    </Tooltip>
                </div>
                <div className={"evaluation-points"}>
                    <Evaluation
                        iconPath={"vite.svg"}
                        title={"Niklas Szach"}
                        position={"Nijos e.U."}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wisi congue vulputate iriure eos ex id. Facer elit sint aliqua cum dolores nisi cum liber euismod laboris suscipit liber. Ipsum euismod enim.
                    </Evaluation>
                    <Evaluation
                        iconPath={"vite.svg"}
                        title={"Frank Helmer"}
                        position={"Elisabeth Apotheken"}
                    >
                        Hello Welt!
                    </Evaluation>
                </div>

            </div>
            <div className="custom-shape-divider-bottom-1743000829">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                     preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        ></path>
                </svg>
            </div>
        </section>
    )
}

export default Facts