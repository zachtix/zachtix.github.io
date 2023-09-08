import { useState, useEffect } from "react"
import Portfolioitem from "./Portfolioitem";
import axios from 'axios';
import portfolios from '../data/portfolios';
import '../css/portfolio.css'


function Portfolio() {

  const handleClickEvent = (e)=> {
    e.preventDefault();
    setSearchTags(e.target.value)
  }

  const [searchtags, setSearchTags] = useState('')
  const portfolioItems = portfolios
    .filter(portfolio => {
      return portfolio.tag.includes(searchtags);
    })
    .map((portfolio, index) => {
      return <Portfolioitem key={index} portfolio={portfolio} />;
    });

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="title">
          <h2>Portfolio</h2>
        </div>
        <div className="selector container text-center">
          <button className="btn btn-primary me-2" value='' onClick={handleClickEvent}>all</button>
          <button className="btn btn-primary me-2" value='web' onClick={handleClickEvent}>web</button>
          <button className="btn btn-primary" value='game' onClick={handleClickEvent}>game</button>
        </div>
        <div className="app__Grid">{portfolioItems}</div>
      </div>
    </section>
  )
}

export default Portfolio