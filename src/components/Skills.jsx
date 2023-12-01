import { useState, useEffect } from "react"
import axios, { Axios } from 'axios';
// import dataSkills from '../data/dataSkills'
import '../css/skills.css'
// import iconPython from '../assets/icons/icon-python_48x48.png'
// import iconJS from '../assets/icons/icon-javascript_48x48.png'
// import iconCS from '../assets/icons/icon-csharp_48x48.png'
// import iconPHP from '../assets/icons/icons8-php_48x48.png'
// import iconCSS from '../assets/icons/icon-css_48x48.png'
// import iconBS from '../assets/icons/icon-bs_48x48.png'
// import iconDocker from '../assets/icons/icon-docker_48x48.png'
// import iconGit from '../assets/icons/icon-git_48x48.png'
// import iconHTML from '../assets/icons/icon-html_48x48.png'
// import iconReact from '../assets/icons/icon-react_48x48.png'
// import iconSass from '../assets/icons/icon-sass_48x48.png'
// import iconPhotoshop from '../assets/icons/icon-ps_48x48.png'
// import iconIllustrator from '../assets/icons/icon-ai_48x48.png'
// import iconPremierePro from '../assets/icons/icon-pr_48x48.png'
// import iconAfterEffect from '../assets/icons/icon-ae_48x48.png'

function Skills() {
  const [ skills, setSkills ] = useState([]);
  useEffect(() => {
    axios.get('http://45.91.133.158:8000/skills')
    .then((res) => {
      setSkills(res.data);
      console.log(res.data);
    });
  }, []);

  // const imgIcon = {
  //   iconPython,
  //   iconJS,
  //   iconCS,
  //   iconPHP,
  //   iconCSS,
  //   iconBS,
  //   iconDocker,
  //   iconGit,
  //   iconHTML,
  //   iconReact,
  //   iconSass,
  //   iconPhotoshop,
  //   iconIllustrator,
  //   iconPremierePro,
  //   iconAfterEffect
  // }
  return (
    <section className="skills pt-5 pb-5 mx-5 border-bottom" id="skills">
      <div className="container">
        <div className="title">
          <h2>Skills</h2>
        </div>
        <div className="skillContents mt-5">
        {skills.map(i => {
          return (
            <div className={'skill-'+i.skill+' d-flex border-bottom m-3'}>
              <div className="first col-1 text-center">
                <img src={'./assets/icons/'+i.iconName+'.png'} alt={'icon '+i.skill} />
                <p className='fs-6'>{i.skill}</p>
              </div>
              <div className="second col-1 text-center border-start border-end mb-3">
                <p>{i.level}</p>
              </div>
              <div className="third col-10 ms-3">
                <p>{i.description}</p>
              </div>
            </div>
          )
        })}
        </div>
      </div>
    </section>
  )
}

export default Skills