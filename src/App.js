import React, {useState, useEffect} from "react";
import axios from "axios";
import {IoMdSunny, IoMdRainy, IoMdCloudy, IoMdSnow, IoMdThunderstorm, IoMdSearch,} from 'react-icons/io';
import {BsCloudHaze2Fill, BsCloudDrizzleFill, BsEye, BsWater, BsThermometer, BsWind} from 'react-icons/bs';
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

  // if data is false show the loader
  if (!data) {
    return (
      <div>
        <div>
          <ImSpinner8 className="text-5xl animate-spin" />
        </div>
      </div>
    );
  }

  // set the icon acording to the weather
  let icon;
  switch (data.weather[0].main) {
    case 'Clouds':
      icon = <IoMdCloudy />;
      break;

    case 'Hase':
      icon = <BsCloudHaze2Fill />;
      break;

    case 'Rain':
      icon = <IoMdRainy />;
      break;

    case 'Clear':
      icon = <IoMdSunny />;
      break;

    case 'CloClearuds':
        icon = <IoMdSunny />;
        break;

    case 'Drizzle':
      icon = <BsCloudDrizzleFill />;
      break;

    case 'Snow':
      icon = <IoMdSnow />;
      break;

    case 'Thunderstorm':
      icon = <IoMdThunderstorm />;
      break;
  }

  
  return (
    <div className="text-6xl">
      {icon}
    </div>
  );
}

export default App;
