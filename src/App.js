import { Fragment, useState } from "react";
import Search from "./components/search/Search";
import CurrentBackground from "./components/ui/CurrentBackground";
import CurrentWeather from "./components/weather/CurrentWeather";
import "./App.css";

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [conditions, setConditions] = useState(null);

  const handleOnSearchChange = (searchData) => {
    setSelectedCity(searchData);
  };

  const currentConditions = (isDay, conditionCode) => {
    let conditionData = {
      isDay: isDay,
      conditionCode: conditionCode,
    };
    setConditions(conditionData);
  };

  console.log(selectedCity);
  console.log(conditions);

  return (
    <Fragment>
      {conditions && <CurrentBackground conditionData={conditions} />}
      <section className="main-section">
        <header>
          <h1>Check the weather</h1>
          <Search onSearchChange={handleOnSearchChange} />
        </header>
        {selectedCity && (
          <CurrentWeather
            data={selectedCity}
            currentConditions={currentConditions}
          />
        )}
      </section>
    </Fragment>
  );
}

export default App;
