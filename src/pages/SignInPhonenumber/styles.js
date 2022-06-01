import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  text-align: center;
  /* background-color: #F5f; */

  .sign-in-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33%;
    text-align: center;
    border-radius: 4px;
    background-color: #fff;
    /* background-color: #4ee; */
  }

  .title-p {
    font-family: 'Fira Sans', sans-serif;
    font-weight: bold;
    font-size: 14px;
    margin: 12px auto;
    color: #000;
  }

  .logo-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: auto;
    margin: 12px;
    /* background-color: #F00; */
  }
  .logo {
    width: 50%;
    height: auto;
  }

  .godtasker {
    border-radius: 4px;
    opacity: 1;
    width: 100%;
    height: auto;
    margin: auto;
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

  input {
    height: 44px;
    width: 100%;
    border: 1px solid #000;
    border-radius: 4px;
    padding: 0 15px;
    margin: 4px 4px 8px 4px;
    color: #222;
    background-color: #ddd;
    &::placeholder {
      /* color: ${darken(0.3, '#ddd')}; */
      color: #666;
    }
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
    background-color: #000;
    transition: background-color 0.2s;
    &:hover {
      background-color: ${lighten(0.2, '#000')};
    }
  }

  .sign-up-button {
    background-color: #18A0FB;
    transition: background-color 0.2s;
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
    .sign-in-div {
      width: 50%;
    }
  }

  @media (max-width: 620px) {
    .sign-in-div {
      width: 80%;
    }

    .logo {
      /* width: 44.4%; */
      margin-top: 24px;
    }

    .godtasker {
      margin: auto;
      /* width: 66.6%; */
      margin-bottom: 24px;
      /* background: #868; */
    }

    form {
      margin-top: 0px;
      margin-bottom: 30px;
    }

    input, select {
      font-size: 12px;
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
