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
    <div className="p-6 border-orange-200 hover:border-orange-400 border-2 rounded-lg bg-origin-border hover:bg-origin-padding shadow-md dark:bg-slate-600 animate__animated animate__bounceInDown">
      <div className="pt-4 pb-4">
        <span className="inline-block bg-yellow-100 rounded-md px-3 text-2xl capitalize text-orange-500 font-semibold font-mons mb-2">
          {name}
        </span>
      </div>
      <p className="text-gray-600 font-medium font-mons mb-1 dark:text-white">
        Type : {type}
      </p>
      <p className="text-gray-600 font-medium font-mons mb-1 dark:text-white">
        Muscle : {muscle}
      </p>
      <p className="text-gray-600 font-medium font-mons mb-1 dark:text-white">
        Equipment : {equipment}
      </p>
      <p className="text-gray-600 font-medium font-mons mb-1 dark:text-white">
        Difficutly : {difficulty}
      </p>
      <p className="text-gray-800 font-medium whitespace-normal font-mons dark:text-white">
        {' '}
        instructions : {instructions}
      </p>
    </div>
  );
};

export default ExerciseList;
