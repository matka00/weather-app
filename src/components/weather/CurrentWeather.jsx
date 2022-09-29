import React, { Fragment, useEffect, useState } from "react";
import { WEATHERAPI_KEY, WEATHERAPI_URL } from "../../api/apiData";
import classes from "./CurrentWeather.module.css";

function CurrentWeather({ data, currentConditions }) {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [cardBackground, setCardBackground] = useState(null);

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
    currentConditions(
      currentWeatherData.current.is_day,
      currentWeatherData.current.condition.code
    );
    if (currentWeatherData.current.is_day === 1) {
      setCardBackground('day');
    } else if (currentWeatherData.current.is_day === 0) {
      setCardBackground('night');
    }  
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
        <section
          className={`${classes["current-card"]} ${classes[cardBackground]}`}
        >
          <div className={classes["left-section"]}>
            <div className={classes["location-info"]}>
              <div className="location">
                <h3>{data.label.split(",")[0]},</h3>
                <h3 className={classes.country}>{data.label.split(",")[1]}</h3>
                <h4>{currentWeather.location.localtime.split(" ")[1]}</h4>
                <h4 className={classes.date}>
                  {currentWeather.location.localtime.split(" ")[0]}
                </h4>
              </div>
            </div>
            <hr />
            <div className={classes.details}>
              <div className={classes["detail-units"]}>
                <h5>Feels like</h5>
                <p>{currentWeather.current.feelslike_c} °C</p>
              </div>
              <div className={classes["detail-units"]}>
                <h5>Clouds</h5>
                <p>{currentWeather.current.cloud} %</p>
              </div>
              <div className={classes["detail-units"]}>
                <h5>Humidity</h5>
                <p>{currentWeather.current.humidity} %</p>
              </div>
              <div className={classes["detail-units"]}>
                <h5>Precipitation</h5>
                <p>{currentWeather.current.precip_mm} mm</p>
              </div>
              <div className={classes["detail-units"]}>
                <h5>UV</h5>
                <p>{currentWeather.current.uv}</p>
              </div>
              <div className={classes["detail-units"]}>
                <h5>Wind</h5>
                <p>{currentWeather.current.wind_kph} km/h</p>
              </div>
              <div className={classes["detail-units"]}>
                <h5>Wind gust</h5>
                <p>{currentWeather.current.gust_kph} km/h</p>
              </div>
              <div className={classes["detail-units"]}>
                <h5>Pressure</h5>
                <p>{currentWeather.current.pressure_mb} mb</p>
              </div>
            </div>
          </div>
          <div className={classes["right-section"]}>
            <div className={classes.condition}>
              <img
                src={require(`../../assets/icons/${currentWeather.current.condition.code}-${currentWeather.current.is_day}.svg`)}
                alt="Weather condition"
              ></img>
              <h4>{currentWeather.current.condition.text}</h4>
            </div>
            <h2>{currentWeather.current.temp_c}°C</h2>
          </div>
        </section>
      )}
    </Fragment>
  );
}

export default CurrentWeather;
