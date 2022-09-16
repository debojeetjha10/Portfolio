import './projectCard.css'
import githubLogoPNG from './images/GitHub-Mark-32px.png'
import browserLOGO from './images/browser.png'

const ProjectCard = ({ project }) => {
    return <div className='Project-Card'>
        <div className='Project-info'>
            <h3>{project.heading}</h3>
            {project.technologies ? <h4>{project.technologies.join(" || ")}</h4> : null}
            <p>{project.description}</p>
        </div>
        <div className='Project-links'>
            {(project.link) ? <div> <a href={project.link} > <img src={browserLOGO} alt="Browser Logo" /> </a></div> : null}
            {(project.githubLink) ? <div> <a href={project.githubLink} ><img src={githubLogoPNG} alt="Github Logo" /></a> </div> : null}
        </div>
    </div >
}

export default ProjectCard;
