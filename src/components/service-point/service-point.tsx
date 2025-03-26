import "./service-point.scss"
import Keyword, {KeywordProps} from "./keyword/keyword.tsx";

interface ServicePointProbs {

    title: string;

    children: React.ReactNode; // Description

    keyWords?: KeywordProps[];

    languages?: KeywordProps[];

    platforms?:KeywordProps[]
}


function ServicePoint(probs: ServicePointProbs) {

    let platforms;

    if(probs.platforms) {
        platforms = <div className={"platform-container"}>
            <h3>Platforms</h3>
            <hr/>
            <div className={"keyWords-container"}>
                {probs.platforms.map((item, key) => {
                    return <Keyword key={key} iconPath={item.iconPath}>{item.children}</Keyword>
                })}
            </div>
        </div>;

    }

    let keyWords;

    if(probs.keyWords) {
        keyWords =
            <div className={"language-container"}>
                <h3>Frameworks</h3>
                <hr/>
                <div className={"keyWords-container"}>
                    {probs.keyWords.map((item, key) => {
                        return <Keyword key={key} iconPath={item.iconPath}>{item.children}</Keyword>
                    })}
                </div>
            </div>
    }

    let languages;

    if(probs.languages) {
        languages =
            <div className={"language-container"}>
                <h3>Languages</h3>
                <hr/>
                <div className={"keyWords-container"}>
                    {probs.languages.map((item, key) => {
                        return <Keyword key={key} iconPath={item.iconPath}>{item.children}</Keyword>
                    })}
                </div>
            </div>
    }

    return (
        <div className={"service-point-container"}>
            <div className={"heading-container"}>
                <h2 className={"heading"}>{probs.title}</h2>
                <hr/>
            </div>
            <div className={"content-container"}>
                <p>{probs.children}</p>
            </div>
            {keyWords}
            {platforms}
            {languages}
        </div>
    )
}


export default ServicePoint;