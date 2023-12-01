import '../css/about.css';
import imgPerson from '../assets/images/imgPerson.jpg';
import { useState, useEffect } from "react";
import axios, { Axios } from 'axios';

function About () {
  const [ personalData, setPersonalData ] = useState([]);
  const { name, birthday, age, location, phone, email } = personalData;
  useEffect(() => {
    console.log('fx');
    axios.get('http://45.91.133.158:8000/personaldata')
    .then((res) => {
      setPersonalData(res.data[0]);
    });
    if (localStorage.getItem('owner') !== 'true'){
      axios.get('https://api.ipify.org?format=json')
      .then((resIP)=>{
        axios.post('http://45.91.133.158:8000/access', {
          'ip':resIP.data.ip
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, []);
  return (
    <section className="about border-bottom mx-5 pb-5" id="about">
      <div className="container">
        <div className="title">
          <h2>About</h2>
          {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati animi quas, dolores soluta sunt at quibusdam ipsam impedit in adipisci quam eius eligendi ut reprehenderit autem corrupti nemo eum provident.</p> */}
        </div>
        <div className="detail d-flex mt-5">
          <div className="w-25 me-3">
            <img src={imgPerson} alt="Images Avatar" className="w-100"/>
          </div>
          <div className="container">
            <h3>{name}</h3>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident esse aliquam ad optio quidem eveniet consequatur, tempore cupiditate soluta et.</p> */}
            <div className="d-flex">
              <div className="w-50">
                <ul className='list-unstyled'>
                  <li>
                    <i className="fa-solid fa-chevron-right"></i>
                    <strong className='ms-2'>Birthday :</strong>
                    <span className='ms-2'>{birthday}</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-chevron-right"></i>
                    <strong className='ms-2'>Age :</strong>
                    <span className='ms-2'>{age}</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-chevron-right"></i>
                    <strong className='ms-2'>Location :</strong>
                    <span className='ms-2'>{location}</span>
                  </li>
                </ul>
              </div>
              <div className="w-50">
                <ul className='list-unstyled'>
                  <li>
                    <i className="fa-solid fa-chevron-right"></i>
                    <strong className='ms-2'>Phone :</strong>
                    <span className='ms-2'>{phone}</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-chevron-right"></i>
                    <strong className='ms-2'>E-mail :</strong>
                    <span className='ms-2'>{email}</span>
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