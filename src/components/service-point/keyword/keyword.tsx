import "./keyword.scss"

export interface KeywordProps {
    iconPath?: string;
    key?: number;
    children: React.ReactNode;
}

function Keyword(props: KeywordProps) {
    let icon;
    if(props.iconPath && props.iconPath.length != 0) {

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        icon = <img src={props.iconPath} alt={props.children} />

    }


    return (
        <div className={"keyWord"}>
            {icon}
            <p>{props.children}</p>
        </div>
    )
}

export default Keyword