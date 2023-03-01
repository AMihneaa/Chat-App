import React from 'react';
import CarrouselComponent from '../Components/Home/Carrousel';
import Navs from '../Components/Navs';
import SVGBloodRed from '../Components/svg/blood-svg-red';

function Home() {
  return (
    <div className="home">
      <section className="home-section">
        <Navs />
        <div className="taietura">
          <SVGBloodRed className="svg-logo" />
        </div>

        <CarrouselComponent />
        <div className="info-btn-div"></div>
      </section>
    </div>
  );
}

export default Home;
