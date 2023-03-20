import MYPROJECTS from './data';
import ProjectCard from '../projectCard/projectCard';
import './projects.css'
import '../../styles/buttons/right-left-arrow.css'
import { useState } from 'react';
import React from 'react'

const getClassName = (idx, currMainIdx) => {
    if (idx === currMainIdx) return "Project2";
    if (currMainIdx === 0 && idx === MYPROJECTS.length - 1) return "Project1";
    if (currMainIdx === MYPROJECTS.length - 1 && idx === 0) {
        return "Project3";
    }
    if (idx === currMainIdx - 1) return "Project1";
    if (idx === currMainIdx + 1) return "Project3";
    return "";
}


const Projects = () => {
    const [projectIdx, setProjectIdx] = useState(0)
    return <>
        <button className="left-arrow" onClick={() => setProjectIdx((projectIdx) => (projectIdx === 0) ? MYPROJECTS.length - 1 : projectIdx - 1)}>&#60;</button>
        <button className='right-arrow' onClick={() => setProjectIdx((projectIdx) => (projectIdx === MYPROJECTS.length - 1) ? 0 : projectIdx + 1)}>&#62;</button>

        {
            MYPROJECTS.map((projects, idx) => <div key={projects.heading} className={"Projects-div " + getClassName(idx, projectIdx)}>
                <ProjectCard project={MYPROJECTS[idx]} />
            </div>)
        }
    </>

}


export default Projects;