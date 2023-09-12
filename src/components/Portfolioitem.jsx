import { useState, useEffect } from 'react';
import '../css/portfolioitem.css'

function Portfolioitem(props) {
  const { portfolio, onPortfolioClick } = props;


  // บัคเมื่อกดเปลี่ยน tag รูป Thumbnail ไม่เปลี่ยนตาม
  const [ thumImg, setThumImg ] = useState(
    () => {
      if (portfolio.thumbnailUrl == null) {
        return "https://placehold.co/600x400?text=No+Image"
      } else {
        return portfolio.thumbnailUrl
      }
    }
  )

  return (
    <div className="portfolio__Item" onClick={() => onPortfolioClick(portfolio)}>
      <div className="portfolio__Title">
        <h4>{portfolio.title}</h4>
      </div>
      <img src={portfolio.thumbnailUrl} alt="" />
    </div>
  );
}

export default Portfolioitem