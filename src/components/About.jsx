import '../css/about.css'
import imgPerson from '../assets/images/imgPerson.jpg'

function About () {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="title">
          <h2>About</h2>
          {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati animi quas, dolores soluta sunt at quibusdam ipsam impedit in adipisci quam eius eligendi ut reprehenderit autem corrupti nemo eum provident.</p> */}
        </div>
        <div className="detail d-flex">
          <div className="w-25 me-3">
            <img src={imgPerson} alt="Images Avatar" className="w-100 rounded"/>
          </div>
          <div className="container">
            <h3>Atthawut Smith</h3>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident esse aliquam ad optio quidem eveniet consequatur, tempore cupiditate soluta et.</p> */}
            <div className="d-flex">
              <div className="w-50">
                <ul className='list-unstyled'>
                  <li>
                    <i className="fa-solid fa-chevron-right"></i>
                    <strong className='ms-2'>Birthday :</strong>
                    <span className='ms-2'>2 Oct 1997</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-chevron-right"></i>
                    <strong className='ms-2'>Age :</strong>
                    <span className='ms-2'>25</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-chevron-right"></i>
                    <strong className='ms-2'>Location :</strong>
                    <span className='ms-2'>Bangkae, Bangkok</span>
                  </li>
                </ul>
              </div>
              <div className="w-50">
                <ul className='list-unstyled'>
                  <li>
                    <i className="fa-solid fa-chevron-right"></i>
                    <strong className='ms-2'>Phone :</strong>
                    <span className='ms-2'>(+66)90-041-0409</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-chevron-right"></i>
                    <strong className='ms-2'>E-mail :</strong>
                    <span className='ms-2'>bleach_uekiza99@hotmail.com</span>
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