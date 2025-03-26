import "./main-container.scss"
import IconButton from "../../../components/icon-button/icon-button.tsx";

function MainContainer() {
    return (
        <section className="main-container">
            <div className="content">
                <p id={"codeThe"}>code the</p>
                <span id={"future"}>Future</span>
                <p id={"with"}>with</p>
                <div className={"CompanyName"}>
                    <p className={"brace left"}>&#123;</p>
                    <p id={"nodec"}>NODEC</p>
                    <p className={"brace right"}>&#125;</p>
                </div>
                <p id={"subheader"}>Web, App and Software Development</p>
                <IconButton>
                    <svg viewBox="0 0 100 108" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M55.6596 105.566C52.4187 108.811 47.1554 108.811 43.9145 105.566L2.43069 64.0329C-0.81023 60.7881 -0.81023 55.5186 2.43069 52.2738C5.67161 49.029 10.9349 49.029 14.1758 52.2738L49.8 87.9406L85.4242 52.2997C88.6651 49.0549 93.9284 49.0549 97.1693 52.2997C100.41 55.5445 100.41 60.8141 97.1693 64.0589L55.6855 105.592L55.6596 105.566ZM97.1434 14.1928L55.6596 55.7262C52.4187 58.971 47.1554 58.971 43.9145 55.7262L2.43069 14.1928C-0.81023 10.948 -0.81023 5.6784 2.43069 2.4336C5.67161 -0.811201 10.9349 -0.811201 14.1758 2.4336L49.8 38.1005L85.4242 2.45956C88.6651 -0.785243 93.9284 -0.785243 97.1693 2.45956C100.41 5.70436 100.41 10.9739 97.1693 14.2187L97.1434 14.1928Z"
                        />
                    </svg>
                </IconButton>
            </div>
        </section>
    );
}

export default MainContainer;