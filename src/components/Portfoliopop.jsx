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
      return  <a href={portfolio.repo} className='btn btn-primary' target='_blank'>Github Repo</a>
    }
  })

  const [ btnLiveSite, setBtnLiveSite ] = useState(()=>{
    if (portfolio.liveSite !== null) {
      return  <a href={portfolio.liveSite} className='btn btn-secondary' target='_blank'>Live Site</a>
    }
  })

  return(
    <div className="portfolio__pop" key={portfolio.id}>
      <div className="portfolio__bg" onClick={onClickClose}></div>
      <div className="portfolio__content rounded w-75 h-75 p-4 ">
        <i className="fa-solid fa-xmark cursor-pointer w-100 text-end" onClick={onClickClose}></i>
        <div className="main d-flex flex-column flex-sm-row">
          <div className="portfolio__images w-75 me-5">
            <div className="big__images text-center">
              <img src={imageBigShow} alt=""/>
            </div>
            <div className="slider d-flex mt-4">
              {sliderImages.map(img => (
                <img className='me-2' src={img} alt="" onClick={onClickImageToShow}/>
              ))}
            </div>
          </div>
          <div className="right w-25">
            <h2>{portfolio.title}</h2>
            <p>{portfolio.description}</p>
            <div className="showBtn d-flex justify-content-around">
              
              {btnLiveSite}
              {btnGitHub}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfoliopop