import React from 'react'
import i18n from "i18next";
import { useTranslation } from "react-i18next";
// -----------------------------------------------------------------------------
import history from '~/services/history';
import { Container } from './styles'
import detective from '~/assets/LandIn/logos/detective02.svg'
import banner from '~/assets/LandIn/logos/banner.png'
// -----------------------------------------------------------------------------
export default function LandInContact() {
  const { t, i18n } = useTranslation();

  function handleMainPage() {
    history.push('/');
  }

  // ---------------------------------------------------------------------------
  return (
    <Container>
      <div className="hero-div">
        <div className="card-div">
          <div className="logo-div">
            <img className="logo-img" src={detective} alt="godtaskerFont"/>
            <img className="banner-img" src={banner} alt="godtaskerFont"/>
          </div>
          <strong className="hero-subtitle">
            {t('HelloMyNameIs')}
          </strong>
          <div className="text-div">
            <strong className="hero-subtitle">
              {t('LetsTalk')}
            </strong>
            <p className="hero-text">
              Email: godtaskerteam@gmail.com
            </p>
            <p className="hero-text">
              Whatsapp: +5511983495853
            </p>

          </div>
          <button className="hero-button" onClick={handleMainPage}>
            {t('MainPage')}
          </button>
        </div>
      </div>
    </Container>
  )
}
