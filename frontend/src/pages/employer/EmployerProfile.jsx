import Header from '@/components/Header';
import {
  FileText,
  Github,
  Languages,
  Linkedin,
  Phone,
  Plus,
  Twitter,
} from 'lucide-react';

const EmployerProfile = () => {
  return (
    <div>
      <Header />
      {/* main content */}
      <div className='container mx-auto my-4 md:my-8 max-w-[1400px] w-[95%]'>
        <div className='flex gap-4'>
          <div className='basis-9/12'>
            <section className='border p-8 rounded-md'>
              <div className='flex gap-8 items-center'>
                <img
                  src='https://randomuser.me/api/portraits/women/22.jpg'
                  className='w-32 h-32 rounded-full shadow-lg'
                  alt='User'
                />
                <div className='py-2'>
                  <h1 className='text-3xl font-semibold mb-2'>Jane Doe</h1>
                  <p className='text-gray-600 my-2'>HR Manager @Google</p>

                  <div className='flex gap-6 mt-4'>
                    <a
                      href='https://www.linkedin.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Linkedin
                        size={24}
                        className='text-gray-600 hover:text-blue-600'
                      />
                    </a>
                  </div>
                </div>
                <div className='ml-auto'>
                  <button className='p-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-800 flex justify-center items-center gap-2'>
                    Post a job <Plus />
                  </button>
                </div>
              </div>
            </section>

            {/* company details */}
            <section className='my-4 border p-8 rounded-md'>
              <h1 className='text-2xl font-semibold mb-4'>Company Details</h1>
              <div className='flex gap-4 items-center'>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxz_rSaQtZPEfuwx_AW6sKZZBmBbkZ6zHKog&s'
                  className='w-24 h-24 rounded-full shadow-lg'
                  alt='Company Logo'
                />
                <div>
                  <h2 className='text-xl font-semibold'>Google</h2>
                  <p className='text-gray-600 my-2'>
                    Industry: Software Development
                  </p>
                  <p className='text-gray-600 my-2'>Location: LA, CA, USA</p>
                  <p className='text-gray-600 my-2'>
                    Website:{' '}
                    <a
                      href='https://www.google.com'
                      target='_blank'
                      className='text-blue-600 hover:underline'
                    >
                      www.google.com
                    </a>
                  </p>
                </div>
              </div>
              <div className='mt-4'>
                <h2 className='text-lg font-semibold mb-2'>Company Overview</h2>
                <p className='text-gray-700'>
                  Google LLC is an American multinational corporation and
                  technology company focusing on online advertising, search
                  engine technology, cloud computing, computer software, quantum
                  computing, e-commerce, consumer electronics, and artificial
                  intelligence.
                </p>
              </div>
            </section>
          </div>
          <div className='basis-3/12'>
            <section className='mb-4 border p-8 rounded-md space-y-4'>
              <article>
                <h3 className='text-xl font-semibold mb-2'>Jobs Created</h3>
                <h1 className='text-3xl font-bold text-blue-600'>20</h1>
              </article>
              <article>
                <h3 className='text-xl font-semibold mb-2'>Hired</h3>
                <h1 className='text-3xl font-bold text-blue-600'>15</h1>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerProfile;
