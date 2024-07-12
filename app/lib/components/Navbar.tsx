"use client";
import React from "react";
import Button from "./Button";
import classNames from "classnames";

const NeoBrutalistNavbar = () => {
  return (
    <nav className="flex bg-orange-300 p-4 justify-between items-center ">
      <div className="flex gap-3">
        <Button className="text-black" buttonText="Home" rounded="md" />
        <Button className="text-black" buttonText="Home" rounded="md" />
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
