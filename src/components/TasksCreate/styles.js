import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  width: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ccc;
  }
  border-radius: 8px;
  margin: 4px;
  padding: 8px;

  background: #fff;
  /* background: #a0daa9; */



  header {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    margin: 4px 0;
    /* background: #a0da; */
  }
  .header-title-strong {
    max-height: 48px;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    text-align: left;
    overflow: hidden;
    margin: 4px 0 12px;
    color: #444;
    /* background-color: #9d9eb4; */
  }

  input {
    height: 36px;
    width: auto;
    font-size: 14px;
    border: 1px solid #1B2432;
    border-radius: 4px;
    padding: 0 12px;
    margin: 4px 0;
    color: #222;
    background-color: #fff;
    &::placeholder {
      color: ${darken(0.3, '#fff')};
    }
  }

  .header-bottom-div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* background: #5c44; */
  }
  .header-input {
    width: 0;
    visibility: hidden;
  }
  .header-button-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: auto;
    /* background: #e88; */
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
    color: #fff;
    background-color: #403F4C;
    &:hover {
      background-color: ${lighten(0.2, '#403F4C')};
    }
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
    margin-right: 8px;
    &:hover {
      background-color: ${lighten(0.2, '#18A0FB')};
    }
  }

  .form-body-div {
    display: flex;
    flex-direction: column;
    height: auto;
    border-radius: 4px;
    padding: 0 12px;
    background: #FFF;
    /* background: #a0daa9; */
  }
  .sub-content-line-div {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 4px 0;
    /* background-color: #f6f6; */
  }

  .sub-content-line-divider-div {
    display: flex;
    flex-direction: row;
    /* background: #f3e; */
  }
  label {
    max-height: 48px;
    width: auto;
    font-size: 14px;
    font-weight: bold;
    text-align: left;
    margin: 4px 0;
    color: #444;
    /* background: #ccc; */
  }

  .checkbox-label {
    display: flex;
    flex-direction: row;
    /* background-color: #4433ee; */
  }

  .checkbox-input {
    height: 14px;
  }

  .form-span {
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 24px;
    font-size: 14px;
    font-weight: normal;
    margin-left: 8px;
    margin-right: 24px;
    /* background: #666; */
  }

  .worker-checkbox-label {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #ccc;
    padding: 4px;
    /* background-color: #4433ee; */
  }

  .worker-span {
    display: flex;
    flex-direction: row;
    align-items: center;
    line-height: 24px;
    width: 100%;
    font-size: 14px;
    font-weight: normal;
    margin-left: 8px;
    margin-right: 24px;
    /* background: #666; */
  }

  .worker-list-span {
    font-size: 14px;
    margin: 12px;
    color: #ff6e3a;
    /* background: #4433ee; */
  }

  .observations-span {
    font-size: 12px;
    width: auto;
    text-align: left;
    margin: auto 4px;
    color: #ff6e3a;
    /* background: #666; */
  }

  .description-textarea {
    height: auto;
    line-height: 24px;
    width: auto;
    /* font-family: Fira Sans, sans-serif; */
    font-size: 14px;
    border: 1px solid #1B2432;
    border-radius: 4px;
    padding: 4px 12px;
    margin: 4px 0;
    color: #444;
    background-color: #fff;
    &::placeholder {
      font-size: 14px;
      color: ${darken(0.3, '#fff')};
    }
  }

  .sub-task-input {
    height: auto;
    min-height: 72px;
    line-height: 24px;
    width: auto;
    font-family: Fira Sans, sans-serif;
    font-size: 14px;
    border: 1px solid #1B2432;
    border-radius: 4px;
    margin: 4px 0;
    padding: 4px 12px;
    color: #444;
    &::placeholder {
      color: ${darken(0.3, '#fff')};
    }
    @media (max-width: 620px) {
      width: 98%;
      margin: auto;
    }
  }

  .weige-div {
    margin: 8px 0;
    /* background-color: #43e; */
  }
  .sub-task-weige-input {
    height: 36px;
    width: 72px;
  }

  .sub-task-add-button {
    height: 28px;
    width: 216px;
    font-size: 12px;
    font-weight: bold;
    margin: 4px 0;
    border: none;
    border-radius: 8px;
    transition: background-color 0.2s;
    color: #fff;
    background-color: #403F4C;
    &:hover {
      background-color: ${lighten(0.2, '#403F4C')};
    }
  }

  .sub-task-ol {
    list-style-type: decimal;
    margin: 8px 0;
    /* background-color: #999; */
  }

  .sub-task-li {
    line-height: 24px;
    border-bottom: 1px solid #CCC;
    margin: 12px 12px 12px 18px;
    padding: 12px;
    /* background-color: #f00; */
  }
  .sub-task-dangle-list-style {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    line-height: 24px;
    white-space: pre-line;
    color: #444;
    /* background-color: #4433ee; */
  }
  .sub-task-icons {
    display: flex;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
    /* background-color: #fff131; */
  }

  .weige-span {
    display: flex;
    font-size: 14px;
    margin-right: 24px;
  }

  .sub-task-edit-icon {
    color: #444;
    margin: 0 12px;

  }
  .sub-task-remove-icon {
    color: #f64C75;
  }

  .date-input {
    width: 90%;
  }

  .radio-div {
    display: flex;
    flex-direction: row;
    /* background-color: #4ff; */
  }

  details {
    font-size: 12px;
    line-height: 24px;
    margin: 0 8px;
    color: #4433ee;
    /* background-color: #4ff; */
  }

  .row-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 36px;
    width: 100%;
    border: 1px solid #CCC;
    border-radius: 4px;
    padding: 0 8px;
    margin-bottom: 24px;
    background-color: #f5f5f5;
  }

  .form-bottom-div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin: 4px 0;
    margin-bottom: 24px;
    /* background-color: #f00; */
  }

  @media (max-width: 1400px) {
    max-width: 90%;
    margin: 0 auto;
    .sub-content-line-divider-div {
      flex-direction: column;
    }

  }
  @media (max-width: 620px) {
    max-width: 100%;
    border-radius: 0;
    margin-top: 8vh;

    /* .header-title-strong {
      font-size: .8rem;
    } */

    .back-button, .save-button, .sub-task-add-button {
      /* width: 72px; */
      font-size: .8rem;
    }

    .checkbox-label {
      width: 100%;
    }

    .sub-task-icons {
      font-size: 16px;
      /* background-color: #fff131; */
    }

    .sub-task-li {
      margin: 12px;
      padding: 4px;
    }

    .date-input {
      width: 100%;
    }
  }
`;
