import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 12px;
  label {
    cursor: pointer;
    &:hover {
      opacity:0.7;
    }
  }
  img {
    height: 100%;

    width: auto;
    border: 1px solid #ccc;
    border-radius: 50%;
    transition: background 0.2s;
    &:hover {
      background: ${darken(0.03, '#eee')};
    }
  }

  .test {
    width:150px;
  height:100px;

  background-image:${props => props.test};
  }

  .image-background-div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 124px;
    width: 124px;
    overflow: hidden;
    border-radius: 50%;
    background: #fff;
  }
  input {
    display: none;
  }

`;
