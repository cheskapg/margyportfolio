import type { NextPage } from "next";
import Image from "next/image";
import profilePic from "../public/profilepic.jpeg"; // Add your profile picture in the public directory

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-blue-600 text-white py-6">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-3xl font-bold">Denise Margareth E. Catacutan</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-center mb-12">
          <Image
            src={profilePic}
            alt="Profile Picture"
            className="rounded-full"
            width={150}
            height={150}
          />
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Personal Profile</h2>
          <p>
            Motivated and detail-oriented Marketing Management graduate with a
            solid foundation in strategic planning, and promotional activities.
            Known for strong multitasking abilities, adaptability, and
            proficiency in Microsoft Office and internet applications. Eager to
            leverage these skills in a dynamic environment to drive business
            success and achieve personal and professional growth.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 ">Educational History</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">
              Bachelor of Science in Business Administration Major in Marketing
              Management
            </h3>
            <p>Holy Cross of Davao College, Inc. | 2024</p>
            <p>
              Gained a comprehensive understanding of marketing principles,
              strategic planning, and consumer behavior, with hands-on
              experience in market research and digital marketing strategies.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              Senior High School - Major in Accountancy, Business, and
              Management
            </h3>
            <p>Davao City National High School | 2020</p>
            <p>
              Gained foundational knowledge in accounting principles, business
              operations, and management strategies, with a focus on financial
              literacy, business ethics, and organizational behavior.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          <div>
            <h3 className="text-xl font-semibold">Intern</h3>
            <p>EMCOR | Feb 2024 - May 2024</p>
            <ul className="list-disc list-inside">
              <li>
                Conducted market research to identify consumer needs and
                preferences, assisting in data-driven decision-making.
              </li>
              <li>
                Collaborated with cross-functional teams to coordinate and
                execute promotional events and campaigns.
              </li>
              <li>
                Contributed to the development and implementation of marketing
                strategies, including social media and content marketing.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skills Summary</h2>
          <ul className="list-disc list-inside">
            <li>Project Management</li>
            <li>Budgeting and Cost Analysis</li>
            <li>Enterprise Resource Planning</li>
            <li>Software Development</li>
            <li>Process Improvement</li>
            <li>Staff and User Training</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Awards Received</h2>
          <ul className="list-disc list-inside">
            <li>
              Most Outstanding Employee of the Year, Pixelpoint Hive (2015)
            </li>
            <li>Best Mobile App Design, HGFZ Graduate Center (2014)</li>
            <li>Design Awards, Cliffmoor College (2012)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <p className="mb-2">Address: 754 Watusi St., Buhangin, Davao City</p>
          <p className="mb-2">
            Email:{" "}
            <a
              href="mailto:hello@reallygreatsite.com"
              className="text-blue-600 hover:underline"
            >
              hello@reallygreatsite.com
            </a>
          </p>
          <p className="mb-2">Phone: 0966-841-8751</p>
          <p className="mb-2">
            Website:{" "}
            <a
              href="http://www.reallygreatsite.com"
              className="text-blue-600 hover:underline"
            >
              www.reallygreatsite.com
            </a>
          </p>
        </section>
      </main>

      <div className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Denise Margareth E. Catacutan</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
