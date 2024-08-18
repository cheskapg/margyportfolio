import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import profilePic from '../public/profilepic.jpeg'; 

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <Head>
        <title>Denise Margareth E. Catacutan - Portfolio</title>
        <meta name="description" content="Portfolio of Denise Margareth E. Catacutan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="relative bg-gray-800 text-white py-6 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-4xl font-bold">Denise Margareth E. Catacutan</h1>
          <nav className="flex space-x-6">
            <Link href="/" className="hover:text-gray-200">Home</Link>
            <Link href="/about" className="hover:text-gray-200">About</Link>
            <Link href="/portfolio" className="hover:text-gray-200">Portfolio</Link>
            <Link href="/contact" className="hover:text-gray-200">Contact</Link>
          </nav>
        </div>
        <div className="absolute top-0 right-0 left-0 h-48"></div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl font-bold mb-4 text-gray-800">
              Marketing Management Graduate Seeking Opportunities in Digital Marketing
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Motivated and detail-oriented with a solid foundation in strategic planning and promotional activities. Proven ability to manage multiple tasks effectively and adapt to new challenges. Eager to leverage my skills to contribute to a dynamic environment and drive business success.
            </p>
            <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
              Contact Me
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={profilePic}
              alt="Profile Picture"
              className="rounded-full border-4 border-blue-500 shadow-lg"
              width={250}
              height={250}
            />
          </div>
        </section>

        {/* Educational History */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Educational History</h2>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold mb-2">
              Bachelor of Science in Business Administration Major in Marketing Management
            </h3>
            <p className="text-gray-700">Holy Cross of Davao College, Inc. | 2024</p>
            <p className="text-gray-700">
              Gained a comprehensive understanding of marketing principles, strategic planning, and consumer behavior, with hands-on experience in market research and digital marketing strategies.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold mb-2">
              Senior High School - Major in Accountancy, Business, and Management
            </h3>
            <p className="text-gray-700">Davao City National High School | 2020</p>
            <p className="text-gray-700">
              Gained foundational knowledge in accounting principles, business operations, and management strategies, with a focus on financial literacy, business ethics, and organizational behavior.
            </p>
          </div>
        </section>

        {/* Work Experience */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-12">
          <h2 className="text-3xl font-semibold mb-4">Work Experience</h2>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Intern</h3>
            <p className="text-gray-700">EMCOR | Feb 2024 - May 2024</p>
            <ul className="list-disc list-inside mt-4">
              <li>Conducted market research to identify consumer needs and preferences, assisting in data-driven decision-making.</li>
              <li>Collaborated with cross-functional teams to coordinate and execute promotional events and campaigns.</li>
              <li>Contributed to the development and implementation of marketing strategies, including social media and content marketing.</li>
            </ul>
          </div>
        </section>

        {/* Skills Summary */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-12">
          <h2 className="text-3xl font-semibold mb-4">Skills Summary</h2>
          <ul className="list-disc list-inside">
            <li>Project Management</li>
            <li>Budgeting and Cost Analysis</li>
            <li>Enterprise Resource Planning</li>
            <li>Software Development</li>
            <li>Process Improvement</li>
            {/* <li>Staff and User Training</li>
            <li>Digital Marketing</li>
            <li>Social Media Marketing</li>
            <li>Content Marketing</li> */}
            {/* <li>SEO</li>
            <li>SEM</li>
            <li>Email Marketing</li>
            <li>Web Analytics</li>
            <li>CRM</li> */}
            <li>Microsoft Office Suite</li>
            <li>Adobe Creative Suite</li>
            <li>Google Analytics</li>
          </ul>
        </section>

        {/* Awards Received */}
        <section className="bg-white shadow-lg rounded-lg p-6 mb-12">
          <h2 className="text-3xl font-semibold mb-4">Awards Received</h2>
          <ul className="list-disc list-inside">
            <li>Most Outstanding Employee of the Year, Pixelpoint Hive (2015)</li>
            <li>Best Mobile App Design, HGFZ Graduate Center (2014)</li>
            <li>Design Awards, Cliffmoor College (2012)</li>
          </ul>
        </section>

        {/* Contact Information */}
        <section className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
          <p className="text-gray-700 mb-2">Address: 754 Watusi St., Buhangin, Davao City</p>
          <p className="text-gray-700 mb-2">
            Email: <a href="mailto:hello@reallygreatsite.com" className="text-blue-600 hover:underline">margarethcatacutan19@gmail.com</a>
          </p>
          <p className="text-gray-700 mb-2">Phone: 0966-841-8751</p>
          <p className="text-gray-700">
            Website: <a href="denisemargareth.vercel.app" className="text-blue-600 hover:underline">denisemargareth.vercel.app</a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Denise Margareth E. Catacutan</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
