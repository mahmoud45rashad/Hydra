import React, { useEffect } from 'react'
import { Link } from 'react-scroll';
import  { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube , faFacebook, faWhatsapp,faXTwitter } from '@fortawesome/free-brands-svg-icons';
import loge from '../../assets/images/loge2.png';
import '../Nav/Nav.css';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { useTranslation } from 'react-i18next';



const Navba = () => {
  const [show, setShow] = useState(false);
  const { t, i18n } = useTranslation(); // استخدام useTranslation مرة واحدة فقط
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fixedMenu, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // الحصول على موضع التمرير
      if (scrollPosition > 100) { // إذا كان التمرير أكثر من 100px
        setIsScrolled(true); // إضافة الكلاس
      } else {
        setIsScrolled(false); // إزالة الكلاس
      }
    };

    window.addEventListener('scroll', handleScroll); // إضافة مستمع للتمرير

    // تنظيف المستمع عند الخروج من المكون
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <>
        <nav className="nav-main">
        <div className="container-lg">
            <div className="row">
                <div className="col-4">
                  <ul className="nav-social">
                    <li href="#home"><FontAwesomeIcon icon={faYoutube} /></li>
                    <li href="https://www.facebook.com/HydraMall7/"><FontAwesomeIcon icon={faFacebook} /></li>
                    <li href="#link"><FontAwesomeIcon icon={faWhatsapp} /></li>
                    <li href="#link"><FontAwesomeIcon icon={faXTwitter} /></li>
                  </ul>
                </div>
                <div className="col-8">
                <div className="contact" dir="ltr">
                        <a href="tel:0 104 050 7850"><FontAwesomeIcon icon={faPhone} /> +20 104 050 7850</a>
                        <a href="mailto:hydramall230@gmail.com"><FontAwesomeIcon icon={faLocationDot} /> hydramall230@gmail.com </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    <Navbar expand="lg" className={`${fixedMenu ? 'fixed-menu' : ''} nav-lg`}>
    <Container>
    <Navbar.Brand href="#home" className='en'><img src={loge} alt=''/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="link-nav">
        <Link className='nav-link'to="home" spy={true} smooth={true} offset={-150} duration={100} >{t('Home')}</Link>
      <Link className='nav-link'to="about" spy={true} smooth={true} offset={-150} duration={100} >{t('About')}</Link>
      <Link className='nav-link'to="FAQ" spy={true} smooth={true} offset={-150} duration={100} > {t('FAQ')}</Link>
      <Link className='nav-link'to="contact" spy={true} smooth={true} offset={-150} duration={100}  > {t('Contact Us')}
      </Link>
      { i18n.language === 'en' &&<button className='nav-link' onClick={() => {i18n.changeLanguage("ar")}}>عربي</button>}
      { i18n.language === 'ar' && <button className='nav-link' onClick={() => {i18n.changeLanguage("en") }}>English</button>}
        </Nav>
        
      </Navbar.Collapse>
      <Navbar.Brand href="#home" className='ar'><img src={loge}  alt=''/></Navbar.Brand>
    </Container>
  </Navbar>

  <Container className='nav-md'>
  <div className='logo-barnd'><img src={loge} alt=''/></div>
  <div className='nav-md-link'>
  <Nav className="link-nav">
        <Link className='nav-link'to="home" spy={true} smooth={true} offset={-150} duration={100} >{t('Home')}</Link>
      <Link className='nav-link'to="about" spy={true} smooth={true} offset={-150} duration={100} >{t('About')}</Link>
      <Link className='nav-link'to="FAQ" spy={true} smooth={true} offset={-150} duration={100} > {t('FAQ')}</Link>
      <Link className='nav-link'to="contact" spy={true} smooth={true} offset={-150} duration={100}  > {t('Contact Us')}
      </Link>
      { i18n.language === 'en' &&<button className='nav-link' onClick={() => {i18n.changeLanguage("ar")}}>عربي</button>}
      { i18n.language === 'ar' && <button className='nav-link' onClick={() => {i18n.changeLanguage("en") }}>English</button>}
        </Nav>
  </div>
  </Container>
  <div className='nav-mobile'>
    <Container>
<Navbar expand="lg" sticky='top' >
    
        <Navbar.Brand href="#home"><img src={loge} alt=''/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">{t('Home')}</Nav.Link>
            <Nav.Link href="#about">{t('About')}</Nav.Link> 
            <Nav.Link href="#FAQ">{t('FAQ')}</Nav.Link> 
            <Nav.Link href="#contact">{t('Contact Us')}</Nav.Link> 
            { i18n.language === 'en' && <button className='nav-link' onClick={() => { i18n.changeLanguage("ar") }}>عربي</button>}
            { i18n.language === 'ar' && <button className='nav-link' onClick={() => { i18n.changeLanguage("en") }}>English</button>}
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>

    </Container>
  </div>
  </>
  )
}

export default Navba;