import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className='py-4 shadow-md'>
      <div className='container max-w-[1200px] p-0 mx-auto w-[95%] flex justify-between items-center'>
        <Logo />

        <div className='flex gap-2 items-center'>
          <Link
            to='/login'
            className='border font-medium text-sm border-blue-600 p-2 px-4 rounded-md bg-white text-blue-600'
          >
            Login
          </Link>
          <Link
            to='/signup'
            className='border font-medium text-sm border-blue-600 p-2 px-4 rounded-md bg-blue-600 text-white'
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
