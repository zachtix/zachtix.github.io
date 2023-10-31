import '../css/history.css'

function History() {
  return (
    <section className="history pt-5 mx-5 pb-5 border-bottom" id="history">
      <div className="container">
        <div className="title">
          <h2>History</h2>
          <div className="history__Content d-flex mt-5">
            <div className="edu w-50">
              <h3>Degree Education</h3>
              <h5>Bangkok Universuty (2016-2020)</h5>
              <h6>School of Digital Media & Cinematic Arts</h6>
              <p>Major Editor, Minor VFX</p>
            </div>
            <div className="work">
              <h3>Work Experience</h3>
              <h5>Series: Mother (2020)</h5>
              <p><i className="fa-solid fa-chevron-right me-2"></i>Loader Freelance</p>
              <h5>Series: En of love (2020)</h5>
              <p><i className="fa-solid fa-chevron-right me-2"></i>Loader Freelance</p>
              <h5>54 Niwat Auto Car co.Ltd (2021 Mar - 2023 Sep)</h5>
              <p><i className="fa-solid fa-chevron-right me-2"></i>Editor, Graphic, Admin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default History