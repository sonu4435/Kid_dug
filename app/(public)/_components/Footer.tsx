import React from 'react'
import LogoImg from '../../../public/logo.png'
import Image from 'next/image';
import { Github, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <div className="h-auto w-screen dark:bg-slate-900">
      <footer className="bg-white dark:bg-slate-900 border-b border-slate-300 m-16 p-8">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-slate-300 sm:text-5xl">
              Customise Your Cards
            </h2>

            <p className="mx-auto mt-4 max-w-sm text-gray-500">
              Ready to started ? create a{" "}
              <a href="/" className="text-indigo-500 capitalize font-bold">
                free account
              </a>{" "}
              to start enjoying our awesome Creativity
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded-full border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
            >
              Get Started
            </a>
          </div>
        </div>
      </footer>
      <footer className="bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="logo gap-1 w-[100px] flex items-center justify-center">
                <Image
                  src={LogoImg}
                  alt="LogoImg"
                  height={100}
                  width={300}
                  className="h-[50px] select-none pointer-events-none w-full object-cover"
                />
                <h3 className="dark:text-muted-foreground font-extrabold">
                  KidsDug
                </h3>
              </div>

              <p className="mt-4 max-w-xs text-gray-500 dark:text-slate-200">
                Signup / Login to start Explore to our services and make your
                experience.
              </p>
              <div className="flex">
                <Instagram className="m-4 hover:text-pink-500 cursor-pointer duration-300 rounded-xl border border-white h-10 w-10 p-2 " />
                <Twitter className="m-4 hover:text-indigo-500 cursor-pointer duration-300 rounded-xl border border-white h-10 w-10 p-2 " />
                <Github className="m-4 hover:text-slate-500 cursor-pointer duration-300 rounded-xl border border-white h-10 w-10 p-2 " />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Services
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 dark:text-slate-200 transition hover:opacity-75"
                    >
                      1on1 Coaching
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 dark:text-slate-200 transition hover:opacity-75"
                    >
                      Company Review
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 dark:text-slate-200 transition hover:opacity-75"
                    >
                      Accounts Review
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 dark:text-slate-200 transition hover:opacity-75"
                    >
                      HR Consulting
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 dark:text-slate-200 transition hover:opacity-75"
                    >
                      SEO Optimisation
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Company
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 dark:text-slate-200 transition hover:opacity-75"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 dark:text-slate-200 transition hover:opacity-75"
                    >
                      Meet the Team
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 dark:text-slate-200 transition hover:opacity-75"
                    >
                      Accounts Review
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Helpful Links
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 dark:text-slate-200 transition hover:opacity-75"
                    >
                      Contact
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 dark:text-slate-200 transition hover:opacity-75"
                    >
                      FAQs
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 dark:text-slate-200 transition hover:opacity-75"
                    >
                      Live Chat
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Legal
                </p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-700 dark:text-slate-200 transition hover:opacity-75"
                    >
                      Accessibility
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 dark:text-slate-200 transition hover:opacity-75"
                    >
                      Returns Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 dark:text-slate-200 transition hover:opacity-75"
                    >
                      Refund Policy
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="text-gray-700 dark:text-slate-200 transition hover:opacity-75"
                    >
                      Hiring Statistics
                    </a>
                  </li>
                </ul>
              </div>
              I
            </div>
          </div>

          <p className="text-xs text-gray-500 dark:text-slate-200">
            &copy; 2023. KidDug. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer