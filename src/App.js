import React, {useState, useEffect} from "react";
import axios from "axios";
import {IoMdSunny, IoMdRainy, IoMdCloudy, IoMdSnow, IoMdThunderstorm, IoMdSearch,} from 'react-icons/io';
import {BsCloudHaze2Fill, BsCloudDrizzleFill, BsEye, BsWater, BsThermometer, BsWind} from 'react-icons/bs';
import {TbTemperatureCelsius} from 'react-icons/tb';
import {ImSpinner8} from 'react-icons/im';



function App() {

  const [data, setData] = useState(null);
  const [location, setLocation] = useState('Berlin');
  const [inputValue, setInputValue] = useState('');
  const [animate, setAnimate] = useState(false);



  const handleInput = (i) => {
    setInputValue(i.target.value);
  };

  const handleSubmit = (i) => {
    console.log(inputValue);

    if (inputValue !== '') {
      setLocation(inputValue);
    };

    const input = document.querySelector('input');

    if (input.value === '') {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }

    input.value = '';

    i.preventDefault();

  };

  // fetch data
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_SECRET_KEY}`

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

  // date object
  const date = new Date();

  return (
    <div className="w-full h-screen bg-gradient-to-r from-cyan-400 to-blue-700 flex flex-col items-center justify-center px-4 lg:px-0">
      <form className={`${animate ? 'animate-shake' : 'animate-none'} h-16 bg-black/20 w-full max-w-[450px] rounded-full backdrop-blur-[32px] mb-8`}>
        <div className="h-full relative flex items-center justify-between p-2">
          <input onChange={(i) => handleInput(i)} className="flex-1 bg-transparent outline-none placeholder:text-white text-white text-[15px] font-light pl-6 h-full" type='text' placeholder='Search by citi or country' />
          <button onClick={(i) => handleSubmit(i)} className="bg-[#1ab8ed] hover:bg-[#15abdd] w-20 h-12 rounded-full flex justify-center items-center transition">
            <IoMdSearch className="text-2xl text-white"/>
          </button>
        </div>
      </form>
      <div className="w-full max-w-[450px] bg-black/20 min-h-[580px] text-white backdrop-blur-[32px] rounded-[32px] py-12 px-6">
        <div>
          <div className="flex items-center gap-x-5">
            <div className="text-[87px]">{icon}</div>
            <div>
              <div className="text-2xl font-semibold">
                {data.name}, {data.sys.country}</div>
              <div>
              {date.getUTCDate()}/{date.getUTCMonth() + 1}/{date.getUTCFullYear()}
              </div>
            </div>
          </div>
          <div className="my-20">
            <div className="flex justify-center items-center">
              <div>
                <div className="text-[145px] leading-none font-light">{parseInt(data.main.temp)}</div>
              </div>
              <div className="text-4xl">{<TbTemperatureCelsius />}</div>
            </div>
            <div className="capitalize text-center">
              {data.weather[0].description}
            </div>
          </div>
          <div className="max-w-[387px] mx-auto flex flex-col gap-y-6">
            <div className="flex justify-between">
              <div className="flex items-center gap-x-2">
                <div className="text-[20px]">{<BsEye />}</div>
                <div>
                  Visibility <span className="ml-2">{data.visibility / 1000} km</span>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="text-[20px]">{<BsThermometer />}</div>
                <div className="flex">
                  Feels like <div className="ml-2 flex">
                    {parseInt(data.main.feels_like)}
                    <TbTemperatureCelsius />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-x-2">
                <div className="text-[20px]">{<BsWater />}</div>
                <div>
                  Humidity <span className="ml-2">{data.main.humidity} %</span>
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="text-[20px]">{<BsWind />}</div>
                <div>
                  Wind 
                  <span className="ml-2"> {data.wind.speed} m/s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
