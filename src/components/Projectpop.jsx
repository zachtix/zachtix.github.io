import { useState } from 'react';
import '../css/projectpop.css'

function Projectpop(props) {
  const { project, onClickClose } = props;
  const [ imageBigShow, setImageBigShow ] = useState(
    () => {
      if (project.contents=== null) {
        return "https://placehold.co/600x400?text=No+Image"
      } else {
        const contentArr = project.contents.split(',');
        return contentArr[0]
      }
    }
  )
  const [ sliderImages, setSliderImages ] = useState(
    () => {
      // console.log(project.contents);
      if (project.contents=== null) {
        return ["https://placehold.co/600x400?text=No+Image"]
      } else {
        const contentArr = project.contents.split(',');
        return contentArr
      }
    }
  )

  const onClickImageToShow = (e) => {
    setImageBigShow(e.target.src)
  }

  const [ btnGitHub, setBtnGitHub ] = useState(()=>{
    if (project.repo !== null) {
      return <p className='text-capitalize text-decoration-none'><strong>Repository : </strong><a href={project.repo} target='_blank' className='text-decoration-none'>Github</a></p>
    }
  })

  const [ btnLiveSite, setBtnLiveSite ] = useState(()=>{
    if (project.liveSite !== null) {
      return <p className='text-capitalize'><strong>Project URL: </strong><a href={project.liveSite} target='_blank' className='text-decoration-none'>Live Site</a></p>
    }
  })

  const contentShow = () => {
    if (project.typeContent === 'video') {
      return (
        <>
          <div className="main d-flex flex-column flex-sm-row">
            <div className="project__images w-100">
              <div className="big__images text-center">
                <iframe width="800" height="600" src={'https://www.youtube-nocookie.com/embed/'+project.contents} frameborder="0" allowfullscreen=""></iframe>
              </div>
            </div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="main d-flex flex-column flex-sm-row">
            <div className="project__images w-75 me-1">
              <div className="big__images text-center">
                <img src={imageBigShow} alt=""/>
              </div>
              <div className="slider d-flex mt-4">
                {sliderImages.map(img => (
                  <img className='me-2 shadow' src={img} alt="" onClick={onClickImageToShow}/>
                ))}
              </div>
            </div>
            <div className="right w-25 mt-3">
              <div className="showBtn shadow-lg p-3 rounded overflow-auto">
                <h4 className='border-bottom pb-3'>Project information</h4>
                <p className='text-capitalize pt-3'><strong>Category: </strong>{project.tag}</p>
                {btnLiveSite}
                {btnGitHub}
                <p className='description-box pt-3 px-2 border-top'>{project.description}</p>
              </div>
            </div>
          </div>
        </>
      )
    }
  }

  return(
    <div className="project__pop" key={project.id}>
      <div className="project__bg" onClick={onClickClose}></div>
      <div className="project__content rounded w-75 h-75 p-4">
        <div className="topProjectPop d-flex justify-content-between w-100">
          <h2>{project.title}</h2>
          <i className="fa-solid fa-xmark cursor-pointer d-flex align-items-center" onClick={onClickClose}></i>
        </div>
        {contentShow()}
      </div>
    </div>
  )
}

export default Projectpop