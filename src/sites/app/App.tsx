import './App.scss'
import NavigationBar from "../../components/navigation-bar/Navigation-Bar.tsx";
import NavigationBarItem from "../../components/navigation-bar/Navigation-Bar-Item/Navigation-Bar-Item.tsx";
import WhoWeAreContainer from "./who-we-are/who-we-are-container.tsx";
import MainContainer from "./main/main-container.tsx";
import WhatWeDoContainer from "./what-we-do/what-we-do-container.tsx";
import Facts from "./facts/facts.tsx";


function App() {

  return (
    <>
      <NavigationBar>
        <NavigationBarItem>Home</NavigationBarItem>
        <NavigationBarItem>About Us</NavigationBarItem>
        <NavigationBarItem>Portfolio</NavigationBarItem>
      </NavigationBar>
      <main className={"app-container"}>
        <MainContainer/>
        <div className={"app-content-border"}>
            <div className={"app-content"}>
                <WhoWeAreContainer/>
                <WhatWeDoContainer/>
                <Facts/>
            </div>
        </div>
      </main>

    </>
  )
}

export default App
