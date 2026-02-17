import React, { useEffect, useState } from "react";

export default function PublicHolidays() {
  const [countriesList, setCountriesList] = useState([]);

  const [holidayData, setHolidayData] = useState({
    selectedCountry: "NL",
    holidays: []
  });

  useEffect(() => {
    fetch("https://openholidaysapi.org/Countries?languageIsoCode=EN")
      .then(res => res.json())
      .then(data =>setCountriesList(data));
  }, []);

  useEffect(() => {
    fetch(
      `https://openholidaysapi.org/PublicHolidays?countryIsoCode=${holidayData.selectedCountry}&languageIsoCode=EN&validFrom=2022-01-01&validTo=2022-12-31`
    )
      .then(res => res.json())
      .then(data =>
        setHolidayData(prev => ({
          ...prev,
          holidays: data
        }))
      );
  }, [holidayData.selectedCountry]);

  function handleChange(e) {
    setHolidayData(prev => ({
      ...prev,
      selectedCountry: e.target.value
    }));
  }

  return (
    <>
      <select value={holidayData.selectedCountry} onChange={handleChange}>
        {countriesList.map(country => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name[0].text}
          </option>
        ))}
      </select>

      <ul>
        {holidayData.holidays.map(holiday => (
          <li key={holiday.id}>{holiday.name[0].text}</li>
        ))}
      </ul>
    </>
  );
}
