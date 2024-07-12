"use client";
import React from "react";
import Button from "./Button";

const NeoBrutalistNavbar = () => {
  return (
    <nav className="flex bg-orange-300 p-4 justify-center gap-3 items-center ">
      <Button className="text-black" buttonText="Home" rounded="md" />
      <Button className="text-black" buttonText="Test" rounded="md" />
    </nav>
  );
};

export default NeoBrutalistNavbar;
