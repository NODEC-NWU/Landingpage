import {ProjectType} from "../project-type.tsx";
import "./project-types.scss"

class ProjectTypesProbs {
    public type:ProjectType = ProjectType.empty;
}

function ProjectTypes(probs: ProjectTypesProbs) {

    const className = probs.type.toString();

    return (
        <div className={`project-types ${className.toLowerCase()}`}>
            <p>{className}</p>
        </div>
    )
}

export default ProjectTypes;