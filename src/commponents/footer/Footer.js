import React from 'react';
import '../footer/Footer.css';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import  image1  from '../../assets/images/facebook_5968764.png';
import  image2  from '../../assets/images/youtube_1384060.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
const Footer = () => {
    const { t } = useTranslation();
  return (
    <footer>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4 col-md-4'>
                    <div className='footer-about'>
                        <h5>About</h5>
                        <p>{t("aboutfooter")}.</p>
                    </div>
                    <ul className='footer-social'>
                            <li className='facebook'><a href='https://www.facebook.com/HydraMall7/'><img src={image1} alt=''/></a></li>
                            <li className='xtwitter'><a href='#Home'><FontAwesomeIcon icon={faXTwitter} /></a></li>
                            <li className='youtube'><a href='#Home'><img src={image2} alt=''/></a></li>
                            <li className='instagram'><a href='#Home'><FontAwesomeIcon icon={faInstagram} /></a></li>
                        </ul>
                </div>
                <div className='col-lg-4 col-md-3'>
                    <div className='footer-links'>
                        <h5>Quick links</h5>
                        <ul>
                            <li><span><FontAwesomeIcon icon={faArrowRightLong} /></span><Link to='home'spy={true} smooth={true} offset={-150} duration={100}>{t("Home")}</Link></li>
                            <li><span><FontAwesomeIcon icon={faArrowRightLong} /></span><Link to='about' spy={true} smooth={true} offset={-150} duration={100}>{t("About")}</Link></li>
                            <li><span><FontAwesomeIcon icon={faArrowRightLong} /></span><Link to='FAQ' spy={true} smooth={true} offset={-150} duration={100}>{t("FAQ")}</Link></li>
                            <li><span><FontAwesomeIcon icon={faArrowRightLong} /></span><Link to='contact' spy={true} smooth={true} offset={-150} duration={100}>{t("Contact Us")}</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='col-lg-4 col-md-5'>
                    <div className='footer-details'>
                        <h5>Contact Details</h5>
                        <ul>
                            <li>No. 70 - Al Mutamayez North of Madinah, in front of Badr City Metro Station, Badr City</li>
                            <li><span>Phone</span><b>:</b><a href='tel:01040507850'>+20 104 050 7850</a></li>
                            <li><span>Phone</span><b>:</b><a href='tel:01011990590'>+20 101 199 0590</a></li>
                            <li><span>Email</span><b>:</b><a href='mailto:hydramall230@gmail.com'>hydramall230@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer