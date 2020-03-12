import Head from 'next/head';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import { colors } from '../consts/styles';
import DatoCmsClient from '../lib/dato';

const ComingSoon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.white};
  padding: 2.4rem;

  img {
    width: 28rem;
    max-width: 100%;
  }
`;

const Home = ({ data }) => {
  return (
    <Layout>
      <Head>
        <title>Loaf Boy Fresh</title>
      </Head>
      <ComingSoon>
        <img src="/logo.svg" alt="Logo" />
      </ComingSoon>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const res = await DatoCmsClient.allRecipes();
  return { data: res };
};

Home.propTypes = {
  data: PropTypes.shape({
    recipes: PropTypes.array.isRequired,
  }).isRequired,
};

export default Home;
