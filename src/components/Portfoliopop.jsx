import { useState } from 'react';
import '../css/portfoliopop.css'

function Portfoliopop(props) {
  const { portfolio, onClickClose } = props;
  const [ imageBigShow, setImageBigShow ] = useState(
    () => {
      if (portfolio.images.length == 0) {
        return "https://placehold.co/600x400?text=No+Images"
      } else {
        return portfolio.images[0]
      }
    }
  )

  const onClickImageToShow = (e) => {
    setImageBigShow(e.target.src)
  }

  return(
    <div className="portfolio__pop">
      <div className="portfolio__bg" onClick={onClickClose}></div>
      <div className="portfolio__content w-75 h-75 p-4">
        <i className="fa-solid fa-xmark cursor-pointer w-100 text-end" onClick={onClickClose}></i>
        <div className="main d-flex">
          <div className="portfolio__images w-75 me-5">
            <div className="big__images text-center">
              <img src={imageBigShow} alt=""/>
            </div>
            <div className="slider d-flex mt-4">
              {portfolio.images.map(img => (
                <img className='me-2' src={img} alt="" onClick={onClickImageToShow}/>
              ))}
            </div>
          </div>
          <div className="right w-25">
            <h1>{portfolio.title}</h1>
            <p>{portfolio.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfoliopop