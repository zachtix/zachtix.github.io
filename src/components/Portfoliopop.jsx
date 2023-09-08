import '../css/portfoliopop.css'

function Portfoliopop(props) {
  const { portfolio, onClickClose } = props;
  return(
    <div className="portfolio__pop">
      <div className="portfolio__bg" onClick={onClickClose}></div>
      <div className="portfolio__content w-75 h-75 p-4">
        <i className="fa-solid fa-xmark cursor-pointer w-100 text-end" onClick={onClickClose}></i>
        <div className="main d-flex">
          <div className="portfolio__images d-flex w-75">
            {portfolio.images.map(img => (
              // <li key={user.id}>
              //   {user.name}
              // </li>
              <img className='me-2' src={img} alt="" />
            ))}
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