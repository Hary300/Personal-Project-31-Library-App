import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className='flex justify-center items-center h-screen px-4'>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
