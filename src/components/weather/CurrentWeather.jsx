import React, { Fragment, useEffect, useState } from "react";
import { WEATHERAPI_KEY, WEATHERAPI_URL } from "../../api/apiData";

function CurrentWeather({ data }) {
  const [currentWeather, setCurrentWeather] = useState(null);

  const coordinates = data.value;

  console.log(coordinates);

  console.log(currentWeather);

  const loadCurrentWeather = async (latLonData) => {
    const currentWeatherResponse = await fetch(
      `${WEATHERAPI_URL}/current.json?key=${WEATHERAPI_KEY}&q=${latLonData}`
    );
    const currentWeatherData = await currentWeatherResponse.json();
    console.log(currentWeatherData);
    setCurrentWeather(currentWeatherData);
  };

  useEffect(() => {
    console.log("useffect run");
    try {
      loadCurrentWeather(coordinates);
    } catch (error) {
      console.log(error);
    }
  }, [coordinates]);

  return (
    <Fragment>
      {currentWeather && (
        <section>
          <div>
            <p>{currentWeather.current.temp_c}°C</p>
            <div>
              <p>{data.label}</p>
              <p>{currentWeather.location.localtime}</p>
            </div>
            <div>
              <img
                src={currentWeather.current.condition.icon}
                alt="Weather condition"
              ></img>
              <p>{currentWeather.current.condition.text}</p>
            </div>
          </div>
          <div>
            <p>Feels like</p>
            <p>{currentWeather.current.feelslike_c}°C</p>
          </div>
          <div>
            <p>Clouds</p>
            <p>{currentWeather.current.cloud}%</p>
          </div>
          <div>
            <p>Humidity</p>
            <p>{currentWeather.current.humidity}%</p>
          </div>
          <div>
            <p>Precipitation</p>
            <p>{currentWeather.current.precip_mm} mm</p>
          </div>
          <div>
            <p>UV</p>
            <p>{currentWeather.current.uv}</p>
          </div>
          <div>
            <p>Wind</p>
            <p>{currentWeather.current.wind_kph} km/h</p>
          </div>
          <div>
            <p>Wind direction</p>
            <p>{currentWeather.current.wind_dir}</p>
          </div>
          <div>
            <p>Wind gust</p>
            <p>{currentWeather.current.gust_kph} km/h</p>
          </div>
          <div>
            <p>Pressure</p>
            <p>{currentWeather.current.pressure_mb} mb</p>
          </div>
        </section>
      )}
    </Fragment>
  );
}

export default CurrentWeather;
