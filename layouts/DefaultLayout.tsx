import React from "react";
import { ReactNode } from "react";
import Navbar from "../components/bar/Navbar";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      {children}
    </div>
  );
};

export default DefaultLayout;
