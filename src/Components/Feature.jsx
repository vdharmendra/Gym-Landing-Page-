import React from 'react';
import Featurebox from './Featurebox';
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';

function Feature() {
  return (
    <div id='features'>
      <h1>FEATURES</h1>
      <div className="a-container">
        <Featurebox src={fimage1} title="WeightLifting"/>
        <Featurebox src={fimage2} title="Specific Muscle"/>
        <Featurebox src={fimage3} title="Flex Your Muscle"/>
        <Featurebox src={fimage4} title="Cardio Exercise"/>
      </div>
    </div>
  )
}

export default Feature;
