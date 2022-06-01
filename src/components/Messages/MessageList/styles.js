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

  .message-header {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    /* background-color: #4433ee; */
  }
  .list-header-title-div {
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
    width: 100%;
    /* margin: 8px; */
    /* background-color: #4ee; */
  }

  .list-header-button-ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    width: 100%;
    margin: 8px auto 4px;
    padding: 0;
    /* background-color: #9d9eb4; */
  }

  .list-header-div {
    display: flex;
    width: 100%;
    margin: 4px 0 8px;
    background: #a0daa9;
  }

  .mesage-list {
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
    padding: 4px;
  }
  @media (max-width: 620px) {
    display: ${({ toggleContainer }) => (
        toggleContainer === 1 ? 'block' : 'none'
    )};
    height: 92vh;
    width: 100%;
    margin: 4px 0;
    /* background-color: #ee3; */

    .message-list {
      padding-bottom: 80px;
    }

  }
`;
