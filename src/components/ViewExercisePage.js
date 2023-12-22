'use client';

import { useEffect, useState } from 'react';
import Button from './Button';
import ExerciseList from './ExerciseList';
import Sidebar from './Sidebar';

const ViewExercisePage = () => {
  const [exercises, setExercises] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function fetchExercises() {
      const headers = new Headers();
      headers.append('X-Api-Key', process.env.NEXT_PUBLIC_API_KEY);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/exercises?offset=${offset}`,
          {
            method: 'GET',
            headers,
          }
        );
        const data = await response.json();
        console.log(process.env.API_KEY);
        console.log(data);
        setExercises((prevExercises) => [...prevExercises, ...data]);
      } catch (e) {
        console.log(e);
      }
    }

    fetchExercises();
  }, [offset]);

  function handleLoadMore() {
    setOffset((prevOffset) => prevOffset + 50);
  }
  return (
    <main>
      <div className="flex">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-full">
          <div className="w-full grid grid-cols-3 gap-4">
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
          <div className="flex justify-center items-center">
            <Button
              click={handleLoadMore}
              className={
                'bg-slate-600 hover:bg-slate-500 pt-2 px-4 pb-2 font-bold rounded-lg shadow-sm border'
              }
              content={'Load More'}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ViewExercisePage;
