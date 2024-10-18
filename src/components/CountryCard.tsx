import Link from "next/link";

interface CountryCardProps {
  name: string;
  population: number;
  capital: string;
}

const CountryCard = ({ countryData }: { countryData: CountryCardProps }) => {
  const { name, population, capital } = countryData;
  return (
    <div className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-6xl font-bold">{name}</h1>
      <div className="w-[300px] h-[300px] bg-gray-950 rounded-xl flex justify-center items-center flex-col gap-4">
        <div>
          <h2 className="text-2xl font-semibold">Population : {population}</h2>
          <h2 className="text-2xl font-semibold">Capital : {capital}</h2>
        </div>
        <Link href={"/countries"} className="bg-cyan-600 px-4 py-2 rounded-lg">
          Back to countries page
        </Link>
      </div>
    </div>
  );
};

export default CountryCard;
