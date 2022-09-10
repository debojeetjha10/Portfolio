import './projectCard.css'

const ProjectCard = ({ project }) => {
    return <div className='Project-Card'>
        <div className='Project-info'>
            <h3>{project.heading}</h3>
            <p>{project.description}</p>
        </div>
        <div className='Project-links'>
            {(project.link) ? <a href={project.link} > link </a> : null}
            <br />
            {(project.githubLink) ? <a href={project.githubLink} > See on Github </a> : null}
        </div>
    </div >
}

export default ProjectCard;
