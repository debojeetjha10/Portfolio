import { useEffect } from 'react';
import SKILLS from './skills';
import './skillsSection.css'
const addDelay = () => {
    var elements = document.getElementsByClassName('Skills-Card');
    for (let i = 0; i < elements.length; i++) {
        document.getElementById('Skills-Card' + i.toString()).classList.add('Skill-Card-Animation')
        document.getElementById('Skills-Card' + i.toString()).style.animationDelay = (i * 0.1).toString() + 's';
    }
}

const SkillsSection = () => {
    useEffect(addDelay, []);

    return (<div className='Skills-Section'>
        {
            SKILLS.map((item, idx) => {
                return <div key={item} id={'Skills-Card' + idx.toString()} className='Skills-Card'>
                    <h4>{item}
                    </h4>
                </div>
            })
        }
    </div>
    );
}

export default SkillsSection;