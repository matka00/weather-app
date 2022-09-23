import React, { useState } from "react";
import AsyncSelect from "react-select/async";
import { WEATHERAPI_KEY, WEATHERAPI_URL } from "../../api/apiData";

function Search({ onSearchChange }) {
  const [selectedValue, setSelectedValue] = useState(null);
  console.log(selectedValue)

  const loadOptions = async (inputValue) => {
    try{
      const response = await fetch(
        `${WEATHERAPI_URL}/search.json?key=${WEATHERAPI_KEY}&q=${inputValue}`
      );
      const optionData = await response.json();
      const loadedOptions = await optionData.map((city) => {
        return {
          value: `${city.lat},${city.lon}`,
          label: `${city.name}, ${city.country}`,
        };
      });
      return loadedOptions
    } catch(error){
      console.log(error)
    }
  };

  const handleOnchange = (searchData) => {
    setSelectedValue(searchData);
    onSearchChange(searchData);
  };
  return (
    <AsyncSelect
      placeholder="Search for city"
      value={selectedValue}
      onChange={handleOnchange}
      loadOptions={loadOptions}
    />
  );
}

export default Search;
