import "./fact-point.scss"

interface FactPoint {
    id?: string;
    iconPath?: string,
    children?: React.ReactNode;
}

function FactPoint(probs: FactPoint) {
    let icon;

    if(probs.iconPath) {
        icon = <div className={"icon"}>
            <div className={"icon-container"}>
                <img src={probs.iconPath}/>
            </div>
        </div>
    }
    return (
        <div className={"fact-point"}>
            <div className="fact-point-content" id={probs.id}>
                {icon}
                <div className={"content"}>
                    {probs.children}
                </div>
            </div>
        </div>
    )
}

export default FactPoint;