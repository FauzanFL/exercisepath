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
    <div className="p-2 border rounded-md">
      <h3>{name}</h3>
      <p>{type}</p>
      <p>{muscle}</p>
      <p>{equipment}</p>
      <p>{difficulty}</p>
      <p>{instructions}</p>
    </div>
  );
};

export default ExerciseList;
