import styled from 'styled-components';
// -----------------------------------------------------------------------------
import heroBackground from '~/assets/LandIn/backgrounds/heroBackground02.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  font-weight: normal;
  /* background-color: #999; */

  .hero-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100%;
    justify-content: center;
    background-image: url(${heroBackground});
    background-size: cover;
    /* background-position-y: bottom; */
    z-index: 2;

    @media (max-width: 1420px) {
      background-size: cover;
      background-position-x: center;
    }
  }

  .card-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 70%;
    text-align: center;
    border-radius: 4px;
    padding: 1rem;
    margin: 3rem 0;
    background-color: #fff;

    @media screen and (max-width: 1100px) {
      width: 80%;
    }
  }

  .logo-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: auto;
    margin: 12px;
    /* background-color: #F00; */
  }

  .logo-img {
    height: 2.3rem;
    width: auto;
    margin-right: 0.5vw;
    /* background-color: #4433ee; */
  }

  .banner-img {
    height: 2.1rem;
    width: auto;
    /* background-color: #4433ee; */
  }

  .text-div {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    height: auto;
    width: 80%;
    margin: 1rem 0;
    /* background-color: #4433ee; */

    @media screen and (max-width: 1100px) {
      /* width: 90%; */
    }
  }

  strong, h1, h2, h3 {
    font-size: 1.1rem;
    line-height: 1.7rem;
    text-align: left;
    margin-bottom: 1rem;
    color: #1B2432;

    /* background-color: #4433ee; */

    @media (max-width: 414px) {
      font-size: 1.3rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.5rem;
    text-align: left;
    margin-bottom: 1rem;
    color: #1B2432;
    /* background-color: #18A0FB; */

    @media (max-width: 414px) {
      font-size: 1.1rem;
    }
  }

  ul {
    margin-bottom: 1rem;
  }

  li {
    font-size: 1.1rem;
    line-height: 1.5rem;
    text-align: left;
    margin-left: 2rem;
    color: #1B2432;
    /* background-color: #18A0FB; */

    @media (max-width: 414px) {
      font-size: 1.1rem;
    }
  }

  .hero-button {
    font-size: 1rem;
    font-weight: bold;
    border: 1px solid #18A0FB;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 4px 4px 4px #999;
    padding: 8px 24px;
    color: #fff;
    transition: 1s all ease;
    margin: 8px;
    background-color: #18A0FB;

    @media screen and (max-width: 1100px) {
      font-size: 1rem;
    }
  }

  .hero-button:hover {
    /* background-color: #4CAF50; */
    opacity: 1;
    color: white;
  }

  `;
