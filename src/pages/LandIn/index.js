import React, { useState,  useEffect } from 'react'
import { GrApple, GrAndroid } from 'react-icons/gr';
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { animateScroll as scroll } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa';
// -----------------------------------------------------------------------------
import history from '~/services/history';
import detective from '~/assets/LandIn/logos/detective02.svg'
import banner from '~/assets/LandIn/logos/banner.png'
import imageCompilation01 from '~/assets/LandIn/images/imageCompilation01.png'
import imageCompilation02 from '~/assets/LandIn/images/imageCompilation02.png'
import imageCompilation03 from '~/assets/LandIn/images/imageCompilation03.png'
import imageCompilation04 from '~/assets/LandIn/images/imageCompilation04.png'
import imageCompilation05 from '~/assets/LandIn/images/imageCompilation05.png'
import avatar01 from '~/assets/LandIn/avatars/avatar01.jpg'
import avatar02 from '~/assets/LandIn/avatars/avatar02.jpg'
import avatar03 from '~/assets/LandIn/avatars/avatar03.jpg'
import avatar04 from '~/assets/LandIn/avatars/avatar04.jpg'
import avatar05 from '~/assets/LandIn/avatars/avatar05.jpg'
import avatar06 from '~/assets/LandIn/avatars/avatar06.jpg'
import entrepreneur from '~/assets/LandIn/cards/entrepreneur01.jpg'
import officeworker from '~/assets/LandIn/cards/officeworker01.jpg'
import teacher from '~/assets/LandIn/cards/teacher01.jpg'
import parent from '~/assets/LandIn/cards/parent05.jpg'

import grandmahelper from '~/assets/LandIn/cards/grandmahelper01.jpg'
import freelancer from '~/assets/LandIn/cards/freelancer01.jpg'
import doctor from '~/assets/LandIn/cards/doctor01.jpg'
import babysitter from '~/assets/LandIn/cards/babysitter01.jpg'
import trainer from '~/assets/LandIn/cards/trainer01.jpg'
import grocery from '~/assets/LandIn/cards/grocery01.jpg'

import clipboardImg from '~/assets/LandIn/images/Clipboard.png'
import briefcaseImg from '~/assets/LandIn/images/Briefcase.png'

import footerLogo from '~/assets/detective/detective.svg';
import qrcodeios from '~/assets/LandIn/images/qrcodeios.png';
import qrcodeiosbr from '~/assets/LandIn/images/qrcodeiosbr.png';
import qrcodeandroid from '~/assets/LandIn/images/qrcodeandroid.png';
import { Container, NavLinks } from './styles'
// -----------------------------------------------------------------------------
export default function LandIn() {

  const { t, i18n } = useTranslation();
  const [scrollNav, setScrollNav] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggleMenu() {
    setToggleMenu(!toggleMenu)
    console.log(toggleMenu)
  }

  // console.log(i18n.translator.language);
  // console.log(scrollNav)

  // function to make NavBar transparent
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  // const toggleHome = () => {
  //   scroll.scrollToTop();
  // }

  // function handleSignIn() {
  //   history.push('/login');
  // }

  function handleSignUp() {
    history.push('/register');
  }

  function handleContact() {
    history.push('/contact');
  }

  function handlePrivacyEn() {
    history.push('/privacy');
  }

  function handlePrivacyPt() {
    history.push('/privacidade');
  }

  function handleTerms() {
    history.push('/terms');
  }

  function handleEula() {
    history.push('/eula');
  }
  // ---------------------------------------------------------------------------
  return (
    <Container>
    {/* Menu --------------------------------------------------------------*/}
      <ul className="body-menu"
        scrollNav={scrollNav}
        style={scrollNav ? {'background': '#1B2432'} : {'background': '#fff'}}
      >

        <NavLinks
          to="home"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
        >
          <div className="menu-li">{t('Home')}</div>
        </NavLinks>
        <NavLinks
          to="about"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
        >
          <div className="menu-li">{t('About')}</div>
        </NavLinks>
        <NavLinks
          to="app"
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
        >
          <div className="menu-li">{t('GetTheApp')}</div>
        </NavLinks>
        <li className="menu-li" onClick={() => handleContact()}>{t('Contact')}</li>
        <button
          className="menu-button"
          style={scrollNav ? {} : {'background': '#fff', 'border': 'none', 'cursor': 'alias'}}
          onClick={() => handleSignUp()}
        >{t('SignUp')}</button>
      </ul>

      <div
        className="mobile-icon"
        toggleMenu={toggleMenu}
        style={toggleMenu ? {'display': 'none'} : {'display': 'flex'}}
      >
        <FaBars onClick={handleToggleMenu}/>
      </div>
      <div className="mobile-menu-div" style={toggleMenu ? {'left': '10%'} : {'left': '100%'}}>
        <ul className="mobile-menu">
          <li className="menu-li cancel" onClick={handleToggleMenu}><FaTimes/></li>
          <NavLinks
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            <div className="menu-li">{t('Home')}</div>
          </NavLinks>
          <NavLinks
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            <div className="menu-li">{t('About')}</div>
          </NavLinks>
          <NavLinks
            to="app"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            <div className="menu-li">{t('GetTheApp')}</div>
          </NavLinks>
          <div className="menu-li" onClick={() => handleContact()}>{t('Contact')}</div>
          <button
            className="menu-button"
            onClick={() => handleSignUp()}
          >{t('SignUp')}</button>
        </ul>
      </div>
    {/* Hero --------------------------------------------------------------*/}
      <div className="body-div">
        <div className="hero-div" id="home">
          <div className="hero-header-div">
            <img className="header-logo-img" src={detective} alt="godtaskerFont"/>
            <img className="header-banner-img" src={banner} alt="godtaskerFont"/>
          </div>

          <div className="hero-body-div">
            <img className="hero-avatar-img first" src={avatar03} alt="Godtasker Avatar 01"/>
            <img className="hero-avatar-img second" src={avatar01} alt="Godtasker Avatar 02"/>
            <img className="hero-avatar-img third" src={avatar02} alt="Godtasker Avatar 03"/>

            <img className="hero-avatar-img fourth" src={avatar04} alt="Godtasker Avatar 04"/>
            <img className="hero-avatar-img fifth" src={avatar05} alt="Godtasker Avatar 05"/>
            <img className="hero-avatar-img sixth" src={avatar06} alt="Godtasker Avatar 06"/>

            <strong className="hero-strong">
              {t('CreateAndSend')}
            </strong>
            <div className="margin04"/>
            <strong className="hero-subtitle">
              {t('HelpThem')}
            </strong>
            <div className="margin08"/>
            <div className="margin08"/>
            <button className="hero-button" onClick={() => handleSignUp()}>
              {t('SignUpForFree')}
            </button>
            <div className="margin08"/>
            {/* <div className="margin08"/> */}

            <div className="qr-div">
              <p className="app-p">{t('AndGetTheApp')}</p>
              <div className="margin08"/>
              <div className="qr-bottom-div">
                <div className="apple-div">
                  <div className="app-title-div">
                    <GrApple size={32} color='#1B2432'/>
                      <div className="margin04"/>
                      <p className="app-p">
                        App Store
                      </p>
                  </div>
                  { i18n.translator.language === 'pt-BR'
                    ? (
                      <img className="qrcode-img" src={qrcodeiosbr} alt="ios qr-code"/>
                    )
                    : (
                      <img className="qrcode-img" src={qrcodeios} alt="ios qr-code"/>
                    )

                  }

                </div>
                <div className="android-div">
                  <a
                    href="https://play.google.com/apps/testing/com.gerentedashmobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="android-link"
                  >
                    <div className="app-title-div">
                      <GrAndroid size={32} color='#1B2432'/>
                        <div className="margin04"/>
                        <p className="app-p">
                          Google Play
                        </p>
                    </div>
                    <img className="qrcode-img" src={qrcodeandroid} alt="android qr-code"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    {/* Sub-Hero 01 ---------------------------------------------------------*/}
        <div className="sub-hero-div">
          <div className="sub-hero-01-div">
            {/* <img className="green-rectangle-img" src={greenRectangle}/> */}
            <div className="sub-hero-01-grid">
              <div className="background-icon-div">
                <img className="background-icon-img" src={clipboardImg} alt="clipboard"/>
              </div>
              <div className="sub-hero-01-wrapper">
                <img className="sub-hero-01-img" src={imageCompilation01} alt="Compilation 01"/>
                <div className="margin08"/>
                <div className="margin08"/>
                <div className="sub-hero-text-div">
                  <h3 className="sub-hero-title">
                    {t('NeedToGive')}
                  </h3>
                  <div className="margin04"/>
                  <p className="sub-hero-text">
                    {t('EasilyCreate')}
                </p>
                </div>
              </div>
            </div>

            <div className="sub-hero-01-grid">
              <div className="background-icon-div second">
                <img className="background-icon-img" src={briefcaseImg} alt="briefcase"/>
              </div>

              <div className="sub-hero-01-wrapper">
              <img className="sub-hero-01-img second" src={imageCompilation02} alt="Compilation 02"/>
                <div className="sub-hero-text-div second">
                  <div className="margin08"/>
                  <div className="margin08"/>
                  <h3 className="sub-hero-title">
                    {t('YouCanAlsoReceive')}
                  </h3>
                  <div className="margin04"/>
                  <p className="sub-hero-text">
                    {t('ItsImportant')}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
    {/* Sub-Hero 02 ---------------------------------------------------------*/}
        <div className="sub-hero-div">
          <div className="sub-hero-02-div" id="about">
            <div className="sub-hero-02-grid">
              <div className="sub-hero-01-wrapper">
                <img className="sub-hero-02-img" src={imageCompilation03} alt="Compilation 03"/>
                <div className="margin08"/>
                <div className="margin08"/>
                <div className="sub-hero-text-div">
                  <h3 className="sub-hero-title">
                    {t('KeepTrack')}
                  </h3>
                  <div className="margin04"/>
                  <p className="sub-hero-text">
                    {t('BothYourDelegated')}
                  </p>
                </div>
              </div>
            </div>
            <div className="sub-hero-02-grid">
              <div className="sub-hero-01-wrapper">
              <div className="margin08"/>
              <div className="margin08"/>
              <div className="margin08"/>
              <div className="margin08"/>
              <div className="margin08"/>
              <div className="margin08"/>
                <img className="sub-hero-02-img" src={imageCompilation04} alt="Compilation 04"/>
                <div className="margin08"/>
                <div className="margin08"/>
                <h3 className="sub-hero-title">
                  {t('Chat')}
                </h3>
                <div className="margin04"/>
                <p className="sub-hero-text">
                  {t('AChatFeature')}
                </p>
              </div>
            </div>
            <div className="sub-hero-02-grid">
              <div className="sub-hero-01-wrapper">
                <img className="sub-hero-02-img" src={imageCompilation05} alt="Compilation 05"/>
                <div className="margin08"/>
                <div className="margin08"/>
                <h3 className="sub-hero-title">
                  {t('ShowOff')}
                </h3>
                <div className="margin04"/>
                <p className="sub-hero-text">
                  {t('GetNoticed')}
                </p>
              </div>
            </div>
          </div>
        </div>
    {/* Sub-Hero 03 ---------------------------------------------------------*/}
        <div className="sub-hero-div">
          <div className="sub-hero-03-div">
            <strong className="sub-hero-04-strong">
              {t('ForTheBold')}
            </strong>
            <div className="revolver-wrapper">
              <div className="revolver-div">
                <div className="card-div">
                  <div className="card-avatar-div">
                    <img className="card-avatar-img entrepreneur" src={entrepreneur} alt="Entrepreneur"/>
                  </div>
                  <div className="margin08"/>
                  <div className="margin08"/>
                  <label className="card-label">{t('Entrepreneurs')}</label>
                </div>
                <div className="card-div">
                  <div className="card-avatar-div">
                    <img className="card-avatar-img officeworker" src={officeworker} alt="Office Worker"/>
                  </div>
                  <div className="margin08"/>
                  <div className="margin08"/>
                  <label className="card-label">{t('OfficeWorkers')}</label>
                </div>
                <div className="card-div">
                  <div className="card-avatar-div">
                    <img className="card-avatar-img teacher" src={teacher} alt="Teacher"/>
                  </div>
                  <div className="margin08"/>
                  <div className="margin08"/>
                  <label className="card-label">{t('Teachers')}</label>
                </div>
                <div className="card-div">
                  <div className="card-avatar-div">
                    <img className="card-avatar-img parent" src={parent} alt="Parent"/>
                  </div>
                  <div className="margin08"/>
                  <div className="margin08"/>
                  <label className="card-label">{t('Parents')}</label>
                </div>
                <div className="card-div">
                  <div className="card-avatar-div">
                    <img className="card-avatar-img grandmahelper" src={grandmahelper} alt=""/>
                  </div>
                  <div className="margin08"/>
                  <div className="margin08"/>
                  <label className="card-label ">{t('GrandmaHelpers')}</label>
                </div>
                <div className="card-div">
                  <div className="card-avatar-div">
                    <img className="card-avatar-img freelancer" src={freelancer} alt=""/>
                  </div>
                  <div className="margin08"/>
                  <div className="margin08"/>
                  <label className="card-label">{t('Freelancers')}</label>
                </div>
                <div className="card-div">
                  <div className="card-avatar-div">
                    <img className="card-avatar-img grocery" src={doctor} alt=""/>
                  </div>

                  <div className="margin08"/>
                  <div className="margin08"/>
                  <label className="card-label">{t('Doctors')}</label>
                </div>
                <div className="card-div">
                  <div className="card-avatar-div">
                    <img className="card-avatar-img babysitter" src={babysitter} alt=""/>
                  </div>
                  <div className="margin08"/>
                  <div className="margin08"/>
                  <label className="card-label">{t('Babysitters')}</label>
                </div>
                <div className="card-div">
                  <div className="card-avatar-div">
                    <img className="card-avatar-img trainer" src={trainer} alt=""/>
                  </div>

                  <div className="margin08"/>
                  <div className="margin08"/>
                  <label className="card-label">{t('Trainers')}</label>
                </div>
                <div className="card-div">
                  <div className="card-avatar-div">
                    <img className="card-avatar-img grocery" src={grocery} alt=""/>
                  </div>

                  <div className="margin08"/>
                  <div className="margin08"/>
                  <label className="card-label">{t('ToDo')}</label>
                </div>

                <div className="card-div">
                  <div className="card-avatar-div">
                    <img className="card-avatar-img entrepreneur" src={entrepreneur} alt=""/>
                  </div>
                  <div className="margin08"/>
                  <div className="margin08"/>
                  <label className="card-label">{t('Entrepreneurs')}</label>
                </div>
                <div className="card-div">
                  <div className="card-avatar-div">
                    <img className="card-avatar-img officeworker" src={officeworker} alt=""/>
                  </div>
                  <div className="margin08"/>
                  <div className="margin08"/>
                  <label className="card-label">{t('OfficeWorkers')}</label>
                </div>
                <div className="card-div">
                  <div className="card-avatar-div">
                    <img className="card-avatar-img teacher" src={teacher} alt=""/>
                  </div>
                  <div className="margin08"/>
                  <div className="margin08"/>
                  <label className="card-label">{t('Teachers')}</label>
                </div>
                <div className="card-div">
                  <div className="card-avatar-div">
                    <img className="card-avatar-img parent" src={parent} alt=""/>
                  </div>
                  <div className="margin08"/>
                  <div className="margin08"/>
                  <label className="card-label">{t('Parents')}</label>
                </div>
                <div className="card-div">
                  <div className="card-avatar-div">
                    <img className="card-avatar-img grandmahelper" src={grandmahelper} alt=""/>
                  </div>
                  <div className="margin08"/>
                  <div className="margin08"/>
                  <label className="card-label ">{t('GrandmaHelpers')}</label>
                </div>
                <div className="card-div">
                  <div className="card-avatar-div">
                    <img className="card-avatar-img freelancer" src={freelancer} alt=""/>
                  </div>
                  <div className="margin08"/>
                  <div className="margin08"/>
                  <label className="card-label">{t('Freelancers')}</label>
                </div>
                <div className="card-div">
                  <div className="card-avatar-div">
                    <img className="card-avatar-img grocery" src={doctor} alt=""/>
                  </div>

                  <div className="margin08"/>
                  <div className="margin08"/>
                  <label className="card-label">{t('Doctors')}</label>
                </div>
                <div className="card-div">
                  <div className="card-avatar-div">
                    <img className="card-avatar-img babysitter" src={babysitter} alt=""/>
                  </div>
                  <div className="margin08"/>
                  <div className="margin08"/>
                  <label className="card-label">{t('Babysitters')}</label>
                </div>
                <div className="card-div">
                  <div className="card-avatar-div">
                    <img className="card-avatar-img trainer" src={trainer} alt=""/>
                  </div>

                  <div className="margin08"/>
                  <div className="margin08"/>
                  <label className="card-label">{t('Trainers')}</label>
                </div>
                <div className="card-div">
                  <div className="card-avatar-div">
                    <img className="card-avatar-img grocery" src={grocery} alt=""/>
                  </div>

                  <div className="margin08"/>
                  <div className="margin08"/>
                  <label className="card-label">{t('ToDo')}</label>
                </div>

              </div>
            </div>
            <strong className="sub-hero-04-strong">
              {t('SeeIf')}
            </strong>

          </div>
        </div>
    {/* Sub-Hero 04 ---------------------------------------------------------*/}
        <div className="sub-hero-div-02">
          <div className="sub-hero-04-div" id="app">
            <div className="margin08"/>
            <div className="margin08"/>
            <div className="margin08"/>
            <div className="margin08"/>
            <strong className="hero-strong">
              {t('GetStarted')}
            </strong>
            <div className="margin08"/>
            <div className="margin08"/>

            <div className="qr-bottom-div">
                <div className="apple-div">
                  <div className="app-title-div">
                    <GrApple size={32} color='#1B2432'/>
                      <div className="margin04"/>
                      <p className="app-p">
                        App Store
                      </p>
                  </div>
                  { i18n.translator.language === 'pt-BR'
                    ? (
                      <img className="qrcode-img second" src={qrcodeiosbr} alt="ios qr-code"/>
                    )
                    : (
                      <img className="qrcode-img second" src={qrcodeios} alt="ios qr-code"/>
                    )

                  }
                </div>
                <div className="android-div">
                  <a
                    href="https://play.google.com/apps/testing/com.gerentedashmobile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="android-link"
                  >
                    <div className="app-title-div">
                      <GrAndroid size={32} color='#1B2432'/>
                        <div className="margin04"/>
                        <p className="app-p">
                          Google Play
                        </p>
                    </div>
                    <img className="qrcode-img second" src={qrcodeandroid} alt="android qr-code"/>
                  </a>
                </div>
              </div>
          </div>
    {/* Footer --------------------------------------------------------------*/}
          <footer className="footer-div">
            <div className="footer-menu-div">
              <button className="footer-menu-button" onClick={handleContact}>{t('Help')}</button>
              { i18n.translator.language === 'pt-BR'
                ? (
                  <button className="footer-menu-button" onClick={handlePrivacyPt}>{t('Privacy')}</button>
                  )
                : (
                  <button className="footer-menu-button" onClick={handlePrivacyEn}>{t('Privacy')}</button>
                )

              }
              <button className="footer-menu-button" onClick={handleTerms}>{t('Terms')}</button>
              <button className="footer-menu-button" onClick={handleEula}>{t('Eula')}</button>
            </div>
            <div className="footer-menu-div">
              <label className="footer-label">©2022 The Godtasker</label>
            </div>
            <div className="footer-logo-div">

              <img className="footer-img" src={footerLogo} alt="godtaskerFont"/>
            </div>
          </footer>
        </div>
      </div>
    </Container>
  )
}
