'use client';

const ExerciseList = ({
  name,
  type,
  muscle,
  equipment,
  difficulty,
  instructions,
}) => {
  return (
    <div class="p-6 border-orange-200 hover:border-orange-400 border-2 rounded-lg bg-origin-border hover:bg-origin-padding shadow-md dark:bg-slate-600 animate__animated animate__bounceInDown">
      <div class="pt-4 pb-4">
        <span class="inline-block bg-yellow-100 rounded-md px-3 text-2xl capitalize text-orange-500 font-semibold font-mons mb-2">
          {name}
        </span>
      </div>
      <p class="text-gray-600 font-medium font-mons mb-1 dark:text-white">
        Type : {type}
      </p>
      <p class="text-gray-600 font-medium font-mons mb-1 dark:text-white">
        Muscle : {muscle}
      </p>
      <p class="text-gray-600 font-medium font-mons mb-1 dark:text-white">
        Equipment : {equipment}
      </p>
      <p class="text-gray-600 font-medium font-mons mb-1 dark:text-white">
        Difficutly : {difficulty}
      </p>
      <p class="text-gray-800 font-medium whitespace-normal font-mons dark:text-white">
        {' '}
        instructions : {instructions}
      </p>
    </div>
  );
};

export default ExerciseList;
