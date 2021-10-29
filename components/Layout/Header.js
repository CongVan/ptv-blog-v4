import React, { useState, useEffect } from "react";
import Link from "next/link";
// import ButtonOutline from "../misc/ButtonOutline";
import LogoVPN from "../../public/assets/Logo.svg";
import {
  RiArticleLine,
  RiSendPlaneLine,
  RiTeamLine,
  RiGlobalLine,
  RiInformationLine,
  RiSearchLine,
} from "react-icons/ri";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    const listener = () => {
      setScrollActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Link href="/">
              <a>
                <LogoVPN className="h-8 w-auto" />
              </a>
            </Link>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            <Link href="/#about">
              <a
                onClick={() => {
                  setActiveLink("about");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === "about"
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500 a")
                }
              >
                About
              </a>
            </Link>
            <Link activeClass="active" href="/#feature">
              <a
                onClick={() => {
                  setActiveLink("feature");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === "feature"
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500 ")
                }
              >
                Service
              </a>
            </Link>
            <Link href="/#pricing">
              <a
                onClick={() => {
                  setActiveLink("pricing");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === "pricing"
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500 ")
                }
              >
                Team
              </a>
            </Link>
            <Link href="/#testimoni">
              <a
                onClick={() => {
                  setActiveLink("testimoni");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === "testimoni"
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500 ")
                }
              >
                Contact
              </a>
            </Link>
            <Link
              href="/blog"
              activeClass="active"
              onSetActive={() => {
                setActiveLink("blog");
              }}
            >
              <a
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-black-500 hover:text-orange-500 "
                }
              >
                Blog
              </a>
            </Link>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <div className="relative">
              <input className="input rounded-lg border-2 pr-8 peer hidden md:block"></input>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 md:text-gray-500 peer-focus:text-black-500">
                <RiSearchLine size={24} />
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-0 sm:px-8 shadow-t bg-white-500">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            <Link href="/#about">
              <a
                onClick={() => {
                  setActiveLink("about");
                }}
                className={
                  "flex-1 mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (activeLink === "about"
                    ? "  border-orange-500 text-orange-500"
                    : " border-transparent")
                }
              >
                <RiInformationLine size={24} />
                About
              </a>
            </Link>
            <Link href="/#feature">
              <a
                onClick={() => {
                  setActiveLink("feature");
                }}
                className={
                  "flex-1 mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (activeLink === "feature"
                    ? "  border-orange-500 text-orange-500"
                    : " border-transparent ")
                }
              >
                <RiGlobalLine size={24} />
                Service
              </a>
            </Link>
            <Link href="/#pricing">
              <a
                onClick={() => {
                  setActiveLink("pricing");
                }}
                className={
                  "flex-1 mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (activeLink === "pricing"
                    ? "  border-orange-500 text-orange-500"
                    : " border-transparent ")
                }
              >
                <RiTeamLine size={24} />
                Team
              </a>
            </Link>
            <Link href="/#testimoni">
              <a
                onClick={() => {
                  setActiveLink("testimoni");
                }}
                className={
                  "flex-1 mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (activeLink === "testimoni"
                    ? "  border-orange-500 text-orange-500"
                    : " border-transparent ")
                }
              >
                <RiSendPlaneLine size={24} />
                Contact
              </a>
            </Link>
            <Link href="/blog">
              <a
                onClick={() => {
                  setActiveLink("blog");
                }}
                className={
                  "flex-1 mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                  (activeLink === "blog"
                    ? "  border-orange-500 text-orange-500"
                    : " border-transparent ")
                }
              >
                <RiArticleLine size={24} />
                Blog
              </a>
            </Link>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
