import '../css/about.css'

function About () {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="title">
          <h2>About</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati animi quas, dolores soluta sunt at quibusdam ipsam impedit in adipisci quam eius eligendi ut reprehenderit autem corrupti nemo eum provident.</p>
        </div>
        <div className="detail d-flex">
          <div className="w-25 me-3">
            <img src="https://images.unsplash.com/photo-1533557188897-ef2bc7257ba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlcnNvbiUyMFNxdWFyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Images Avatar" className="w-100"/>
          </div>
          <div className="container">
            <h3>Atthawut Smith</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident esse aliquam ad optio quidem eveniet consequatur, tempore cupiditate soluta et.</p>
            <div className="d-flex">
              <div className="w-50">
                <ul className='list-unstyled'>
                  <li>
                    <i class="fa-solid fa-chevron-right"></i>
                    <strong>Birthday :</strong>
                    <span>2 Oct 1997</span>
                  </li>
                  <li>
                    <i class="fa-solid fa-chevron-right"></i>
                    <strong>Age :</strong>
                    <span>25</span>
                  </li>
                  <li>
                    <i class="fa-solid fa-chevron-right"></i>
                    <strong>Location :</strong>
                    <span>Bangkae, Bangkok</span>
                  </li>
                </ul>
              </div>
              <div className="w-50">
                <ul className='list-unstyled'>
                  <li>
                    <i class="fa-solid fa-chevron-right"></i>
                    <strong>Phone :</strong>
                    <span>(+66)90-041-0409</span>
                  </li>
                  <li>
                    <i class="fa-solid fa-chevron-right"></i>
                    <strong>E-mail :</strong>
                    <span>bleach_uekiza99@hotmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About