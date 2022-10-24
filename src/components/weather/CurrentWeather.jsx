import React, { Fragment } from "react";
import ReactTooltip from "react-tooltip";
import classes from "./CurrentWeather.module.css";

function CurrentWeather({
  currentWeather,
  locationData,
  partOfTheDay,
  city,
  today,
}) {
  return (
    <Fragment>
      {currentWeather && (
        <section
          className={`${classes["current-card"]} ${classes[partOfTheDay]}`}
        >
          <div className={classes["top-section"]}>
            <div className="location">
              <h3>{city.split(",")[0]},</h3>
              <h3 className={classes.country}>{city.split(",")[1]}</h3>
              <h4>{locationData.localtime.split(" ")[1]}</h4>
              <h4 className={classes.date}>
                {locationData.localtime.split(" ")[0]}
              </h4>
              <h4 className={classes.today}>{today}</h4>
            </div>
            <div className={classes["top-right-section"]}>
              <div className={classes.condition}>
                <img
                  src={require(`../../assets/icons/${currentWeather.condition.code}-${currentWeather.is_day}.svg`)}
                  alt="Weather condition"
                ></img>
                <h4>{currentWeather.condition.text}</h4>
              </div>
              <h2>{currentWeather.temp_c}°C</h2>
            </div>
          </div>
          <hr />
          <div className={classes.details}>
            <div className={classes["detail-sections"]}>
              <div className={classes["detail-units"]}>
                <img
                  data-tip="feels like"
                  src={require(`../../assets/detail-icons/feels_${partOfTheDay}.png`)}
                  alt="Weather condition"
                ></img>
                <ReactTooltip place="right" type="dark" effect="float" />
                <p>{currentWeather.feelslike_c} °C</p>
              </div>
              <div className={classes["detail-units"]}>
                <img
                  data-tip="cloud coverage"
                  src={require(`../../assets/detail-icons/clouds_${partOfTheDay}.png`)}
                  alt="Weather condition"
                ></img>
                <ReactTooltip place="right" type="dark" effect="float" />
                <p>{currentWeather.cloud} %</p>
              </div>
              <div className={classes["detail-units"]}>
                <img
                  data-tip="humidity"
                  src={require(`../../assets/detail-icons/humidity_${partOfTheDay}.png`)}
                  alt="Weather condition"
                ></img>
                <ReactTooltip place="right" type="dark" effect="float" />
                <p>{currentWeather.humidity} %</p>
              </div>
              <div className={classes["detail-units"]}>
                <img
                  data-tip="precipitation"
                  src={require(`../../assets/detail-icons/precipitation_${partOfTheDay}.png`)}
                  alt="Weather condition"
                ></img>
                <ReactTooltip place="right" type="dark" effect="float" />
                <p>{currentWeather.precip_mm} mm</p>
              </div>
            </div>
            <div className={classes["detail-sections"]}>
              <div className={classes["detail-units"]}>
                <img
                  data-tip="UV index"
                  src={require(`../../assets/detail-icons/uv_${partOfTheDay}.png`)}
                  alt="Weather condition"
                ></img>
                <ReactTooltip place="right" type="dark" effect="float" />
                <p>{currentWeather.uv}</p>
              </div>
              <div className={classes["detail-units"]}>
                <img
                  data-tip="wind speed"
                  src={require(`../../assets/detail-icons/wind_${partOfTheDay}.png`)}
                  alt="Weather condition"
                ></img>
                <ReactTooltip place="right" type="dark" effect="float" />
                <p>{currentWeather.wind_kph} km/h</p>
              </div>
              <div className={classes["detail-units"]}>
                <img
                  data-tip="wind gust"
                  src={require(`../../assets/detail-icons/gust_${partOfTheDay}.png`)}
                  alt="Weather condition"
                ></img>
                <ReactTooltip place="right" type="dark" effect="float" />
                <p>{currentWeather.gust_kph} km/h</p>
              </div>
              <div className={classes["detail-units"]}>
                <img
                  data-tip="air pressure"
                  src={require(`../../assets/detail-icons/pressure_${partOfTheDay}.png`)}
                  alt="Weather condition"
                ></img>
                <ReactTooltip place="right" type="dark" effect="float" />
                <p>{currentWeather.pressure_mb} hPa</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
}

export default CurrentWeather;
