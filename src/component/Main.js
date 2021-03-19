import React from 'react';
import ReactDOm from 'react-dom';
import Moment from './Time'
import Project from './Project'

function Main() {
    return (
  
        <main>
          <section id="welcome-section">
            <div className="intro">
             <div>
              <p><Moment /></p>
              <h1>I'm Adewale </h1>
              <h2>a frontend developer</h2>
              
             </div>

             {/*
             <div>
             <img src='/AdewaleIMG.jpeg' className='myphoto' alt="author's picture"/>   
             </div>            
             */}
            </div>
          </section>

          <section id="projects" className=''>   
                <Project
                  name = "tech-page"
                  anchorUrl = "https://codepen.io/princehaybee/full/QWGqNjJ"
                  imgUrl = '/DOCUMENTATION.PNG'
                  title = 'documentation page'      
                />   

                <Project 
                  name = "tribute-page"
                  anchorUrl = "https://tribute2bashorun.netlify.app/"
                  imgUrl = "TRIBUTE.PNG"
                  title = 'Tribute Page'      
                /> 
                <Project 
                  name = "form-page"
                  anchorUrl = "https://codepen.io/princehaybee/full/OJbOOjq"
                  imgUrl = "FORM.PNG"
                  title = 'Form'      
                /> 
                <Project 
                  name = "landing-page"
                  anchorUrl = "https://codepen.io/princehaybee/full/MWbJZqj"
                  imgUrl = "LAND.PNG"
                  title = 'Landing Page'      
                />   
      </section>
          <section id="contact">
            <h1>I'm just a click away </h1>
            <h3>holla @ me</h3>
            <div className="icons">
              <li>
                <a href="https://wa.me/message/LV5FVUGQMTGBD1" target="_blank" className="whatsapp">
                  <i className="fab fa-whatsapp" />
                  <br />drop a text
                </a>
              </li>
              <li>
                <a href="https://twitter.com/bornriches" target="_blank" className="twitter">
                  <i className="fab fa-twitter" />
                  <br />send a tweet
                </a>
              </li>
              <li>
                <a href="mailto:tunmise1311@yahoo.com" target="_blank" className="envelope">
                  <i className="far fa-envelope" />
                  <br />send a mail
                </a>
              </li>
              <li>
                <a href="tel: +49-1521-7431500" target="_blank" className="mobile">
                  <i className="fas fa-mobile" />
                  <br />make the call
                </a>
              </li>
              <li>
                <a href="https://github.com/Adewale-Abiola" target="_blank" className="github" id="profile-link">
                  <i className="fab fa-github" />
                  <br />view my codes
                </a>
              </li>
            </div>
          </section>
        </main>
      );
}

  export default Main; 