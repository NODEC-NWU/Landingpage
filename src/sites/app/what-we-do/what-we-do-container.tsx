import "./what-we-do-container.scss"
import ServicePoint from "../../../components/service-point/service-point.tsx";

function WhatWeDoContainer(){
    return (
        <section className="container what-we-do-container">
            <div className={"header"}>
                <h1>What we <em>Do</em></h1>
            </div>
            <div className={"content-container"}>
                <ServicePoint title={"Website"} keyWords={
                    [
                        {children: "React", iconPath:"vite.svg"},
                        {children: "Bootstrap", iconPath:"vite.svg"},
                        {children: "Django", iconPath:"vite.svg"},
                        {children: "Laravel", iconPath:"vite.svg"},
                        {children: "TypeScript", iconPath:"vite.svg"},
                    ]
                }>
                    lorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper delenit possim takimata invidunt clita facilisis eirmod ut accumsan feugait sadipscing culpa feugiat cum eum cillum invidunt minim eum facer eu
                </ServicePoint>
                <ServicePoint title={"Applications"} keyWords={
                    [
                        {children: "React Native", iconPath:"vite.svg"},
                        {children: "Xcode", iconPath:"vite.svg"},
                    ]
                } platforms={[
                    {children: "Windows"},
                    {children: "Android"},
                    {children: "macOS"},
                    {children: "iOS"},
                    {children: "iPadOS"},
                    {children: "watchOS"},
                    {children: "visionOS"},
                    {children: "tvOS"}
                ]}
                languages={[
                    {children: "TypeScript"},
                    {children: "C#"},
                    {children: "C++"},
                    {children: "php"},
                    {children: "Python"},

                ]}>
                    lorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper delenit possim takimata invidunt clita facilisis eirmod ut accumsan feugait sadipscing culpa feugiat cum eum cillum invidunt minim eum facer eu
                </ServicePoint>

                <ServicePoint title={"Online Shop"} keyWords={
                    [
                        {children: "Shopify", iconPath:"vite.svg"},
                        {children: "PayPal", iconPath:"vite.svg"},
                        {children: "Stripe", iconPath:"vite.svg"},
                        {children: "Reflow", iconPath:"vite.svg"},
                    ]
                }>
                    lorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper delenit possim takimata invidunt clita facilisis eirmod ut accumsan feugait sadipscing culpa feugiat cum eum cillum invidunt minim eum facer eu
                </ServicePoint>
            </div>
        </section>
    )
}

export default WhatWeDoContainer;