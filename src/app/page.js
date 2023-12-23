/* eslint-disable jsx-a11y/alt-text */
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import 'animate.css';

export const metadata = {
  title: 'ExercisePath',
};

const Home = () => {
  return (
    <>
      <Header page={'home'} />
      <main className="dark:bg-slate-700">
        <Hero />
        <section className="p-3 dark:text-white">
          <h2 className="text-xl md:text-3xl font-bold mb-5 text-center">
            About Us
          </h2>
          <div className="text-md md:text-xl mx-12 ">
            <p className="text-center mb-4">
              <b>ExercisePath</b> is a website that provides information about a
              collection of fitness exercises that can be done at home, at the
              gym, or outdoors. We believe that everyone deserves to live a
              healthy and fit lifestyle, and we want to help you achieve your
              fitness goals.
            </p>
            <p className="text-center mb-4">
              We believe that fitness is the key to a healthier and happier
              life. Lets start your fitness today!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
