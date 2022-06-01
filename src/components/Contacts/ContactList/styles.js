import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  overflow: hidden;
  /* overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ccc;
  } */
  border-radius: 8px;
  margin: 4px 2px 4px 4px;
  padding: 8px;
  background-color: #fff;
  /* background-color: #5edc1f; */

  .contact-header {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    /* background-color: #4433ee; */
  }
  .list-header-title-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    /* margin: 8px; */
    /* background-color: #ee3; */
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

  .list-header-div {
    display: flex;
    width: 100%;
    margin: 8px 0;
    background: #a0daa9;
  }

  .contact-list {
    height: 100%;
    border-radius: 4px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background: #ccc;
    }
    padding-bottom: 60px;
    /* background-color: #e3e; */
  }

  @media (max-width: 1400px) {
    .list-header-strong {
      font-size: .8rem;
    }
  }

  @media (max-width: 620px) {
    display: ${({ toggleContainer }) => (
      toggleContainer === 1 ? 'block' : 'none'
    )};
    height: 92vh;
    width: 100%;
    margin: 4px 0;
    /* background-color: #f00; */

    .list-header-strong {
      font-size: .8rem;
    }

    .contact-list {
      padding-bottom: 80px;
    }
  }
`;
