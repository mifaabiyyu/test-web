import { Transition } from "@headlessui/react";
import React from "react";

export default function Experience({ isShowing }) {
  return (
    <Transition
      show={isShowing}
      enter='transition-opacity duration-700'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition-opacity duration-700'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'>
      <div className=' lg:flex lg:columns-1 md:columns-1 column-2'>
        <h1 className='text-center underline underline-offset-8 text-white lg:ml-48 ml-3 md:ml-5 font-bold text-4xl pt-20 mb-20 subpixel-antialiased hover:scale-110 transition ease-in-out delay-150  hover:-translate-y-1'>
          My Experience
        </h1>
        <ol className='relative border-l mx-16 pt-10 pb-10 border-gray-200 dark:border-gray-700'>
          <li className='mb-10 ml-6 pt-10'>
            <span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
              <svg
                aria-hidden='true'
                className='w-3 h-3 text-blue-600 dark:text-blue-400'
                fill='currentColor'
                viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                  clipRule='evenodd'></path>
              </svg>
            </span>
            <h3 className='flex items-center mb-1 text-lg font-semibold text-white dark:text-white'>
              Project Lead Development{" "}
              <span className='bg-blue-100 text-blue-800 font-bold text-sm mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
                PT Griya Depo Nusantara
              </span>
            </h3>
            <time className='block mb-2 text-sm font-normal leading-none text-white dark:text-white'>
              July 2022 - Now
            </time>
            <div className='mb-4 text-base font-normal text-white dark:text-white'>
              <ul className='list-disc lg:ml-5 md:ml-5 text-justify'>
                <li>
                  Creating project plans and timelines, communicating with
                  stakeholders about progress, and ensuring that deadlines are
                  met.
                </li>
                <li>
                  Monitoring development activities to ensure that projects are
                  being carried out according to plan.
                </li>
                <li>
                  Coordinating with other departments, such as marketing or
                  operations, to ensure that their needs are being met.
                </li>
                <li>
                  Writing code, testing code written by others, and debugging
                  code to fix errors in logic or performance.
                </li>
                <li>
                  Maintaining code bases by reviewing existing code to identify
                  problematic areas that need improvement or rewriting sections
                  altogether.
                </li>
                <li>
                  Working with designers to create new interfaces or improve
                  existing ones.
                </li>
              </ul>
            </div>
          </li>
          <li className='mb-10 ml-6'>
            <span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
              <svg
                aria-hidden='true'
                className='w-3 h-3 text-blue-600 dark:text-blue-400'
                fill='currentColor'
                viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                  clipRule='evenodd'></path>
              </svg>
            </span>
            <h3 className='mb-1 text-lg font-semibold text-white dark:text-white'>
              Web Developer
              <span className='bg-blue-100 text-blue-800 font-bold text-sm mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
                PT Dwi Selo Giri Mas
              </span>
            </h3>
            <time className='block mb-2 text-sm font-normal leading-none text-white dark:text-white'>
              May 2022 - Now
            </time>
            <div className='mb-4 text-base font-normal text-white dark:text-white'>
              <ul className='list-disc lg:ml-5 md:ml-5 text-justify'>
                <li>
                  Creating project plans and timelines, communicating with
                  stakeholders about progress, and ensuring that deadlines are
                  met.
                </li>
                <li>
                  Monitoring development activities to ensure that projects are
                  being carried out according to plan.
                </li>
                <li>
                  Coordinating with other departments, such as marketing or
                  operations, to ensure that their needs are being met.
                </li>
                <li>
                  Writing code, testing code written by others, and debugging
                  code to fix errors in logic or performance.
                </li>
                <li>
                  Maintaining code bases by reviewing existing code to identify
                  problematic areas that need improvement or rewriting sections
                  altogether.
                </li>
                <li>
                  Working with designers to create new interfaces or improve
                  existing ones.
                </li>
              </ul>
            </div>
          </li>
          <li className='ml-6 pb-10'>
            <span className='flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900'>
              <svg
                aria-hidden='true'
                className='w-3 h-3 text-blue-600 dark:text-blue-400'
                fill='currentColor'
                viewBox='0 0 20 20'>
                <path
                  fillRule='evenodd'
                  d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                  clipRule='evenodd'></path>
              </svg>
            </span>
            <h3 className='mb-1 text-lg font-semibold text-white dark:text-white'>
              Fullstack Developer
              <span className='bg-blue-100 text-blue-800 font-bold text-sm mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3'>
                Pilarmedia
              </span>
            </h3>
            <time className='block mb-2 text-sm font-normal leading-none text-white dark:text-white'>
              Mar 2022 - May 2022
            </time>
            <p className='text-base font-normal text-white dark:text-white'>
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </p>
          </li>
        </ol>
      </div>
    </Transition>
  );
}
