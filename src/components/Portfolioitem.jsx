import { useState } from 'react';
import '../css/portfolioitem.css'

function Portfolioitem(props) {
  const { portfolio, onPortfolioClick } = props;

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
      <img src={thumImg} alt="" />
    </div>
  );
}

export default Portfolioitem