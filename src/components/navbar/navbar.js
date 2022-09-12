import './navbar.css'

const Navbar = () => {

    return <div className='navbar'>
        <h1>Debojeet Jha</h1>
        <div className='profile-links'>
            <a href='https://www.linkedin.com/in/debojeetjha' target="new" className='links'>Linkdin</a>
            <a href='https://github.com/debojeetjha10' target="new" className='links lmargin2'>Github</a>
            <a href='https://leetcode.com/debojeetjha/' target="new" className='links lmargin2'>LeetCode</a>
        </div>
    </div>
}

export default Navbar;
