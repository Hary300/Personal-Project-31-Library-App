import logo from '@/assets/images/logo.svg';

const Logo = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div
      onClick={handleClick}
      className='flex justify-between max-w-[121.79px] items-center cursor-pointer'
    >
      <img src={logo} alt='Logo' className='size-8.25' />
      <span className='font-bold text-[25.14px] leading-8.25'>Booky</span>
    </div>
  );
};

export default Logo;
