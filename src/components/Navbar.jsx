import '../css/navbar.css'
import imgPerson from '../assets/images/imgPerson.jpg'

function Navbar() {
  return(
    <header id="header" className='d-none d-md-block'>
      {/* <div className="d-flex flex-column">
        <div className="profile mt-5 mx-auto">
          <img src={imgPerson} className="img-fluid img__Person rounded-circle" alt="Images Person" />
        </div>
        <h1 className='text-light mt-3 mx-auto fs-5'>
          <a href="#" className='link-light text-decoration-none'>
            Atthawut Smith
          </a>
        </h1>
      </div> */}
      <nav className="navbar p-3" id="navbar">
        <ul className='list-unstyled'>
          <li className='nav-item mt-3'>
            <a href="#home" className='nav-link link-secondary active'>
              <i className="fa-solid fa-house me-2"></i>
              <span>Home</span>
            </a>
          </li>
          <li className='nav-item mt-3'>
            <a href="#about" className='nav-link link-secondary'>
              <i className="fa-solid fa-user me-2"></i>
              <span>About</span>
            </a>
          </li>
          <li className='nav-item mt-3'>
            <a href="#skills" className='nav-link link-secondary'>
              <i class="fa-solid fa-screwdriver-wrench me-2"></i>
              <span>Skills</span>
            </a>
          </li>
          <li className='nav-item mt-3'>
            <a href="#history" className='nav-link link-secondary'>
            <i className="fa-solid fa-file me-2"></i>
              <span>History</span>
            </a>
          </li>
          <li className='nav-item mt-3'>
            <a href="#portfolio" className='nav-link link-secondary'>
              {/* <i className="fa-solid fa-folder me-2"></i> */}
              <i className="fa-solid fa-briefcase me-2"></i>
              <span>Portfolio</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar