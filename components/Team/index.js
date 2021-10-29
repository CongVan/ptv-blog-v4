import React from "react";
import { MemberCard } from "./MemberCard";
import Image from "next/image";

const Team = ({ team = [] }) => {
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="team"
    >
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <h3 className="py-4 lg:text-2xl text-lg text-orange-500 font-medium uppercase leading-relaxed">
            Our team
          </h3>
          <h4 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
            Experiences IT Solutions.
          </h4>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-8 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            {team.map((member, index) => (
              <MemberCard member={member} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Team.MemberCard = MemberCard;
export default Team;
