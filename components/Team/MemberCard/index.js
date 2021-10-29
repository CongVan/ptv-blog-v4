import Image from "next/image";
import Styles from "./member.module.scss";
import { RiFacebookLine, RiGithubLine, RiLinkedinLine } from "react-icons/ri";

export const MemberCard = ({ member }) => {
  return (
    <div className={Styles.card}>
      <div className="relative rounded-xl overflow-hidden">
        {member.avatar && (
          <div className="relative aspect-w-3 aspect-h-4">
            <Image
              src={member.avatar}
              layout="fill"
              objectFit="cover"
              className={Styles.avatar}
            />
          </div>
        )}
        <div className="absolute bottom-0 p-4 text-center w-full">
          <ul className={Styles.socials}>
            {member.facebook && (
              <li>
                <a href={member.facebook} target="_blank">
                  <RiFacebookLine size={24} />
                </a>
              </li>
            )}
            {member.linked_in && (
              <li>
                <a href={member.linked_in} target="_blank">
                  <RiLinkedinLine size={24} />
                </a>
              </li>
            )}
            {member.github && (
              <li>
                <a href={member.github} target="_blank">
                  <RiGithubLine size={24} />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="mt-4 text-center">
        <span className="font-semibold text-xl">{member.name}</span>
        {member.title && (
          <span className="text-black-500 text-sm block md:inline-block">
            <span className="hidden md:inline-block">{" - "}</span>
            {member.title?.name}
          </span>
        )}
      </div>
    </div>
  );
};
