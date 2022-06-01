import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow: ${({toggleContainer}) => (
    toggleContainer === 2 ? 'scroll' : 'hidden'
  )};
  height: auto;
  width: 100%;
  /* background-color: #4433ee; */

  @media (max-width: 620px) {
    display: block;
    margin-top: 8vh;
    height: 92vh;
  }
`;
