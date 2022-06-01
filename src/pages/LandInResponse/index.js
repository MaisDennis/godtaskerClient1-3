import React from 'react'
import i18n from "i18next";
import { useTranslation } from "react-i18next";
// -----------------------------------------------------------------------------
import history from '~/services/history';
import { Container } from './styles'
import detective from '~/assets/LandIn/logos/detective02.svg'
import banner from '~/assets/LandIn/logos/banner.png'
// -----------------------------------------------------------------------------
export default function LandInResponse() {
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
              {t('ThankYou')}
          </strong>
          <div className="text-div">
            <p className="hero-text">
              {t('PleaseFollow')}
            </p>
            <p className="hero-text">
              {t('AnEmailHas')}
            </p>
            <p className="hero-text">
              {t('DownloadTheApp')}
            </p>
            <p className="hero-text">
              {t('SignInThrough')}
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
