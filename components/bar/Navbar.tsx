"use client";
import React, { useEffect, useState } from "react";
import { navbarOpt } from "../../constant/data";
import { useRouter } from "next/router";
import MobileNav from "./MobileNav";
import { User } from "@/types/User";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const [logInStatus, setLogInStatus] = useState<boolean>(true);
  const [userInfo, setUserInfo] = useState<User | null>(null);

  useEffect(() => {
    const status = localStorage.getItem("User Status");
    setLogInStatus(status === "LoggedIn");
  }, []);

  useEffect(() => {
    if (logInStatus) {
      const info = localStorage.getItem("User Info");
      setUserInfo(info ? JSON.parse(info) : null);
    }
  }, [logInStatus]);

  const handleLogout = () => {
    localStorage.setItem("User Info", "");
    localStorage.setItem("User Status", "LoggedOff");
    router.push("/logIn");
  };

  return (
    <div className="bg-primary w-full h-[8vh] flex flex-row justify-between items-center px-4 md:px-8">
      <h1
        className="text-white text-lg cursor-pointer"
        onClick={() => router.push("/")}
      >
        Event Management App
      </h1>
      <div className="hidden lg:flex flex-row gap-4">
        {navbarOpt.map((val) => (
          <p
            key={val.id}
            onClick={() => router.push(val.url)}
            className={`${
              val.hash === router.pathname
                ? "border-b-4 border-yellow-400"
                : "border-none"
            } text-white text-lg capitalize cursor-pointer`}
          >
            {val.name}
          </p>
        ))}
      </div>
      {logInStatus && (
        <div className="hidden lg:flex flex-row gap-3 justify-center items-center">
          <p className="text-lg text-white">{userInfo?.fullName}</p>
          <p className="text-lg text-white font-medium">My Events</p>
          <button
            onClick={() => router.push("/event/create")}
            className="text-md font-medium bg-yellow-400 px-3 py-1 gap-2 flex flex-row items-center  rounded-md text-heading cursor-pointer"
          >
            Create
            <Image
              width={24}
              height={24}
              className="w-6 h-6"
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
      {!logInStatus && (
        <div className="hidden md:flex flex-row gap-4">
          <button
            onClick={() => router.push("/logIn")}
            className="bg-transparent text-sm font-medium border-2 border-yellow-400 px-6 py-2 text-white rounded-md"
          >
            LogIn
          </button>
          <button
            onClick={() => router.push("/signUp")}
            className="bg-yellow-400 text-sm font-medium px-6 py-2 text-heading rounded-md"
          >
            SignUp
          </button>
        </div>
      )}
      {/* Mobile Navbar */}
      <MobileNav LogInStatus={logInStatus} userInfo={userInfo} />
    </div>
  );
};

export default Navbar;
