import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-radius: 8px;
  /* padding: 4px;
  margin: 4px 4px 4px 2px; */
  background-color: #fff;

  .message-container-div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    padding: 4px 0;
    border-bottom: 1px solid #F5F5F5;
    /* background-color: #F00; */
  }

  .message-container-div.worker {
    align-items: flex-start;
  }

  .message-container-inverted-div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    padding: 4px 0;
    border-bottom: 1px solid #F5F5F5;
    /* background-color: #F00; */
  }

  .message-container-inverted-div.user {
    align-items: flex-start;
  }

  .message-dropMenu-ul {
    list-style-type: none;
    background-color: #443333;
  }

  .message-dropMenu-li {
    margin: 4px;
    padding: 8px;
    list-style-type: none;
    box-shadow: 2px 2px 2px #ccc;
    background-color: #F5F5F5;
    /* background-color: #4433ee; */
  }

  .message-dropMenu-button {
    color: #999;
    border: none;
    background-color: #F5F5F5;
    /* background-color: #334422; */
  }

  .time-message-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* background-color: #f0ff; */
  }

  .time-message-div.user {
    justify-content: flex-end;
  }

  .message-time-span {
    margin: 0 4px;
  }
  /* .time-message-div.worker {
    background-color: #fff;
  } */

  .message-line-div {
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 0 4px;
    padding: 4px 8px;
    border-radius: 8px;
    /* background-color: #ff0; */
  }

  .message-line-div.user {
    /* background-color: #daf1e0; */
    background-image: linear-gradient(to bottom, #f5f5f5, #CAF0F8);
  }

  .message-line-div.worker {
    /* background-color: #b4c7db; */
    background-image: linear-gradient(to bottom, #f5f5f5, #b4c7db);
  }

  .message-line-inverted-div {
    display: flex;
    flex-direction: column;
    height: auto;
    margin: 0 4px;
    padding: 4px 8px;
    border-radius: 8px;
    /* background-color: #ff0; */
  }

  .message-line-inverted-div.worker {
    /* background-color: #daf1e0; */
    background-image: linear-gradient(to bottom, #f5f5f5, #D3FFF0);
  }

  .message-line-inverted-div.user {
    /* background-color: #b4c7db; */
    background-image: linear-gradient(to bottom, #f5f5f5, #b4c7db);
  }

  .reply-on-top-div {
    display: flex;
    flex-direction: column;
    margin: 4px 0;
    padding: 4px;
    opacity: .9;
    border-radius: 4px;
    background-color: #F5F5F5;
  }

  .forward-on-top-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 4px 0;
    padding: 4px 0;
    padding-left: 4px;
    color: #666;
  }

  .reply-name-span {
    font-size: 13px;
    margin-bottom: 8px;
    color: #73a6c4;
  }

  .message-arrow-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 4px 0;
    /* background-color: #4433ee; */
  }

  .message-arrow-div.removed {
    /* background-color: #f00; */
  }

  .message-span {
    font-size: 14px;
    align-self: center;
    margin: 0 8px;
    /* background-color: #fff; */
  }

  .message-time-span {
    font-size: 10px;
    color: #444;
  }
  .temporary-message-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-top: 12px;
  }

  .temporary-message-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: auto;
    min-height: 36px;
    border-radius: 4px;
    border: 1px solid #ccc;
    border: none;
    width: 100%;
    padding: 4px 8px;
    margin-bottom: 4px;

    background-color: #F5F5F5;
  }

  @media (max-width: 1400px) {
    .message-menu-button {
      padding: 4px;
    }
    .message-menu-icon {
      font-size: 14px;
      margin: 0;
      /* background-color: #fff131; */
    }

    .others-drop-menu-button {
      font-size: .8rem;
      border: none;
      color: #4433ee;
      background-color: #fff;
      /* background-color: #334422; */
    }

    .message-time-span {
      font-size: .6rem;
    }

    .reply-name-span {
      font-size: .7rem;
      margin-bottom: 8px;
      color: #73a6c4;
    }

    .reply-on-top-span {
      font-size: .8rem;
    }

    .message-span {
      font-size: .8rem;
    }


  }

`;
