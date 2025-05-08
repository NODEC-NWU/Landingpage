import "./evaluation.scss"

interface EvaluationProps {
    iconPath: string,
    date?: string,
    title: string,
    position?: string,
    children: string
}

function Evaluation(props: EvaluationProps) {

    let icon;
    if(props.iconPath && props.iconPath.length != 0) {

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        icon =  <div className={"icon"}>
                    <img src={props.iconPath} alt={props.children}/>
                </div>
    }

    let date;
    if(props.date) {
        date = <div className={"date"}>
            <p>{props.date}</p>
        </div>
    }

    return (
        <div className="evaluation-container">
            <div className={"content"}>
                <div className={"header"}>
                    {icon}
                    <div>
                        <div className={"title"}>
                            <p>{props.title}</p>
                        </div>
                        <div className={"position"}>
                            <p>{props.position}</p>
                        </div>
                    </div>
                </div>
                <hr/>
                {date}
                <div className={"children"}>
                <p>{props.children}</p>
                </div>
            </div>
        </div>
    )
}

export default Evaluation;