import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
width: 50%;
border-radius: 8px;
padding: 4px;
margin: 4px 4px 4px 2px;
background-color: #fff;
/* background-color: #5edc1f; */

.message-header {
  display: flex;
  flex-direction: column;
  height:auto;
  margin: 4px;
  /* background-color: #4433ee; */
}

.message-header-strong {
    width: auto;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    overflow: hidden;
    margin: 8px;
    color: #000;
    /* background-color: #9d9eb4; */
  }

.list-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 12px 0 8px 0;
  /* background-color: #ff0; */
}

.worker-profile-div {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  min-height: 48px;
  width: 100%;
  /* background-color: #4433ee; */
}

.message-search-input {
  display: flex;
  align-items: center;
  height: 36px;
  width: 100%;
  border: 0;
  border-radius: 4px;
  padding: 0 8px;
  /* color: #222; */
}

.worker-tag {
  display: flex;
  flex-direction: row;
  width: auto;
  padding: 0 4px;
  /* background-color: #f00fff; */
}

.image-background-div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  width: 52px;
  overflow: hidden;
  border-radius: 50%;
  margin: 0 8px;
  background-color: #ddd;
}

img {
  height: 100%;
  width: auto;
  border: 1px solid #fff;
  border-radius: 50%;
  background-color: #f5f5f5;
}

.worker-profile-label {
  display: flex;
  align-self: center;
  overflow: hidden;
  font-weight: bold;
  font-size: 16px;
  /* background-color: #f00; */
}

.buttons-div {
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: #ee3; */
}

.message-menu-div {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  /* background-color: #007333; */
}

.message-menu-button {
    margin: 0 8px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    transition: background 0.2s;
    color: #fff;
    background-color: #1B2432;
    &:hover {
      background-color: ${darken(0.2, '#1B2432')};
    }
}

.others-menu-div {
  position: relative;
}

.mobile-back-div {
    display: none;
  }

.others-drop-menu-ul {
  position: absolute;
  top: 48px;
  right: 4px;
}

.others-drop-menu-li {
  margin: 0 4px;
  padding: 4px 8px;
  list-style-type: none;
  box-shadow: 2px 2px 2px #ccc;
  background-color: #fff;
  /* background-color: #4433ee; */
}

.others-drop-menu-button {
  border: none;
  color: #4433ee;
  background-color: #fff;
  /* background-color: #334422; */
}

.message-menu-icon {
  display: flex;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
  color: #4433ee;
  /* background-color: #fff131; */
}

.message-conversation-div {
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  height: 65vh;
  width: 100%;
  /* padding: 4px; */
  margin: 4px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow-y: scroll;
  background-color: #fff;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ccc;
  }
  /* background-color: #334422; */
}


@media (max-width: 1400px) {
  padding: 4px;

  .list-header {
    flex-direction: column;
    margin: 12px 0 8px 0;
    /* background-color: #ff0; */
  }

  .worker-profile-div {
    margin: 0 0 4px 0;
    /* background-color: #4433ee; */
  }

  .message-header-strong {
      font-size: .8rem;
    }

  .worker-profile-label {
    display: flex;
    align-self: center;
    font-size: .8rem;
    /* background-color: #f00; */
  }

  img {
    margin: 0 4px;
  }
}

.message-input {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: auto;
    width: 100%;
    margin: 8px 0;
    padding: 8px; // exception to the rule.
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
    /* background-color: #444; */
  }

  .message-button {
    height: 28px;
    width: 84px;
    font-size: 12px;
    font-weight: bold;
    margin: 0 8px;
    border: none;
    border-radius: 4px;
    transition: background 0.2s;
    color: #fff;
    /* background: #007f66; */
    background: #18A0FB;
    &:hover {
      background: ${darken(0.2, '#18A0FB')};
    }
  }

  @media (max-width: 1400px) {
    .message-button {
        width: 73px;
        font-size: .8rem;
      }
  }

  @media (max-width: 620px) {
    display: ${({ toggleContainer }) => (
      toggleContainer === 2 ? 'block' : 'none'
    )};
    width: 100%;
    margin: 4px 0;
    background-color: #ffc87c;

    .message-menu-div {
      margin: 0;
      width: 50%;
    }

    .message-conversation-div {
      height: 58vh;
    }

    .mobile-back-div {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      width: 100%;
      background-color: #ffceee;
    }
  }

  @media (max-width: 350px) {
    .message-conversation-div {
      height: 52vh;
    }
  }

`;
