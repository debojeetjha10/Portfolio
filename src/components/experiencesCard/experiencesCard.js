import './experiencesCard.css'

const ExperienceCard = ({ experience = {
    company: "",
    place: "",
    heading: "",
    points: [],
    description: ""
} }) => {
    return (<div className='experience-card'>
        <div className='experience-info'>
            <h3>{experience.heading}</h3>
            <h4>{experience.company}</h4>
            <h5>{experience.place}</h5>
            <p>{experience.description}</p>
        </div>
        <div>
            <ul className='experience-points'>
                {experience.points.map((item,idx) =>
                    <li key={idx}>{item} </li>
                )}
            </ul>
        </div>
    </div>);
}

export default ExperienceCard;