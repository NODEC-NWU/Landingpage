import './Navigation-Bar.scss'
import {Children} from "react";
import * as React from "react";

/**
 * Requires an NavigationBarItem
 */
function NavigationBar({ children }: {children: React.ReactNode}) {
    return (
        <header className={"navigation-bar"}>
            <nav>
                {Children.map(children, child =>
                    <>
                        {child}
                    </>
                )}
            </nav>
        </header>
    );
}

export default NavigationBar;