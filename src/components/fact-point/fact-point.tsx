import "./fact-point.scss"

interface FactPoint {
    iconPath?: string,
    children?: React.ReactNode;
}

function FactPoint(probs: FactPoint) {
    let icon;
    if(probs.iconPath) {
        icon = <div className={"icon"}>
            <img src={probs.iconPath}/>
        </div>
    }
    return (
        <div className={"fact-point"}>
            <div className="fact-point-content">
                {icon}
                <div className={"content"}>
                    {probs.children}
                </div>
            </div>
        </div>
    )
}

export default FactPoint;