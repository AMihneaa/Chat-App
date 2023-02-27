import { useEffect, useState } from 'react';
import SVGImagine1 from '../svg/imagine1';
import SVGIMAGE2 from '../svg/imagine2';

const FirstElement = () => {
  return (
    <div>
      <section className="SecondElement-section">
        <div className="SecondElementDiv ">
          <SVGIMAGE2 className="SecondElement-svg" />
          <div className="SecondElement-text">
            <h2>Donare de sange, editia nu stiu care</h2>
            <h6>*Insert Furtuna - copyrighting skills -</h6>
          </div>
        </div>
      </section>
    </div>
  );
};

const SecondElement = () => {
  return (
    <section className="FirstElement-section">
      <div className="fistElementDiv ">
        <SVGImagine1 className="imagine1-svg" />
        <div className="firstElement-text">
          <h2>In colaborare cu x, y, z, semnat LSE</h2>
          <h6>
            Nulla id convallis dolor. Sed pellentesque elit at nibh placerat, at
            feugiat dolor pretium. Proin mollis magna finibus, ultrices nunc in,
            aliquam nisi. Nulla id convallis dolor. Sed pellentesque elit at
            nibh placerat, at feugiat dolor pretium. Proin mollis magna finibus,
            ultrices nunc in, aliquam nisi.
          </h6>
        </div>
      </div>
    </section>
  );
};

const StartPageSecond = () => {
  const [showElement, setShowElement] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 3000);
  });

  return showElement ? <FirstElement /> : <SecondElement />;
};

export default StartPageSecond;
