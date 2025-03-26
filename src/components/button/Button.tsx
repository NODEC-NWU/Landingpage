import "./button.scss"

function Button({children}:{children:React.ReactNode}) {
    return (
        <button className="button">
            <div>
                <div className={"content"}>
                    <span>{children}</span>
                </div>
            </div>
        </button>
    )
}

export default Button;