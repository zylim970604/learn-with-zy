import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const HomePage = () => {
  return (
    <Layout pageHeading='Home' pageTitle='Zy Home' >
      Welcome to LZY page
      <StaticImage
        src="https://www.thefarmersdog.com/digest/wp-content/uploads/2021/12/corgi-top-1400x871.jpg"
        alt="A corgi"
      />
      <StaticImage
        src="../images.18-National-Welsh-Corgi-Day.jpg" alt="A corgi"
      />
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />

      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/18-National-Welsh-Corgi-Day.jpg"
      />

    </Layout >
  );
};


export default HomePage;