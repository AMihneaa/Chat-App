import React, { useEffect, useState } from 'react';
import StartPageFirst from '../Components/StartPage/StartPageFirst';
import StartPageSecond from '../Components/StartPage/StartPageSecond';
import Navs from '../Components/Navs';

export default function StartPage() {
  const [showElement, setShowElement] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 1500);
  });

  return <div>{showElement ? <StartPageFirst /> : <StartPageSecond />}</div>;
}
