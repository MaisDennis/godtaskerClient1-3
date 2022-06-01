import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  height: auto;
  min-height: 100vh;
  background: #000;
  background: #fff;

  .profile-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    text-align: center;
    border-radius: 8px;
    background-color: #fff;
  }

  .form-body-div {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    border-radius: 4px;
    padding: 12px;
    /* margin: 12px; */

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


  input, select {
    height: 44px;
    width: 100%;
    /* border: 1px solid #ccc; */
    border: 1px solid #000;
    border-radius: 4px;
    padding: 0 15px;
    margin: 4px 4px 8px 4px;
    color: #000;
    /* background-color: #fff; */
    background-color: #fff;
    &::placeholder {
      /* color: ${darken(0.3, '#fff')}; */
      color: #666;
    }
  }

  .bio-textarea {
    height: 108px;
    line-height: 24px;
    width: 100%;
    /* font-family: Fira Sans, sans-serif; */
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 15px;
    margin: 4px 4px 8px 4px;
    color: #000;
    background-color: #fff;
    &::placeholder {
      font-size: 14px;
      color: ${darken(0.3, '#fff')};
    }
  }

  .line-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    text-align: center;
    /* background-color: #F5f5; */
  }

  span {
    color: #fb6c91;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }
  hr {
    border: 0;
    height: 1px;
    background: rgba(255,255,255,0.2);
    margin: 10px 0 20px;
  }

  .button-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    /* background-color: #F5f5; */
  }

  .save-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 28px;
    width: 84px;
    font-size: 12px;
    font-weight: bold;
    margin: 4px 0;
    padding: 4px;
    border: none;
    border-radius: 8px;
    transition: background-color 0.2s;
    color: #fff;
    background-color: #18A0FB;
    &:hover {
      background-color: ${lighten(0.2, '#18A0FB')};
    }
  }

  .back-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 28px;
    width: 84px;
    font-size: 12px;
    font-weight: bold;
    margin: 4px 0;
    padding: 4px;
    border: none;
    border-radius: 8px;
    transition: background-color 0.2s;
    margin-left: 8px;
    color: #fff;
    background-color: #403F4C;
    &:hover {
      background-color: ${lighten(0.2, '#403F4C')};
    }
  }

  .exit-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    width: 108px;
    font-size: 14px;
    font-weight: bold;
    border: 0;
    border-radius: 4px;
    padding: auto;
    margin: 0 4px;
    color: #fff;
    /* background: #007f66; */
    background: #f64C75;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.2, '#f64C75')};
    }
  }


  > button {
    width: 100%;
    margin: 10px 0 30px;
    height: 44px;
    background: #f64C75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.08, '#f64C75')};
    }
  }

  @media (max-width: 1400px) {
    .profile-div {
      width: 90%;
    }
  }

  @media (max-width: 620px) {
    .profile-div {
      width: 100%;
      border-radius: 0;
    }

    button {
      font-size: .8rem;
    }
  }
`;
