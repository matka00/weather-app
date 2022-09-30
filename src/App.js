import { Fragment, useState } from "react";
import Search from "./components/search/Search";
import CurrentBackground from "./components/ui/CurrentBackground";
import "./App.css";
import Weather from "./components/weather/Weather";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [conditions, setConditions] = useState(null);

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

  //console.log(selectedCity);
  console.log(conditions);

  return (
    <section className="app-container">
      {conditions && <CurrentBackground conditionData={conditions} />}
      <div className="main-section">
        <header>
          <h1>Check the weather</h1>
          <Search onSearchChange={handleOnSearchChange} />
        </header>
        {selectedCity && (
          <Weather data={selectedCity} getConditions={getConditions} />
        )}
      </div>
    </section>
  );
}

export default App;
