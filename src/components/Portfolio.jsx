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
        <div className="selector container text-center mt-5">
          {/* <button className="btn btn-secondary me-2" value='' onClick={handleClickEvent}>All</button>
          <button className="btn btn-secondary me-2" value='web' onClick={handleClickEvent}>Web</button>
          <button className="btn btn-secondary me-2" value='game' onClick={handleClickEvent}>Game</button>
          <button className="btn btn-secondary me-2" value='graphic' onClick={handleClickEvent}>Graphic</button>
          <button className="btn btn-secondary" value='video' onClick={handleClickEvent}>Video</button> */}
          <div className="btn-group" role="group" aria-label="Selector Group">
            <button type="button" className="btn btn-tags text-white" value='' onClick={handleClickEvent}>All</button>
            <button type="button" className="btn btn-tags text-white" value='web' onClick={handleClickEvent}>Web</button>
            <button type="button" className="btn btn-tags text-white" value='game' onClick={handleClickEvent}>Game</button>
            <button type="button" className="btn btn-tags text-white" value='graphic' onClick={handleClickEvent}>Graphic</button>
            <button type="button" className="btn btn-tags text-white" value='video' onClick={handleClickEvent}>Video</button>
          </div>
        </div>
        <div className="app__Grid mt-5 d-grid">{portfolioItems}</div>
      </div>
      {portfolioPop}
    </section>
  )
}

export default Portfolio