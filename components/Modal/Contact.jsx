/* eslint-disable @next/next/no-img-element */
import { Dialog, Transition } from "@headlessui/react";
import { React, Fragment } from "react";

export default function Contact({
  openContactModal,
  closeContactModal,
  openContact,
}) {
  return (
    <>
      <Transition appear show={openContact} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeContactModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'>
                <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title
                    as='h3'
                    className='text-lg font-medium leading-6 text-gray-900'>
                    Payment successful
                  </Dialog.Title>
                  <div className='mt-2'>
                    <p className='text-sm font-normal text-gray-500 dark:text-gray-400'>
                      Connect with one of our available wallet providers or
                      create a new one.
                    </p>
                    <ul className='my-4 space-y-3'>
                      <li>
                        <a
                          href='#'
                          className='flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'>
                          <img
                            src='/image/gmail.png'
                            width={30}
                            height={30}
                            alt=''
                          />
                          <span className='flex-1 ml-3 whitespace-nowrap'>
                            mifaabiyyu@gmail.com
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://github.com/mifaabiyyu'
                          className='flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'>
                          <img
                            src='/image/github.png'
                            width={30}
                            height={30}
                            alt=''
                          />
                          <span className='flex-1 ml-3 whitespace-nowrap'>
                            mifaabiyyu
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://gitlab.com/mifaabiyyu'
                          className='flex items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white'>
                          <img
                            src='/image/gitlabicon.svg'
                            width={30}
                            height={30}
                            alt=''
                          />
                          <span className='flex-1 ml-3 whitespace-nowrap'>
                            mifaabiyyu
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className='mt-4'>
                    <button
                      type='button'
                      className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                      onClick={closeContactModal}>
                      Got it, thanks!
                    </button>
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
