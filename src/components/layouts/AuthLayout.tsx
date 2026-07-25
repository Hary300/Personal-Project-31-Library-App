import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <main className='flex justify-center items-center min-h-screen px-4 py-4'>
      <Outlet />
    </main>
  );
};

export default AuthLayout;
