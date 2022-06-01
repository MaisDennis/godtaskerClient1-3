import styled from 'styled-components';
import { darken } from 'polished';
import { Link as LinkS } from 'react-scroll'
import { FaTimes } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background: #1B2432; */
  background-color: #fff;
  /* background-color: #4433ee; */

  .header-wrapper {
    display: flex;
    flex-direction: row;
    height: 8vh;
    width: 100%;
    margin: 0 auto;
    /* background-color: #5edc1f; */
  }

  .mobile-chat-button-div {
   display: none;
  }

  .image-logo {
    height: 32px;
    width: auto;
    margin: 0 16px;
    /* background: #4433ee; */
  }

  .button-div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10%;
    margin: 0;
    /* background-color: #5e3; */
  }

  .button-mobile-div {
    display: none;
  }



  .header-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    margin: 0;
    /* background-color: #5edc; */

  }
  .header-menu-item {
    display: inline;
    margin: 0 8px;
      /* background: #ff3; */
  }

  .header-button {
    height: 36px;
    width: 108px;
    border: none;
    background: none;
    /* padding: 4px 8px; */
  }

  .header-button.selected {
    /* border: 2px solid #fff; */
    border-radius: 4px;
    /* padding: 4px 8px; */
  }

  .header-label {
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    color: #bbb;
    &:hover {
      color: ${darken(0.2, '#bbb')};
    }
  }

  .header-label-selected {
    font-size: 14px;
    font-weight: bold;
    color: #1B2432;
  }

  .header-aside {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    /* background: #5edc; */
  }

  .settings-div {
    margin: 0 16px;
  }

  .profile {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 16px;
    cursor: pointer;
    /* background: #f00; */
  }

  .profile-strong {
    font-size: 16px;
    font-style: bold;
    margin: 8px;
    color: #fff;
  }

  .drop-down-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: #f00; */
  }

  .drop-menu {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 228px;
    border-radius: 8px;
    margin: 52px 0;
    padding: 4px;
    background-color: #000;
  }

  .drop-menu-label {
    font-size: 14px;
    font-weight: normal;
    cursor: pointer;
    color: #18A0FB;
    /* transition: color 0.2s; */
    &:hover {
      color: ${darken(0.2, '#ddd')};
    }
  }

  .drop-menu-button {
    cursor: pointer;
    border: none;
    margin: 8px 0;
    background-color: #000;
    /* background-color: #F64C75; */
  }

  .image-background-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    overflow: hidden;
    border-radius: 50%;
    background-color: #ddd;
  }

  .image-user {
    height: 100%;
    width: auto;
    border-radius: 50%;
    border: 1px solid #ccc;
    background-color: #F5F5F5;
    &:hover {
      border: 1px solid ${darken(0.2, '#ccc')};
    }
  }

  .mobile-sidebar {
    display: none;
  }

  @media (max-width: 1400px) {
    width: 90%;
    /* height: 15vh; */
  }

  @media (max-width: 620px) {
    display: block;
    position: fixed;
    justify-content: center;
    width: 100%;
    margin: 0;
    padding: 0;
    /* background-color: #f5f5f5; */

    .header-wrapper {
      justify-content: space-between;
    }

    .button-div {
      display: none;
    }

    .button-mobile-div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 20%;
      /* background-color: #4ee; */
    }

    .image-logo {
      display: none;
    }

    .header-menu {
      display: none;
    }

    .header-aside {
      display: none;
    }

    .mobile-sidebar {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20%;
      /* background-color: #666; */
    }

    .icon-div {
      /* background-color: #4433ee; */
    }

    .icon-close-div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      height: 8vh;
      margin-right: 22px;
      /* background-color: #666; */
    }

    .sidebar-div {
      position: fixed;
      z-index: 9;
      height: auto;
      width: 100%;
      transition: 1 ease-in-out;
      background-color: #1B2432;
      /* background-color: #4ee; */

    }

    .sidebar-menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 8px 0;
      /* background-color: #999; */
    }

    .header-menu-item {
      padding: 8px 0;
      width: 100%;
    }

    .header-button {
      width: 100%;
      /* background-color: #f00; */
    }

    .header-label {
      font-size: 21px;
    }

    .header-label-selected {
      font-size: 21px;
    }

    .mobile-chat-button-div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 60%;
      /* background-color: #ee3; */
    }
  }
`;

export const ScrollLink = styled(LinkS)`
  margin: 8px auto;
  cursor: pointer;
  /* background-color: #f00; */
`;
