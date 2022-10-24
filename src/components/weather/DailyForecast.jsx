import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import ReactTooltip from "react-tooltip";
import classes from "./DailyForecast.module.css";

function DailyForecast({ dailyForecast, partOfTheDay, forecastDays }) {
  let forecastData = [...dailyForecast.forecastday];

  let isDay;

  if (partOfTheDay === "day") {
    isDay = 1;
  } else if (partOfTheDay === "night") {
    isDay = 0;
  }

  return (
    <section className={classes["daily-section"]}>
      <div className={classes["daily-tag"]}>Daily forecast</div>
      <Accordion allowZeroExpanded>
        {forecastData.slice(1, 3).map((item, index) => (
          <AccordionItem
            key={item.date}
            className={`${classes.accordion} ${classes[partOfTheDay]}`}
          >
            <AccordionItemHeading>
              <AccordionItemButton>
                <section className={classes["main-forecast"]}>
                  <div className={classes["forecast-date"]}>
                    <p className={classes.weekday}>{forecastDays[index]}</p>
                    <p className={classes.date}>{item.date}</p>
                  </div>
                  <div className={classes.left}>
                    <div className={classes["forecast-conditions"]}>
                      <img
                        src={require(`../../assets/icons/${item.day.condition.code}-${isDay}.svg`)}
                        alt="Weather condition"
                      ></img>
                      <p className={classes.temp}>
                        {item.day.mintemp_c} / {item.day.maxtemp_c} °C
                      </p>
                      <p className={classes["condition-text"]}>
                        {item.day.condition.text}
                      </p>
                    </div>
                    <div
                      className={`${classes.arrow} ${classes[partOfTheDay]}`}
                    ></div>
                  </div>
                </section>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <section>
                <hr />
                <div className={classes["accordion-panel"]}>
                  <div className={classes["detail-sections"]}>
                    <div className={classes["detail-units"]}>
                      <img
                        data-tip="humidity"
                        src={require(`../../assets/detail-icons/humidity_${partOfTheDay}.png`)}
                        alt="Weather condition"
                      ></img>
                      <ReactTooltip place="right" type="dark" effect="float" />
                      <p>{item.day.avghumidity} %</p>
                    </div>
                    <div className={classes["detail-units"]}>
                      <img
                        data-tip="precipitation"
                        src={require(`../../assets/detail-icons/precipitation_${partOfTheDay}.png`)}
                        alt="Weather condition"
                      ></img>
                      <ReactTooltip place="right" type="dark" effect="float" />
                      <p>{item.day.totalprecip_mm} mm</p>
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
                      <p>{item.day.uv}</p>
                    </div>
                    <div className={classes["detail-units"]}>
                      <img
                        data-tip="wind speed"
                        src={require(`../../assets/detail-icons/wind_${partOfTheDay}.png`)}
                        alt="Weather condition"
                      ></img>
                      <ReactTooltip place="right" type="dark" effect="float" />
                      <p>{item.day.maxwind_kph} km/h</p>
                    </div>
                  </div>
                </div>
              </section>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default DailyForecast;
