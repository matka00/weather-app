import { useState } from 'react';
import './App.css';
import Search from './components/search/Search';
import CurrentWeather from './components/weather/CurrentWeather';

function App() {

  const [selectedCity, setSelectedCity] = useState(null);

  const handleOnSearchChange = (searchData) => {
    setSelectedCity(searchData)
  }

  console.log(selectedCity)

  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange}/>
      {selectedCity && <CurrentWeather data={selectedCity}/>}
    </div>
  );
}

export default App;
