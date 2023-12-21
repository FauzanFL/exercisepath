'use client';

const { default: Link } = require('next/link');

const Header = ({ page }) => {
  return (
    <header className="sticky bg-white dark:bg-slate-800 flex items-center z-40 shadow-md top-0 px-4 py-2 h-16">
      <h1 className="text-2xl mr-4 font-bold">
        <Link className="hover:text-orange-500 dark:text-white" href={'#'}>
          ExercisePath
        </Link>
      </h1>
      <nav>
        <ul className="flex">
          <li
            className={
              page === 'home'
                ? 'mx-2 md:mx-4 text-md font-bold'
                : 'mx-2 md:mx-4 text-md'
            }
          >
            <Link className="hover:text-orange-500 dark:text-white" href={'/'}>
              Home
            </Link>
          </li>
          <li
            className={
              page === 'exercise'
                ? 'mx-2 md:mx-4 text-md font-bold'
                : 'mx-2 md:mx-4 text-md'
            }
          >
            <Link
              className="hover:text-orange-500 dark:text-white"
              href={'/exercise'}
            >
              Exercise
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
