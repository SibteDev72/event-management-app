import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const ProgressBar = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-12 m-6 md:m-12">
      <div className="flex flex-row gap-8">
        <Image
          width={24}
          height={24}
          alt=""
          onClick={() => router.back()}
          src="/assets/back.png"
          className="w-8 h-auto cursor-pointer"
        />
        <h1 className="text-2xl lg:text-3xl font-bold">
          {router.pathname === "/event/create"
            ? "Create a New Event"
            : router.pathname === "/event/preview"
            ? "Preview Event"
            : ""}
        </h1>
      </div>
      <div className="w-full flex flex-row gap-4">
        <div className="w-screen flex flex-col items-center justify-center">
          <p className="text-lg text-primary font-bold">Create</p>
          <div className="w-full bg-primary rounded-full h-[1vh]" />
        </div>
        <div className="w-screen flex flex-col items-center justify-center">
          <p
            className={`text-lg font-bold ${
              router.pathname === "/event/preview"
                ? "text-primary"
                : "text-subheading"
            }`}
          >
            Preview
          </p>
          <div
            className={`w-full  rounded-full h-[1vh] ${
              router.pathname === "/event/preview"
                ? "bg-primary"
                : "bg-subheading"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
