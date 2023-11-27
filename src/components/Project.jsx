import { useState, useEffect } from "react"
import Projectitem from "./Projectitem";
import axios, { Axios } from 'axios';
import '../css/project.css'
import Projectpop from './Projectpop';



function Projects() {
  const [ projects, setProjects ] = useState([]);
  useEffect(() => {
    axios.get('http://45.91.133.158:8000/projectitems')
    .then((res) => {
      setProjects(res.data);
    });
  }, []);

  const handleClickEvent = (e)=> {
    e.preventDefault();
    setSearchTags(e.target.value)
  }

  const [selectedProject, setSelectedProject] = useState(null);
  function onProjectOpenClick(project) {
    setSelectedProject(project);
  }
  function onProjectCloseClick() {
    setSelectedProject(null);
  }


  const [searchtags, setSearchTags] = useState('')
  const projectItems = projects
    .filter(project => {
      return project.tag.includes(searchtags);
    })
    .map((project, index) => {
      return <Projectitem key={index} project={project} onProjectClick={onProjectOpenClick} />;
    });

  let projectPop = null;
  if (!!selectedProject) {
    projectPop = <Projectpop project={selectedProject} onClickClose={onProjectCloseClick} />;
  }

  return (
    <section className="project mt-5 mb-5" id="project">
      <div className="container">
        <div className="title">
          <h2>Project</h2>
        </div>
        <div className="selector container text-center mt-5">
          <div className="btn-group" role="group" aria-label="Selector Group">
            <button type="button" className="btn btn-tags text-white" value='' onClick={handleClickEvent}>All</button>
            <button type="button" className="btn btn-tags text-white" value='web' onClick={handleClickEvent}>Web</button>
            <button type="button" className="btn btn-tags text-white" value='game' onClick={handleClickEvent}>Game</button>
            <button type="button" className="btn btn-tags text-white" value='graphic' onClick={handleClickEvent}>Graphic</button>
            <button type="button" className="btn btn-tags text-white" value='video' onClick={handleClickEvent}>Video</button>
          </div>
        </div>
        <div className="app__Grid mt-5 d-grid">{projectItems}</div>
      </div>
      {projectPop}
    </section>
  )
}

export default Projects