import { useState } from 'react';
import '../css/portfoliopop.css'

function Portfoliopop(props) {
  const { portfolio, onClickClose } = props;
  const [ imageBigShow, setImageBigShow ] = useState(
    () => {
      if (portfolio.images[0]=== null) {
        return "https://placehold.co/600x400?text=No+Image"
      } else {
        return portfolio.images[0]
      }
    }
  )
  const [ sliderImages, setSliderImages ] = useState(
    () => {
      if (portfolio.images[0]=== null) {
        return ["https://placehold.co/600x400?text=No+Image"]
      } else {
        return portfolio.images
      }
    }
  )

  const onClickImageToShow = (e) => {
    setImageBigShow(e.target.src)
  }

  const [ btnGitHub, setBtnGitHub ] = useState(()=>{
    if (portfolio.repo !== null) {
      // return  <a href={portfolio.repo} className='btn btn-primary' target='_blank'>Github Repo</a>
      return <p className='text-capitalize text-decoration-none'><strong>Repository : </strong><a href={portfolio.repo} target='_blank' className='text-decoration-none'>Github</a></p>
    }
  })

  const [ btnLiveSite, setBtnLiveSite ] = useState(()=>{
    if (portfolio.liveSite !== null) {
      // return  <a href={portfolio.liveSite} className='btn btn-secondary' target='_blank'>Live Site</a>
      return <p className='text-capitalize'><strong>Project URL: </strong><a href={portfolio.liveSite} target='_blank' className='text-decoration-none'>Live Site</a></p>
    }
  })

  const contentShow = () => {
    if (portfolio.typeContent === 'video') {
      return (
        <>
          <div className="main d-flex flex-column flex-sm-row">
            <div className="portfolio__images w-100">
              <div className="big__images text-center">
                <iframe width="800" height="600" src={'https://www.youtube-nocookie.com/embed/'+portfolio.images[0]} frameborder="0" allowfullscreen=""></iframe>
              </div>
            </div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="main d-flex flex-column flex-sm-row">
            <div className="portfolio__images w-75 me-1">
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
              {/* <h2>{portfolio.title}</h2> */}
              {/* <p>{portfolio.description}</p>
              <div className="showBtn d-flex justify-content-around shadow-lg p-3 rounded">
                <h4>Project information</h4>
                {btnLiveSite}
                {btnGitHub}
              </div> */}
              
              <div className="showBtn shadow-lg p-3 rounded">
                <h4 className='border-bottom pb-3'>Project information</h4>
                <p className='text-capitalize pt-3'><strong>Category: </strong>{portfolio.tag}</p>
                {/* <p className='text-capitalize'><strong>Project URL: </strong><a href={portfolio.liveSite} target='_blank'>Live Site</a></p> */}
                {btnLiveSite}
                {/* <p className='text-capitalize'><strong>Repository : </strong><a href={portfolio.repo} target='_blank'>Github</a></p> */}
                {btnGitHub}
                <p className='pt-3 px-2 border-top'>{portfolio.description}</p>
              </div>
            </div>
          </div>
        </>
      )
    }
  }

  return(
    <div className="portfolio__pop" key={portfolio.id}>
      <div className="portfolio__bg" onClick={onClickClose}></div>
      <div className="portfolio__content rounded w-75 h-75 p-4">
        {/* <i className="fa-solid fa-xmark cursor-pointer w-100 text-end bg-danger" onClick={onClickClose}></i> */}
        <div className="topPortfolioPop d-flex justify-content-between w-100">
          <h2>{portfolio.title}</h2>
          <i className="fa-solid fa-xmark cursor-pointer d-flex align-items-center" onClick={onClickClose}></i>
        </div>
        {contentShow()}
      </div>
    </div>
  )
}

export default Portfoliopop