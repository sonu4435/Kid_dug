"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LogoImg from "../../../public/logo.png";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./Theme";
import { ArrowRight, Lock, MenuIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const [premium, setPremim] = useState(true);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const { isSignedIn, isLoaded } = useUser();

  const handleOnclick = (e: any) => {
    setActive(true);
  };

  const handleOnclickClose = (e: any) => {
    setActive(false);
  };

  const handleLoginClose = () => {
    setShow(false);
  };

  const handleSignUpClose = () => {
    setShow2(false);
  };

  return (
    <>
      <nav className="khash dark:bg-slate-900/60 bg-[#0e7aff]/90 font-semibold backdrop-blur-sm border-b dark:border-b-[#303236] w-screen h-[10vh] text-white block relative md:xl:block md:xl:absolute z-[999] overflow-x-hidde">
        {/* Navbar styling starts */}
        <ul className="flex gap-2 h-full w-full items-center justify-between">
          {/* Logo styling Div starts */}
          <div className="logo ml-12 gap-1 h-full w-[100px] flex items-center justify-center">
            <Image
              src={LogoImg}
              alt="LogoImg"
              height={100}
              width={300}
              className="h-3/4 select-none pointer-events-none w-full object-cover"
            />
            <h3 className="dark:text-muted-foreground">
              <a href="/">KidsDug</a>
            </h3>
          </div>
          {/* Logo styling Div ends */}

          {/* MenuBar for mobile styling Div starts */}
          <div className="menu xl:hidden p-12 flex items-center">
            <div className="h-full relative z-[99999999] w-full">
              {!active ? <ModeToggle /> : ""}
            </div>
            {active == false ? (
              <button onClick={handleOnclick} className="flex">
                <MenuIcon className=" relative z-[99999999] h-[40px] w-[50px]" />
              </button>
            ) : (
              <button onClick={handleOnclickClose}>
                <X className=" hover:rotate-180 duration-300 relative z-[99999999] h-[40px] w-[50px]" />
              </button>
            )}
          </div>
          {/* MenuBar for mobile styling Div ends */}

          {/* after Menu NavBar for mobile styling Div starts */}
          <div
            id="sNav"
            className={cn(
              active ? "block left-0" : "hidden left-[100%]",
              "xl:hidden duration-300 ease-in-out absolute h-[100vh] top-[10vh] w-screen dark:bg-slate-900 bg-white"
            )}
          >
            <div className="h-full w-full flex flex-col justify-around p-[4.5rem] pt-[1rem]">
              <li>
                <a
                  href="#!"
                  className=" text-2xl khash font-bold text-muted-foreground cursor-pointer"
                >
                  Image Editor
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className=" text-2xl khash font-bold text-muted-foreground cursor-pointer"
                >
                  Design Card
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className=" text-2xl khash font-bold text-muted-foreground cursor-pointer"
                >
                  Card Gallery
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className=" text-2xl khash font-bold text-muted-foreground cursor-pointer"
                >
                  AI Transcript
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className=" text-2xl khash font-bold text-muted-foreground cursor-pointer"
                >
                  System Insights
                </a>
              </li>
              <li>
                <a
                  href="#!"
                  className=" text-2xl khash font-bold text-muted-foreground cursor-pointer"
                >
                  Pricing
                </a>
              </li>
              <div>
                {!isSignedIn ? (
                  <li className="p-12 pt-0 pl-0">
                    <Button variant="link" size="lg">
                      <SignInButton>
                        {isLoaded ? "Log In" : "Loading..."}
                      </SignInButton>
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      // onClick={handleSignUp}
                      className="bg-[#5858e6] relative z-[99999] duration-200 ease-in-out hover:bg-[#6c6bc7] hover:cursor-pointer text-white font-semibold tracking-wider"
                    >
                      <SignUpButton>
                        {isLoaded ? "Get Started" : "Loading..."}
                      </SignUpButton>
                      {/* <Link href="/about">Start Exploring</Link> */}
                    </Button>
                  </li>
                ) : (
                  <UserButton afterSignOutUrl="/" />
                )}
              </div>
            </div>
          </div>
          {/* after Menu NavBar for mobile styling Div ends */}

          {/* after Logo NavBar for large desices styling Div starts */}
          <div className="navItems hidden sm:hidden xl:flex items-center justify-around p-10">
            <li className="p-3">
              <a
                href="#!"
                className={cn(
                  premium && isSignedIn
                    ? "cursor-pointer flex gap-2 items-center justify-center"
                    : "select-none pointer-events-none flex gap-2 items-center justify-center"
                )}
              >
                Card Editor
                {!premium || !isSignedIn ? (
                  <Lock
                    size="15px"
                    className="text-white font-bold fill-red-500"
                  />
                ) : (
                  ""
                )}
              </a>
            </li>
            <li className="p-3">
              <Link href="/design-card" className="cursor-pointer">
                Card Design
              </Link>
            </li>
            <li className="p-3">
              <a href="#!" className="cursor-pointer">
                Card Gallery
              </a>
            </li>
            <li className="p-3">
              <a
                href="#!"
                className="select-none pointer-events-none flex gap-2 items-center justify-center"
              >
                AI Transcript
                <Lock
                  size="15px"
                  className="text-white font-bold fill-red-500"
                />
              </a>
            </li>
            <li className="p-3">
              <a href="#!" className="cursor-pointer">
                System Insights
              </a>
            </li>
            <li className="p-3">
              <Link href="/pricing" className="cursor-pointer">
                Pricing
              </Link>
            </li>
            <ModeToggle />
            {!isSignedIn ? (
              <div className="flex items-center justify-center">
                <div className="p-5">
                  <SignInButton>
                    {isLoaded ? "Log In" : "Loading..."}
                  </SignInButton>
                </div>
                <Button
                  variant="outline"
                  // onClick={handleSignUp}
                  className="group bg-violet-700 p-3 hover:bg-violet-600 text-md overflow-hidden w-1500px] h-full"
                >
                  <SignUpButton>
                    {isLoaded ? "Get Started" : "Loading..."}
                  </SignUpButton>
                  <ArrowRight className="relative ml-2 duration-500 left-0 group-hover:left-[100%]" />
                </Button>
              </div>
            ) : (
              <UserButton afterSignOutUrl="/" />
            )}
            <div className="p-4 h-full"></div>
          </div>
          {/* after Logo NavBar for large desices styling Div ends */}
        </ul>
      </nav>
      {/* Navbar styling ends */}

      {/* Showing Signin/up providers for Mobile device click */}
      {show ? (
        <div
          id="gsps"
          className="absolute h-auto z-[9999999999999] top-0 w-screen py-16 bg-black/20 backdrop-blur-sm"
        >
          <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
            <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
              <div className="rounded-xl bg-white shadow-xl">
                <div className="p-6 sm:p-16">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Image
                        height={1024}
                        width={1024}
                        src={LogoImg}
                        loading="lazy"
                        className="w-16"
                        alt="tailus logo"
                      />
                      <X
                        className="w-[50px] h-[40px] cursor-pointer"
                        onClick={handleLoginClose}
                      />
                    </div>
                    <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                      Sign in to unlock the <br /> best of Tailus.
                    </h2>
                  </div>
                  <div className="mt-16 grid space-y-4">
                    <button
                      className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                    >
                      <div className="relative flex items-center space-x-4 justify-center">
                        <Image
                          height={1024}
                          width={1024}
                          src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                          className="absolute left-0 w-5"
                          alt="google logo"
                        />
                        <button>
                          <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                            Continue with Google
                          </span>
                        </button>
                      </div>
                    </button>
                    <button
                      className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                    >
                      <div className="relative flex items-center space-x-4 justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="absolute left-0 w-5 text-gray-700"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                          Continue with Github
                        </span>
                      </div>
                    </button>
                    <button
                      className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                    >
                      <div className="relative flex items-center space-x-4 justify-center">
                        <Image
                          height={1024}
                          width={1024}
                          src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                          className="absolute left-0 w-5"
                          alt="Facebook logo"
                        />
                        <button>
                          <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                            Continue with Facebook
                          </span>
                        </button>
                      </div>
                    </button>
                  </div>
                  <div className="mt-16 space-y-4 text-gray-600 text-center sm:-mb-8">
                    <p className="text-xs">
                      By proceeding, you agree to our{" "}
                      <a href="#" className="underline">
                        Terms of Use
                      </a>{" "}
                      and confirm you have read our{" "}
                      <a href="#" className="underline">
                        Privacy and Cookie Statement
                      </a>
                      .
                    </p>
                    <p className="text-xs">
                      This site is protected by reCAPTCHA and the{" "}
                      <a href="#" className="underline">
                        Google Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="#" className="underline">
                        Terms of Service
                      </a>{" "}
                      apply.
                    </p>
                  </div>
                  X
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* Showing Signin/up providers for large device click */}
      {show2 ? (
        <div
          id="gsps"
          className="absolute h-auto z-[9999999999999] top-0 w-screen py-16 bg-black/20 backdrop-blur-sm"
        >
          <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
            <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
              <div className="rounded-xl bg-white shadow-xl">
                <div className="p-6 sm:p-16">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Image
                        height={1024}
                        width={1024}
                        src={LogoImg}
                        loading="lazy"
                        className="w-16"
                        alt="tailus logo"
                      />
                      <X
                        className="w-[50px] h-[40px] cursor-pointer"
                        onClick={handleSignUpClose}
                      />
                    </div>
                    <h2 className="mb-8 text-2xl text-cyan-900 font-bold">
                      Sign Up to Explore the <br /> best of Values.
                    </h2>
                  </div>
                  <div className="mt-16 grid space-y-4">
                    <button
                      className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                    >
                      <div className="relative flex items-center space-x-4 justify-center">
                        <Image
                          height={1024}
                          width={1024}
                          src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
                          className="absolute left-0 w-5"
                          alt="google logo"
                        />
                        <button>
                          <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                            Continue with Google
                          </span>
                        </button>
                      </div>
                    </button>
                    <button
                      className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                    >
                      <div className="relative flex items-center space-x-4 justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="absolute left-0 w-5 text-gray-700"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                        <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                          Continue with Github
                        </span>
                      </div>
                    </button>
                    <button
                      className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
                    >
                      <div className="relative flex items-center space-x-4 justify-center">
                        <Image
                          height={1024}
                          width={1024}
                          src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
                          className="absolute left-0 w-5"
                          alt="Facebook logo"
                        />
                        <button>
                          <span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
                            Continue with Facebook
                          </span>
                        </button>
                      </div>
                    </button>
                  </div>
                  <div className="mt-16 space-y-4 text-gray-600 text-center sm:-mb-8">
                    <p className="text-xs">
                      By proceeding, you agree to our{" "}
                      <a href="#" className="underline">
                        Terms of Use
                      </a>{" "}
                      and confirm you have read our{" "}
                      <a href="#" className="underline">
                        Privacy and Cookie Statement
                      </a>
                      .
                    </p>
                    <p className="text-xs">
                      This site is protected by reCAPTCHA and the{" "}
                      <a href="#" className="underline">
                        Google Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="#" className="underline">
                        Terms of Service
                      </a>{" "}
                      apply.
                    </p>
                  </div>
                  X
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
