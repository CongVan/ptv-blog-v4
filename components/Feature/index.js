import Image from "next/image";
import React from "react";
import Styles from "./feature.module.scss";
const works = [
  {
    step: "01",
    name: "Discussion",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex praesentium soluta impedit architecto, labore earum.",
  },
  {
    step: "02",
    name: "Idea & Concept",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex praesentium soluta impedit architecto, labore earum.",
  },
  {
    step: "03",
    name: "Testing & Trying",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex praesentium soluta impedit architecto, labore earum.",
  },
  {
    step: "04",
    name: "Execute & Install",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex praesentium soluta impedit architecto, labore earum.",
  },
];

const Item = ({ name, step, desc }) => {
  return (
    <div className={Styles.item}>
      <div className={Styles.step}>{step}</div>
      <div className={Styles.content}>
        <div className="py-2 text-xl font-semibold tracking-widest text-black-600">
          {name}
        </div>
        <div className="text-sm">{desc}</div>
      </div>
    </div>
  );
};

const Feature = () => {
  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <Image
              src="/assets/Illustration2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </div>
        </div>
        <div className="flex flex-col  justify-center ml-auto w-full lg:w-10/12">
          <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
            How we work
          </h3>
          <p className="my-2 text-black-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam culpa
            reprehenderit eum assumenda, quo eaque ut modi possimus tempore
            ipsum?
          </p>
          <ul className="text-black-500 self-start">
            {works.map((work, index) => (
              <Item key={index} {...work} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Feature;
