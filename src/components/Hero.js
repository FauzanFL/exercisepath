'use client';

import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  return (
    <div className="relative flex justify-center items-center mb-8 w-full h-52 md:h-96">
      <div className="w-full md:w-1/2">
        <p className="relative z-10 md:text-2xl font-bold text-white text-center">
          Start by setting your fitness goals. What do you want to achieve? Do
          you want to lose weight, build muscle, or improve your cardiovascular
          fitness?
        </p>
        <div className="relative z-10 flex justify-center items-center">
          <Button
            className={
              'bg-orange-400 font-bold p-2 mt-3 rounded-full border hover:bg-orange-300'
            }
            href={'/exercise'}
            content={'Get Started'}
          />
        </div>
      </div>
      <Image
        src={'/hero.jpg'}
        fill={'true'}
        alt="exercise image"
        priority
      ></Image>
    </div>
  );
};

export default Hero;
