import '../css/navbar.css'

function Navbar() {
  return(
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile mt-5 mx-auto">
          <img src="https://images.unsplash.com/photo-1533557188897-ef2bc7257ba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlcnNvbiUyMFNxdWFyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className="img-fluid rounded-circle" alt="Images Avatar" />
        </div>
        <h1 className='text-light mt-3 mx-auto fs-5'>
          <a href="#" className='link-light text-decoration-none'>
            Atthawut Smith
          </a>
        </h1>
      </div>
      <nav className="navbar p-3" id="navbar">
        <ul className='list-unstyled'>
          <li className='nav-item mt-3'>
            <a href="" className='nav-link link-secondary active'>
              <i className="fa-solid fa-house me-2"></i>
              <span>Home</span>
            </a>
          </li>
          <li className='nav-item mt-3'>
            <a href="" className='nav-link link-secondary'>
              <i className="fa-solid fa-user me-2"></i>
              <span>About</span>
            </a>
          </li>
          <li className='nav-item mt-3'>
            <a href="" className='nav-link link-secondary'>
            <i className="fa-solid fa-file me-2"></i>
              <span>History</span>
            </a>
          </li>
          <li className='nav-item mt-3'>
            <a href="" className='nav-link link-secondary'>
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