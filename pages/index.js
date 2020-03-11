import Head from 'next/head';
import styled from 'styled-components';

import Layout from '../components/Layout';
import { colors } from '../consts/style';

const ComingSoon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  padding: 2.4rem;

  img {
    width: 28rem;
    max-width: 100%;
  }
`;

const Home = () => (
  <Layout>
    <Head>
      <title>Loaf Boy Fresh</title>
    </Head>
    <ComingSoon>
      <img src="/logo.svg" alt="Logo" />
    </ComingSoon>
  </Layout>
);

export default Home;
