import '../css/portfolioitem.css'

function Portfolioitem(props) {
  const { portfolio, onPortfolioClick } = props;

  return (
    <div className="portfolio__Item" onClick={() => onPortfolioClick(portfolio)}>
      <div className="title">
        <h4>{portfolio.title}</h4>
      </div>
      <img src={portfolio.thumbnailUrl} alt="" />
    </div>
  );
}

export default Portfolioitem