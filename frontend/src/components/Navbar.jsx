import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useSelector } from 'react-redux';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { LogOut, User } from 'lucide-react';

const Navbar = () => {
  const token = useSelector((state) => state.auth.token);
  const handleLogout = () => {};

  return (
    <div className='py-4 shadow-md'>
      <div className='container max-w-[1200px] p-0 mx-auto w-[95%] flex justify-between items-center'>
        <Logo />

        <div className='flex gap-2 items-center'>
          {token ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src='https://randomuser.me/api/portraits/men/37.jpg' />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link to='/profile' className='flex items-center'>
                      <User
                        size={16}
                        className='text-gray-800 dark:text-gray-300 mr-2'
                      />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className='cursor-pointer'
                    onClick={handleLogout}
                  >
                    <LogOut
                      size={16}
                      className='text-gray-800 dark:text-gray-300 mr-2'
                    />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
