'use client';

import { useState } from 'react';

const Sidebar = ({ search, muscle, type, difficulty, set }) => {
  const [name, setName] = useState('');
  const handleSearch = (event) => {
    event.preventDefault();
    search(name);
  };

  const handleMuscle = (event) => {
    const value = event.target.value;
    muscle(value);
  };

  const handleType = (event) => {
    const value = event.target.value;
    type(value);
  };

  const handleDifficulty = (event) => {
    const value = event.target.value;
    difficulty(value);
  };

  return (
    <aside className="md:sticky top-16 left-0 md:z-40 bg-white dark:bg-slate-700 shadow-inner p-4">
      <form onSubmit={handleSearch} className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
              />
            </svg>
          </div>
          <input
            type="text"
            name="search"
            onChange={({ target }) => setName(target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
            placeholder="Search name..."
            required
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-orange-700 rounded-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>
      <div className="mt-4">
        <h4 className="text-md font-bold mb-1">Difficulty</h4>
        <div className="flex items-center">
          <input
            type="radio"
            onChange={handleDifficulty}
            value={''}
            name="difficulty"
            id=""
          />
          <label className="ml-2" htmlFor="difficulty">
            All
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            onChange={handleDifficulty}
            value={'beginner'}
            name="difficulty"
            id=""
          />
          <label className="ml-2" htmlFor="difficulty">
            Beginner
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            onChange={handleDifficulty}
            value={'intermediate'}
            name="difficulty"
            id=""
          />
          <label className="ml-2" htmlFor="difficulty">
            Intermediate
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            onChange={handleDifficulty}
            value={'expert'}
            name="difficulty"
            id=""
          />
          <label className="ml-2" htmlFor="difficulty">
            Expert
          </label>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-md font-bold mb-1">Type</h4>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="type"
          onChange={handleType}
          id="type"
          defaultValue={''}
        >
          <option value="">All</option>
          <option value="cardio">Cardio</option>
          <option value="olympic_weightlifting">Olympic Weightlifting</option>
          <option value="plyometrics">Plyometrics</option>
          <option value="strength">Strength</option>
          <option value="stretching">Stretching</option>
          <option value="strongman">Strongman</option>
        </select>
      </div>
      <div className="mt-4">
        <h4 className="text-md font-bold mb-1">Muscle</h4>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="muscle"
          onChange={handleMuscle}
          id="type"
          defaultValue={''}
        >
          <option value="">All</option>
          <option value="abdominals">Abdominals</option>
          <option value="abductors">Abductors</option>
          <option value="adductors">Adductors</option>
          <option value="biceps">Biceps</option>
          <option value="calves">Calves</option>
          <option value="chest">Chest</option>
          <option value="forearms">Forearms</option>
          <option value="glutes">Glutes</option>
          <option value="hamstrings">Hamstrings</option>
          <option value="lats">Lats</option>
          <option value="lower_back">Lower Back</option>
          <option value="middle_back">Middle Back</option>
          <option value="neck">Neck</option>
          <option value="quadriceps">Quadriceps</option>
          <option value="traps">Traps</option>
          <option value="triceps">Triceps</option>
        </select>
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={set}
          className="p-2.5 w-1/2 mt-4 ms-2 text-sm font-medium text-white bg-orange-700 rounded-lg border border-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
        >
          Set
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
