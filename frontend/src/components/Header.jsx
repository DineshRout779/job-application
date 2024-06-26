import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Bell, LogOut, MessageSquareText, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useDispatch } from 'react-redux';
import { logout } from '@/app/auth/authSlice';
import { clearToken } from '@/services/apiClient';

const Header = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    clearToken();
  };

  return (
    <div className='py-2 border-b border-b-gray-100/75 bg-white/50 backdrop-blur-md sticky top-0'>
      <div className='container w-[95%] mx-auto max-w-[1400px] flex justify-between items-center'>
        <Logo />

        <div className='flex gap-2 items-center'>
          <Link
            to='/messages'
            className='flex font-semibold gap-2 items-center hover:text-blue-600 p-4 px-2'
          >
            <MessageSquareText size={18} />
            <span>Messages</span>
          </Link>
          <Link
            to='/messages'
            className='flex font-semibold gap-2 items-center hover:text-blue-600 p-4 px-2'
          >
            <Bell size={18} />
            <span>Notifications</span>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to='/profile/user' className='flex items-center'>
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
        </div>
      </div>
    </div>
  );
};

export default Header;
