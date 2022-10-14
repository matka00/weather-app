import { Fragment, useState } from "react";
import Search from "./components/search/Search";
import CurrentBackground from "./components/ui/CurrentBackground";
import "./App.css";
import Weather from "./components/weather/Weather";
import Footer from "./components/header-footer/Footer";
import Header from "./components/header-footer/Header";

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
        <Header onSearchChange={handleOnSearchChange} />
        {selectedCity && (
          <Weather data={selectedCity} getConditions={getConditions} />
        )}
        <Footer />
      </div>
    </section>
  );
}

export default App;
