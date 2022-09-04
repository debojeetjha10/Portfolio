import { useState, useEffect, useRef } from 'react';
import './introSection.css'

const IntroSection = () => {
    const fullIntro = "This is Debojeet, a passionate software Developer with experience in Web and Mobile Development.";

    const [intro, setIntro] = useState('')
    const timer = useRef()

    const updateIntro = () => {
        console.log("I am doing");
        setIntro(intro => {
            if (intro.length < fullIntro.length) return intro + fullIntro[intro.length];
            return intro;
        })
    }

    useEffect(() => {
        timer.current = setInterval(updateIntro, 50);
        return () => {
            clearInterval(timer.current);
        }
    }, []);

    useEffect(() => {
        if (intro.length === fullIntro.length) clearInterval(timer.current)
    }, [intro]);

    return (<div className="IntroSection">
        <p className='Intro'>{intro}</p>
    </div>);
}

export default IntroSection;