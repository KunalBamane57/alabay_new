"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";
import Image from "next/image";
import Alabayheritage from "@/Components/Alabay Assets/alabayheritage.png";
import Alabayguard from "@/Components/Alabay Assets/alabayguard.png";
import exited from "@/Components/Alabay Assets/dall.e_exited.png";
import history from "@/Components/Alabay Assets/history.png";
import Main_bg from "@/Components/Alabay Assets/Main_bg.png";
import project_vision from "@/Components/Alabay Assets/project-vision.png";
import group_dogs from "@/Components/Alabay Assets/group_dogs.png";
import roadmap from "@/Components/Alabay Assets/roadmap.png";
import roadmap_dog from "@/Components/Alabay Assets/roadmap_dog.png";
import community_building from "@/Components/Alabay Assets/community_building.png";
import merchandise from "@/Components/Alabay Assets/merchandise.png";
import contest from "@/Components/Alabay Assets/contest.png";
import features from "@/Components/Alabay Assets/features.png";
import tokenomics from "@/Components/Alabay Assets/tokenomics.png";
import moneydog from "@/Components/Alabay Assets/moneydog.png";
import merchandise_text from "@/Components/Alabay Assets/merchandise_text.png";
import black_hoddie from "@/Components/Alabay Assets/Alabay Merch/Black_Hoddie.png";
import blue_cap from "@/Components/Alabay Assets/Alabay Merch/Blue_cap.png";
import pink_tshirt from "@/Components/Alabay Assets/Alabay Merch/Pink_Tshirt.png";
import yellow_tshirt from "@/Components/Alabay Assets/Alabay Merch/Yellow_Tshirt.png";
import games from "@/Components/Alabay Assets/games.png";
import game_1 from "@/Components/Alabay Assets/Alabay Games/game_1.png";
import game_2 from "@/Components/Alabay Assets/Alabay Games/game_2.png";
import game_3 from "@/Components/Alabay Assets/Alabay Games/game_3.png";
import social_media from "@/Components/Alabay Assets/social_media.png";
import twitter from "@/Components/Alabay Assets/twitter.png";
import social_dog from "@/Components/Alabay Assets/socail_dog.png";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const drawer = document.querySelector(".drawer-content");
    if (drawer && !drawer.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <div className="w-screen h-screen relative">
        <Image
          src={Main_bg}
          alt="Background Image"
          className="w-full h-full object-cover"
        />
      </div>
      {!isOpen && (
        <button
          className="bg-amber-400 text-white w-full max-w-[1250px] h-12 rounded-t-2xl flex mx-auto absolute bottom-1 left-1/2 transform -translate-x-1/2"
          onClick={toggleDrawer}
        >
          <div className="absolute bottom-0 w-full flex justify-center p-2 md:p-4">
            <div className="p-1 w-24 md:w-28 rounded-full bg-white"></div>
          </div>
        </button>
      )}

      <div className="main">
        <div
          className={`drawer-content bg-white fixed bottom-0 left-1/2 w-[85%] max-w-[1250px] h-[600px] transition-transform duration-300 ease-in-out rounded-t-3xl overflow-auto scrollbar-hide ${
            isOpen ? "translate-y-0" : "translate-y-full"
          } transform -translate-x-1/2 mx-auto`}
        >
          <div className="">
            <div className="relative">
              <div className="cpycon_1 origin-center rotate-0 z-20 h-[400px] bg-amber-400 absolute inset-0"></div>
              <div className="cpycon_1 origin-center rotate-12 z-10 h-[900px] w-[2500px] bg-amber-400 absolute inset-0"></div>
              <div className="container_1 flex flex-col md:flex-row z-20 relative">
                <div className="conleft w-full md:w-[58%] mt-16 md:mt-32">
                  <Image src={exited} alt="exited" className="w-full h-auto" />
                </div>
                <div className="conrig w-full md:w-[42%] mt-16 md:mt-24">
                  <div className="right_up">
                    <h1 className="innerup text-orange-600 text-4xl md:text-6xl font-extrabold text-right pr-5 my-5">
                      History of
                    </h1>
                    <div className="innerdown my-6">
                      <Image
                        src={history}
                        alt="history"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="right_down text-xl md:text-3xl text-right mr-5 font-semibold">
                    The Central Asia Shepherd Dog, also known as Alabay, has
                    been a guardian of livestock and property for centuries.
                    Originating from Central Asia, these dogs are renowned for
                    their courage, strength, and loyalty.
                  </div>
                </div>
              </div>
            </div>

            <div className="container_2 bg-white py-10">
              <div className="imagetype list-none flex justify-center gap-7 font-extrabold text-3xl tracking-wide mb-6">
                <li>ALL</li>
                <li className="text-amber-600">PHOTOS</li>
                <li>VIDEOS</li>
              </div>
              <div className="images flex justify-center my-10">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-full max-w-[1000px]"
                >
                  <CarouselContent>
                    {Array.from({ length: 10 }).map((_, index) => (
                      <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3"
                      >
                        <div className="p-2">
                          <Image
                            src={Alabayguard}
                            alt="exited"
                            className="rounded-xl w-full h-auto"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="h-12 w-12" />
                  <CarouselNext className="h-12 w-12" />
                </Carousel>
              </div>
            </div>

            <div className="relative">
              {/* Background Layer 1 */}
              <div className="cpycon_1 origin-bottom -rotate-12 z-10 h-[800px] w-[2500px] bg-amber-400 absolute inset-0 mt-[450px]"></div>

              {/* Container for Project Vision */}
              <div className="container_3 flex flex-col justify-center items-center z-20 relative">
                <Image
                  src={project_vision}
                  alt="exited"
                  className="w-[90%] md:w-[70%] rounded-xl"
                />
                <div className="group_dogs w-full h-auto mt-10">
                  <Image
                    src={group_dogs}
                    alt="exited"
                    className="rounded-xl w-full h-auto"
                  />
                </div>
              </div>

              {/* Background Layer 2 */}
              <div className="cpycon_1 origin-top-left rotate-12 z-10 h-[700px] w-[2500px] bg-amber-400 absolute inset-0 mt-[800px]"></div>

              {/* Mission Statement */}
              <div className="container_4 text-4xl py-24 text-center px-4 md:px-16 z-20 relative font-semibold">
                <p>
                  Our mission is to honor the heritage of the Alabay by creating
                  a vibrant, loyal, and powerful community. Just as Alabay
                  protects its flock, we aim to build a pack that stands strong
                  together.
                </p>
              </div>

              {/* Roadmap Section */}
              <div className="container_5 flex flex-col md:flex-row mb-20 z-20 relative">
                <div className="left w-full md:w-[50%]">
                  <div className="leftupper w-full md:w-[600px] mt-10">
                    <Image
                      src={roadmap}
                      alt="exited"
                      className="pl-5 h-[180px] w-full"
                    />
                  </div>
                  <div className="leftdown text-3xl flex flex-col justify-center font-semibold items-center h-auto pl-12 pr-4 md:pr-20 mt-32">
                    <p className="py-10">
                      Our journey is just beginning. Explore our roadmap to see
                      the exciting milestones and future plans we have in store.
                    </p>
                    <p className="text-orange-600">
                      Join us as we grow and achieve new heights.
                    </p>
                  </div>
                </div>
                <div className="right w-full md:w-[50%] mt-10 md:mt-28">
                  <Image src={roadmap_dog} alt="exited" className="w-full" />
                </div>
              </div>
            </div>

            <div className="container_6 bg-white flex flex-col md:flex-row pt-32 pb-20 text-white font-bold text-center px-4 md:px-12 gap-5">
              {/* Community Building Card */}
              <div className="domain_dogs bg-yellow-300 p-5 rounded-tl-3xl rounded-bl-3xl flex flex-col items-center">
                <h1 className="text-4xl">Community Building</h1>
                <p className="text-xl">and Initial Launch</p>
                <Image
                  src={community_building}
                  alt="Community Building"
                  className="w-full h-auto"
                />
              </div>

              {/* Merchandise Card */}
              <div className="domain_dogs bg-teal-200 p-5 flex flex-col items-center">
                <h1 className="text-4xl">Merchandise</h1>
                <p className="text-xl">Store Launch</p>
                <Image
                  src={merchandise}
                  alt="Merchandise"
                  className="w-full h-auto"
                />
              </div>

              {/* Community Events Card */}
              <div className="domain_dogs bg-fuchsia-400 p-5 flex flex-col items-center">
                <h1 className="text-4xl">Community Events</h1>
                <p className="text-xl">and Contests</p>
                <Image
                  src={contest}
                  alt="Community Events"
                  className="w-full h-auto"
                />
              </div>

              {/* Expansion and New Features Card */}
              <div className="domain_dogs bg-amber-900 p-5 rounded-tr-3xl rounded-br-3xl flex flex-col items-center">
                <h1 className="text-4xl">Expansion and New</h1>
                <p className="text-xl">Features</p>
                <Image
                  src={features}
                  alt="Expansion and New Features"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="relative">
              <div className="cpycon_1 origin-bottom -rotate-12 z-10 h-[800px] w-[2500px] bg-amber-400 absolute inset-0"></div>
              <div className="cpycon_1 origin-top-left rotate-12 z-10 h-[800px] w-[2500px] bg-amber-400 absolute inset-0 mt-[300px]"></div>
              <div className="container_7 z-20 relative pt-56">
                {/* Tokenomics Section */}
                <div className="Tokenomics flex flex-col md:flex-row items-center mt-10">
                  {/* Tokenomics Image */}
                  <Image
                    src={tokenomics}
                    alt="Tokenomics"
                    className="h-auto w-full md:w-[60%] pl-4 md:pl-16"
                  />
                </div>

                {/* Below Tokenomics Section */}
                <div className="below_tokenomics flex flex-col md:flex-row justify-between items-center mt-10">
                  {/* Left Content */}
                  <div className="leftcon flex flex-col gap-5 text-white mt-10 pl-4 md:pl-20">
                    {/* Liquidity Button */}
                    <div className="btn bg-neutral-700 px-6 py-4 rounded-3xl transition-transform transform hover:scale-105">
                      <p className="text-2xl md:text-3xl">LIQUIDITY</p>
                      <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-200">
                        LOCKED
                      </h1>
                    </div>

                    {/* Contract Button */}
                    <div className="btn bg-neutral-700 px-6 py-4 rounded-3xl transition-transform transform hover:scale-105">
                      <p className="text-2xl md:text-3xl">CONTRACT</p>
                      <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-200">
                        RENOUNCED
                      </h1>
                    </div>

                    {/* Taxes Button */}
                    <div className="btn bg-neutral-700 px-6 py-4 rounded-3xl transition-transform transform hover:scale-105">
                      <p className="text-2xl md:text-3xl">TAXES</p>
                      <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-200">
                        0%
                      </h1>
                    </div>
                  </div>

                  <div className="rightcon w-full flex justify-center mt-10 md:mt-0">
                    <Image
                      src={moneydog}
                      alt="Money Dog"
                      className="max-w-[full] w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="container_8 bg-white py-32">
              <div className="heading flex justify-center mx-4 sm:mx-20 lg:mx-56">
                <Image
                  src={merchandise_text}
                  alt="moneydog"
                  className="w-full max-w-xs sm:max-w-md lg:max-w-5xl"
                />
              </div>
              <div className="merchimage">
                <Carousel className="mx-4 sm:mx-20 lg:mx-32 my-10 mb-32">
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src={black_hoddie}
                        alt=""
                        className="w-auto h-auto max-w-xs sm:max-w-sm lg:max-w-5xl"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src={blue_cap}
                        alt=""
                        className="w-auto h-auto max-w-xs sm:max-w-sm lg:max-w-5xl"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src={pink_tshirt}
                        alt=""
                        className="w-auto h-auto max-w-xs sm:max-w-sm lg:max-w-5xl"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src={yellow_tshirt}
                        alt=""
                        className="w-auto h-auto max-w-xs sm:max-w-sm lg:max-w-5xl"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="ml-4 sm:ml-8 lg:ml-16 h-14 w-14" />
                  <CarouselNext className="mr-4 sm:mr-8 lg:mr-16 h-14 w-14" />
                </Carousel>
              </div>
            </div>

            <div className="relative">
              <div className="container_9 py-32 z-20 relative">
                <div className="heading_games flex flex-col items-center justify-center">
                  <Image
                    src={games}
                    alt=""
                    className="h-[180px] w-[50%] max-w-[200px] sm:max-w-[400px] md:max-w-[400px] lg:max-w-[500px]"
                  />
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center">
                    Stay tuned for upcoming games!
                  </h1>
                </div>

                <div className="bottom_image">
                  <Carousel className="m-4 sm:m-16 border-8 rounded-3xl border-white">
                    <CarouselContent>
                      <CarouselItem className="relative">
                        <Image
                          src={Alabayguard}
                          alt=""
                          className="rounded-2xl w-full h-auto"
                        />
                        <Link href="/discover_1">
                          <button className="btn_discover absolute bottom-20 left-1/2 transform -translate-x-1/2 text-lg sm:text-2xl md:text-3xl flex bg-purple-600 text-white items-center py-1 px-4 sm:px-6 md:px-8 gap-1 sm:gap-2 rounded-3xl">
                            Discover
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6"
                            />
                          </button>
                        </Link>
                      </CarouselItem>
                      <CarouselItem className="relative">
                        <Image
                          src={Alabayheritage}
                          alt=""
                          className="rounded-3xl w-full h-auto"
                        />
                        <Link href="/discover_2">
                          <button className="btn_discover absolute bottom-20 left-1/2 transform -translate-x-1/2 text-lg sm:text-2xl md:text-3xl flex bg-green-600 text-white items-center py-1 px-4 sm:px-6 md:px-8 gap-1 sm:gap-2 rounded-3xl">
                            Discover
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="h-4 sm:h-5 md:h-6 w-4 sm:w-5 md:w-6"
                            />
                          </button>
                        </Link>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="ml-4 sm:ml-16 h-14 w-14" />
                    <CarouselNext className="mr-4 sm:mr-16 h-14 w-14" />
                  </Carousel>
                </div>
              </div>
              <div className="cpycon_1 origin-bottom -rotate-12 z-10 h-[700px] w-[2500px] bg-amber-400 absolute inset-0 mt-[-100px]"></div>
              <div className="cpycon_1 origin-top-left rotate-12 z-10 h-[780px] w-[2500px] bg-amber-400 absolute inset-0 mt-[250px]"></div>
            </div>

            <div className="container_10 bg-white py-32 px-10 z-20 relative mt-[100px]">
              <div className="games_prev flex gap-2 text-4xl font-extrabold">
                <h1 className="text-amber-400">GAME</h1>
                <h1>PREVIEWS</h1>
              </div>
              <div className="game_prev_images flex flex-wrap gap-5 my-5 justify-centetr items-center">
                <div className="game_prev_images flex flex-wrap sm:flex-nowrap gap-4 my-5 justify-center items-center w-[90%]">
                  <div className="images_games w-full sm:w-1/2 lg:w-1/3">
                    <Image
                      src={game_1}
                      alt=""
                      className="rounded-3xl w-full h-auto"
                    />
                  </div>
                  <div className="images_games w-full sm:w-1/2 lg:w-1/3">
                    <Image
                      src={game_2}
                      alt=""
                      className="rounded-3xl w-full h-auto"
                    />
                  </div>
                  <div className="images_games w-full sm:w-1/2 lg:w-1/3">
                    <Image
                      src={game_3}
                      alt=""
                      className="rounded-3xl w-full h-auto"
                    />
                  </div>
                </div>

                <div className="arrow w-[5%]">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="h-24 w-10 bg-gray-700 text-white px-5 rounded-3xl cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="container_11 bg-white">
              <div className="heading_socialmedia w-[70%]">
                <Image src={social_media} alt="" className="" />
              </div>
              <div className="socail_media_image flex relative">
                <div className="twitter w-[40%] mt-10">
                  <Image src={twitter} alt="" className="" />
                </div>
                <div className="social_dog w-[60%] relative -top-20 z-10">
                  <Image src={social_dog} alt="" className="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
