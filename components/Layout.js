import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { GlobalStyle, RebootStyle } from '../style';
import Favicon from './Favicon';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
