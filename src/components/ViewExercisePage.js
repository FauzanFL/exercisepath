'use client';

import { useEffect, useState } from 'react';
import ExerciseList from './ExerciseList';
import Sidebar from './Sidebar';
import Loading from './Loading';

const ViewExercisePage = () => {
  const [exercises, setExercises] = useState([]);
  const [muscle, setMuscle] = useState('');
  const [type, setType] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchExercises() {
      try {
        setIsLoading(true);
        const headers = new Headers();
        headers.append('X-Api-Key', process.env.NEXT_PUBLIC_API_KEY);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/exercises`,
          {
            method: 'GET',
            headers,
          }
        );
        const data = await response.json();
        setExercises(data);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        console.log(e);
      }
    }

    fetchExercises();
  }, []);

  const handleType = (type) => {
    setType(type);
  };

  const handleDifficulty = async (diff) => {
    setDifficulty(diff);
  };

  const handleMuscle = async (muscle) => {
    setMuscle(muscle);
  };

  const search = async (keyword) => {
    setType('');
    setMuscle('');
    setDifficulty('');
    try {
      setIsLoading(true);
      const headers = new Headers();
      headers.append('X-Api-Key', process.env.NEXT_PUBLIC_API_KEY);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/exercises?name=${keyword}`,
        {
          method: 'GET',
          headers,
        }
      );
      const data = await response.json();
      setExercises(data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  const set = async () => {
    try {
      setIsLoading(true);
      const headers = new Headers();
      headers.append('X-Api-Key', process.env.NEXT_PUBLIC_API_KEY);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/exercises?difficulty=${difficulty}&type=${type}&muscle=${muscle}`,
        {
          method: 'GET',
          headers,
        }
      );
      const data = await response.json();
      setExercises(data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      console.log(e);
    }
  };

  return (
    <>
      <main className="dark:bg-slate-700">
        <div className="block md:flex">
          <div className="inline-block w-full md:block md:w-1/4">
            <Sidebar
              search={search}
              type={handleType}
              muscle={handleMuscle}
              difficulty={handleDifficulty}
              set={set}
            />
          </div>
          <div className="w-full p-5">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <Loading />
              </div>
            ) : (
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {exercises.map((exercise, i) => {
                  return (
                    <ExerciseList
                      key={i}
                      name={exercise.name}
                      type={exercise.type}
                      muscle={exercise.muscle}
                      equipment={exercise.equipment}
                      difficulty={exercise.difficulty}
                      instructions={exercise.instructions}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>
      <button
        onClick={() => window.scrollTo(0, 0)}
        className="fixed hover:cursor-pointer bottom-5 right-5 w-10 h-10 rounded-full border shadow-md bg-slate-200 p-2 flex justify-center items-center font-bold"
      >
        &uarr;
      </button>
    </>
  );
};

export default ViewExercisePage;
