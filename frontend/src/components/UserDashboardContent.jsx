import { Link } from 'react-router-dom';

import {
  ChevronDown,
  ExternalLink,
  Filter,
  SquareArrowOutUpRight,
} from 'lucide-react';

import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Button } from './ui/button';

const experienceLevels = [
  { id: 'internship', label: 'Internship' },
  { id: 'entry', label: 'Entry Level' },
  { id: 'associate', label: 'Associate' },
  { id: 'mid', label: 'Mid Level' },
  { id: 'senior', label: 'Senior Level' },
];

const jobTypes = [
  { id: 'full-time', label: 'Full-Time' },
  { id: 'part-time', label: 'Part-Time' },
  { id: 'contract', label: 'Contract' },
  { id: 'temporary', label: 'Temporary' },
  { id: 'internship', label: 'Internship' },
];

const locations = [
  { id: 'remote', label: 'Remote' },
  { id: 'on-site', label: 'On-Site' },
  { id: 'hybrid', label: 'Hybrid' },
];

const industries = [
  { id: 'technology', label: 'Technology' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'finance', label: 'Finance' },
  { id: 'education', label: 'Education' },
  { id: 'retail', label: 'Retail' },
];

const FilterSection = ({ title, options }) => {
  return (
    <div className=''>
      <h2 className='text-lg font-medium mb-4 flex justify-between items-center'>
        {title} <ChevronDown />
      </h2>
      {options.map(({ id, label }) => (
        <div className='flex items-center space-x-2 my-4' key={id}>
          <Checkbox id={id} />
          <Label
            htmlFor={id}
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            {label}
          </Label>
        </div>
      ))}
    </div>
  );
};

const Filters = () => {
  return (
    <div className='border rounded-md p-8'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='font-semibold flex  items-center gap-2'>
          <Filter size={14} />
          Filters
        </h1>
        <Button variant='ghost'>Clear</Button>
      </div>
      <div className='spacey-8'>
        <FilterSection title='Experience Level' options={experienceLevels} />
        <FilterSection title='Job Type' options={jobTypes} />
        <FilterSection title='Location' options={locations} />
        <FilterSection title='Industry' options={industries} />
      </div>
    </div>
  );
};

const jobs = [
  {
    title: 'Software Engineer',
    description:
      'Develop software applications with cutting-edge technologies.',
    requirements: ['JavaScript', 'React', 'Node.js'],
    location: 'Remote',
    salary: 100000,
    company: {
      name: 'Google',
      industry: 'Software Development',
      location: 'Mountain View, CA, USA',
      website: 'https://www.google.com',
      overview: 'Google LLC is an American multinational technology company...',
    },
  },
  {
    title: 'Product Manager',
    description:
      'Lead product strategy and manage product development lifecycle.',
    requirements: ['Product Management', 'Agile', 'Market Research'],
    location: 'Seattle, WA, USA',
    salary: 120000,
    company: {
      name: 'Microsoft',
      industry: 'Technology',
      location: 'Redmond, WA, USA',
      website: 'https://www.microsoft.com',
      overview:
        'Microsoft Corporation is an American multinational technology company...',
    },
  },
  {
    title: 'UX/UI Designer',
    description: 'Design intuitive user interfaces and user experiences.',
    requirements: ['UI/UX Design', 'Adobe XD', 'Prototyping'],
    location: 'New York, NY, USA',
    salary: 110000,
    company: {
      name: 'Apple',
      industry: 'Consumer Electronics',
      location: 'Cupertino, CA, USA',
      website: 'https://www.apple.com',
      overview: 'Apple Inc. is an American multinational technology company...',
    },
  },
  // Add more jobs as needed
];

const UserDashboardContent = () => {
  return (
    <div className='container max-w-[1400px] mx-auto w-[95%] flex gap-4 my-4'>
      <div className='basis-3/12 space-y-4'>
        <div className='border p-4 rounded-md text-center'>
          <img
            src='https://randomuser.me/api/portraits/men/37.jpg'
            className='w-24 h-24 mx-auto rounded-full'
            alt=''
          />
          <h1 className='font-semibold my-2'>John Doe</h1>
          <p className='mb-2 border-bp py-2'>Full stack Java developer</p>
          <Link
            to='/applied'
            className='flex font-medium gap-2 justify-center items-center'
          >
            <span>Applied jobs</span> <SquareArrowOutUpRight size={16} />
          </Link>
        </div>

        {/* filters */}
        <Filters />
      </div>
      <div className='basis-9/12'>
        <section className='block'>
          <div className='flex justify-between items-center'>
            <h1 className='text-xl'>
              Showing <strong>3</strong> jobs found in Bengaluru, India
            </h1>
            <select
              className='p-2 border rounded-md font-medium'
              name='sort'
              id='sort'
            >
              <option value='date' className='font-medium'>
                Date Posted
              </option>
              {/* <option value="" */}
            </select>
          </div>

          <div className=''>
            <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 my-8'>
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className='aspect-square w-full border rounded-md p-4 flex flex-col'
                >
                  <div className='w-full  items-center flex gap-2'>
                    <img
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxz_rSaQtZPEfuwx_AW6sKZZBmBbkZ6zHKog&s'
                      alt=''
                      className='sspect-square w-16 h-1w-16'
                    />
                    <div className='basis-8/12'>
                      <h2 className='text-lg font-semibold mb-1'>
                        {job.title}
                      </h2>
                      {/* <p className='text-gray-600'>
                        Salary: ${job.salary.toLocaleString()}
                      </p> */}
                      <p className='text-gray-600 text-sm'>
                        {job.company.name} {'•'} {job.location}
                      </p>
                    </div>
                  </div>

                  <div className='my-4 flex flex-wrap gap-2'>
                    {job.requirements.map((requirement, idx) => (
                      <span
                        key={idx}
                        className='px-3 py-1 bg-gray-200 rounded-md text-blue-600 text-sm'
                      >
                        {requirement}
                      </span>
                    ))}
                  </div>

                  <p className='text-gray-500 my-2'>{job.description}</p>

                  {/* <a
                    href={job.company.website}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-600 my-2 hover:underline'
                  >
                    {job.company.website}
                  </a> */}

                  <div className='mt-auto'>
                    <Link
                      className='bg-blue-600 text-white font-medium p-2 px-4 flex items-center gap-2 w-fit rounded-md'
                      to='/apply/2e12e12e2'
                    >
                      Apply <ExternalLink size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserDashboardContent;
