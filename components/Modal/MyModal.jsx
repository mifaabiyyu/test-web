/* eslint-disable react-hooks/exhaustive-deps */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

export default function MyModal({
  closeModal,
  openModal,
  isOpen,
  isShowingButton,
}) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog static as='div' className='relative z-10' onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter='transform transition duration-[500ms]'
            enterFrom='opacity-0 rotate-[-120deg] scale-50'
            enterTo='opacity-100 rotate-0 scale-100'
            leave='transform duration-500 transition ease-in-out'
            leaveFrom='opacity-100 rotate-0 scale-100 '
            leaveTo='opacity-0 scale-95 '>
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-screen items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-500'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-500'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg mt-2 text-center font-medium leading-6 text-gray-900'>
                    <Typewriter
                      options={{
                        deleteSpeed: 20,
                        delay: 50,
                        strings: [
                          "<strong>Hello... My name Mifa Abiyyu</strong>",
                          "<strong>Enjoy my profile 😃</strong>",
                        ],
                        autoStart: true,
                      }}
                    />
                    <Transition
                      show={isShowingButton}
                      enter='transition-opacity duration-500'
                      enterFrom='opacity-0'
                      enterTo='opacity-100'
                      leave='transition-opacity duration-500'
                      leaveFrom='opacity-100'
                      leaveTo='opacity-0'>
                      <button
                        className='bg-sky-500 rounded-xl font-bold text-white px-3 py-2 mt-2'
                        onClick={closeModal}>
                        Lets go !
                      </button>
                    </Transition>
                  </Dialog.Title>
                  <div className='mt-2'></div>

                  <div className='mt-4'>
                    {/* <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeModal}>
                      Got it, thanks!
                    </button> */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
