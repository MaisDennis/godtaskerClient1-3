import styled from 'styled-components';
import { lighten } from 'polished';

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
  /* background-color: #ee3; */

  .list-header {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
    /* background: #4433ee; */
  }

  .sub-menu-div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin: 8px 0 4px;
    /* background-color: #999; */
  }

  .list-header-button-ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    width: 100%;
    padding: 0;
    /* background-color: #9d9e; */
  }

  .list-header-div {
    display: flex;
    width: 100%;
    margin: 4px 0 8px;
    /* background: #a0daa9; */
  }

  .header-select {
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #000;
    padding: 0 8px;
    background-color: #fff;
  }

  .searchbar-div {
    width: 100%;
    margin-left: 8px;
    padding: 0;
    background: #a0d3;
  }

  .item-list {
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

    .item-list {
      padding-bottom: 80px;
    }
  }

`;
