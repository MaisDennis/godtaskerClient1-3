import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
// -----------------------------------------------------------------------------
import heroBackground from '~/assets/LandIn/backgrounds/heroBackground.png'
import subHeroBackground01 from '~/assets/LandIn/backgrounds/subHeroBackground01.png'
import subHeroBackground02 from '~/assets/LandIn/backgrounds/subHeroBackground02.png'
import subHeroBackground03 from '~/assets/LandIn/backgrounds/subHeroBackground03.png'
import subHeroBackground04 from '~/assets/LandIn/backgrounds/subHeroBackground04.png'
import office from '~/assets/LandIn/backgrounds/office.jpg'

export const NavLinks = styled(LinkS)`
  display: inline;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  margin: 12px 32px;
  color: #fff;

  @media screen and (max-width: 1100px) {
    font-size: 1.3rem;
  }

  /* .menu-li {
    display: inline;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    transition: 0.4s all ease;
    margin: 12px 32px;
    color: #fff;

    @media screen and (max-width: 1100px) {
      font-size: 1.3rem;
    }
  }

  .menu-li:hover {
    color: #ee3;
  } */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  font-weight: normal;
  /* background-color: #999; */

  .margin02 { margin: 0.2rem 0; }

  .margin04 { margin: 0.4rem 0; }

  .margin08 { margin: 0.8rem 0; }
  /* Menu --------------------------------------------------------------------*/
  .header-logo-img {
    height: 2.3rem;
    width: auto;
    margin-right: 0.5vw;
    /* background-color: #4433ee; */
  }

  .header-banner-img {
    height: 2.1rem;
    width: auto;
    /* background-color: #4433ee; */
  }

  .body-menu {
    position: fixed;
    display: flex;
    align-self: center;
    align-items: center;
    list-style-type: none;
    top: 88vh;
    border-radius: 8px;
    padding: 4px 16px;
    opacity: 0.8;
    transition: 1s all ease;
    z-index: 1000;
    /* background-color: #1B2432; */

    @media screen and (max-width: 1100px) {
      display: none;
    }
  }

  .body-menu:hover {
    opacity: 1;
    transition: 0.2s;
    /* background-color: #4CAF50; */
  }

  .mobile-icon {
      position: absolute;
      opacity: 0;
      z-index: 1000;

    @media screen and (max-width: 1100px) {
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 3rem;
      right: 1rem;
      font-size: 2rem;
      cursor: pointer;
      opacity: 0.8;
      border-radius: 50%;
      transition: 0.4s all ease-in;
      padding: 1.2rem;
      color: #fff;
      background-color: #1B2432;
      transition: 1s all ease;
    }
  }

  .mobile-icon:hover {
    color: #ccc;
  }

  .mobile-menu-div {
    /* left: 100%; */
    /* transform: translate(-100%, 0); */
    position: fixed;
    width: 90vw;
    height: 100vh;
    opacity: 0.8;
    /* padding: 3rem; */
    /* padding-top: 3rem; */
    transition: 1s all ease;
    z-index: 1000;
    background-color: #1B2432;
  }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    transition: 1s all ease;
  }

  .menu-li {
    display: inline;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    transition: 0.4s all ease;
    margin: 12px 32px;
    color: #fff;

    @media screen and (max-width: 1100px) {
      font-size: 1.3rem;
    }
  }

  .menu-li:hover {
    color: #ccc;
  }

  .menu-li.cancel {
    font-size: 1.3rem;
    text-align: end;
    padding: 1.2rem;
    margin: 0;
    margin-bottom: 1rem;
  }

  .menu-button {
    font-size: 1rem;
    font-weight: bold;
    border: 1px solid #18A0FB;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.4s all ease;
    padding: 8px 24px;
    margin: 8px;
    color: #fff;
    background-color: #18A0FB;

    @media screen and (max-width: 1100px) {
      font-size: 1.3rem;
    }
  }

  .menu-button:hover {
    color: #ccc;
        /* background-color: #4CAF50; */
  }
  /* Menu --------------------------------------------------------------------*/
  .body-div {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    margin: 0;
    z-index: 1;
    /* background-color: #f5f; */
  }

  .hero-div {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    justify-content: center;
    background-image: url(${heroBackground});
    background-size: cover;
    background-position-y: bottom;
    z-index: 2;
    /* background-color: #f5f; */

    @media (max-width: 1420px) {
      /* background-size: cover; */
      background-position-x: center;
    }
  }

  .hero-header-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 15vh;
    width: 100vw;
    z-index: 4;
    /* background-color: #666; */
  }

  .hero-body-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 85vh;
    width: 100vw;
    z-index: 4;
    /* background-color: #666; */
  }

  .hero-avatar-img {
    position: absolute;
    height: 20vh;
    width: 20vh;
    border-radius: 20vh;
    border: 0.4vh solid #fff;

    @media (max-width: 1420px) {
      display: none;
    }
  }

  .hero-avatar-img.first { left: 10vw; top: 25vh; }

  .hero-avatar-img.second { left: 20vw; top: 45vh; }

  .hero-avatar-img.third { left: 10vw; top: 65vh; }

  .hero-avatar-img.fourth { right: 10vw; top: 25vh; }

  .hero-avatar-img.fifth { right: 20vw; top: 45vh; }

  .hero-avatar-img.sixth { right: 10vw; top: 65vh; }

  .hero-strong {
    font-weight: 700;
    /* font-size: 48px; */
    font-size: 2.5rem;
    text-align: center;
    width: 70%;
    color: #1B2432;
    /* background-color: #181; */

    @media (max-width: 414px) {
      font-size: 1.7rem;
      width: 90%;
    }
  }

  .hero-subtitle {
    font-size: 1.5rem;
    text-align: center;
    color: #1B2432;

    @media (max-width: 414px) {
      font-size: 1.3rem;
      width: 90%;
    }
  }

  .hero-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1rem;
    font-weight: bold;
    border: 1px solid #18A0FB;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 4px 4px 4px #999;
    transition: 0.4s all ease;
    padding: 8px 24px;
    color: #fff;
    background-color: #18A0FB;
  }

  .hero-button:hover {
    color: #ccc;
        /* background-color: #4CAF50; */
  }

  .qr-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: #666; */
  }

  .app-p {
    font-size: 14px;
    color: #1B2432;

    @media (max-width: 414px) {
      font-size: 1rem;
    }
  }

  .qr-bottom-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* background-color: #4433ee; */
  }

  .apple-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 100%;
    border: 2px solid #1B2432;
    border-radius: 8px;
    margin: 0 1vw;
    /* background-color: #ee3; */
  }

  .android-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: auto;
    height: 100%;
    border: 2px solid #1B2432;
    border-radius: 8px;
    margin: 0 1vw;
    /* background-color: #f66; */
  }

  .app-title-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
    margin-top: 12px;
    /* background-color: #f00; */
  }

  .qrcode-img {
    height: 120px;
    width: auto;
    margin: 24px;

    @media (max-width: 414px) {
      height: 100px;
      margin: 8px;
    }
  }

  .qrcode-img.second {
    height: 160px;

    @media (max-width: 414px) {
      height: 100px;
    }
  }
  /* Sub-hero 01 -------------------------------------------------------------*/
  .sub-hero-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    z-index: 2;
    /* background-color: #f5f; */
  }

  .sub-hero-01-div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    flex-direction: row;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-image: url(${subHeroBackground01});
    background-size: cover;
    background-position-y: bottom;
    background-position-x: center;
    z-index: 3;
    /* background-color: #4ee; */

    @media (max-width: 1420px) {
      background-size: cover;
      background-position-x: center;
    }
  }

  .green-rectangle-img {
    position: absolute;
    height: 1200px;
    width: auto;
    /* overflow: hidden; */
    margin-top: -20vh;
    margin-left: 60vw;
    z-index: 4;
    display: none;
    /* background-color: #4ee; */

    @media (max-width: 1420px) {
      display: none;
    }
  }

  .sub-hero-01-grid {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    z-index: 5;
    /* background-color: #4433ee; */
  }

  .background-icon-div {
    position: absolute;
    height: auto;
    width: 15rem;
    margin-top: 60vh;
    margin-left: 20vw;
    /* background-color: #4433ee; */

    @media (max-width: 1420px) {
      width: 10rem;
    }

    @media (max-width: 420px) {
      width: 7rem;
      margin-top: 60vh;
      margin-left: 0;
    }
  }

  .background-icon-div.second {
    margin-top: 70vh;
    margin-left: 10vw;
  }

  .background-icon-img {

    height: auto;
    width: 100%;
    opacity: 80%;

  }

  .background-icon-img.second {

  }

  .sub-hero-01-wrapper {
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 80%;
    margin-top: 8vh;
    /* background-color: #181; */

    @media (max-width: 414px) {
      width: 90%;
    }
  }

  .sub-hero-01-img {
    align-self: center;
    width: 100%;
    /* background-color: #ee3; */
  }

  .sub-hero-01-img.second {
    width: 100%;
  }

  .sub-hero-text-div {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    width: 90%;
    /* background-color: #288; */
  }

  .sub-hero-text-div.second {
    align-self: flex-start;
  }

  .sub-hero-title {
    font-size: 24px;
    font-weight: 700;
    /* background-color: #4ee; */

    @media (max-width: 414px) {
      font-size: 1.3rem;
    }
  }

  .sub-hero-text {
    font-size: 21px;
    font-weight: normal;
    line-height: 36px;
    color: #1B2432;
    /* background-color: #666; */

    @media (max-width: 414px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
  /* Sub-hero 02 -------------------------------------------------------------*/

  .sub-hero-02-div {
    display: flex;
    /* grid-template-columns: repeat(auto-fill, minmax(33.3%, 1fr)); */
    flex-direction: row;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-image: url(${subHeroBackground02});
    background-size: cover;
    background-position-y: top;
    /* background-color: #4ee; */

    @media (max-width: 1420px) {
      background-size: cover;
      background-position-x: center;
    }
  }

  .sub-hero-02-grid {
    /* display: flex;
    flex-direction: column; */
    height: 100%;
    width: 100%;
    /* background-color: #876; */
  }

  .sub-hero-02-img {
    align-self: center;
    width: 100%;
    /* background-color: #ee3; */
  }

  .sub-hero-02-img.second {
    width: 100%;
  }

/* Sub-hero 03 -------------------------------------------------------------*/
  .sub-hero-03-div {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-image: url(${subHeroBackground03});
    background-size: cover;
    background-position-y: bottom;
    /* z-index: 3; */
    /* background-color: #4ee; */
  }

  @media (max-width: 1420px) {
    .sub-hero-03-div {
      background-size: cover;
      background-position-x: center;
    }
  }

  .revolver-wrapper {
    height: 40vh;
    width: 100%;
    margin: 5vh 0;
    background-image: url(${office});
    background-size: cover;
    background-attachment: fixed;
    overflow-x: hidden;
    /* background-color: #eee; */

    /* width: 150%; */
  }

  .revolver-div {
    display: flex;
    flex-direction: row;
    /* justify-content: flex-end; */
    /* display: grid;
    grid-template-columns: repeat(auto-fill, minmax(5%, 1fr)); */
    height: 40vh;
    width: 400%;
    animation: scroll 90s linear infinite;
    /* animation-iteration-count: 2; */

    @keyframes scroll {
	    0% { transform: translateX(100vw); }
	    100% { transform: translateX(calc(-30vw * 10))}
    }

    @media (max-width: 414px) {
      animation: scroll 50s linear infinite;

      @keyframes scroll {
	    0% { transform: translateX(100vw); }
	    100% { transform: translateX(calc(-30vw * 35))}
    }

    }

  }

  .card-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 15vw;
    min-width: 200px;
    /* background-color: #ee3; */
  }

  .card-avatar-div {
    height: 20vh;
    width: 20vh;
    overflow: hidden;
    border-radius: 50%;
    border: 0.4vh solid #fff;
  }

  .card-avatar-img {
    height: auto;
    width: 100%;
  }

  .card-avatar-img.entrepreneur {
    float: right;
    width: 150%;
  }

  .card-avatar-img.officeworker {
    position: relative;
    right: 32%;
    width: 150%;
  }

  .card-avatar-img.teacher {
    position: relative;
    bottom: 10%;
    width: 110%;
  }

  .card-avatar-img.parent {
    position: relative;
    right: 15%;
    width: 150%;
  }

  .card-avatar-img.grandmahelper {
    position: relative;
    /* top: 20%; */
    right: 15%;
    width: 150%;
  }

  .card-avatar-img.freelancer {
    position: relative;
    bottom: 40%;
    right: 15%;
    width: 120%;
  }

  .card-avatar-img.babysitter {
    position: relative;
    bottom: 10%;
    right: 20%;
    width: 120%;
  }

  .card-avatar-img.trainer {
    position: relative;
    right: 10%;
    width: 150%;
  }

  .card-avatar-img.grocery {
    position: relative;
    bottom: 20%;
    width: 100%;
  }

  .card-label {
    font-size: 1.2rem;
    /* font-size: 21px; */
    font-weight: bold;
    color: #fff;
    border-radius: 8px;
    padding: 4px 16px;
  }

/* Sub-hero 03 -------------------------------------------------------------*/
  .sub-hero-div-02 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    /* margin-top: 5vh; */
    z-index: 2;
    /* background-color: #f5f; */
  }

  .sub-hero-04-div {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    /* justify-content: center; */
    align-items: center;
    background-image: url(${subHeroBackground04});
    background-size: cover;
    background-position-y: top;
    z-index: 3;
    /* background-color: #4ee; */

    @media (max-width: 1420px) {
      background-size: cover;
      background-position-x: center;
    }
  }

  .sub-hero-04-strong {
    /* font-size: 36px; */
    font-size: 2.1rem;

    @media (max-width: 414px) {
      font-size: 1.5rem;
      width: 90%;
    }
  }

/* Footer --------------------------------------------------------------------*/
  .footer-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: flex-end; */
    margin: 0;
    height: 30vh;
    width: 100%;
    background-color: #1B2432;
    /* background-color: #f00; */
  }

  .footer-menu-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 8vh;
    width: 100%;
    /* background-color: #ee3; */
  }

  .footer-menu-button {
    font-size: 0.8rem;
    text-decoration: underline;
    /* text-decoration: none; */
    cursor: pointer;
    padding: 8px 24px;
    border:none;
    color: #fff;
    background: none;
    transition: 0.4s all ease-in;
  }

  .footer-menu-button:hover {
    color: #ccc;
  }

  .footer-label {
    font-size: 0.7rem;
    color: #fff;
  }

  .footer-logo-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    height: 14vh;
    margin: auto 0;
    width: 100%;
    /* background-color: #811; */
  }

  .footer-img {
    height: 48px;
    width: auto;
    margin: 8px;
    opacity: 0.2;
    /* background-color: #4433ee; */
  }
`;
