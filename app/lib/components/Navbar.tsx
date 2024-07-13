"use client";
import React from "react";
import Button from "./Button";
import classNames from "classnames";

const NeoBrutalistNavbar = () => {
  return (
    <nav className="flex fixed top-0 w-full bg-orange-300 p-3 pl-4 justify-between items-center border-b-2 border-black">
      <div className="flex gap-3 justify-center items-center">
        <div className="text-3xl pr-6 font-extrabold">Fhellow</div>
        <Button className="text-black" buttonText="Dashboard" rounded="md" />
        <Button className="text-black" buttonText="My Page" rounded="md" />
        <Button className="text-black" buttonText="Create" plusIcon={true} rounded="md" />
      </div>
      <div
        className={classNames(
          "flex border-black justify-center items-center border-2 rounded-full bg-gray-700 hover:bg-gray-800 active:bg-gray-900 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)]"
        )}
      >
        <w3m-button />
      </div>
    </nav>
  );
};

export default NeoBrutalistNavbar;
