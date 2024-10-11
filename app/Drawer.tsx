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
      <div className="w-screen h-screen">
        <Image
          src={Main_bg}
          alt="Background Image"
          className="w-screen h-screen object-cover"
        />
      </div>
      {!isOpen && (
        <button
          className="bg-amber-400 text-white w-full max-w-[1250px] h-12 rounded-t-2xl flex mx-36 absolute bottom-1"
          onClick={toggleDrawer}
        >
          <div className="absolute bottom-0 w-full flex justify-center p-4">
            <div className="p-1 w-28 rounded-full bg-white"></div>
          </div>
        </button>
      )}

      <div className="main">
        <div
          className={`drawer-content mx-28 bg-white fixed bottom-0 overflow-auto scrollbar-hide w-[85%] h-[600px] transition-transform duration-300 ease-in-out rounded-t-3xl ${isOpen ? "translate-y-0" : "translate-y-full"
            }`}
        >
          <div className="">
            <div className="relative">
              <div className="cpycon_1 origin-center rotate-0 z-20 h-[400px] bg-amber-400 absolute inset-0"></div>
              <div className="cpycon_1 origin-center rotate-12 z-10 h-[900px] w-[2500px] bg-amber-400 absolute inset-0"></div>
              <div className="container_1 flex z-20 relative">
                <div className="conleft w-[58%] mt-32">
                  <Image src={exited} alt="exited" className="" />
                </div>
                <div className="conrig w-[42%] mt-24">
                  <div className="right_up">
                    <h1 className="innerup text-orange-600 text-6xl font-extrabold text-right pr-7 my-5">
                      History of
                    </h1>
                    <div className="innerdown my-8">
                      <Image src={history} alt="exited" className="" />
                    </div>
                  </div>
                  <div className="right_down text-3xl text-right mr-7">
                    The Central Asia Shepherd Dog, also known as Alabay, has
                    been a guardian of livestock and property for centuries.
                    Originating from Central Asia, these dogs are renowned for
                    their courage, strength, and loyalty.
                  </div>
                </div>
              </div>
            </div>

            <div className="container_2 bg-white py-10">
              <div className="imagetype list-none flex justify-center gap-7 text-extrabold text-3xl tracking-wide">
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
                        <div className="p-1">
                          <Image
                            src={Alabayguard}
                            alt="exited"
                            className="rounded-xl"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>

            <div className="relative">
              <div className="cpycon_1 origin-bottom -rotate-12 z-10 h-[800px] w-[2500px] bg-amber-400 absolute inset-0 mt-[450px]"></div>
              <div className="container_3 flex flex-col justify-center items-center z-20 relative">
                <Image
                  src={project_vision}
                  alt="exited"
                  className="w-[90%] rounded-xl"
                />
                <div className="group_dogs h-screen">
                  <Image
                    src={group_dogs}
                    alt="exited"
                    className="rounded-xl w-full h-max"
                  />
                </div>
              </div>

              <div className="cpycon_1 origin-top-left rotate-12 z-10 h-[800px] w-[2500px] bg-amber-400 absolute inset-0 mt-[800px]"></div>
              <div className="container_4 text-4xl py-24 text-center px-16 z-20 relative">
                <p>
                  Our mission is to honor the heritage of the Alabay by creating
                  a vibrant, loyal and powerful community. Just as Alabay
                  protects its flock, we aim to build a pack that stands strong
                  together.
                </p>
              </div>

              <div className="container_5 flex mb-20 z-20 relative">
                <div className="left w-[50%]">
                  <div className="leftupper w-[600px] mt-10">
                    <Image
                      src={roadmap}
                      alt="exited"
                      className="pl-5 h-[180px]"
                    />
                  </div>
                  <div className="leftdown text-3xl flex flex-col justify-center items-center h-[400px] pl-12 pr-20 mt-32">
                    <p className="py-10">
                      Our Journey is just beginning. Explore our roadmap to see
                      the exiting milestones and future plans we have in store
                    </p>
                    <p className="text-orange-600">
                      Join us as we grow and achieve new heights.
                    </p>
                  </div>
                </div>
                <div className="right mt-28">
                  <Image src={roadmap_dog} alt="exited" className="" />
                </div>
              </div>
            </div>

            <div className="container_6 bg-white flex pt-32 pb-20 text-white text-center px-12 gap-5">
              <div className="domain_dogs bg-yellow-300 p-5 rounded-tl-3xl rounded-bl-3xl">
                <h1 className="text-4xl">Community Building</h1>
                <p className="text-xl">and Initial Launch</p>
                <Image src={community_building} alt="exited" className="" />
              </div>
              <div className="domain_dogs bg-teal-200 p-5">
                <h1 className="text-4xl">Merchandise</h1>
                <p className="text-xl">Store Launch</p>
                <Image src={merchandise} alt="exited" className="" />
              </div>
              <div className="domain_dogs bg-fuchsia-400 p-2">
                <h1 className="text-4xl">Community Events</h1>
                <p className="text-xl">and Contests</p>
                <Image src={contest} alt="exited" className="" />
              </div>
              <div className="domain_dogs bg-amber-900 p-5 rounded-tr-3xl rounded-br-3xl">
                <h1 className="text-4xl">Expansion and New</h1>
                <p className="text-xl">features</p>
                <Image src={features} alt="exited" className="" />
              </div>
            </div>

            <div className="relative">
              <div className="cpycon_1 origin-bottom -rotate-12 z-10 h-[800px] w-[2500px] bg-amber-400 absolute inset-0"></div>
              <div className="cpycon_1 origin-top-left rotate-12 z-10 h-[800px] w-[2500px] bg-amber-400 absolute inset-0 mt-[300px]"></div>
              <div className="container_7 z-20 relative pt-56">
                <div className="Tokenomics h-[200px]">
                  <Image
                    src={tokenomics}
                    alt="tokenomics"
                    className="h-full w-[60%] pl-16 mt-10"
                  />
                </div>
                <div className="below_tokenomics flex">
                  <div className="leftcon flex flex-col gap-5 text-white mt-32 pl-20">
                    <div className="btn bg-neutral-700 px-7 py-5 rounded-3xl">
                      <p className="text-3xl">LIQUIDITY</p>
                      <h1 className="text-5xl font-extrabold text-yellow-200">
                        LOCKED
                      </h1>
                    </div>
                    <div className="btn bg-neutral-700 px-7 py-5 rounded-3xl">
                      <p className="text-3xl">CONTRACT</p>
                      <h1 className="text-5xl font-extrabold text-yellow-200">
                        RENOUNCED
                      </h1>
                    </div>
                    <div className="btn bg-neutral-700 px-7 py-5 rounded-3xl">
                      <p className="text-3xl">TAXES</p>
                      <h1 className="text-5xl font-extrabold text-yellow-200">
                        0%
                      </h1>
                    </div>
                  </div>
                  <div className="rightcon">
                    <Image src={moneydog} alt="moneydog" className="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="container_8 bg-white py-32">
              <div className="heading flex justify-center mx-56">
                <Image src={merchandise_text} alt="moneydog" className="" />
              </div>
              <div className="merchimage">
                <Carousel className="mx-32 my-10 mb-32">
                  <CarouselContent>
                    <CarouselItem>
                      <Image src={black_hoddie} alt="" className="" />
                    </CarouselItem>
                    <CarouselItem>
                      <Image src={blue_cap} alt="" className="" />
                    </CarouselItem>
                    <CarouselItem>
                      <Image src={pink_tshirt} alt="" className="" />
                    </CarouselItem>
                    <CarouselItem>
                      <Image src={yellow_tshirt} alt="" className="" />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="ml-16 h-14 w-14" />
                  <CarouselNext className="mr-16 h-14 w-14" />
                </Carousel>
              </div>
            </div>

            <div className="relative">
              <div className="container_9 py-32 z-20 relative">
                <div className="heading_games flex flex-col items-center justify-center">
                  <Image src={games} alt="" className="h-[180px] w-[45%]" />
                  <h1 className="text-4xl font-extrabold">
                    Stay tuned for upcoming games!
                  </h1>
                </div>
                <div className="bottom_image">
                  <Carousel className="m-16 border-8 rounded-3xl border-white">
                    <CarouselContent>
                      <CarouselItem className="relative">
                        <Image
                          src={Alabayguard}
                          alt=""
                          className="rounded-2xl"
                        />
                        <Link href="/discover_1">
                          <button className="btn_discover absolute bottom-20 left-1/2 transform -translate-x-1/2 text-4xl flex bg-purple-600 text-white items-center py-2 px-10 gap-4 rounded-3xl">
                            Discover
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="h-8 w-8"
                            />
                          </button>
                        </Link>
                      </CarouselItem>
                      <CarouselItem className="relative">
                        <Image
                          src={Alabayheritage}
                          alt=""
                          className="rounded-3xl"
                        />
                        <Link href="/discover_2">
                          <button className="btn_discover absolute bottom-20 left-1/2 transform -translate-x-1/2 text-4xl flex bg-green-600 text-white items-center py-2 px-10 gap-4 rounded-3xl">
                            Discover
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="h-8 w-8"
                            />
                          </button>
                        </Link>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="ml-16 h-14 w-14" />
                    <CarouselNext className="mr-16 h-14 w-14" />
                  </Carousel>
                </div>
              </div>
              <div className="cpycon_1 origin-bottom -rotate-12 z-10 h-[800px] w-[2500px] bg-amber-400 absolute inset-0 mt-[-100px]"></div>
              <div className="cpycon_1 origin-top-left rotate-12 z-10 h-[800px] w-[2500px] bg-amber-400 absolute inset-0 mt-[250px]"></div>
            </div>

            <div className="container_10 bg-white py-32 px-10">
              <div className="games_prev flex gap-2 text-4xl font-extrabold">
                <h1 className="text-amber-400">GAME</h1>
                <h1>PREVIEWS</h1>
              </div>
              <div className="game_prev_images flex gap-5 my-5 justify-centetr items-center">
                <div className="images_games">
                  <Image src={game_1} alt="" className="rounded-3xl" />
                </div>
                <div className="images_games">
                  <Image src={game_2} alt="" className="rounded-3xl" />
                </div>
                <div className="images_games">
                  <Image src={game_3} alt="" className="rounded-3xl" />
                </div>
                <div className="arrow">
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
