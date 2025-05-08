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
                }
                  languages={[
                      {children: "JavaScript"},
                      {children: "TypeScript"},
                      {children: "PHP"},
                      {children: "Python"},
                      {children: "C#"},
                  ]}>
                    lorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper delenit possim takimata invidunt clita facilisis eirmod ut accumsan feugait sadipscing culpa feugiat cum eum cillum invidunt minim eum facer eu
                </ServicePoint>
                <ServicePoint title={"Desktop Applications"}
                platforms={[
                    {children: "Windows"},
                    {children: "macOS"},
                ]}
                languages={[
                    {children: "C#"},
                    {children: "C++"},
                    {children: "TypeScript"},
                    {children: "Java"},
                ]}
                keyWords={[
                    {children: "React Native", iconPath:"vite.svg"},
                    {children: "WPF", iconPath:"vite.svg"},
                ]}>
                    lorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper delenit possim takimata invidunt clita facilisis eirmod ut accumsan feugait sadipscing culpa feugiat cum eum cillum invidunt minim eum facer eu
                </ServicePoint>
                <ServicePoint title={"Mobile Applications"}
                              platforms={[
                                  {children: "Android"},
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
                                  {children: "Swift"},
                              ]}
                keyWords={[
                    {children: "React Native", iconPath:"vite.svg"},
                ]}>
                    lorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper delenit possim takimata invidunt clita facilisis eirmod ut accumsan feugait sadipscing culpa feugiat cum eum cillum invidunt minim eum facer eu
                </ServicePoint>
                <ServicePoint title={"Online Shop"}
                  platforms={[
                      {children: "Website"},
                      {children: "inApp"},
                  ]}
                  keyWords={
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
