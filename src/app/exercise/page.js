/* eslint-disable jsx-a11y/alt-text */
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ViewExercisePage from '@/components/ViewExercisePage';
import 'animate.css';

export const metadata = {
  title: 'ExercisePath | Exercise',
};

const Exercise = () => {
  return (
    <>
      <Header page={'exercise'} />
      <ViewExercisePage />
      <Footer />
    </>
  );
};

export default Exercise;
