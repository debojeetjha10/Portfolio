import './Projects.css'
function onClick() {
    var project1ClassList = document.getElementsByClassName("Project1").item(0).classList;
    var project2ClassList = document.getElementsByClassName("Project2").item(0).classList;
    var project3ClassList = document.getElementsByClassName("Project3").item(0).classList;

    project3ClassList.remove("Project3");
    project3ClassList.add("Project2");

    project1ClassList.remove("Project1");
    project1ClassList.add("Project3");

    project2ClassList.remove("Project2");
    project2ClassList.add("Project1");
}

const Projects = () => {
    return <div className="Projects" onClick={onClick}>
        <div className="Project1 Project-card"><p>P1</p></div>
        <div className="Project2 Project-card"><p>p2</p></div>
        <div className="Project3 Project-card"><p>p3</p></div>
    </div>

}


export default Projects;