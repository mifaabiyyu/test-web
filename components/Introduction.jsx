/* eslint-disable @next/next/no-img-element */
import { Transition } from "@headlessui/react";
import React, { useState, Fragment } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Introduction({ isShowing }) {
  const [isWhite, setIsWhite] = useState("text-indigo-500");
  const [isIndigo, setIsIndigo] = useState("text-white");

  function changeBackground(e) {
    if (isWhite == "text-indigo-500") {
      setIsIndigo("text-indigo-500");
      setIsWhite("text-white");
    } else {
      setIsIndigo("text-white");
      setIsWhite("text-indigo-500");
    }
  }

  return (
    <>
      <Transition
        show={isShowing}
        enter='transition-opacity duration-700'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-700'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'>
        <div className=' grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 '>
          <div className='flex items-center text-center justify-center content-center '>
            <img
              className='lg:w-6/12 md:w-6/12 w-8/12 transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 duration-300'
              src='/IMG_1012-removebg-preview.png'
              alt=''
            />
          </div>
          <div className=''>
            <Transition
              as={Fragment}
              show={isShowing}
              enter='transform transition duration-[400ms]'
              enterFrom='opacity-0 rotate-[-120deg] scale-0'
              enterTo='opacity-100 rotate-0 scale-100'
              leave='transform duration-200 transition ease-in-out'
              leaveFrom='opacity-100 rotate-0 scale-100 '
              leaveTo='opacity-0 scale-95 '>
              <h1
                onMouseOver={changeBackground}
                onMouseUp={changeBackground}
                className='text-4xl lg:mr-40 md:mr-0 text-center font-bold tracking-tight mt-10 lg:mt-28 md:mt-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 text-white sm:text-5xl md:text-6xl'>
                <span className={`inline ${isIndigo}`}>Mifa</span>{" "}
                <span className={` inline ${isWhite}`}>Abiyyu</span>
                <span className={`inline ${isIndigo}`}> H</span>
              </h1>
            </Transition>

            <h4 className='text-2xl md:text-right md:mr-8 lg:pr-80 text-center lg:text-right font-bold text-white mt-5'>
              <span className='inline'>Web</span>{" "}
              <span className=' text-indigo-500 inline'>Developer</span>
            </h4>
            <p className='mt-3 text-base  text-white text-justify mx-5 md:mr-5 sm:mt-5 sm:max-w-xl sm:text-lg sm:mb-10 md:mt-5 md:text-xl '>
              I am a bachelor Informatics Engineering with an area of
              ​​expertise in Web Developing. Have experience using React.js,
              Vue.js, Next.js, Angular.js, Javascript, Laravel Framework,
              Framework Codeigniter, PHP, HTML, CSS, MySQL and PostgreSQL. Able
              to work together in a team as well as think creatively and have a
              high desire to apply and develop the skills that I already have.
            </p>
            <div className='text-center lg:text-left md:text-left mt-10 mb-10'>
              <a
                href='#expertise'
                className='bg-indigo-500 py-3 px-5 rounded-xl font-bold text-white lg:ml-5 md:ml-5 mb-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300'>
                Get Start
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}
