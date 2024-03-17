"use client";
import { NovitaSDK } from "novita-sdk";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { ModeToggle } from "./Theme";
import logoImage from "../../../public/logo.png";
import Image from "next/image";
import {
  ArrowLeft,
  Edit,
  MenuIcon,
  Minus,
  MountainSnow,
  Move,
  MoveDiagonal,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SignIn,
  SignInButton,
  SignUpButton,
  UserButton,
  UserProfile,
  WithUser,
  useUser
} from "@clerk/nextjs";

const Design = () => {
  const [dataObjects, setDataObjects] = useState([
    {
      text: "This is a Defaulf Image Prompt",
      imageUrl:
        "/cretate-a-card-of-a-panda-for-kids-to-learn-178888316.png"
    }
  ]);
  const [selectedOption, setSelectedOption] = useState(
    "Cyberpunk"
  );
  const [activeDrop, setActiveDrop] = useState(true);
  const [activeSidebar, setActiveSidebar] = useState(true);
  const [left, setLeft] = useState(25);
  const [top, setTop] = useState(25);
  const [loading, setLoading] = useState(false);

  const { isSignedIn, isLoaded } = useUser();

  const handleClicked = () => {
    activeDrop ? setActiveDrop(false) : setActiveDrop(true);
  };
  const handleClickedForMenu = () => {
    activeSidebar ? setActiveSidebar(false) : setActiveSidebar(true);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    let userData = event.target[0].value;

    const selectedModel = event.target[1].value;
    setSelectedOption(selectedModel);

    const ApiReqImage = async (Userdata: any) => {
      return new Promise((resolve, reject) => {
        const novitaClient = new NovitaSDK("28f3c035-1ee4-4ed4-9265-502bfb443055");
        const params = {
          model_name:
            "protovisionXLHighFidelity3D_release0630Bakedvae_154359.safetensors", // Use the selected option value here
          prompt: `a ${Userdata} card for kids with ${selectedOption != null ? selectedOption : "CyberPunk"} effect`,
          negative_prompt: "",
          width: 256,
          height: 312,
          sampler_name: "DPM++ 2M Karras",
          cfg_scale: 5,
          steps: 20,
          batch_size: 1,
          n_iter: 1,
          seed: 3949238699
        };

        novitaClient
          .txt2Img(params)
          .then((res) => {
            if (res && res.task_id) {
              const timer = setInterval(() => {
                novitaClient
                  .progress({
                    task_id: res.task_id
                  })
                  .then((progressRes) => {
                    if (progressRes.status === 2) {
                      clearInterval(timer);
                      resolve({ success: true, progressRes }); // Resolve the promise with an object
                      setLoading(false);
                    }
                    if (progressRes.status === 3 || progressRes.status === 4) {
                      console.warn("failed!", progressRes.failed_reason);
                      clearInterval(timer);
                      resolve({ success: false, error: progressRes }); // Resolve with an object indicating failure
                    }
                    if (progressRes.status === 1) {
                      setLoading(true);
                    }
                  })
                  .catch((err) => {
                    console.error("progress error:", err);
                    reject(err); // Reject the promise with the error
                    clearInterval(timer);
                  });
              }, 1000);
            }
          })
          .catch((err) => {
            console.error("txt2Img error:", err);
            reject(err); // Reject the promise with the error
          });
      });
    };

    try {
      const result = (await ApiReqImage(userData)) as {
        success: boolean;
        progressRes?: any;
        error?: any;
      };

      if (result.success) {
        const progressRes = result.progressRes;
        if (progressRes) {
          const newImages = progressRes.imgs || [];
          const newTexts = progressRes.info.split(",")[0]; // Get text before the first ','
          localStorage.setItem("dataObjects", JSON.stringify(dataObjects));

          setDataObjects((prevDataObjects) => [
            ...prevDataObjects,
            { text: newTexts, imageUrl: newImages[0] }
          ]);
          return progressRes;
        } else {
          console.error("Invalid result structure - progressRes is missing.");
          throw new Error("Invalid result structure.");
        }
      } else {
        const error = result.error;
        // Handle the error
        throw error;
      }
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  };

  function onDrag({ clientX, clientY }: any) {
    let clientXV = clientX - 530;
    let clientYV = clientY - 124;
    setLeft(clientXV);
    setTop(clientYV);
    if (clientX <= 530) {
      setLeft(0);
    }
    if (clientY <= 120) {
      setTop(0);
    }

    if (clientY >= 410) {
      setTop(290);
    }
  }

  useEffect(() => {
    const picMove = document.getElementById("picMove");
    picMove?.addEventListener("mousedown", () => {
      addEventListener("mousemove", onDrag);
    });
    picMove?.addEventListener("mouseup", () => {
      removeEventListener("mousemove", onDrag);
    });
    picMove?.addEventListener("mouseleave", () => {
      removeEventListener("mousemove", onDrag);
    });
  }, []);

  return (
    <div className="h-full w-screen">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-slate-900/60 dark:border-gray-700">
        <div className="px-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <div className="logo ml-12 gap-1 h-full w-[100px] flex items-center justify-center">
                <Image
                  src={logoImage}
                  alt="LogoImg"
                  height={50}
                  width={60}
                  className="h-3/4 select-none pointer-events-none w-full object-cover"
                />
                <h3 className="dark:text-muted-foreground">
                  <a href="/">KidsDug</a>
                </h3>
              </div>
            </div>
            <div className="flex items-center">
              <ModeToggle />
              <MenuIcon
                onClick={handleClickedForMenu}
                className="sm:hidden cursor-pointer"
              />
              <div className="flex flex-col items-center ms-3">
                <UserButton />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className={cn(
          activeSidebar
            ? "fixed bottom-2 left-0 z-40 w-64 h-[89%] pt-10 transition-transform bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
            : "fixed bottom-2 left-0 z-40 w-64 h-[89%] pt-10 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        )}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/"
                className="flex p-3 pl-2 items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group h-auto max-sm:hidden"
              >
                <ArrowLeft />
                <span className="ms-3">Go back</span>
              </a>
            </li>
            <li>
              <label
                htmlFor="countries"
                className=" mb-2 p-3 flex items-center gap-2 text-sm font-bold text-muted-foreground"
              >
                <MountainSnow className="text-[crimson]" />
                Select a Variation
              </label>
              <select
                id="countries"
                // required
                className="bg-gray-50 border appearance-none h-auto  border-gray-300 text-gray-900 text-sm rounded-lg outline-none selection:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black/20 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option
                  value="CyberPunk"
                  defaultValue={"CyberPunk"}
                  defaultChecked
                  className="dark:bg-gray-700 text-[larger]"
                >
                  CyberPunk v1.0.3
                </option>
                <option
                  value="Stable Diffusion"
                  className="dark:bg-gray-700 text-[larger]"
                >
                  Stable Diffusion v1.0
                </option>
                <option
                  value="Realstic version"
                  className="dark:bg-gray-700 text-[larger]"
                >
                  Realstic version v5.1
                </option>
                <option
                  value="DreamShaper"
                  className="dark:bg-gray-700 text-[larger]"
                >
                  DreamShaper
                </option>
                <option
                  value="Absolute Reality"
                  className="dark:bg-gray-700 text-[larger]"
                >
                  Absolute Reality
                </option>
                <option
                  value="normal"
                  className="dark:bg-gray-700 text-[larger]"
                >
                  normal
                </option>
              </select>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
                onClick={handleClicked}
              >
                <Edit className="h-[20px] w-[30px]" />
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                  Edit Prompt
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className={cn(
                  activeDrop ? "py-2 space-y-2" : "hidden py-2 space-y-2"
                )}
              >
                <li className="pt-2">
                  <form
                    action="/"
                    id="NameForm"
                    className="group"
                    onSubmit={handleSubmit}
                  >
                    <div className="relative w-full min-w-[200px]">
                      <textarea
                        className="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#5858e6] focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50 border-cyan-900"
                        placeholder=" "
                        id="animalName"
                        maxLength={20}
                        required
                      ></textarea>
                      <label className="before:content-[' '] after:content-[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#ffffff] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-[#5858e6] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-[#5858e6] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Name of charecter
                      </label>
                    </div>
                    <div className="flex items-center justify-between p-3">
                      <Button
                        type="submit"
                        variant="default"
                        className="bg-[#5858e6] text-white w-full font-bold text-md hover:bg-[#353572]"
                        disabled={loading}
                      >
                        {
                          loading ? "loading" : "Generate"
                        }
                      </Button>
                    </div>
                  </form>
                </li>
                <li className="flex flex-col ">
                  <label
                    htmlFor="exampleName"
                    className="p-3 text-muted-foreground font-bold"
                  >
                    Examples
                  </label>
                  <input
                    type="text"
                    disabled
                    value={"Dog, Cat, Apple, Orange, Etc..."}
                    id="exampleName"
                    className="p-3 text-sm text-muted-foreground bg-transparent border rounded-lg border-cyan-900"
                  />
                  <label
                    htmlFor="exampleName"
                    className="p-1 pt-2 text-gray-500 font-bold text-sm"
                  >
                    You can give some name as a command see the examples
                  </label>
                </li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  {!isSignedIn ? (
                    <SignInButton>
                      {isLoaded ? "Log In" : "Loading..."}
                    </SignInButton>
                  ) : (
                    <Button variant={"ghost"}>SignOut</Button>
                  )}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64 h-screen">
        <div className="p-4 border-2 border-gray-200 border-dashed flex rounded-lg dark:border-gray-700 mt-14 h-[86vh] bg-black">
          {dataObjects.map(({ text, imageUrl }, index) => (
            <div
              style={{ left: `${left}px`, top: `${top}px` }}
              className="flex relative"
              key={index} // Add a unique key for each element in the array
            >
              <div className="h-[312px] w-[224px]">
                <div className="overflow-hidden cursor-pointer rounded-xl relative group">
                  <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                    <div>
                      <div className="transform-gpu p-4 space-y-3 h-[100px] bg-gray-900/50 border-t-2 rounded-lg w-full text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transition duration-300 ease-in-out">
                        <div className="opacity-60 text-[14px] leading-[20px] capitalize font-semibold">
                          {text}
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    alt="GenImage"
                    className="object-cover w-full group-hover:scale-110 transition duration-300 ease-in-out"
                    src={imageUrl}
                    height={1024}
                    width={1024}
                    draggable="true"
                  />
                </div>
              </div>
              <div
                draggable="false"
                className="btnTray h-32 p-4 mr-2 w-10 mt-2 bg-gray-700/50 rounded-md flex flex-col items-center gap-2"
              >
                <Move
                  id="picMove"
                  className="cursor-move h-20 p-1 w-8 hover:bg-gray-700/80"
                />
                <Plus className="cursor-pointer h-20 p-1 w-8 hover:bg-gray-700/80" />
                <Minus className="cursor-pointer h-20 p-1 w-8 hover:bg-gray-700/80" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design;
