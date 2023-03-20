import { useState } from "react";
import Experinences from "../experiences/experiences";
import Projects from "../projects/projects";
import SkillsSection from "../skillsSection/skillsSection";
import './bodySection.css'

const BodySection = () => {
    const [sectionIdx, setSectionIdx] = useState(0);
    return <div >
        <ul className="section-chooser">
            <li><div className={"body-section-button " + (sectionIdx === 0 ? "grey-background-transition" : "")} onClick={() => setSectionIdx(sectionIdx => 0)}><p>EXPERIENCES</p></div></li>
            <li><div className={"body-section-button " + (sectionIdx === 1 ? "grey-background-transition" : "")} onClick={() => setSectionIdx(sectionIdx => 1)}><p>PROJECTS</p></div></li>
            <li><div className={"body-section-button " + (sectionIdx === 2 ? "grey-background-transition" : "")} onClick={() => setSectionIdx(sectionIdx => 2)}><p>SKILLS</p></div></li>
            <li><div className={"body-section-button " + (sectionIdx === 3 ? "grey-background-transition" : "")} onClick={() => { setSectionIdx(sectionIdx => 3) }}><p>Education</p></div></li>
        </ul>
        <div className="body-section">
            {(sectionIdx === 0) ? <Experinences /> : null}
            {(sectionIdx === 1) ? <Projects /> : null}
            {(sectionIdx === 2) ? <SkillsSection /> : null}
            {(sectionIdx === 3) ? <p>Not Completed yet 🥹 [FYI: currently I am a final semester Engineering Grad student]</p> : null}
        </div>;

    </div>
}

export default BodySection;