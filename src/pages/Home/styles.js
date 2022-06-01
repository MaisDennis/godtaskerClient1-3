import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 92vh;
  width: 100%;
  font-weight: normal;
  background-color: #fff;
  /* background-color: #a0d; */

  .container-div {
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: #ddd;
    /* background-color: #F5F; */
  }
  .container-div.left {
    width: 50%;
    height: auto;
    margin: 4px 2px 4px 4px;
    /* background: #a0d9; */
  }
  .container-div.right {
    width: 50%;
    height: auto;
    margin: 4px 4px 4px 2px;
    /* background: #a044; */
  }

  @media (max-width: 1400px) {
    padding: 0;
  }

  @media (max-width: 620px) {
    flex-direction: column;
    overflow-y: visible;

    .container-div.left {
      width: 100%;
      margin: 0;
      /* background: #a0d9; */
    }
    .container-div.right {
      width: 100%;
      margin: 0;
      /* background: #a044; */
    }
  }
`;
