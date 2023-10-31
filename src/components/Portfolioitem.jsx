import { useState, useEffect } from 'react';
import '../css/portfolioitem.css'

function Portfolioitem(props) {
  const { portfolio, onPortfolioClick } = props;


  // บัคเมื่อกดเปลี่ยน tag รูป Thumbnail ไม่เปลี่ยนตาม
  // const [ thumImg, setThumImg ] = useState(
  //   () => {
  //     if (portfolio.thumbnailUrl == null) {
  //       return "https://placehold.co/600x400?text="+portfolio.title.toString("utf8")
  //     } else if (portfolio.typeContent == 'video') {
  //       return "https://img.youtube.com/vi/"+portfolio.images+"/0.jpg"
  //     } else {
  //       return portfolio.thumbnailUrl
  //     }
  //   }
  // )

  const [ thumImg, setThumImg ] = useState('')
  useEffect(() => {
    if (portfolio.typeContent == 'video') {
      setThumImg ("https://img.youtube.com/vi/"+portfolio.images+"/0.jpg")
    } else if (portfolio.thumbnailUrl == null) {
      setThumImg ("https://placehold.co/600x400?text=No+Image")
    } else {
      setThumImg (portfolio.thumbnailUrl)
    }
  });

  return (
    <div className="portfolio__Item shadow-lg rounded" onClick={() => onPortfolioClick(portfolio)}>
      <div className="portfolio__Title">
        <h4>{portfolio.title}</h4>
      </div>
      <img src={thumImg} alt="" />
    </div>
  );
}

export default Portfolioitem