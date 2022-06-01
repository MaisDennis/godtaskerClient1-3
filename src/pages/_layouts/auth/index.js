import React from 'react';
import Proptypes from 'prop-types';
import { Wrapper, Content } from './styles';
import hero from '~/assets/stockImages/hero02.jpg';
// import { Container } from './styles';
export default function AuthLayout( {children }) {
  return (
    <Wrapper>
      {/* <Content> */}
        {children}
      {/* </Content> */}
    </Wrapper>
  );
}
AuthLayout.propTypes = {
  children: Proptypes.element.isRequired,
}
