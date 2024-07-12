// components/Navbar.tsx
"use client";
// import React from "react";
// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <div className="navbar bg-opacity-95 bg-custom-blue text-white">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </div>
//           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//             <li>
//               <Link href="/swap" className="text-xl">
//                 Swap
//               </Link>
//             </li>
//             <li>
//               <Link href="/liquidity" className="text-xl">
//                 Manage liquidity
//               </Link>
//             </li>
//           </ul>
//         </div>
//         <Link href="/">
//           <div className="btn btn-ghost text-2xl">Captain Happy Hook</div>
//         </Link>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           <li>
//             <Link href="/swap" className="text-xl mx-1">
//               Swap
//             </Link>
//           </li>
//           <li>
//             <Link href="/liquidity" className="text-xl mx-1">
//               Manage liquidity
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <div className="navbar-end">
//         <w3m-button />
//       </div>
//     </div>
//   );
// };
// export default Navbar;

// Step-by-step plan:
// 1. Create a functional React component named NeoBrutalistNavbar.
// 2. Use inline styles or a CSS module to apply neo-brutalist design principles, focusing on minimalism, raw materials, and monochromatic colors.
// 3. The navbar should contain a few sample navigation links. These can be placeholders like "Home", "About", "Services", and "Contact".
// 4. Ensure the navbar is responsive and accessible.

// NeoBrutalistNavbar.jsx
import React from "react";

const NeoBrutalistNavbar = () => {
  const navbarStyle = {
    backgroundColor: "#333", // Dark background for contrast
    color: "white",
    padding: "10px",
    fontFamily: "Arial, sans-serif", // Simple, functional font
    display: "flex",
    justifyContent: "space-around", // Space out the navigation items
    alignItems: "center",
  };

  const linkStyle = {
    color: "lightgray", // Slightly lighter color for links for readability
    textDecoration: "none", // Remove underlines from links
    fontSize: "18px", // Larger font size for accessibility
  };

  return (
    <nav style={navbarStyle}>
      <a href="#home" style={linkStyle}>
        Home
      </a>
      <a href="#about" style={linkStyle}>
        About
      </a>
      <a href="#services" style={linkStyle}>
        Services
      </a>
      <a href="#contact" style={linkStyle}>
        Contact
      </a>
    </nav>
  );
};

export default NeoBrutalistNavbar;
