import HeroHome from './sections/home/HeroHome';
import CategoriesHome from './sections/home/CategoriesHome';

const UserHomePage = () => {
  return (
    <div className='pt-4 lg:pt-12 flex flex-col gap-6 lg:gap-12 pb-4 lg:pb-29'>
      <HeroHome />
      <CategoriesHome />
      <section id='recommendation'></section>
      <section id='popular-authors'></section>
    </div>
  );
};

export default UserHomePage;
