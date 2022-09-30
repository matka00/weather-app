import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import classes from "./HourlyWeather.module.css";

function HourlyWeather({ hourlyWeather, cardBackground, localTime }) {
  console.log(hourlyWeather);

  let currentTime = localTime.split(" ")[1];
  let currentHour = currentTime.split(":")[0];
  console.log(currentHour);

  return (
    <section className={classes["hourly-section"]}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={4}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        initialSlide={currentHour}
        centeredSlides={true}
      >
        {hourlyWeather.hour.map((hourData) => (
          <SwiperSlide key={hourData.time}>
            <div
              className={`${classes["hourly-card"]} ${classes[cardBackground]}`}
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
                  <h5>Feels like</h5>
                  <p>{hourData.feelslike_c} °C</p>
                </div>
                <div className={classes["detail-units"]}>
                  <h5>Clouds</h5>
                  <p>{hourData.cloud} %</p>
                </div>
                <div className={classes["detail-units"]}>
                  <h5>Humidity</h5>
                  <p>{hourData.humidity} %</p>
                </div>
                <div className={classes["detail-units"]}>
                  <h5>Precipitation</h5>
                  <p>{hourData.precip_mm} mm</p>
                </div>
                <div className={classes["detail-units"]}>
                  <h5>UV</h5>
                  <p>{hourData.uv}</p>
                </div>
                <div className={classes["detail-units"]}>
                  <h5>Wind</h5>
                  <p>{hourData.wind_kph} km/h</p>
                </div>
                <div className={classes["detail-units"]}>
                  <h5>Wind gust</h5>
                  <p>{hourData.gust_kph} km/h</p>
                </div>
                <div className={classes["detail-units"]}>
                  <h5>Pressure</h5>
                  <p>{hourData.pressure_mb} mb</p>
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
