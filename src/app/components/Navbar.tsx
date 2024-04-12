"use client";
import React, { useEffect, useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";
import Popup from "./Popup";
import { Search } from "lucide-react";
function Navbar({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    console.log("fjnjfn");
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflowY = "unset";
    };
  }, [isOpen]);
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div className={cn("fixed top-0 inset-x-0 w-full flex  ", className)}>
        <Menu setActive={setActive}>
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="200"
              height="58"
              viewBox="0 0 285 58"
            >
              <g fill="none" fill-rule="evenodd">
                <g fill="#2D2A26" fill-rule="nonzero">
                  <path d="M85.74 31.82c0 6.25-2.83 8.7-8.51 8.7-5.75 0-8.32-3.21-8.32-8.16v-1.9h6.29v1.3c0 1.75 0 3.37 1.87 3.37 1.81 0 1.68-2.19 1.68-3.21V17.3h6.99v14.52zM104.68 36.3c0 1.24.06 2.64.76 3.68h-6.42c-.16-.45-.25-1.11-.22-1.56h-.06c-1.33 1.52-3.27 1.97-5.3 1.97-3.18 0-5.81-1.53-5.81-4.99 0-5.21 6.1-5.02 9.31-5.62.86-.16 1.72-.41 1.72-1.46 0-1.11-1.05-1.52-2.06-1.52-1.94 0-2.32.98-2.35 1.68h-5.84c.19-4.64 4.57-5.4 8.48-5.4 7.88 0 7.81 3.27 7.81 6.45v6.77h-.02zm-6.04-3.72c-.76.38-1.62.6-2.48.79-1.4.32-2.13.67-2.13 1.78 0 .76.83 1.52 1.97 1.52 1.43 0 2.54-.86 2.64-2.57v-1.52zM107.98 23.5h6.07v2.19h.06c1.27-1.91 3.11-2.6 5.4-2.6 1.78 0 3.68.92 4.45 2.57.25-.19 1.52-2.57 5.62-2.57 4.22 0 5.65 2.92 5.65 5.59v11.31h-6.29v-8.92c0-1.56-.16-2.95-2.06-2.95-1.59 0-2.13 1.24-2.13 2.95v8.92h-6.29v-8.92c0-1.56-.16-2.95-2.06-2.95-1.59 0-2.13 1.24-2.13 2.95v8.92h-6.29V23.5zM143.49 33.15c.16 1.87 1.24 3.21 3.21 3.21 1.02 0 2.13-.38 2.64-1.17h5.87c-1.27 3.56-4.73 5.21-8.48 5.21-5.27 0-9.24-3.11-9.24-8.61 0-4.8 3.49-8.7 8.7-8.7 6.54 0 9.37 3.65 9.37 10.07h-12.07v-.01zm6.03-3.27c0-1.52-1.14-2.76-2.76-2.76-1.87 0-2.95.99-3.24 2.76h6zM167.31 28.29c-.03-.54-.32-.95-.73-1.24-.38-.32-.89-.48-1.4-.48-.89 0-1.9.19-1.9 1.27 0 .48.38.7.73.86 1.05.44 3.43.57 5.53 1.27 2.1.67 3.94 1.91 3.94 4.61 0 4.57-4.38 5.81-8.38 5.81-3.88 0-8.13-1.56-8.23-5.81h6c.03.57.29 1.05.76 1.46.32.29.92.48 1.68.48.83 0 2.13-.32 2.13-1.27s-.54-1.24-3.46-1.75c-4.8-.83-6.73-2.35-6.73-5.18 0-4.16 4.48-5.24 7.78-5.24 3.56 0 7.84.98 8 5.21h-5.72zM175.69 17.3h6.99v7.88h6.54V17.3h6.99v22.68h-6.99v-8.99h-6.54v8.99h-6.99zM215.14 36.3c0 1.24.06 2.64.76 3.68h-6.42c-.16-.45-.25-1.11-.22-1.56h-.06c-1.33 1.52-3.27 1.97-5.3 1.97-3.17 0-5.81-1.53-5.81-4.99 0-5.21 6.1-5.02 9.31-5.62.86-.16 1.72-.41 1.72-1.46 0-1.11-1.05-1.52-2.06-1.52-1.94 0-2.32.98-2.35 1.68h-5.84c.19-4.64 4.57-5.4 8.48-5.4 7.88 0 7.81 3.27 7.81 6.45v6.77h-.02zm-6.04-3.72c-.76.38-1.62.6-2.48.79-1.4.32-2.13.67-2.13 1.78 0 .76.82 1.52 1.97 1.52 1.43 0 2.54-.86 2.64-2.57v-1.52zM218.15 23.5h6.03v2.64h.06c1.02-1.97 2.35-3.05 4.64-3.05.64 0 1.24.1 1.84.25v5.56c-.63-.22-1.21-.41-2.48-.41-2.48 0-3.81 1.46-3.81 4.99v6.51h-6.29V23.5h.01zM249.25 39.98h-6.07v-1.81h-.06c-.79 1.05-1.75 2.22-4.83 2.22-4.67 0-6.92-4.61-6.92-8.74 0-3.87 1.49-8.58 7.02-8.58 1.87 0 3.56.83 4.51 2.22h.06v-8h6.29v22.69zm-8.83-12.32c-2.26 0-2.76 2.13-2.76 4.06 0 1.97.51 4.1 2.76 4.1s2.76-2.13 2.76-4.1c0-1.94-.51-4.06-2.76-4.06zM258.3 20.46v1.26h-6.29V17.3h6.29v3.16zm-6.29 3.04h6.29v16.48h-6.29V23.5zM266.56 33.15c.16 1.87 1.24 3.21 3.21 3.21 1.02 0 2.13-.38 2.64-1.17h5.88c-1.27 3.56-4.73 5.21-8.48 5.21-5.27 0-9.24-3.11-9.24-8.61 0-4.8 3.49-8.7 8.7-8.7 6.54 0 9.37 3.65 9.37 10.07h-12.08v-.01zm6.03-3.27c0-1.52-1.14-2.76-2.76-2.76-1.87 0-2.95.99-3.24 2.76h6z"></path>
                </g>
                <path
                  fill="#00833E"
                  d="M29.26-.01C13.29-.01.34 12.94.34 28.91c0 15.97 12.95 28.92 28.92 28.92 15.97 0 28.92-12.95 28.92-28.92 0-15.97-12.95-28.92-28.92-28.92zM27.18 52.6l4-12.32h5.35l-3.96 12.18c-1.09.15-2.19.23-3.32.23-.69 0-1.39-.03-2.07-.09zm12.55-2.34L49 21.74h-6.44l-4.03 12.41h-5.36l4.03-12.41h-6.44l-9.6 29.54C12.02 47.97 5.48 39.2 5.48 28.91c0-12.07 8.99-22.04 20.65-23.57l-7.51 23.11a1.772 1.772 0 0 1-3.37-1.09l1.82-5.62h-6.44l-1.21 3.72c-1.35 4.15.92 8.6 5.07 9.95 4.15 1.35 8.6-.92 9.95-5.07l8.12-24.98C44.13 6.97 53.04 16.9 53.04 28.91c0 9.38-5.43 17.48-13.31 21.35z"
                ></path>
                <g fill="#2D2A26" fill-rule="nonzero">
                  <path d="M279.55 15.78h-.92v-.42h2.45v.42h-.91v2.67h-.62v-2.67zM281.42 15.37h.97l.68 2.29h.01l.67-2.29h.94v3.09h-.59v-2.57h-.01l-.78 2.57h-.52l-.78-2.57H282v2.57h-.59v-3.09z"></path>
                </g>
              </g>
            </svg>
          </Link>
          <Link href="/">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Products"
            ></MenuItem>
          </Link>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Inspiration"
          ></MenuItem>
          <Link href="/resources">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Resources"
            ></MenuItem>
          </Link>
          <Link href="/homeguide">
            <MenuItem
              setActive={setActive}
              active={active}
              item="Home Guide"
            ></MenuItem>
          </Link>
        </Menu>

        <Menu setActive={setActive}>
          <div
            className="flex  w-full gap-2 justify-end items-center hover:cursor-pointer"
            onClick={handleClick}
          >
            <div className="flex ">
              <Search />
            </div>
            <div className="text-gray-700 px-2 py-3 h-full flex items-center font-montserrat font-medium text-lg">
              Search Products
            </div>
          </div>

          <button className="bg-gradient-to-br from-green-600 via-green-500 to-green-400 hover:bg-gradient-to-br hover:from-green-900 hover:via-green-900 hover:to-green-900 text-white pl-5 pr-12 pt-5 pb-5 mx-auto flex justify-center font-semibold font-montserrat text-lg leading-5 items-center h-14 gap-4">
            <h2>myHardie™|</h2>
            <h3 className="text-white font-normal text-xs/2 sm:text-sm leading-tight float-right max-w-[60px] text-left pl-1">
              Internal Professionals
            </h3>
          </button>
        </Menu>
      </div>
      {isOpen && <Popup setIsOpen={setIsOpen} />}
    </>
  );
}

export default Navbar;
