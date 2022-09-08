import { useState, useEffect, useRef } from 'react';
import MyIntro from './intro';
import './introSection.css'

const IntroSection = () => {

    const [intro, setIntro] = useState('')
    const timer = useRef()

    const updateIntro = () => {
        setIntro(intro => {
            if (intro.length < MyIntro.length) return intro + MyIntro[intro.length];
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
        if (intro.length === MyIntro.length) clearInterval(timer.current)
    }, [intro]);

    return (<div className="IntroSection">
        <p className='Intro'>{intro}</p>
    </div>);
}

export default IntroSection;