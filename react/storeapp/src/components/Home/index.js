import React from 'react'
import CustomNav from '../CustomNav'
import { userData } from '../../helper';

const Home = () => {
    const {username}=userData();
  return (
    <div>
        <CustomNav/>
        <div className='home'>
            <h2>welcome {username}</h2>
        </div>
    </div>
  );
};

export default Home;