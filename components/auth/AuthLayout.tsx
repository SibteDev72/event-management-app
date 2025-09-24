import React from "react";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      <div className="bg-primary md:w-[40vw] lg:w-[30vw] h-full md:h-[100vh] p-10 md:px-8 flex flex-col justify-center">
        <h1 className="w-full text-white text-2xl md:text-3xl">
          Discover tailored events. Sign up for personalized recommendations
          today!
        </h1>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
