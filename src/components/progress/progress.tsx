import "./progress.scss"

interface ProgressProps {
    value?: number,

}

function Progress(props: ProgressProps) {

    console.log(props)
    let valueLabel;
    if(props.value){
        valueLabel = props.value + "%";
    }

    return (
        <div className="progress-container">
            <div className={"progress-value"} style={{width: valueLabel}}>
            </div>
            <div className={"progress-bar"}>
                <p>{valueLabel}</p>
            </div>
        </div>
    )
}

export default Progress