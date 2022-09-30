import React, { Fragment } from "react";
import classes from "./CurrentWeather.module.css";

function CurrentWeather({
  currentWeather,
  locationData,
  cardBackground,
  city,
}) {
  return (
    <Fragment>
      {currentWeather && (
        <section
          className={`${classes["current-card"]} ${classes[cardBackground]}`}
        >
          <div className={classes["left-section"]}>
            <div className={classes["location-info"]}>
              <div className="location">
                <h3>{city.split(",")[0]},</h3>
                <h3 className={classes.country}>{city.split(",")[1]}</h3>
                <h4>{locationData.localtime.split(" ")[1]}</h4>
                <h4 className={classes.date}>
                  {locationData.localtime.split(" ")[0]}
                </h4>
              </div>
            </div>
            <hr />
            <div className={classes.details}>
              <div className={classes["detail-units"]}>
                <h5>Feels like</h5>
                <p>{currentWeather.feelslike_c} °C</p>
              </div>
              <div className={classes["detail-units"]}>
                <h5>Clouds</h5>
                <p>{currentWeather.cloud} %</p>
              </div>
              <div className={classes["detail-units"]}>
                <h5>Humidity</h5>
                <p>{currentWeather.humidity} %</p>
              </div>
              <div className={classes["detail-units"]}>
                <h5>Precipitation</h5>
                <p>{currentWeather.precip_mm} mm</p>
              </div>
              <div className={classes["detail-units"]}>
                <h5>UV</h5>
                <p>{currentWeather.uv}</p>
              </div>
              <div className={classes["detail-units"]}>
                <h5>Wind</h5>
                <p>{currentWeather.wind_kph} km/h</p>
              </div>
              <div className={classes["detail-units"]}>
                <h5>Wind gust</h5>
                <p>{currentWeather.gust_kph} km/h</p>
              </div>
              <div className={classes["detail-units"]}>
                <h5>Pressure</h5>
                <p>{currentWeather.pressure_mb} mb</p>
              </div>
            </div>
          </div>
          <div className={classes["right-section"]}>
            <div className={classes.condition}>
              <img
                src={require(`../../assets/icons/${currentWeather.condition.code}-${currentWeather.is_day}.svg`)}
                alt="Weather condition"
              ></img>
              <h4>{currentWeather.condition.text}</h4>
            </div>
            <h2>{currentWeather.temp_c}°C</h2>
          </div>
        </section>
      )}
    </Fragment>
  );
}

export default CurrentWeather;
