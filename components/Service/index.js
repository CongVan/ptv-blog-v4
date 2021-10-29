import React from "react";
import { FaLaptopCode, FaCubes, FaDatabase } from "react-icons/fa";
import Styles from "./service.module.scss";

const listUser = [
  {
    name: "Web Development",
    intro:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, autem.",
    icon: FaLaptopCode,
  },
  {
    name: "Product Design",
    intro:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, autem.",
    icon: FaCubes,
  },
  {
    name: "Data analytics",
    intro:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti, autem.",
    icon: FaDatabase,
  },
];

const Service = () => {
  return (
    <div className="max-w-screen-xl px-8 xl:px-16 mx-auto  ">
      <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600 sm:text-center py-8">
        We Offer a Wide Variety of IT Services
      </h3>
      <div className="relative w-full flex">
        <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((user, index) => (
            <div className={Styles.item} key={index}>
              <div className=" mx-auto sm:w-auto">
                <div className="flex items-center  flex-wrap">
                  <div className="flex items-center justify-center bg-orange-100 w-16 min-w-16 h-16 mr-6 rounded-full text-orange-500">
                    {user.icon && <user.icon size={24} />}
                  </div>
                  <p className={Styles.name}>{user.name}</p>
                </div>

                <div className="flex flex-col mt-6">
                  <p className={Styles.intro}>{user.intro}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Service;
