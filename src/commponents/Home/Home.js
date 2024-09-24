import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import  image1  from '../../assets/images/1 (5).png';
import  image5  from '../../assets/images/1 (4).png';
import  image6  from '../../assets/images/1 (2).jpeg';
import  image4  from '../../assets/images/1 (3).jpeg';
import  image3  from '../../assets/images/1 (2).jpeg';
import  image2  from '../../assets/images/1 (1).jpeg';
import '../Home/Home.css'
import { useTranslation} from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const {t} = useTranslation();

  return (
    <>
    <section id="home" className='home' >
    <Carousel fade>
      <Carousel.Item>
        <img src={image1} alt=''/>
        <Carousel.Caption>
          {/* <a className='carousel-read' href='https://example.com'>Read More</a> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image2} alt=''/>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image3} alt=''/>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image4} alt=''/>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image5} alt=''/>
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </section>
  
      <section id="about" className='about' >
        <div className='container'>
          <div className='row'>
          <div className='col-lg-7'>
          <h2>{t('Aboutheader')}</h2>
              <div className='about-text'>
                <ul>
                 <h3>{t('Abouttitle1')}</h3>
                  <li>
                   <span className='caretright'><FontAwesomeIcon icon={faCaretRight} /></span>
                   <span className='caretleft'><FontAwesomeIcon icon={faCaretLeft} /> </span> 
                 <p>{t('Abouttext')}</p> 
                  </li>
                  <li>
                   <span className='caretright'><FontAwesomeIcon icon={faCaretRight} /></span>
                   <span className='caretleft'><FontAwesomeIcon icon={faCaretLeft} /> </span> 
                 <p>{t('Abouttext')}</p> 
                  </li>
                </ul>
              </div>
              <div className='about-text'>
                <ul>
                 <h3>{t('Abouttitle2')}</h3>
                 <li>
                   <span className='caretright'><FontAwesomeIcon icon={faCaretRight} /></span>
                   <span className='caretleft'><FontAwesomeIcon icon={faCaretLeft} /> </span> 
                 <p>{t('Abouttext')}</p> 
                  </li>
                  <li>
                   <span className='caretright'><FontAwesomeIcon icon={faCaretRight} /></span>
                   <span className='caretleft'><FontAwesomeIcon icon={faCaretLeft} /> </span> 
                 <p>{t('Abouttext')}</p> 
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-lg-5'>
              <div className='image-about'>
              <img src={image1} alt=''/>
              <img src={image5} alt=''/>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section id="FAQ" className='faq'>
        <div className='container'>
        <h2>{t("FAQ1")}</h2>
        <div className='faq-accordion'>
          <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
          <Accordion.Header>{t("question1")}</Accordion.Header>
          <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
          <Accordion.Header>{t("question2")}</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
          <Accordion.Header>{t("question3")}</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
          <Accordion.Header>{t("question4")}</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
          </Accordion.Item>
          </Accordion>
        </div>
        </div>
      </section>

      <section id="contact" className='contact'>
        <div className='container'>
          <h2>{t("Contact Us")}</h2>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='contact-form'>
                <h4>{t('Send us a Message')}</h4>
                <form>
                  <input type='text' placeholder={t('Your Name')} className='form-control'/>
                  <input type='text' placeholder={t('Phone Number')} className='form-control'/>
                  <textarea  rows="5" cols="100" placeholder={t('Send Message')} className="form-control" name="message"></textarea>
                  <button type='submit' className='btn'>{t('Send Message')}</button>
                </form>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='contact-address'>
                <h4>{t('Contact Details')}</h4>
                <ul>
                  <li>No. 70 - Al Mutamayez North of Madinah, in front of Badr City Metro Station, Badr City</li>
                  <li ><span>{t('Phone')}</span><b>:</b><a href='tel:01040507850' dir='ltr'> +20 104 050 7850</a></li>
                  <li ><span>{t('Phone')}</span><b>:</b><a href='tel:01011990590' dir='ltr'> +20 101 199 0590</a></li>
                  <li><span>{t('Email')}</span><b>:</b><a href='mailto:hydramall230@gmail.com'>hydramall230@gmail.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='map'>
        <div className="map-main">

      <title>Google Maps Link</title>


      <h1>Click the link to view the location on Google Maps:</h1>

      <a href="https://maps.app.goo.gl/PEAj7Dag6F4FXF4a8" target="_blank" rel="noreferrer">Hydra Mall</a>



      </div>
      </section>
    
    </>
  )
}

export default Home