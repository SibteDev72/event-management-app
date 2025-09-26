import React, { useState } from "react";
import { navbarOpt } from "../../constant/data";
import { useRouter } from "next/router";
import { User } from "@/types/User";
import Image from "next/image";

interface MobileNavProps {
  LogInStatus: boolean;
  userInfo: User | null;
}

const MobileNav = ({ LogInStatus, userInfo }: MobileNavProps) => {
  const router = useRouter();
  const [status, setStatus] = useState<boolean>(false);
  const handleLogout = () => {
    localStorage.setItem("User Info", "");
    localStorage.setItem("User Status", "LoggedOff");
    router.push("/logIn");
  };
  return (
    <>
      <div
        onClick={() => setStatus(true)}
        className="flex flex-col gap-1 lg:hidden"
      >
        <div className=" w-7 h-[2px] bg-white" />
        <div className=" w-7 h-[2px] bg-white" />
        <div className=" w-7 h-[2px] bg-white" />
      </div>
      <div
        className={`
        fixed top-0 right-0 z-[1000]
        h-[100vh] w-[60vw] sm:w-[50vw] md:w-[35vw]
        bg-heading flex flex-col justify-between px-6 py-12
        transform transition-transform duration-300 ease-in-out
        ${status ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <p
          onClick={() => setStatus(false)}
          className="text-yellow-400 absolute top-6 right-6 text-lg font-medium cursor-pointer"
        >
          Close
        </p>

        {/* Menu Options */}
        <div className="flex flex-col gap-4">
          {navbarOpt.map((val) => (
            <p
              key={val.id}
              onClick={() => {
                router.push(val.url);
                setStatus(false);
              }}
              className={`${
                val.hash === router.pathname
                  ? "border-b-4 border-yellow-400"
                  : "border-none"
              } max-w-max text-white text-lg capitalize cursor-pointer`}
            >
              {val.name}
            </p>
          ))}
        </div>

        {/* User Section */}
        <div className="flex flex-col gap-3">
          {!LogInStatus && (
            <div className="flex flex-row gap-2">
              <button
                onClick={() => router.push("/logIn")}
                className="bg-transparent text-xs font-medium border-2 border-yellow-400 px-4 py-1 text-white rounded-md"
              >
                LogIn
              </button>
              <button
                onClick={() => router.push("/signUp")}
                className="bg-yellow-400 text-xs font-medium px-4 py-1 text-heading rounded-md"
              >
                SignUp
              </button>
            </div>
          )}

          {LogInStatus && (
            <div className="flex flex-col gap-3">
              <p className="text-lg text-white font-medium">
                {userInfo?.fullName}
              </p>
              <p
                onClick={() => router.push("/event/myEvents")}
                className="text-lg text-white font-medium cursor-pointer"
              >
                My Events
              </p>
              <button
                onClick={() => {
                  router.push("/event/create");
                  setStatus(false);
                }}
                className="text-md font-medium bg-yellow-400 px-3 py-1 gap-2 flex flex-row items-center justify-center rounded-md text-heading cursor-pointer"
              >
                Create
                <Image
                  width={24}
                  height={24}
                  className="w-5 h-5"
                  src="/assets/create.png"
                  alt="icon"
                />
              </button>
              <button
                onClick={handleLogout}
                className="bg-yellow-400 text-md font-medium px-3 py-1 text-heading rounded-md"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileNav;
