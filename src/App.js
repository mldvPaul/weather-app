import React, {useState, useEffect} from "react";
import axios from "axios";
import {IoMdSunny, IoMdRainy, IoMdCloudy, IoMdSnow, IoMdThunderstorm, IoMdSearch,} from 'react-icons/io';
import {BsCloudHaze2, BsCloudDrizzleFill, BsEye, BsWater, BsThermometer, BsWind} from 'react-icons/bs';
import {TbTemperatureCelsius} from 'react-icons/tb';
import {ImSpinner8} from 'react-icons/im';

const APIkey = (process.env.REACT_APP_SECRET_KEY);
console.log(APIkey)
function App() {
  return (
    <div>
      <h1>weather-app</h1>
      
    </div>
  );
}

export default App;
