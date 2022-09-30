import React, { Fragment, useEffect, useState } from "react";
import { WEATHERAPI_KEY, WEATHERAPI_URL } from "../../api/apiData";
import Loader from "../ui/Loader";
import CurrentWeather from "./CurrentWeather";

function Weather({ data, getConditions }) {
  const [allWeatherData, setAllWeatherData] = useState(null);
  const [location, setLoaction] = useState(null);
  const [cardBackground, setCardBackground] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const coordinates = data.value;

  console.log(allWeatherData);

  const loadCurrentWeather = async (latLonData) => {
    const response = await fetch(
      `${WEATHERAPI_URL}/forecast.json?key=${WEATHERAPI_KEY}&q=${latLonData}&days=1`
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
      setCardBackground("day");
    } else if (allWeatherData.current.is_day === 0) {
      setCardBackground("night");
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
        <CurrentWeather
          currentWeather={allWeatherData.current}
          locationData={location}
          cardBackground={cardBackground}
          city={data.label}
        />
      )}
    </Fragment>
  );
}

export default Weather;
