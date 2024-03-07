import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white z-50 sticky top-0 w-full">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <div className="flex items-center justify-between w-full">
          <Link href={"/"} passHref>
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              {/* <Image
                src="/public/images/l"
                alt="It Mate"
                width={100}
                height={100}
                className="w-16"
              /> */}
              <span className="ml-3 text-xl">MY PORTFOLIO</span>
            </div>
          </Link>
          <nav className="md:mx-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-blue-600">
              Home
            </Link>
            <Link href={"/About"} className="mr-5 hover:text-blue-600">
              About
            </Link>
            <Link href={"/skills"} className="mr-5 hover:text-blue-600">
              Skills
            </Link>
            <Link href={"/project"} className="mr-5 hover:text-blue-600">
              Projects
            </Link>

          </nav>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
