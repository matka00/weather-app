import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <section className={classes.footer}>
      <div className={classes["source-link-containers"]}>
        <p>Powered by:</p>
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          <img
            src={require(`../../assets/footer-icons/weatherapi.png`)}
            alt="Weather data by WeatherAPI.com"
            border="0"
          />
        </a>
      </div>
      <div className={classes["source-link-containers"]}>
        <p>Pictures and icons from:</p>
        <div className={classes["source-icons"]}>
          <a
            href="https://www.unsplash.com/"
            title="The internet’s source for visuals"
          >
            <img
              src={require(`../../assets/footer-icons/unsplash.png`)}
              alt="Pictures by Unsplash.com"
            />
          </a>
          <a
            href="https://www.icons8.com/"
            title="Icons, illustrations, photos, music, and design tools"
          >
            <img
              src={require(`../../assets/footer-icons/icons8.png`)}
              alt="Icons by Icons8.com"
            />
          </a>
          <a
            href="https://bas.dev/work/meteocons"
            title="Animated Weather Icons"
          >
            <img
              src={require(`../../assets/footer-icons/meteocons.png`)}
              alt="Weather Icons by Meteocons"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
