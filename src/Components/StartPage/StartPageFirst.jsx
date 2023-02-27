import React from 'react';
import SVGBlood from '../svg/blood-svg';

const StartPageFirst = () => {
  return (
    <div className="startpage-class">
      <div className="center">
        <SVGBlood className="svg-blood center" />
        <div className="startpage-div-text">
          <h2>Blood Donation</h2>
          <h3>LSE Bucuresti</h3>
        </div>
      </div>
    </div>
  );
};

export default StartPageFirst;
