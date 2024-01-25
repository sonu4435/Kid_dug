import { Button } from "@/components/ui/button";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AiWork from "../../../public/ai-photo-recocnigation-109375782.png";
import img1 from "../../../public/randomImg/img (1).jpeg";
import img2 from "../../../public/randomImg/img (1).png";
import img3 from "../../../public/randomImg/img (2).jpeg";
import img4 from "../../../public/randomImg/img (2).png";
import img5 from "../../../public/randomImg/img (3).jpeg";
import img6 from "../../../public/randomImg/img (3).png";
import img7 from "../../../public/randomImg/img (4).jpeg";
import img8 from "../../../public/randomImg/img (4).png";
import img9 from "../../../public/randomImg/img (5).jpeg";
import img10 from "../../../public/randomImg/img (5).png";
import img11 from "../../../public/randomImg/img (6).jpeg";
import img12 from "../../../public/randomImg/img (6).png";
import img13 from "../../../public/randomImg/img (7).jpeg";
import img14 from "../../../public/randomImg/img (8).jpeg";
import img16 from "../../../public/randomImg/img (9).jpeg";
import img18 from "../../../public/randomImg/img (10).jpeg";
import show1 from "../../../public/showcase/img (1).png";
import show2 from "../../../public/showcase/img (2).png";
import show3 from "../../../public/showcase/img (3).png";
import show4 from "../../../public/showcase/img (4).png";
import show5 from "../../../public/showcase/img (5).png";
import show6 from "../../../public/showcase/img (6).png";
import show7 from "../../../public/showcase/img (7).png";
import show8 from "../../../public/showcase/img (8).png";
import show9 from "../../../public/showcase/img (9).png";
import rec1 from "../../../public/showcase/il_fullxfull.2604944442_njq5.webp";

const Home = () => {
  return (
    <>
      <div className="h-auto w-screen flex flex-col items-center dark:bg-slate-900">
        <div className="h-screen w-screen flex items-center justify-center">
          <div className="h-full w-full xl:md:w-[60%] flex flex-col xl:p-12 justify-center items-center">
            <h2 className="texts xl:md:p-[70px] p-[30px] font-bold xl:md:leading-[1.1] xl:md:pt-0 text-muted-foreground capitalize xl:md:text-5xl text-4xl text-center mt-14">
              Explore, <span>create</span> , grow Unique AI cards for young
              <span> imaginations.</span>
            </h2>
            <p className="texts text-center xl:font-semibold capitalize text-lg text-muted-foreground xl:p-16 xl:pt-0 p-10 pt-0">
              KidDug Unleash creativity in education! Empower parents to craft
              personalized study cards for kids. Translate content, edit images,
              and ignite learning with AI-driven tools. Elevate education in a
              uniquely interactive online space.{" "}
            </p>
            <Button
              type="button"
              variant="secondary"
              className="dark:bg-[#5858e6] bg-[#0e7aff] h-[60px] text-white capitalize text-lg w-[250px] cursor-pointer hover:bg-[#4a9bff] dark:hover:bg-[#4747b8] "
            >
              start Creating for free
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
        <div className=" h-auto w-screen m-6 xl:md:block flex items-center justify-center ">
          <div className="h-full xl:md:w-full w-[80%] flex items-center justify-center mb-12">
            <div className=" xl:h-full h-auto w-[90%] grid gap-2 grid-cols-7 justify-center">
              <div className="row h-full flex flex-col gap-2 xl:gap-4 mt-[72px]">
                <div className=" flex flex-col items-center gap-4">
                  <Image
                    src={img12}
                    alt="showCase"
                    height={1024}
                    width={1024}
                    className="h-[50px] sm:h-[70px] md:h-auto select-none pointer-events-none hover:blur-[1px] w-full object-cover bg-no-repeat"
                  />
                  <Button
                    type="button"
                    className="hidden xl:block select-none pointer-events-none w-[90%] h-auto border-violet-700 border uppercase font-bold dark:text-muted-foreground opacity-70"
                    variant="ghost"
                  >
                    M : food
                  </Button>
                </div>
                <div className=" flex flex-col items-center gap-4">
                  <Image
                    src={img13}
                    alt="showCase"
                    height={1024}
                    width={1024}
                    className="h-[50px] sm:h-[70px] md:h-auto select-none pointer-events-none hover:blur-[1px] w-full object-cover bg-no-repeat"
                  />
                  <Button
                    type="button"
                    className="hidden xl:block select-none pointer-events-none w-[90%] h-auto border-violet-700 border uppercase font-bold dark:text-muted-foreground opacity-70"
                    variant="ghost"
                  >
                    A : animal
                  </Button>
                </div>
                <div className=" flex flex-col items-center gap-4">
                  <Image
                    src={img7}
                    alt="showCase"
                    height={1024}
                    width={1024}
                    className="h-[50px] sm:h-[70px] md:h-auto select-none pointer-events-none hover:blur-[1px] w-full object-cover bg-no-repeat"
                  />
                  <Button
                    type="button"
                    className="hidden xl:block select-none pointer-events-none w-[90%] h-auto border-violet-700 border uppercase font-bold dark:text-muted-foreground opacity-70"
                    variant="ghost"
                  >
                    B : animal
                  </Button>
                </div>
              </div>
              <div className="row h-full flex flex-col gap-2 xl:gap-4 mt-[48px]">
                <div className=" flex flex-col items-center gap-4">
                  <Image
                    src={img3}
                    alt="showCase"
                    height={1024}
                    width={1024}
                    className="h-[50px] sm:h-[70px] md:h-auto select-none pointer-events-none hover:blur-[1px] w-full object-cover bg-no-repeat"
                  />
                  <Button
                    type="button"
                    className="hidden xl:block select-none pointer-events-none w-[90%] h-auto border-violet-700 border uppercase font-bold dark:text-muted-foreground opacity-70"
                    variant="ghost"
                  >
                    F : Animal
                  </Button>
                </div>
                <div className=" flex flex-col items-center gap-4">
                  <Image
                    src={img1}
                    alt="showCase"
                    height={1024}
                    width={1024}
                    className="h-[50px] sm:h-[70px] md:h-auto  select-none pointer-events-none hover:blur-[1px] w-full object-cover bg-no-repeat"
                  />
                  <Button
                    type="button"
                    className="hidden xl:block select-none pointer-events-none w-[90%] h-auto border-violet-700 border uppercase font-bold dark:text-muted-foreground opacity-70"
                    variant="ghost"
                  >
                    A : Animal
                  </Button>
                </div>
                <div className=" flex flex-col items-center gap-4">
                  <Image
                    src={img13}
                    alt="showCase"
                    height={1024}
                    width={1024}
                    className="h-[50px] sm:h-[70px] md:h-auto select-none pointer-events-none hover:blur-[1px] w-full object-cover bg-no-repeat"
                  />
                  <Button
                    type="button"
                    className="hidden xl:block select-none pointer-events-none w-[90%] h-auto border-violet-700 border uppercase font-bold dark:text-muted-foreground opacity-70"
                    variant="ghost"
                  >
                    A : animal
                  </Button>
                </div>
              </div>
              <div className="row h-full flex flex-col gap-2 xl:gap-4 mt-[20px]">
                <div className=" flex flex-col items-center gap-4">
                  <Image
                    src={img4}
                    alt="showCase"
                    height={1024}
                    width={1024}
                    className="h-[50px] sm:h-[70px] md:h-auto select-none pointer-events-none hover:blur-[1px] w-full object-cover bg-no-repeat"
                  />
                  <Button
                    type="button"
                    className="hidden xl:block select-none pointer-events-none w-[90%] h-auto border-violet-700 border uppercase font-bold dark:text-muted-foreground opacity-70"
                    variant="ghost"
                  >
                    H : Food
                  </Button>
                </div>
                <div className=" flex flex-col items-center gap-4">
                  <Image
                    src={img3}
                    alt="showCase"
                    height={1024}
                    width={1024}
                    className="h-[50px] sm:h-[70px] md:h-auto select-none pointer-events-none hover:blur-[1px] w-full object-cover bg-no-repeat"
                  />
                  <Button
                    type="button"
                    className="hidden xl:block select-none pointer-events-none w-[90%] h-auto border-violet-700 border uppercase font-bold dark:text-muted-foreground opacity-70"
                    variant="ghost"
                  >
                    F : Animal
                  </Button>
                </div>
                <div className=" flex flex-col items-center gap-4">
                  <Image
                    src={img9}
                    alt="showCase"
                    height={1024}
                    width={1024}
                    className="h-[50px] sm:h-[70px] md:h-auto select-none pointer-events-none hover:blur-[1px] w-full object-cover bg-no-repeat"
                  />
                  <Button
                    type="button"
                    className="hidden xl:block select-none pointer-events-none w-[90%] h-auto border-violet-700 border uppercase font-bold dark:text-muted-foreground opacity-70"
                    variant="ghost"
                  >
                    D : Animal
                  </Button>
                </div>
              </div>
              <div className="row h-full flex flex-col gap-2 xl:gap-4">
                <div className=" flex flex-col items-center gap-4">
                  <Image
                    src={img7}
                    alt="showCase"
                    height={1024}
                    width={1024}
                    className="h-[50px] sm:h-[70px] md:h-auto select-none pointer-events-none hover:blur-[1px] w-full object-cover bg-no-repeat"
                  />
                  <Button
                    type="button"
                    className=" hidden xl:block select-none pointer-events-none w-[90%] h-auto border-violet-700 border uppercase font-bold dark:text-muted-foreground opacity-70"
                    variant="ghost"
                  >
                    B : Animal
                  </Button>
                </div>
                <div className=" flex flex-col items-center gap-4">
                  <Image
                    src={img16}
                    alt="showCase"
                    height={1024}
                    width={1024}
                    className="h-[50px] sm:h-[70px] md:h-auto select-none pointer-events-none hover:blur-[1px] w-full object-cover bg-no-repeat"
                  />
                  <Button
                    type="button"
                    className=" hidden xl:block select-none pointer-events-none w-[90%] h-auto border-violet-700 border uppercase font-bold dark:text-muted-foreground opacity-70"
                    variant="ghost"
                  >
                    K : Food
                  </Button>
                </div>
                <div className=" flex flex-col items-center gap-4">
                  <Image
                    src={img5}
                    alt="showCase"
                    height={1024}
                    width={1024}
                    className="h-[50px] sm:h-[70px] md:h-auto select-none pointer-events-none hover:blur-[1px] w-full object-cover bg-no-repeat"
                  />
                  <Button
                    type="button"
                    className=" hidden xl:block select-none pointer-events-none w-[90%] h-auto border-violet-700 border uppercase font-bold dark:text-muted-foreground opacity-70"
                    variant="ghost"
                  >
                    A : animal
                  </Button>
                </div>
              </div>
              <div className="row h-full flex flex-col gap-2 xl:gap-4 mt-[20px]">
                <div className=" flex flex-col items-center gap-4">
                  <Image
                    src={img10}
                    alt="showCase"
                    height={1024}
                    width={1024}
                    className="h-[50px] sm:h-[70px] md:h-auto select-none pointer-events-none hover:blur-[1px] w-full object-cover bg-no-repeat"
                  />
                  <Button
                    type="button"
                    className="hidden xl:block select-none pointer-events-none w-[90%] h-auto border-violet-700 border uppercase font-bold dark:text-muted-foreground opacity-70"
                    variant="ghost"
                  >
                    C : Food
                  </Button>
                </div>
                <div className=" flex flex-col items-center gap-4">
                  <Image
                    src={img11}
                    alt="showCase"
                    height={1024}
                    width={1024}
                    className="h-[50px] sm:h-[70px] md:h-auto select-none pointer-events-none hover:blur-[1px] w-full object-cover bg-no-repeat"
                  />
                  <Button
                    type="button"
                    className="hidden xl:block select-none pointer-events-none w-[90%] h-auto border-violet-700 border uppercase font-bold dark:text-muted-foreground opacity-70"
                    variant="ghost"
                  >
                    G : Animal
                  </Button>
                </div>
                <div className=" flex flex-col items-center gap-4">
                  <Image
                    src={img7}
                    alt="showCase"
                    height={80}
                    width={1024}
                    className="h-[50px] sm:h-[70px] md:h-auto w-full object-cover bg-no-repeat"
                  />
                  <Button
                    type="button"
                    className="hidden xl:block select-none pointer-events-none w-[90%] h-auto border-violet-700 border uppercase font-bold dark:text-muted-foreground opacity-70"
                    variant="ghost"
                  >
                    B : animal
                  </Button>
                </div>
              </div>
              <div className="row h-full flex flex-col gap-2 xl:gap-4 mt-[48px]">
                <div className=" flex flex-col items-center gap-4">
                  <Image
                    src={img7}
                    alt="showCase"
                    height={1024}
                    width={1024}
                    className="h-[50px] sm:h-[70px] md:h-auto select-none pointer-events-none hover:blur-[1px] w-full object-cover bg-no-repeat"
                  />
                  <Button
                    type="button"
                    className="hidden xl:block select-none pointer-events-none w-[90%] h-auto border-violet-700 border uppercase font-bold dark:text-muted-foreground opacity-70"
                    variant="ghost"
                  >
                    B : Animal
                  </Button>
                </div>
                <div className=" flex flex-col items-center gap-4">
                  <Image
                    src={img5}
                    alt="showCase"
                    height={1024}
                    width={1024}
                    className="h-[50px] sm:h-[70px] md:h-auto select-none pointer-events-none hover:blur-[1px] w-full object-cover bg-no-repeat"
                  />
                  <Button
                    type="button"
                    className="hidden xl:block select-none pointer-events-none w-[90%] h-auto border-violet-700 border uppercase font-bold dark:text-muted-foreground opacity-70"
                    variant="ghost"
                  >
                    A : animal
                  </Button>
                </div>
                <div className=" flex flex-col items-center gap-4">
                  <Image
                    src={img8}
                    alt="showCase"
                    height={1024}
                    width={1024}
                    className="h-[50px] sm:h-[70px] md:h-auto select-none pointer-events-none hover:blur-[1px] w-full object-cover bg-no-repeat"
                  />
                  <Button
                    type="button"
                    className="hidden xl:block select-none pointer-events-none w-[90%] h-auto border-violet-700 border uppercase font-bold dark:text-muted-foreground opacity-70"
                    variant="ghost"
                  >
                    K : Food
                  </Button>
                </div>
              </div>
              <div className="row h-full flex flex-col gap-2 xl:gap-4 mt-[72px]">
                <div className=" flex flex-col items-center gap-4">
                  <Image
                    src={img14}
                    alt="showCase"
                    height={1024}
                    width={1024}
                    className="h-[50px] sm:h-[70px] md:h-auto select-none pointer-events-none hover:blur-[1px] w-full object-cover bg-no-repeat"
                  />
                  <Button
                    type="button"
                    className="hidden xl:block select-none pointer-events-none w-[90%] h-auto border-violet-700 border uppercase font-bold dark:text-muted-foreground opacity-70"
                    variant="ghost"
                  >
                    G : animal
                  </Button>
                </div>
                <div className=" flex flex-col items-center gap-4">
                  <Image
                    src={img6}
                    alt="showCase"
                    height={1024}
                    width={1024}
                    className="h-[50px] sm:h-[70px] md:h-auto select-none pointer-events-none hover:blur-[1px] w-full object-cover bg-no-repeat"
                  />
                  <Button
                    type="button"
                    className="hidden xl:block select-none pointer-events-none w-[90%] h-auto border-violet-700 border uppercase font-bold dark:text-muted-foreground opacity-70"
                    variant="ghost"
                  >
                    j : food
                  </Button>
                </div>
                <div className=" flex flex-col items-center gap-4">
                  <Image
                    src={img18}
                    alt="showCase"
                    height={1024}
                    width={1024}
                    className="h-[50px] sm:h-[70px] md:h-auto select-none pointer-events-none hover:blur-[1px] w-full object-cover bg-no-repeat"
                  />
                  <Button
                    type="button"
                    className="hidden xl:block select-none pointer-events-none w-[90%] h-auto border-violet-700 border uppercase font-bold dark:text-muted-foreground opacity-70"
                    variant="ghost"
                  >
                    c : animal
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto w-screen flex flex-col items-start">
          <div className="title flex-col w-full h-auto xl:md:pt-28 flex justify-center items-center">
            {" "}
            <h2 className="text-3xl capitalize p-4 font-bold flex gap-2 tracking-wide underline underline-offset-8 decoration-pink-500">
              <span className="hidden xl:block">Responsible </span>Generetive AI
            </h2>{" "}
            <p className="capitalize font-bold text-muted-foreground khash w-[70%] text-center">
              Use AI in a creative way For why it build for .
            </p>
          </div>
          <div className="xl:md:h-[70vh] h-auto w-screen flex items-center mt-[10%] relative bottom-[20%] justify-center">
            <h2 className="capitalize xl:md:block hidden absolute bg-white self-start left-0 m-[4.3rem] mt-[5rem] overflow-hidden rounded-xl dark:bg-slate-900 p-6 text-sm font-bold text-start h-[100px] w-[600px]">
              By searching thousands of generative AI we found best suitable
              solutions for your kids . Let&apos;s tech then in a creative way
              so they never have to remember it again.
            </h2>
            <Image
              src={AiWork}
              height={1024}
              width={1024}
              className=" overflow-hidden select-none pointer-events-none xl:md:h-[100%] h-2/4 mx:md:mt-12 w-[90%] rounded-3xl object-cover bg-no-repeat"
              alt="AIWork"
            />
            <button
              type="button"
              className="dark:bg-slate-900 xl:md:flex hidden text-black hover:text-[#dadada] dark:text-white bg-white gap-2 dark:hover:text-[#636363] w-[400px] h-[100px] text-xl absolute place-self-end right-0 m-[4rem] mb-[-30px] rounded-2xl overflow-hidden items-center justify-center"
            >
              Get Started <ArrowRight />
            </button>
          </div>
        </div>
        <div className="supPower h-auto mt-[20vh] w-screen flex flex-col">
          <div className="head h-[10%] w-full flex flex-col gap-2 items-center justify-center">
            <h2 className="text-muted-foreground xl:md:text-2xl text-[1rem] text-center pb-0 uppercase font-semibold ">
              Upcoming or Ongoing features
            </h2>
            <p className="text-3xl sm:text-[1.5rem] text-center normal-case khash font-semibold pb-[5rem]">
              {" "}
              Open the world of possiblities for you&apos;r young Minds.{" "}
            </p>
          </div>
          <div className="body m-auto h-[90%] w-[80%] grid gap-4 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-3">
            <div className="sm:h-[90%] h-full w-full bg-red-500 rounded-3xl bg-gradient-to-r from-slate-600 via-red-400 to-blue-900 p-[1px]">
              <div className="h-full overflow-hidden gap-5 pt-5 w-full bg-white dark:bg-slate-900 rounded-3xl flex flex-col">
                <Image
                  alt="Aipowers"
                  src={show9}
                  height={1024}
                  width={1024}
                  className="h-[50%] w-full object-cover select-none pointer-events-none "
                />
                <h2 className="text-2xl p-5 pb-0 font-bold  tracking-wide">
                  Alphabet Safar
                </h2>
                <p className="p-5 pt-0 text-muted-foreground font-semibold">
                  Discover the Alphabet safar – a whimsical collection of
                  vibrant animal images from A to Z, making learning letters fun
                  and engaging.
                </p>
              </div>
            </div>
            <div className="sm:h-[90%] h-full w-full bg-red-500 rounded-3xl bg-gradient-to-r from-slate-600 via-red-400 to-blue-900 p-[1px]">
              <div className="h-full overflow-hidden gap-5 pt-5 w-full bg-white dark:bg-slate-900 rounded-3xl flex flex-col">
                <Image
                  alt="Aipowers"
                  src={show8}
                  height={1024}
                  width={1024}
                  className="h-[50%] p-5 w-full object-cover select-none pointer-events-none "
                />
                <h2 className="text-2xl p-5 pb-0 font-bold  tracking-wide">
                  Quiz Whiz
                </h2>
                <p className="p-5 pt-0 text-muted-foreground font-semibold">
                  Dive into Quiz Whiz, our Smart Quiz Generator! Explore dynamic
                  quizzes tailored for learning, making education interactive
                  and enjoyable for everyone
                </p>
              </div>
            </div>
            <div className="sm:h-[90%] h-full w-full bg-red-500 rounded-3xl bg-gradient-to-r from-slate-600 via-red-400 to-blue-900 p-[1px]">
              <div className="h-full overflow-hidden gap-5 pt-5 w-full bg-white dark:bg-slate-900 rounded-3xl flex flex-col">
                <Image
                  alt="Aipowers"
                  src={show7}
                  height={1024}
                  width={1024}
                  className="h-[50%] p-5 w-full object-cover select-none pointer-events-none "
                />
                <h2 className="text-2xl p-5 pb-0 font-bold  tracking-wide">
                  Global Express
                </h2>
                <p className="p-5 pt-0 text-muted-foreground font-semibold">
                  Unlock language diversity with Global Express – our Language
                  Translation feature. Seamlessly translate educational content,
                  connecting learners around the world effortlessly.
                </p>
              </div>
            </div>
            <div className="sm:h-[90%] h-full w-full bg-red-500 rounded-3xl bg-gradient-to-r from-slate-600 via-red-400 to-blue-900 p-[1px]">
              <div className="h-full overflow-hidden gap-5 pt-5 w-full bg-white dark:bg-slate-900 rounded-3xl flex flex-col">
                <Image
                  alt="Aipowers"
                  src={show6}
                  height={1024}
                  width={1024}
                  className="h-[50%] p-5 w-full object-cover select-none pointer-events-none "
                />
                <h2 className="text-2xl p-5 pb-0 font-bold  tracking-wide">
                  Flashcard Forge{" "}
                </h2>
                <p className="p-5 pt-0 text-muted-foreground font-semibold">
                  Craft personalized learning experiences with Flashcard Forge.
                  Tailor-made flashcards bring subjects to life, making study
                  sessions engaging and effective.
                </p>
              </div>
            </div>
            <div className="sm:h-[90%] h-full w-full bg-red-500 rounded-3xl bg-gradient-to-r from-slate-600 via-red-400 to-blue-900 p-[1px]">
              <div className="h-full overflow-hidden gap-5 pt-5 w-full bg-white dark:bg-slate-900 rounded-3xl flex flex-col">
                <Image
                  alt="Aipowers"
                  src={show5}
                  height={1024}
                  width={1024}
                  className="h-[50%] w-full object-cover select-none pointer-events-none "
                />
                <h2 className="text-2xl p-5 pb-0 font-bold  tracking-wide">
                  StoryCraft Studio
                </h2>
                <p className="p-5 pt-0 text-muted-foreground font-semibold">
                  Immerse in creativity with StoryCraft Studio. Unleash endless
                  stories with our innovative Story Generator, inspiring
                  imagination and storytelling adventures.
                </p>
              </div>
            </div>
            <div className="sm:h-[90%] h-full w-full bg-red-500 rounded-3xl bg-gradient-to-r from-slate-600 via-red-400 to-blue-900 p-[1px]">
              <div className="h-full overflow-hidden gap-5 pt-5 w-full bg-white dark:bg-slate-900 rounded-3xl flex flex-col">
                <Image
                  alt="Aipowers"
                  src={show4}
                  height={1024}
                  width={1024}
                  className="h-[50%] p-5 w-full object-cover select-none pointer-events-none "
                />
                <h2 className="text-2xl p-5 pb-0 font-bold  tracking-wide">
                  Math Mastery Hub
                </h2>
                <p className="p-5 pt-0 text-muted-foreground font-semibold">
                  Empower learning with Math Mastery Hub. Effortlessly solve
                  complex problems, guiding users step-by-step to mathematical
                  proficiency with our innovative solver.
                </p>
              </div>
            </div>
            <div className="sm:h-[90%] h-full w-full bg-red-500 rounded-3xl bg-gradient-to-r from-slate-600 via-red-400 to-blue-900 p-[1px]">
              <div className="h-full overflow-hidden gap-5 pt-5 w-full bg-white dark:bg-slate-900 rounded-3xl flex flex-col">
                <Image
                  alt="Aipowers"
                  src={show3}
                  height={1024}
                  width={1024}
                  className="h-[50%] w-full object-cover select-none pointer-events-none "
                />
                <h2 className="text-2xl p-5 pb-0 font-bold  tracking-wide">
                  Puzzle Playland
                </h2>
                <p className="p-5 pt-0 text-muted-foreground font-semibold">
                  Explore Puzzle Playland, where learning meets play. Engage
                  with interactive educational puzzles, making subjects fun and
                  memorable for young minds
                </p>
              </div>
            </div>
            <div className="sm:h-[90%] h-full w-full bg-red-500 rounded-3xl bg-gradient-to-r from-slate-600 via-red-400 to-blue-900 p-[1px]">
              <div className="h-full overflow-hidden gap-5 pt-5 w-full bg-white dark:bg-slate-900 rounded-3xl flex flex-col">
                <Image
                  alt="Aipowers"
                  src={show2}
                  height={1024}
                  width={1024}
                  className="h-[50%] p-5 w-full object-cover select-none pointer-events-none "
                />
                <h2 className="text-2xl p-5 pb-0 font-bold  tracking-wide">
                  TimeCraft Studio
                </h2>
                <p className="p-5 pt-0 text-muted-foreground font-semibold">
                  Journey through history with TimeCraft Studio. Easily create
                  and explore timelines, making historical events come to life
                  in an interactive and educational way.
                </p>
              </div>
            </div>
            <div className="sm:h-[90%] h-full w-full bg-red-500 rounded-3xl bg-gradient-to-r from-slate-600 via-red-400 to-blue-900 p-[1px]">
              <div className="h-full overflow-hidden gap-5 pt-5 w-full bg-white dark:bg-slate-900 rounded-3xl flex flex-col">
                <Image
                  alt="Aipowers"
                  src={show1}
                  height={1024}
                  width={1024}
                  className="h-[50%] w-full object-cover select-none pointer-events-none "
                />
                <h2 className="text-2xl p-5 pb-0 font-bold  tracking-wide">
                  CardCraft Pro
                </h2>
                <p className="p-5 pt-0 text-muted-foreground font-semibold">
                  Elevate your professional presence with CardCraft Pro. Design
                  sleek and personalized business cards effortlessly, leaving a
                  lasting impression in the business world.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto w-screen">
          <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                <h2 className="mb-4 text-4xl tracking-tight khash font-extrabold text-gray-900 dark:text-white">
                  Pick Your Plan, Ignite Learning!
                </h2>
                <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                  Discover the ideal subscription for your educational journey
                  with our straightforward pricing options.
                </p>
              </div>
              <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  <h3 className="mb-4 text-2xl font-semibold">Free</h3>
                  <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    Best option for personal testing & for your next creativity.
                  </p>
                  <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">$0</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      /month
                    </span>
                  </div>
                  <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>Access to Alphabet Zoo and basic content</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>Limited use of Smart Card Generator</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>Basic access to select features</span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-6 uppercase text-center dark:text-white  dark:focus:ring-primary-900"
                  >
                    Get started
                  </a>
                </div>
                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  <h3 className="mb-4 text-2xl font-semibold">Basic Plan</h3>
                  <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    Relevant for multiple users, extended & premium support.
                  </p>
                  <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">$4.99</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      /month
                    </span>
                  </div>
                  <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>Individual configuration</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Full access to Alphabet Zoo and advanced animal content.
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>2000/day use of Smart Quiz Generator.</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Language Translation for up to three languages.
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>Basic access to Customizable Flashcards.</span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="text-white uppercase bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                  >
                    Get started
                  </a>
                </div>
                <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                  <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
                  <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    Best for large scale & everything else
                  </p>
                  <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold">$9.99</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      /month
                    </span>
                  </div>
                  <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>All features of the Premium Plan.</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Educational Puzzles for a wide range of subjects.
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        TimeCraft Studio for creating and exploring timelines.
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        CardCraft Pro for designing professional business cards.
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>Priority customer support.</span>
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="text-white uppercase bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
