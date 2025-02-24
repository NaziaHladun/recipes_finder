"use client";
import { cuisines } from "components/cuisines";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [query, setQuery] = useState<string>("");
  const [cuisine, setCuisine] = useState<string>("");
  const [maxTime, setMaxTime] = useState<number>(0);

  const isValid = useMemo(() => {
    return !!query || !!cuisine || maxTime > 0;
  }, [query, cuisine, maxTime]);

  const onNextHandler = () => {
    console.log("AZAZ NEXT");
    router.push("/recipes");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form className="max-w-96 flex flex-col gap-5 justify-center items-center">
        <div className="flex-col items-center border-b border-teal-500 py-2">
          <label className=" self-start block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Search recipe
          </label>
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            value={query}
            placeholder="Pasta..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="inline-block relative w-full">
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          >
            <option disabled value="">
              Select Cuisine
            </option>
            {cuisines.map((cuisine, index) => (
              <option key={index} value={cuisine}>
                {cuisine}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col items-center border-b border-teal-500 py-2 w-full">
          <label className=" self-start block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Preparation time
          </label>
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="number"
            min="0"
            value={maxTime}
            placeholder="Preparation time"
            onChange={(e) => setMaxTime(Number(e.target.value))}
          />
        </div>

        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 
             text-sm border-4 text-white py-1 px-2 rounded w-full 
             disabled:bg-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed"
          type="button"
          disabled={!isValid}
          onClick={onNextHandler}
        >
          Next
        </button>
      </form>
    </div>
  );
}
