import "./project-small-view.scss"
import {ProjectType} from "./project-type.tsx";
import ProjectTypes from "./project-types/project-types.tsx";

export interface ProjectSmallViewProbs {
    colors :string[]
    type:ProjectType;
    title:string;

    children: React.ReactNode;
}

function ProjectSmallView(probs:ProjectSmallViewProbs) {
    const style = {
        background: `linear-gradient(180deg, ${probs.colors[0]} 0%, ${probs.colors[1]}  100%)`,
    }

    return (
        <>
            <div className="project-small-view" style={style}>
                <div className={"heading-container"}>
                    <h3 className={"heading"}>{probs.title}</h3>
                </div>
                <hr/>
                <div className={"content-container"}>
                    <span>{ probs.children }</span>
                </div>
                <ProjectTypes type={probs.type}></ProjectTypes>
            </div>
        </>
    )
}

export default ProjectSmallView;