import styled from 'styled-components';
import { lighten } from 'polished';

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
    color: #34A0A4;
    /* background-color: #9d9eb4; */
  }

  .sub-tasks-buttons-div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: auto;
    margin: 8px 0;
    /* background-color: #222; */
  }

  .task-button {
    height: 28px;
    width: 84px;
    font-size: 12px;
    font-weight: bold;
    margin: 4px 0;
    padding: 4px;
    border: none;
    border-radius: 4px;
    transition: background-color 0.2s;
    color: #fff;
  }

  .task-button.blue {
    background-color: #000;
    margin-right: 8px;
    &:hover {
      background-color: ${lighten(0.2, '#000')};
    }
  }
  .task-button.grey {
    background-color: #666;
    &:hover {
      background-color: ${lighten(0.2, '#666')};
    }
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
    /* background-color: #3f2; */
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
    /* background-color: #ee3; */
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
    border-radius: 4px;
    border: 1px solid #ccc;
    margin: 0 8px;
    padding: 0 8px;
    /* background-color: #a0da; */
  }

  .list-select-3 {
    height: 24px;
    width: 100px;
    max-width: 110px;
    font-size: 14px;
    border-radius: 4px;
    border: none;
    margin: 0 8px;
    padding: 0 8px;
    background-color: #ED7777;
  }

  .list-select-2 {
    height: 24px;
    width: 100px;
    max-width: 110px;
    font-size: 14px;
    border-radius: 4px;
    border: none;
    margin: 0 8px;
    padding: 0 8px;
    background-color: #f3c775;
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
    background-color: #F3E675;
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
