import React from "react";
import countryData from "@/countries";
import CountryCard from "@/components/CountryCard";

type Country = keyof typeof countryData;

const CountryName = ({ params }: { params: { country_name: string } }) => {
  const countryName = params.country_name;

  const isValidCountry = (countryName: string): countryName is Country => {
    return countryName in countryData;
  };
  return isValidCountry(countryName) ? (
    <CountryCard countryData={countryData[countryName]} />
  ) : (
    <div className="text-center text-4xl font-bold">Country not found</div>
  );
};

export default CountryName;
