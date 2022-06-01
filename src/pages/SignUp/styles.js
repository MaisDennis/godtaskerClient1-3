import styled from 'styled-components';
import { darken } from 'polished';
import heroBackground from '~/assets/LandIn/backgrounds/heroBackground02.png'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: url(${heroBackground});
  background-size: cover;
  /* background-color: #F5f; */

  .sign-up-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    text-align: center;
    border-radius: 4px;
    padding: 8px 24px;
    background-color: #fff;
  }

  .logo-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 50%;
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

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    margin: 12px auto;
    padding: auto;
    /* background-color: #ff892e; */
  }

  .line-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    text-align: center;
    /* background-color: #F5f5; */
  }

  input, select {
    height: 44px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 15px;
    margin: 4px 4px 8px 4px;
    color: #1B2432;
    background-color: #fff;
    &::placeholder {
      /* color: ${darken(0.3, '#ddd')}; */
      color: #666;
    }
  }

  select {
    padding: 0 12px;
  }

  option {
    font-family: 'Fira Sans', sans-serif;
    background: #fff;
    color: ${darken(0.6, '#fff')};
    font-size: 14px;
    margin: auto;
    padding: 0 15px;
  }

  button {
    height: 44px;
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    border: 0;
    border-radius: 4px;
    margin: 4px 4px 8px 4px;
    color: #fff;
  }
  .captcha-button {
    background-color: #666;
    transition: background-color 0.2s;
    &:hover {
      background-color: ${darken(0.2, '#666')};
    }
  }

  .login-button {
    background-color: #666;
    transition: background-color 0.2s;
    &:hover {
      background-color: ${darken(0.2, '#666')};
    }
  }

  .sign-up-button {

    transition: background-color 0.2s;
    background-color: #18A0FB;
    box-shadow: 4px 4px 4px #666;
    &:hover {
      background-color: ${darken(0.2, '#18A0FB')};
    }
  }

  a {
    margin: 15px 0;
    font-size: 16px;
    font-weight: bold;
    transition: color 0.2s;
    color: #334466;
    &:hover {
      color: ${darken(0.2, '#334466')};
    }
  }

  @media (max-width: 1400px) {
    .sign-up-div {
      width: 50%;
      padding: 12px;
    }
  }

  @media (max-width: 620px) {
    .sign-up-div {
      width: 80%;
      padding: 12px;
    }

    form {
      margin-top: 0px;
      margin-bottom: 30px;
    }

    input, select {
      font-size: 12px;
    }

    option {
      font-family: 'Fira Sans', sans-serif;
      background: #fff;
      color: ${darken(0.6, '#fff')};
      font-size: 14px;
      margin: auto;
      padding: 0 15px;
    }

    button {
      height: 44px;
      width: 100%;
      font-size: 16px;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      margin: 4px 4px 8px 4px;
      color: #fff;
    }
  }
`;
