import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
function Projects() {
  return (
    <BrowserRouter>
      <div className='projects' id="projects">
        <div className="container">
          <div className='projects-title' data-aos="zoom-out-right">My Projects</div>
          <div className="row">
            <div className="project col-sm-10 col-md-5 col-lg-5 text-center" data-aos="flip-left" data-aos-duration="1500">
              <h2>Restrunt</h2>
              <div className="text">restrunt website with the location</div>
              <a href="https://delicious.onrender.com/" target="_blank" rel="noopener noreferrer">Visit</a>
            </div>
            <div className="project col-sm-10 col-md-5 col-lg-5 text-center" data-aos="flip-left" data-aos-duration="1500">
              <h2>e commerce website</h2>
              <div className="text">e commerce website made with vite and tailwind, and also framer motion</div>
              <a href="https://luxury-t0tu.onrender.com" target="_blank" rel="noopener noreferrer">Visitit</a>
            </div>
            <div className="add col-sm-10 col-md-5 col-lg-5 text-center" data-aos="flip-left" data-aos-duration="1500">
              <Link to="#contact" smooth>
                <i className='fa-solid fa-plus'></i>
                <div className="text">add to my projects</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Projects
