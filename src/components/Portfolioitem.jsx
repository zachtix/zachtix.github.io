import '../css/portfolioitem.css'

function Portfolioitem(props) {
  const { portfolio } = props;
  return (
    <div className="portfolio__Item">
      <div className="title">
        <h4>{portfolio.title}</h4>
      </div>
      <img src={portfolio.thumbnailUrl} alt="" />
      {/* {portfolio.images.map((i) => {
        <img src={i} alt="" />
      })} */}
    </div>
  );
}

export default Portfolioitem