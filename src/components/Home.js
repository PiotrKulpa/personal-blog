import React, { memo } from 'react';
import TopSlider from './TopSlider';
import AboutUs from './AboutUs';
import LatestBlog from './LatestBlog';
import HappyClients from './HappyClients';

const Home = () => {
  return (
    <React.Fragment>
      <TopSlider />
      <AboutUs />
      <LatestBlog />
      <HappyClients />
    </React.Fragment>
  );
}

export default memo(Home);
