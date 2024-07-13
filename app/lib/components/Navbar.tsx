"use client";
import React, { useState, useEffect } from "react";
import Button from "./Button";
import classNames from "classnames";
import { useAccount } from "wagmi";
import { useRouter } from 'next/navigation';

const NeoBrutalistNavbar = () => {
  const { address } = useAccount();
  const router = useRouter(); // Utilizzato direttamente all'interno del corpo del componente
  const [isMounted, setIsMounted] = useState(false);


  const navigateToMyPage = () => {
    if (address) {
      console.log('Navigating to:', `/${address}`);
      router.push(`/${address}`);
    } else {
      console.error('User address is not available.');
    }
  };

  

  return (
    <nav className="flex fixed top-0 w-full bg-orange-300 p-3 pl-4 justify-between items-center border-b-2 border-black">
      <div className="flex gap-3 justify-center items-center">
        <div className="text-3xl pr-6 font-extrabold">Fhellow</div>
        <Button className="text-black" buttonText="Dashboard" rounded="md" />
        <Button className="text-black" buttonText="My Page" rounded="md" onClick={navigateToMyPage} />
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
