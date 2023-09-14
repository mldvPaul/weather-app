import React, {useState, useEffect} from "react";
import axios from "axios";
import {IoMdSunny, IoMdRainy, IoMdCloudy, IoMdSnow, IoMdThunderstorm, IoMdSearch,} from 'react-icons/io';
import {BsCloudHaze2, BsCloudDrizzleFill, BsEye, BsWater, BsThermometer, BsWind} from 'react-icons/bs';
import {TbTemperatureCelsius} from 'react-icons/tb';
import {ImSpinner8} from 'react-icons/im';



function App() {

  const [data, setData] = useState(null);
  const [location, setLocation] = useState('Berlin');

  // fetch data
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_SECRET_KEY}`

    axios.get(url).then((res) => {
      setData(res.data);
    })
  }, [location]);

  console.log(data);
  
  return (
    <div>
      <h1>weather-app</h1>
    </div>
  );
}

export default App;
