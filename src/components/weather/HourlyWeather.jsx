import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ReactTooltip from "react-tooltip";
import classes from "./HourlyWeather.module.css";

function HourlyWeather({ hourlyWeather, partOfTheDay, localTime }) {
  //console.log(hourlyWeather);

  let currentTime = localTime.split(" ")[1];
  let currentHour = currentTime.split(":")[0];
  //console.log(currentHour);

  return (
    <section className={classes["hourly-section"]}>
      <div className={classes["hourly-tag"]}>Hourly forecast</div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={2}
        breakpoints={{
          769: {
            width: 729,
            slidesPerView: 5,
          },
          321: {
            width: 280,
            slidesPerView: 2,
          },
        }}
        navigation
        scrollbar={{ draggable: true }}
        /* onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")} */
        initialSlide={currentHour}
        centeredSlides={true}
      >
        {hourlyWeather.hour.map((hourData) => (
          <SwiperSlide key={hourData.time}>
            <div
              className={`${classes["hourly-card"]} ${classes[partOfTheDay]}`}
            >
              <p className={classes.hour}>{hourData.time.split(" ")[1]}</p>
              <img
                src={require(`../../assets/icons/${hourData.condition.code}-${hourData.is_day}.svg`)}
                alt="Weather condition"
              ></img>
              <p className={classes.degree}>{hourData.temp_c} °C</p>
              <p className={classes.condition}>{hourData.condition.text}</p>
              <hr />
              <div className={classes.details}>
                <div className={classes["detail-units"]}>
                  <img
                    data-tip="feels like"
                    src={require(`../../assets/detail-icons/feels_${partOfTheDay}.png`)}
                    alt="Weather condition"
                  ></img>
                  <ReactTooltip place="right" type="dark" effect="float" />
                  <p>{hourData.feelslike_c} °C</p>
                </div>
                <div className={classes["detail-units"]}>
                  <img
                    data-tip="cloud coverage"
                    src={require(`../../assets/detail-icons/clouds_${partOfTheDay}.png`)}
                    alt="Weather condition"
                  ></img>
                  <ReactTooltip place="right" type="dark" effect="float" />
                  <p>{hourData.cloud} %</p>
                </div>
                <div className={classes["detail-units"]}>
                  <img
                    data-tip="humidity"
                    src={require(`../../assets/detail-icons/humidity_${partOfTheDay}.png`)}
                    alt="Weather condition"
                  ></img>
                  <ReactTooltip place="right" type="dark" effect="float" />
                  <p>{hourData.humidity} %</p>
                </div>
                <div className={classes["detail-units"]}>
                  <img
                    data-tip="precipitation"
                    src={require(`../../assets/detail-icons/precipitation_${partOfTheDay}.png`)}
                    alt="Weather condition"
                  ></img>
                  <ReactTooltip place="right" type="dark" effect="float" />
                  <p>{hourData.precip_mm} mm</p>
                </div>
                <div className={classes["detail-units"]}>
                  <img
                    data-tip="UV index"
                    src={require(`../../assets/detail-icons/uv_${partOfTheDay}.png`)}
                    alt="Weather condition"
                  ></img>
                  <ReactTooltip place="right" type="dark" effect="float" />
                  <p>{hourData.uv}</p>
                </div>
                <div className={classes["detail-units"]}>
                  <img
                    data-tip="wind speed"
                    src={require(`../../assets/detail-icons/wind_${partOfTheDay}.png`)}
                    alt="Weather condition"
                  ></img>
                  <ReactTooltip place="right" type="dark" effect="float" />
                  <p>{hourData.wind_kph} km/h</p>
                </div>
                <div className={classes["detail-units"]}>
                  <img
                    data-tip="wind gust"
                    src={require(`../../assets/detail-icons/gust_${partOfTheDay}.png`)}
                    alt="Weather condition"
                  ></img>
                  <ReactTooltip place="right" type="dark" effect="float" />
                  <p>{hourData.gust_kph} km/h</p>
                </div>
                <div className={classes["detail-units"]}>
                  <img
                    data-tip="air pressure"
                    src={require(`../../assets/detail-icons/pressure_${partOfTheDay}.png`)}
                    alt="Weather condition"
                  ></img>
                  <ReactTooltip place="right" type="dark" effect="float" />
                  <p>{hourData.pressure_mb} hPa</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HourlyWeather;
