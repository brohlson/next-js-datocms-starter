import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { GlobalStyle, RebootStyle } from '../style';
import { colors } from '../consts/styles';
import Favicon from './Favicon';

const Wrapper = styled.div`
  background: ${colors.white};
`;

const IntroIcon = styled.img.attrs({ alt: 'Icon' })`
  width: ${({ started }) => (started ? '0%' : '250%')};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition: all 1s ease;
  z-index: 5;
`;

export default function Layout({ children }) {
  const [run, setRun] = useState(false);
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('introDone')) return setDone(true);
    setRun(true);
    setTimeout(() => {
      setStarted(true);
    }, 1000);
    setTimeout(() => {
      setDone(true);
      sessionStorage.setItem('introDone', 'true');
    }, 2000);
  }, []);
  return (
    <Fragment>
      <RebootStyle />
      <GlobalStyle />
      <Favicon />
      {!done && run && <IntroIcon src="icon.svg" started={started} />}
      <Wrapper>{children}</Wrapper>
    </Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
