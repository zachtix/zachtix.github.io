import { useState } from 'react';
import '../css/portfolioitem.css'

function Portfolioitem(props) {
  const { portfolio, onPortfolioClick } = props;

  const [ thumImg, setThumImg ] = useState(
    () => {
      if (portfolio.thumbnailUrl == 0) {
        return "https://placehold.co/600x400?text=No+Images"
      } else {
        return portfolio.thumbnailUrl
      }
    }
  )

  return (
    <div className="portfolio__Item" onClick={() => onPortfolioClick(portfolio)}>
      <div className="title">
        <h4>{portfolio.title}</h4>
      </div>
      <img src={thumImg} alt="" />
    </div>
  );
}

export default Portfolioitem