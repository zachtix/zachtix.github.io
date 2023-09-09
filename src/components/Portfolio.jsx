import { useState, useEffect } from "react"
import Portfolioitem from "./Portfolioitem";
import axios from 'axios';
import portfolios from '../data/portfolios';
import '../css/portfolio.css'
import Portfoliopop from './Portfoliopop';


function Portfolio() {

  const handleClickEvent = (e)=> {
    e.preventDefault();
    setSearchTags(e.target.value)
  }

  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  function onPortfolioOpenClick(portfolio) {
    setSelectedPortfolio(portfolio);
  }
  function onPortfolioCloseClick() {
    setSelectedPortfolio(null);
  }


  const [searchtags, setSearchTags] = useState('')
  const portfolioItems = portfolios
    .filter(portfolio => {
      return portfolio.tag.includes(searchtags);
    })
    .map((portfolio, index) => {
      return <Portfolioitem key={index} portfolio={portfolio} onPortfolioClick={onPortfolioOpenClick} />;
    });

  let portfolioPop = null;
  if (!!selectedPortfolio) {
    portfolioPop = <Portfoliopop portfolio={selectedPortfolio} onClickClose={onPortfolioCloseClick} />;
  }

  return (
    <section className="portfolio mt-5 mb-5" id="portfolio">
      <div className="container">
        <div className="title">
          <h2>Portfolio</h2>
        </div>
        <div className="selector container text-center">
          <button className="btn btn-secondary me-2" value='' onClick={handleClickEvent}>All</button>
          <button className="btn btn-secondary me-2" value='web' onClick={handleClickEvent}>Web</button>
          <button className="btn btn-secondary" value='game' onClick={handleClickEvent}>Game</button>
        </div>
        <div className="app__Grid mt-5">{portfolioItems}</div>
      </div>
      {portfolioPop}
    </section>
  )
}

export default Portfolio