import "./icon-button.scss"

interface IconButtonProps {
    children?: React.ReactNode,
    onClick?: () => void,
}


function IconButton(probs:IconButtonProps) {
    return (
        <button className="icon-button" onClick={probs!.onClick}>
            <div>
                {probs.children}
            </div>
        </button>
    )
}

export default IconButton;
