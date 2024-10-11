import React from "react";
import Image from "next/image";
import Alabayguard from "@/Components/Alabay Assets/alabayguard.png";
import history from "@/Components/Alabay Assets/history.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Page = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">
        <div className="cpycon_1 origin-center rotate-0 z-20 h-screen w-full bg-gradient-to-r from-black to-transparent absolute inset-0"></div>
        <Image
          src={Alabayguard}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="z-10"
        />
        <div className="container_1 text-white z-30 relative py-5">
          <Image
            src={history}
            alt="Background Image"
            layout=""
            className="h-[100px] w-[29%] px-9"
          />
          <h1 className="text-2xl text-indigo-400 font-extrabold px-20">
            SHEPHERED OF THE STEPPES
          </h1>
          <div className="heading text-xl text-indigo-400 font-extrabold py-8 px-20">
            FEATURES
          </div>
          <div className="description font-bold px-20 text-base w-[67%]">
            <p>
              Explore the variety of landscape, including
              <span className="text-indigo-400"> mountains, forests, deserts</span>{" "}
              and <span className="text-indigo-400">ancient ruins</span>.
              <br />
              Use the Alabay&apos;s{" "}
              <span className="text-indigo-400">abilities</span> to solve{" "}
              <span className="text-indigo-400">puzzles</span> that involve
              moving objects, activating mechanisms, or finding hidden clues.
              <br />
              Discover relics that tell the story of the Alabay&apos;s ancestors,
              each piece contributing to a large narrative about the breed&apos;s
              role in ancient history. <br />
              Unlock new abilities for the Alabay, enhancing its capacity to
              explore and solve puzzles.
            </p>
            <h3 className="py-8">Challenge Modes</h3>
            <p>
              - <span className="text-indigo-400">Time Trials:</span> Compete in
              special timed challenges where the Alabay must navigate through
              complex mazes or complete puzzles within a time limit. <br />
              - <span className="text-indigo-400">Exploration Mastery:</span> A
              mode that rewards players for fully exploring every nook and
              cranny of the game&apos;s world, uncovering all secrets.
            </p>
          </div>
          <div className="btn px-20 flex gap-5 my-10">
            <button className="bg-white text-black flex items-center px-6 py-2 gap-2 rounded-full">
              <FontAwesomeIcon
                icon={faCirclePlay}
                className="h-8 w-8"
                style={{ color: "#000000" }}
              />
              Coming Soon
            </button>
            <button className="py-2 px-12 border-4 rounded-full">Exit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
