import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { GlobalStyle, RebootStyle } from '../style';
import { colors } from '../consts/styles';
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
