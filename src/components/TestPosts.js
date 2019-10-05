import React, { memo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import GET_TEST_POSTS from '../queries/test';
import AboutUs from './AboutUs';

const TestPosts = () => {
 
  const { error, data } = useQuery(GET_TEST_POSTS, { errorPolicy: 'all' });
  if (error) console.log(JSON.stringify(error));
  console.log(data);
    return ( 
      <>
      <AboutUs />
      
      </>
    )
}

export default memo(TestPosts);
