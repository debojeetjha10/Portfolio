import MYEXPERIENCES from './data';
import './experiences.css'
import { useState } from 'react';
import ExperienceCard from '../experiencesCard/experiencesCard';

const getClassName = (idx, currMainIdx) => {
    if (idx === currMainIdx) return "Experience2";
    if (currMainIdx === 0 && idx === MYEXPERIENCES.length - 1) return "Experience1";
    if (currMainIdx === MYEXPERIENCES.length - 1 && idx === 0) {
        return "Experience3";
    }
    if (idx === currMainIdx - 1) return "Experience1";
    if (idx === currMainIdx + 1) return "Experience3";
    return "";
}


const Experiences = () => {
    const [experienceIdx, setExperienceIdx] = useState(0)
    return <>
        <button className="left-arrow" disabled={experienceIdx <= 0} onClick={() => setExperienceIdx((experienceIdx) => (experienceIdx === 0) ? MYEXPERIENCES.length - 1 : experienceIdx - 1)}>&#60;</button>
        <button className='right-arrow' disabled={experienceIdx >= MYEXPERIENCES.length - 1} onClick={() => setExperienceIdx((experienceIdx) => (experienceIdx === MYEXPERIENCES.length - 1) ? 0 : experienceIdx + 1)}>&#62;</button>

        {
            MYEXPERIENCES.map((experiences, idx) => <div key={experiences.heading} className={"experiences-div " + getClassName(idx, experienceIdx)}>
                <ExperienceCard experience={experiences} />
            </div>)
        }
    </>

}


export default Experiences;