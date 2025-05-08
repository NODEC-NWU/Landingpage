import "./who-we-are-container.scss"
import ProjectSlider from "../../../components/project-slider/project-slider.tsx";

function WhoWeAreContainer() {
    return (
        <section className="container who-we-are-container">
            <div className={"header"}>
                <h1>Who we <em>are</em></h1>
            </div>
            <div className={"content-container"}>

                <h2>Full-Stack-<br/>Developer</h2>
                <hr/>
                <div className={"content"}>
                    <div className={"column"}>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt
                            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                            duo
                            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                            dolor
                            sit amet.</p>
                    </div>
                    <div className={"column"}>
                        <ProjectSlider/>
                    </div>
                </div>

            </div>
        </section>
    )

}

export default WhoWeAreContainer;