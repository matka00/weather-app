import React, { Fragment, useEffect, useState } from "react";
import { WEATHERAPI_KEY, WEATHERAPI_URL } from "../../api/apiData";
import Loader from "../ui/Loader";
import CurrentWeather from "./CurrentWeather";
import HourlyWeather from "./HourlyWeather";
import classes from "./Weather.module.css";

function Weather({ data, getConditions, getPartOfTheDay }) {
  const [allWeatherData, setAllWeatherData] = useState(null);
  const [location, setLoaction] = useState(null);
  const [partOfTheDay, setPartOfTheDay] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const coordinates = data.value;

  console.log(allWeatherData);

  const loadCurrentWeather = async (latLonData) => {
    const response = await fetch(
      `${WEATHERAPI_URL}/forecast.json?key=${WEATHERAPI_KEY}&q=${latLonData}&days=5`
    );
    const allWeatherData = await response.json();
    setAllWeatherData(allWeatherData);
    setLoaction(allWeatherData.location);
    getConditions(
      allWeatherData.current.is_day,
      allWeatherData.current.condition.code
    );
    setIsLoading(false);
    if (allWeatherData.current.is_day === 1) {
      setPartOfTheDay("day");
      getPartOfTheDay("day");
    } else if (allWeatherData.current.is_day === 0) {
      setPartOfTheDay("night");
      getPartOfTheDay("night");
    }
  };

  useEffect(() => {
    try {
      setIsLoading(true);
      const timer = setTimeout(() => {
        loadCurrentWeather(coordinates);
      }, 2000);
      return () => clearTimeout(timer);
    } catch (error) {
      console.log(error);
    }
  }, [coordinates]);

  return (
    <Fragment>
      {isLoading && <Loader />}
      {allWeatherData && !isLoading && (
        <section className={classes["main-container"]}>
          <CurrentWeather
            currentWeather={allWeatherData.current}
            locationData={location}
            partOfTheDay={partOfTheDay}
            city={data.label}
          />
          <HourlyWeather
            hourlyWeather={allWeatherData.forecast.forecastday[0]}
            partOfTheDay={partOfTheDay}
            localTime={allWeatherData.location.localtime}
          />
        </section>
      )}
    </Fragment>
  );
}

export default Weather;
