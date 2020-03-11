import React, { Fragment } from 'react';
import styled from 'styled-components';

import { GlobalStyle, RebootStyle } from '../style';
import { colors } from '../consts/style';
import Favicon from './Favicon';

const Wrapper = styled.div`
  background: ${colors.white};
`;

export default function Layout({ children }) {
  return (
    <Fragment>
      <RebootStyle />
      <GlobalStyle />
      <Favicon />
      <Wrapper>{children}</Wrapper>
    </Fragment>
  );
}
