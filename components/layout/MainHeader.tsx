import Link from "next/link";
import React from "react";

const MainHeader = () => {
  return (
    <header className="w-full flex justify-between items-center py-[1rem] px-[10%] h-[3rem] bg-gradient-to-r  from-[#7F00FF] to-[#E100FF]">
      <div className="text-[1.5rem] text-white h-full flex justify-center items-center">
        <Link href="/" className="text-white">
          NextEvents
        </Link>
      </div>
      <nav>
        <ul>
          <li className="text-white text-2xl">
            <Link href="/events">Brows All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
