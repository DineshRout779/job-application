import Header from '@/components/Header';
import {
  FileText,
  Github,
  Languages,
  Linkedin,
  Phone,
  Twitter,
} from 'lucide-react';

const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'SQL'];

const projects = [
  {
    title: 'Project A',
    description:
      'Developed a comprehensive e-commerce platform with real-time inventory management and payment processing.',
    technologies: 'React, Node.js, MongoDB, Stripe API',
  },
  {
    title: 'Project B',
    description:
      'Created a social media application with features such as user authentication, posts, and real-time chat.',
    technologies: 'React, Firebase, Tailwind CSS',
  },
  {
    title: 'Project C',
    description:
      'Implemented a task management tool with drag-and-drop functionality and project collaboration.',
    technologies: 'Vue.js, Node.js, PostgreSQL',
  },
];

const experience = [
  {
    title: 'Senior Full Stack Developer @ Grouple',
    dates: 'Jan 2020 - Present',
    description:
      'Leading the development team in building scalable web applications. Mentoring junior developers and implementing best practices in coding and testing.',
  },
  {
    title: 'Full Stack Developer @ Tech Solutions',
    dates: 'Aug 2016 - Dec 2019',
    description:
      'Worked on various client projects, developing custom web applications and improving existing systems for better performance.',
  },
];

const education = [
  {
    degree: 'B.Sc. in Computer Science @ University of XYZ',
    dates: 'Sep 2012 - Jun 2016',
  },
];

const certificationsAwards = [
  'Certified JavaScript Developer',
  'Best Web Developer Award 2019',
];

const achievements = [
  'Led a team to develop an award-winning application at a hackathon',
  'Successfully migrated a legacy system to a modern stack with zero downtime',
];

const languages = ['English', 'Hindi'];

const UserProfile = () => {
  return (
    <div>
      <Header />

      {/* Main content */}
      <div className='container mx-auto my-4 md:my-8 max-w-[1400px] w-[95%]'>
        {/* <h1 className='text-3xl text-zinc-800 mb-8 font-semibold'>Profile</h1> */}
        <div className='flex gap-4'>
          <div className='basis-9/12'>
            {/* Personal info */}
            <section className='border p-8 rounded-md'>
              <div className='flex gap-8 items-center'>
                <img
                  src='https://randomuser.me/api/portraits/men/37.jpg'
                  className='w-32 h-32 rounded-full shadow-lg'
                  alt='User'
                />
                <div className='py-2'>
                  <h1 className='text-3xl font-semibold mb-2'>John Doe</h1>
                  <p className='text-gray-600 my-2'>
                    Full Stack Developer @Grouple
                  </p>

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
                    <a
                      href='https://github.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Github
                        size={24}
                        className='text-gray-600 hover:text-blue-600'
                      />
                    </a>
                    <a
                      href='https://twitter.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Twitter
                        size={24}
                        className='text-gray-600 hover:text-blue-600'
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* About me */}
              <div className='mt-8'>
                <h1 className='text-2xl font-semibold mb-4'>About Me</h1>
                <p className='text-gray-700'>
                  Passionate Full Stack Developer with over 5 years of
                  experience in building responsive web applications. Skilled in
                  JavaScript, React, Node.js, and more. Dedicated to continuous
                  learning and creating efficient and scalable solutions.
                </p>
              </div>

              {/* Skills */}
              <div className='mt-8'>
                <h1 className='text-2xl font-semibold mb-4'>Skills</h1>
                <div className='flex flex-wrap text-xs gap-4'>
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className='px-3 py-1 bg-gray-200 rounded-full text-gray-800'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Projects */}
            <div className='mt-4 border rounded-md p-8'>
              <h1 className='text-2xl font-semibold mb-4'>Projects</h1>
              <ul className='text-gray-700'>
                {projects.map((project, index) => (
                  <li key={index} className='mb-4'>
                    <h2 className='text-xl font-medium'>{project.title}</h2>
                    <p className='my-2'>{project.description}</p>
                    <p className='text-sm'>
                      <strong>Technologies Used:</strong> {project.technologies}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Experience */}
            <div className='mt-4 border rounded-md p-8'>
              <h1 className='text-2xl font-semibold mb-4'>Experience</h1>
              <ul className='text-gray-700'>
                {experience.map((exp, index) => (
                  <li key={index} className='mb-4'>
                    <h2 className='text-xl font-medium'>{exp.title}</h2>
                    <p>
                      <strong>Dates:</strong> {exp.dates}
                    </p>
                    <p>{exp.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className='mt-4 border rounded-md p-8'>
              <h1 className='text-2xl font-semibold mb-4'>Education</h1>
              <ul className='text-gray-700'>
                {education.map((edu, index) => (
                  <li key={index} className='mb-4'>
                    <h2 className='text-xl font-semibold'>{edu.degree}</h2>
                    <p>
                      <strong>Dates:</strong> {edu.dates}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications & Awards */}
            <div className='mt-4 border rounded-md p-8'>
              <h1 className='text-2xl font-semibold mb-4'>
                Certifications & Awards
              </h1>
              <ul className='list-disc list-inside pl-4 text-gray-700'>
                {certificationsAwards.map((item, index) => (
                  <li key={index} className='mb-2'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div className='mt-4 border rounded-md p-8'>
              <h1 className='text-2xl font-semibold mb-4'>Achievements</h1>
              <ul className='list-disc list-inside pl-4 text-gray-700'>
                {achievements.map((item, index) => (
                  <li key={index} className='mb-2'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right sidebar */}
          <div className='basis-3/12'>
            {/* Resume */}
            <div className='border rounded-md p-8'>
              <h1 className='text-2xl font-semibold mb-4 flex items-center gap-2'>
                <FileText />
                Resume
              </h1>
              <a
                href='/path/to/resume.pdf'
                className='text-blue-500 hover:underline'
                target='_blank'
                rel='noopener noreferrer'
              >
                Download Resume
              </a>
            </div>

            {/* Contact Info */}
            <div className='mt-4 border rounded-md p-8'>
              <h1 className='text-2xl font-semibold mb-4 flex items-center gap-2'>
                <Phone />
                Contact Info
              </h1>
              <p className='text-gray-700 my-2'>
                <strong>Email:</strong> johndoe@example.com
              </p>
              <p className='text-gray-700 my-2'>
                <strong>Phone:</strong> (43) 456-7890
              </p>
            </div>

            {/* Languages */}
            <div className='mt-4 border rounded-md p-8'>
              <h1 className='text-2xl font-semibold mb-4 flex items-center gap-2'>
                <Languages />
                Languages
              </h1>
              <ul className='flex gap-2 text-xs font-medium items-center flex-wrap text-gray-700'>
                {languages.map((language, index) => (
                  <li key={index} className='bg-gray-200 p-2 px-4 rounded-md'>
                    {language}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
