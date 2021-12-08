import "./about.css";
export default function About() {
  return (
    <div id="about" class="about">

  
    <div class="about-me container">

      <div class="section-title">
        <h2>About</h2>
        <p>Learn more about me</p>
      </div>

      <div class="row">
        <div class="col-lg-4" data-aos="fade-right">
          <img loading="lazy" src="assets/img/carlos-modified.png" class="img-fluid" alt=""/>
        </div>
        <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
          <h3>Ingeniero &amp; Desarrollador</h3>
          <p class="fst-italic">
            Ingeniero en Electrónica y Comunicaciones graduado de la Universidad Técnica de Ambato.
          </p>
          <div class="row">
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>8 Sept 1996</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>thingslearned.rf.gd</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+593 983592690</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Ambato, Ecuador</span></li>
              </ul>
            </div>
            <div class="col-lg-6">
              <ul>
                <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>25</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Ingeniero</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>corozco6489@gmail.com</span></li>
                <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Disponible</span></li>
              </ul>
            </div>
          </div>
          <p>
            Soy un estudiante de ingeniería en Electrónica y
            Comunicaciones, con ganas y motivación de
            aprender cosas nuevas en el campo laboral. Me
            considero una persona humilde con una alta
            capacidad de aprendizaje rápido en cualquier
            tarea de manera autodidactica. A continuación
            veras mi experiencia y habilidades.

          </p>
          <br/>
          <br/>
          <div class="btn curriculum">
            <a href="CarlosOrozco.pdf" class="btn btn-success" download="CarlosOrozco.pdf">Download CV</a>
          </div>
        </div>
      </div>

    </div>


    <div class="skills container">

      <div class="section-title">
        <h2>Skills</h2>
      </div>

      <div class="row skills-content">

        <div class="col-lg-6">

          <div class="progress">
            <span class="skill">Proteus <i class="val">60%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">Matlab <i class="val">60%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">LabVIEW <i class="val">55%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

        </div>

        <div class="col-lg-6">

          <div class="progress">
            <span class="skill">Python <i class="val">30%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">HTML , CSS <i class="val">50%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div class="progress">
            <span class="skill">JavaScript <i class="val">55%</i></span>
            <div class="progress-bar-wrap">
              <div class="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

        </div>

      </div>

    </div>
    <div class="interests container">

      <div class="section-title">
        <h2>Interests</h2>
      </div>

      <div class="row">
        <div class="col-lg-3 col-md-4">
          <div class="icon-box">
            <i class="ri-store-line" style={{color: '#ffbb2c'}}></i>
            <h3>CCNA</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
          <div class="icon-box">
            <i class="ri-bar-chart-box-line" style={{color: "#5578ff"}}></i>
            <h3>MIKROTIK</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
          <div class="icon-box">
            <i class="ri-calendar-todo-line" style={{color: "#e80368"}}></i>
            <h3>Computadoras</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
          <div class="icon-box">
            <i class="ri-paint-brush-line" style={{color: "#e361ff"}}></i>
            <h3>Diseño Web</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i class="ri-database-2-line" style={{color: "#47aeff"}}></i>
            <h3>Bases de Datos</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i class="ri-gradienter-line" style={{color: "#ffa76e"}}></i>
            <h3>Ciberseguridad</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i class="ri-file-list-3-line" style={{color: "#11dbcf"}}></i>
            <h3>Networking</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i class="ri-price-tag-2-line" style={{color: "#4233ff"}}></i>
            <h3>Programación</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i class="ri-anchor-line" style={{color: "#b2904f"}}></i>
            <h3>Fibra Optica</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i class="ri-disc-line" style={{color: "#b20969"}}></i>
            <h3>Cableado Estructurado</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i class="ri-base-station-line" style={{color: "#ff5828"}}></i>
            <h3>Wireless networks</h3>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 mt-4">
          <div class="icon-box">
            <i class="ri-fingerprint-line" style={{color: '#29cc61'}}></i>
            <h3>Inteligencia Artificial</h3>
          </div>
        </div>
      </div>

    </div>


  </div>
  );
}
