import "./button-border.scss"

function ButtonBorder() {
    return (
        <div className="button-border">
            <div className="box top-left"/>
            <div className="box top-right"/>
            <div className="box bottom-left"/>
            <div className="box bottom-right"/>
            <div className="box bottom-center"/>
            <div className="box top-center"/>
            <div className="box center"/>
        </div>
    )
}

export default ButtonBorder;