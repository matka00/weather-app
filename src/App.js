import { useState } from "react";
import CurrentBackground from "./components/ui/CurrentBackground";
import "./App.css";
import Weather from "./components/weather/Weather";
import Footer from "./components/header-footer/Footer";
import Header from "./components/header-footer/Header";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [conditions, setConditions] = useState(null);
  const [backgroundClass, setBackgroundClass] = useState(null);
  const [dayCode, setDayCode] = useState("day");

  const handleOnSearchChange = (searchData) => {
    setSelectedCity(searchData);
  };

  const getConditions = (isDay, code) => {
    let conditionData = {
      isDay: isDay,
      conditionCode: code,
    };
    setConditions(conditionData);
  };

  const getPartOfTheDay = (dayCode) => {
    setDayCode(dayCode);
  };

  const getBackgroundClass = (backgroundClass) => {
    setBackgroundClass(backgroundClass);
  };

  //console.log(selectedCity);
  //console.log(conditions);

  return (
    <section className="app-container">
      {conditions && (
        <CurrentBackground
          conditionData={conditions}
          getBackgroundClass={getBackgroundClass}
        />
      )}
      <div className="main-section">
        <Header onSearchChange={handleOnSearchChange} />
        {selectedCity && (
          <Weather
            data={selectedCity}
            getConditions={getConditions}
            getPartOfTheDay={getPartOfTheDay}
          />
        )}
        <Footer isDay={dayCode} backgroundClass={backgroundClass} />
      </div>
    </section>
  );
}

export default App;
