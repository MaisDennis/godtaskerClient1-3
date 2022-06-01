import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  border-radius: 8px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ccc;
  }
  padding: 8px;
  margin: 4px 4px 4px 2px;
  background-color: #fff;
  /* background-color: #f00; */

  .back-button {
    display: none;
  }

  .details-header-div {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* background: #4433ee; */
  }

  .details-title-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin: 0 8px;
    /* background: #a0da; */
  }

  .details-title-strong {
    width: auto;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    overflow: hidden;
    margin: 8px;
    color: #264653;
    /* background-color: #9d9eb4; */
  }

  .received-task-label {
    height: 32px;
    width: auto;
    font-size: 12px;
    font-weight: normal;
    color: #334466;
    /* background-color: #433eee; */
  }

  .list-header-title-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* margin: 8px; */
    /* background-color: #4ee; */
  }

  .list-header-strong {
    width: auto;
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    overflow: hidden;
    margin: 8px;
    color: #000;
    /* background-color: #9d9eb4; */
  }

  .details-body {
    display: flex;
    flex-direction: column;
    margin: 4px 0;
    /* background-color: #4e3; */
  }

  .details-strong {
    width: auto;
    font-size: 14px;
    font-weight: bold;
    text-align: left;
    margin: 12px 8px;
    color: #000;
    /* background: #666; */
  }

  .sub-tasks-div {
    display: flex;
    flex-direction: column;
    /* background-color: #ff4; */
  }
  .sub-tasks-list-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin: 0 0 8px;
    padding: 8px;
    padding-bottom: 24px;
    background-color: #fff;
    /* background-color: #F5F; */
  }

  .sub-tasks-checkbox-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: auto;
    min-height: 36px;
    width: 100%;
    padding: 12px 0;
    padding-left: 8px;
    /* background-color: #4433ee; */
  }

  .sub-task-border-bottom {
    width: 90%;
    border-bottom: 1px solid #ccc;
    margin: 8px;
  }

  .sub-tasks-checkbox-label {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: auto;
    white-space: pre-line;
    /* background-color: #f00; */
  }

  .sub-tasks-checkbox-span {
    margin: 0 8px;
    /* background: #666; */
  }

  .sub-task-checkbox-weige-span {
    font-size: 12px;
    margin: 0 8px;
  }

  .sub-tasks-buttons-div {
    display: flex;
    justify-content: flex-end;
    width: auto;
    margin: 16px 0 4px 0;
    /* background-color: #222; */
  }

  .details-mid-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 4px 8px;
    /* background-color: #4e3; */
  }

  .details-label {
    margin: 8px;
  }

  .details-description-pre {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: auto;
    min-height: 42px;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    white-space: pre-wrap;
    font-size: 14px;
    font-weight: normal;
    border: 0;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 16px;
    padding-bottom: 24px;
    margin-bottom: 24px;
    background-color: #fff;
  }

  .duedate {
    width: auto;
    border-radius: 16px;
    padding: 4px 8px;
  }
  .duedate.red {
    background-color: #EBA5A5;
  }

  .duedate.green {
    background-color: #D3FFF0;
    /* background-color: #BCDF8A; */
  }

  .list-select-4 {
    height: 24px;
    width: 100px;
    max-width: 110px;
    font-size: 14px;
    margin: 0 8px;
    padding: 0 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    background-color: #fff;
    /* background: #a0da; */
  }

  .list-select-3 {
    height: 24px;
    width: 100px;
    max-width: 110px;
    font-size: 14px;
    margin: 0 8px;
    padding: 0 8px;
    border-radius: 4px;
    border: none;
    color: #666;
    background-color: #ED7777;
    /* background-color: #FF0F0F; */
  }

  .list-select-2 {
    height: 24px;
    width: 100px;
    max-width: 110px;
    font-size: 14px;
    margin: 0 8px;
    padding: 0 8px;
    border-radius: 4px;
    border: none;
    color: #666;
    /* background-color: #ff892e; */
    background-color: #f3c775;
    /* background-color: #F3C48C; */
  }

  .list-select-1 {
    height: 24px;
    width: 100px;
    max-width: 110px;
    font-size: 14px;
    border-radius: 4px;
    border: none;
    margin: 0 8px;
    padding: 0 8px;
    color: #666;
    background-color: #F3E675;
    /* background-color: #F5F9AD; */
  }

  .list-option {
    color: #222;
    background-color: #fff;
  }

  .score-div {
    display: flex;
    flex-direction: column;
    margin: 24px 0;
    /* background-color: #007f66; */
  }

  .task-button.send-score {
    margin-top: 12px;
    margin-left: 0;
    background-color: #007f66;
  }

  .task-details-comment-input {
    height: auto;
    min-height: 56px;
    font-family: Fira Sans, sans-serif;
    line-height: 24px;

    border-radius: 4px;
    padding: 10px 12px;
    margin-bottom: 8px;
  }

  .score-date-div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .score-input {
    height: 48px;
    line-height: 24px;
    width: 80px;
    padding: 12px;
    margin-bottom: 8px;
    margin-right: 12px;
    border: 1px solid #666;
    border-radius: 4px;
    /* color: #666; */
  }

  .task-details-img-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* background-color: #4ee; */
  }

  .task-details-img {
    width: 30%;
    height: auto;
    border-radius: none;
    margin: 4px auto;
    /* background-color: #f00; */
  }

  @media (max-width: 1400px) {
    padding: 4px;

    .task-button {
      width: 72px;
      font-size: .8rem;
    }

    .details-title-strong {
      font-size: .8rem;
    }

    .details-strong {
      font-size: .8rem;
      text-align: left;
      /* margin: auto 0; */
      /* background: #ffc87c; */
    }

    .details-description-div {
      font-size: .8rem;
    }

    .sub-tasks-checkbox-span {
      font-size: .8rem;
    }
  }
  @media (max-width: 620px) {
    display: ${({ toggleContainer }) => (
      toggleContainer === 2 ? 'block' : 'none'
    )};
    width: 100%;
    margin: 4px 0;
    /* background-color: #ffc87c; */

    .back-button {
      display: block;
    }
  }
`;
