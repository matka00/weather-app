import React from "react";
import classes from "./CurrentBackground.module.css";

function CurrentBackground(props) {
  let conditions = {
    isDay: props.conditionData.isDay,
    conditionCode: props.conditionData.conditionCode,
  };

  //isDay: 1 means day & isDay: 0 means night
  //condition code list: https://www.weatherapi.com/docs/weather_conditions.json

  //console.log(conditions);

  let backgroundClass;

  const getBackgroundClass = () => {
    switch (conditions.conditionCode) {
      default:
        backgroundClass = "base";
        break;
      case 1000:
        backgroundClass = `clear-${conditions.isDay}`;
        break;
      case 1003:
        backgroundClass = `partly-${conditions.isDay}`;
        break;
      case 1006:
        backgroundClass = `cloud-${conditions.isDay}`;
        break;
      case 1009:
        backgroundClass = `cloud-${conditions.isDay}`;
        break;
      case 1030:
        backgroundClass = `mist-${conditions.isDay}`;
        break;
      case 1063:
        backgroundClass = `rain-${conditions.isDay}`;
        break;
      case 1066:
        backgroundClass = `snow-${conditions.isDay}`;
        break;
      case 1069:
        backgroundClass = `sleet-${conditions.isDay}`;
        break;
      case 1072:
        backgroundClass = `sleet-${conditions.isDay}`;
        break;
      case 1087:
        backgroundClass = `storm-${conditions.isDay}`;
        break;
      case 1114:
        backgroundClass = `snow-${conditions.isDay}`;
        break;
      case 1117:
        backgroundClass = `snow-${conditions.isDay}`;
        break;
      case 1135:
        backgroundClass = `mist-${conditions.isDay}`;
        break;
      case 1147:
        backgroundClass = `mist-${conditions.isDay}`;
        break;
      case 1150:
        backgroundClass = `snow-${conditions.isDay}`;
        break;
      case 1153:
        backgroundClass = `snow-${conditions.isDay}`;
        break;
      case 1168:
        backgroundClass = `sleet-${conditions.isDay}`;
        break;
      case 1171:
        backgroundClass = `sleet-${conditions.isDay}`;
        break;
      case 1180:
        backgroundClass = `rain-${conditions.isDay}`;
        break;
      case 1183:
        backgroundClass = `rain-${conditions.isDay}`;
        break;
      case 1186:
        backgroundClass = `rain-${conditions.isDay}`;
        break;
      case 1189:
        backgroundClass = `rain-${conditions.isDay}`;
        break;
      case 1192:
        backgroundClass = `rain-${conditions.isDay}`;
        break;
      case 1195:
        backgroundClass = `rain-${conditions.isDay}`;
        break;
      case 1198:
        backgroundClass = `sleet-${conditions.isDay}`;
        break;
      case 1201:
        backgroundClass = `sleet-${conditions.isDay}`;
        break;
      case 1204:
        backgroundClass = `sleet-${conditions.isDay}`;
        break;
      case 1207:
        backgroundClass = `sleet-${conditions.isDay}`;
        break;
      case 1210:
        backgroundClass = `snow-${conditions.isDay}`;
        break;
      case 1213:
        backgroundClass = `snow-${conditions.isDay}`;
        break;
      case 1216:
        backgroundClass = `snow-${conditions.isDay}`;
        break;
      case 1219:
        backgroundClass = `snow-${conditions.isDay}`;
        break;
      case 1222:
        backgroundClass = `snow-${conditions.isDay}`;
        break;
      case 1225:
        backgroundClass = `snow-${conditions.isDay}`;
        break;
      case 1237:
        backgroundClass = `sleet-${conditions.isDay}`;
        break;
      case 1240:
        backgroundClass = `rain-${conditions.isDay}`;
        break;
      case 1243:
        backgroundClass = `rain-${conditions.isDay}`;
        break;
      case 1246:
        backgroundClass = `rain-${conditions.isDay}`;
        break;
      case 1249:
        backgroundClass = `sleet-${conditions.isDay}`;
        break;
      case 1252:
        backgroundClass = `sleet-${conditions.isDay}`;
        break;
      case 1255:
        backgroundClass = `snow-${conditions.isDay}`;
        break;
      case 1258:
        backgroundClass = `snow-${conditions.isDay}`;
        break;
      case 1261:
        backgroundClass = `hail-${conditions.isDay}`;
        break;
      case 1264:
        backgroundClass = `hail-${conditions.isDay}`;
        break;
      case 1273:
        backgroundClass = `storm-${conditions.isDay}`;
        break;
      case 1276:
        backgroundClass = `storm-${conditions.isDay}`;
        break;
      case 1279:
        backgroundClass = `snow-${conditions.isDay}`;
        break;
      case 1282:
        backgroundClass = `snow-${conditions.isDay}`;
        break;
    }

    return backgroundClass;
  };

  getBackgroundClass();

  return <div className={`${classes.main} ${classes[backgroundClass]}`}></div>;
}

export default CurrentBackground;
