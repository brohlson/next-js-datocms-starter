import Head from 'next/head';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';

const Home = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <Head>
        <title>Next JS Starter</title>
      </Head>
      <h1>Next styled-components starter</h1>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  return { data: { foo: 'bar' } };
};

Home.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Home;
