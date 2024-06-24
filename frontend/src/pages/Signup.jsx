import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6).required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const res = await apiClient.post('/auth/signup', values);

        console.log(res);
      } catch (error) {
        console.log(error.response);
      }
    },
  });
  return (
    <section className='bg-white '>
      <div className='flex min-h-screen'>
        <div className='relative basis-0 md:basis-1/2'>
          <img
            alt=''
            loading='lazy'
            src='https://images.pexels.com/photos/2912583/pexels-photo-2912583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className='absolute inset-0 h-full w-full object-cover opacity-80'
          />
          <div className='bg-black/50 absolute top-0 bottom-0 left-0 right-0'></div>
          <div className='absolute bottom-0 p-12'>
            <h2 className='mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl'>
              Welcome to JobHunt 🚀
            </h2>

            <p className='mt-4 leading-relaxed text-white/90'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>
          </div>
        </div>
        <div className='basis-full md:basis-1/2 flex justify-center items-center'>
          <form action='#' className='w-full max-w-[480px] p-4'>
            <h1 className='text-4xl col-span-12 mt-8'>Sign up</h1>
            <small className='text-gray-500 mb-8'>
              Create an account to get started
            </small>
            <div className='flex gap-4 my-4'>
              <div className='basis-full md:basis-1/2'>
                <Label
                  htmlFor='FirstName'
                  className='block text-sm font-medium text-gray-700'
                >
                  First Name
                </Label>

                <Input
                  type='text'
                  id='FirstName'
                  name='first_name'
                  className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                />
              </div>

              <div className='basis-full md:basis-1/2'>
                <Label
                  htmlFor='LastName'
                  className='block text-sm font-medium text-gray-700'
                >
                  Last Name
                </Label>

                <Input
                  type='text'
                  id='LastName'
                  name='last_name'
                  className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                />
              </div>
            </div>

            <div className='my-4'>
              <Label
                htmlFor='Email'
                className='block text-sm font-medium text-gray-700'
              >
                {' '}
                Email{' '}
              </Label>

              <Input
                type='email'
                id='Email'
                name='email'
                className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
              />
            </div>

            <div className='my-4'>
              <Label
                htmlFor='Password'
                className='block text-sm font-medium text-gray-700'
              >
                {' '}
                Password{' '}
              </Label>

              <Input
                type='password'
                id='Password'
                name='password'
                className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
              />
            </div>

            <div className='my-4'>
              <Label
                htmlFor='PasswordConfirmation'
                className='block text-sm font-medium text-gray-700'
              >
                Password Confirmation
              </Label>

              <Input
                type='password'
                id='PasswordConfirmation'
                name='password_confirmation'
                className='mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
              />
            </div>

            <div className='my-4'>
              <p className='text-xs text-gray-500'>
                By creating an account, you agree to our
                <a href='#' className='text-gray-700 underline'>
                  {' '}
                  terms and conditions
                </a>{' '}
                and{' '}
                <a href='#' className='text-gray-700 underline'>
                  privacy policy
                </a>
                .
              </p>
            </div>

            <button className='inline-block mb-4 shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500'>
              Create an account
            </button>

            <div className='flex items-center justify-between flex-wrap'>
              <p className='mt-4 text-sm text-gray-500 sm:mt-0'>
                Already have an account?
                <Link to='/login' className='text-gray-700 underline ml-2'>
                  Log in
                </Link>
                .
              </p>

              <p className='mt-4 text-sm text-gray-500 sm:mt-0'>
                <Link to='/forget-password'>Forget Password</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
