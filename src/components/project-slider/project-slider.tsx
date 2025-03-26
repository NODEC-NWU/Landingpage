import "./project-slider.scss"
import IconButton from "../icon-button/icon-button.tsx";
import Button from "../button/Button.tsx";
import ProjectSmallView, {ProjectSmallViewProbs} from "../project-small-view/project-small-view.tsx";
import {useState} from "react";
import {ProjectType} from "../project-small-view/project-type.tsx";




function ProjectSlider() {

    const [selectedElement, setElement] = useState(0)

    const projects = useState<ProjectSmallViewProbs[]>([
        {title: "Mathefred", type: ProjectType.website, colors: ["#3A818B55", "#277D5855"], children:"Mit individuell anpassbarem Lernstoff, interaktiven Lernspielen sowie wöchentlicher Live-Nachhilfe fördert Mathefred nachhaltige Lernerfolge und unterstützt Schüler effektiv beim erlernen von Mathematik."},
        {title: "Reinecke", type: ProjectType.website, colors: ["#50C1EA55", "#FF720055"], children:"Test Description lorem ipsiumad asd ad d wsa sda"},
        {title: "Helmer Apotheken", type: ProjectType.website, colors: ["#00448855", "#EF782955"], children:"Test Description lorem ipsiumad asd ad d wsa sda"},
        {title: "Universec.", type: ProjectType.website, colors: ["#23EB7B55", "#1C202355"], children:"Test Description lorem ipsiumad asd ad d wsa sda"},
        {title: "Samba.bar", type: ProjectType.shop, colors: ["#89BC5C55", "#14181B55"], children:"Test Description lorem ipsiumad asd ad d wsa sda"},
    ])[0];

    function nextSlide() {
        let newElement = selectedElement;

        if(newElement >= projects.length-1) newElement = 0;
        else newElement++;

        setElement(newElement)
    }

    function previewsSlide() {
        let newElement = selectedElement;

        if(newElement <= 0) newElement = projects.length-1;
        else newElement--;

        setElement(newElement)
    }


    const selectedProjectElement = projects[selectedElement]

    return (
        <div className={"project-slider"}>
            <div className={"navigation"}>
                <IconButton onClick={previewsSlide!}>
                    <svg viewBox="0 0 46 79" xmlns="http://www.w3.org/2000/svg">
                        <path
                              d="M2.64153 44.0976C1.53955 42.9953 0.920502 41.5005 0.920502 39.9418C0.920502 38.3831 1.53955 36.8883 2.64153 35.786L35.8939 2.53364C36.4361 1.97222 37.0847 1.52441 37.8019 1.21635C38.519 0.908287 39.2903 0.74614 40.0708 0.739357C40.8513 0.732574 41.6253 0.881294 42.3477 1.17685C43.0701 1.4724 43.7264 1.90888 44.2783 2.46078C44.8303 3.0127 45.2667 3.66899 45.5623 4.39139C45.8578 5.11378 46.0066 5.88781 45.9998 6.6683C45.993 7.44878 45.8308 8.22011 45.5228 8.93726C45.2147 9.65441 44.7669 10.303 44.2055 10.8453L15.1089 39.9418L44.2055 69.0383C45.2762 70.147 45.8687 71.6318 45.8553 73.173C45.8419 74.7142 45.2237 76.1885 44.1339 77.2783C43.044 78.3682 41.5697 78.9864 40.0285 78.9998C38.4873 79.0132 37.0025 78.4207 35.8939 77.35L2.64153 44.0976Z"
                              fill="#F1A7C2"/>
                        <path
                              d="M2.64153 44.0976C1.53955 42.9953 0.920502 41.5005 0.920502 39.9418C0.920502 38.3831 1.53955 36.8883 2.64153 35.786L35.8939 2.53364C36.4361 1.97222 37.0847 1.52441 37.8019 1.21635C38.519 0.908287 39.2903 0.74614 40.0708 0.739357C40.8513 0.732574 41.6253 0.881294 42.3477 1.17685C43.0701 1.4724 43.7264 1.90888 44.2783 2.46078C44.8303 3.0127 45.2667 3.66899 45.5623 4.39139C45.8578 5.11378 46.0066 5.88781 45.9998 6.6683C45.993 7.44878 45.8308 8.22011 45.5228 8.93726C45.2147 9.65441 44.7669 10.303 44.2055 10.8453L15.1089 39.9418L44.2055 69.0383C45.2762 70.147 45.8687 71.6318 45.8553 73.173C45.8419 74.7142 45.2237 76.1885 44.1339 77.2783C43.044 78.3682 41.5697 78.9864 40.0285 78.9998C38.4873 79.0132 37.0025 78.4207 35.8939 77.35L2.64153 44.0976Z"
                              fill="#A8D8FF" fill-opacity="0.4"/>
                    </svg>
                </IconButton>
                <Button>Read More</Button>
                <IconButton onClick={nextSlide}>
                    <svg width="46" height="79" viewBox="0 0 46 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                              d="M43.4273 34.9024C44.5293 36.0047 45.1483 37.4995 45.1483 39.0582C45.1483 40.6169 44.5293 42.1117 43.4273 43.214L10.175 76.4664C9.63274 77.0278 8.98413 77.4756 8.26698 77.7837C7.54983 78.0917 6.7785 78.2539 5.99801 78.2606C5.21753 78.2674 4.4435 78.1187 3.72111 77.8232C2.99871 77.5276 2.34241 77.0911 1.7905 76.5392C1.23859 75.9873 0.802123 75.331 0.506567 74.6086C0.211012 73.8862 0.0622874 73.1122 0.0690696 72.3317C0.0758518 71.5512 0.238006 70.7799 0.546071 70.0627C0.854136 69.3456 1.30194 68.697 1.86336 68.1547L30.9599 39.0582L1.86336 9.96167C0.792616 8.85305 0.200138 7.36823 0.213531 5.82701C0.226923 4.28579 0.845114 2.8115 1.93496 1.72165C3.02481 0.631806 4.4991 0.013615 6.04032 0.000222207C7.58154 -0.0131705 9.06636 0.579307 10.175 1.65005L43.4273 34.9024Z"
                              fill="#F1A7C2"/>
                        <path
                              d="M43.4273 34.9024C44.5293 36.0047 45.1483 37.4995 45.1483 39.0582C45.1483 40.6169 44.5293 42.1117 43.4273 43.214L10.175 76.4664C9.63274 77.0278 8.98413 77.4756 8.26698 77.7837C7.54983 78.0917 6.7785 78.2539 5.99801 78.2606C5.21753 78.2674 4.4435 78.1187 3.72111 77.8232C2.99871 77.5276 2.34241 77.0911 1.7905 76.5392C1.23859 75.9873 0.802123 75.331 0.506567 74.6086C0.211012 73.8862 0.0622874 73.1122 0.0690696 72.3317C0.0758518 71.5512 0.238006 70.7799 0.546071 70.0627C0.854136 69.3456 1.30194 68.697 1.86336 68.1547L30.9599 39.0582L1.86336 9.96167C0.792616 8.85305 0.200138 7.36823 0.213531 5.82701C0.226923 4.28579 0.845114 2.8115 1.93496 1.72165C3.02481 0.631806 4.4991 0.013615 6.04032 0.000222207C7.58154 -0.0131705 9.06636 0.579307 10.175 1.65005L43.4273 34.9024Z"
                              fill="#A8D8FF" fill-opacity="0.4"/>
                    </svg>
                </IconButton>
            </div>
            <div className={"content-container"}>
                <ProjectSmallView title={selectedProjectElement.title} colors={selectedProjectElement.colors} type={selectedProjectElement.type}>
                    {selectedProjectElement.children}
                </ProjectSmallView>
            </div>
        </div>
    )

}

export default ProjectSlider;