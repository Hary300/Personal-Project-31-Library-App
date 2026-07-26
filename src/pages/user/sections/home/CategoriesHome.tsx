import { categories, type CategorySlug } from '@/data/categories';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CategoriesHome = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleCardClick = (category: CategorySlug) => {
    const params = new URLSearchParams(searchParams);

    params.set('category', category);

    navigate(`/books?${params.toString()}`);
  };

  return (
    <section
      id='category'
      className='flex flex-wrap gap-3 lg:gap-4 justify-center'
    >
      {categories.map((category) => (
        <div
          key={category.id}
          className='shadow-soft rounded-2xl p-2 lg:p-3 flex flex-col gap-3 bg-white w-full max-w-[112.33px] md:max-w-[186.6px] cursor-pointer hover:-translate-y-1 active:translate-y-0 transition-transform duration-300'
          onClick={() => handleCardClick(category.slug)}
        >
          <div className='flex justify-center items-center bg-[#E0ECFF] rounded-2xl'>
            <img src={category.icon} alt={category.iconDescription} />
          </div>
          <p className='font-semibold text-xs lg:text-md'>{category.name}</p>
        </div>
      ))}
    </section>
  );
};

export default CategoriesHome;
