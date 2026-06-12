"use client";

import Image from "next/image";
import Link from "next/link";
import { FaBars, FaWhatsapp } from "react-icons/fa6";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { whatsapp } from "@/lib/whatsapp";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white ">
      <nav className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={160} height={100} />
        </Link>
        <Sheet>
          <SheetTrigger className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100">
            <FaBars className="text-2xl" />
          </SheetTrigger>
          <SheetContent side="right" className="bg-white p-5">
            <SheetTitle></SheetTitle>
            <Button variant="link" className="rounded-none" asChild>
              <Link
                href="#"
                className="text-yellow-700 md:p-0 hover:border-b-yellow-700 border-b-2 border-b-yellow-700 md:mb-0 mb-2"
              >
                Home
              </Link>
            </Button>
            <Button variant="link" className="rounded-none" asChild>
              <Link
                href="#planos"
                className="hover:border-b-yellow-700 border-b-2 border-b-transparent hover:text-yellow-700 text-black"
              >
                Planos
              </Link>
            </Button>
            <Button
              className="flex items-center justify-center gap-2 py-1 px-4 text-white bg-green-500 rounded-full"
              asChild
            >
              <Link href="https://wa.me/5551999999999" target="_blank">
                <FaWhatsapp size={18} /> Atendimento
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white  text-sm">
            <li>
              <Link
                href="#"
                className="block py-2 px-3 md:bg-transparent text-yellow-700 md:p-0 hover:border-b-yellow-700 border-b-2 border-b-yellow-700 md:mb-0 mb-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#planos"
                className="block py-2 px-3 md:bg-transparent md:p-0 hover:border-b-yellow-700 border-b-2 border-b-transparent hover:text-yellow-700 md:mb-0 mb-2"
              >
                Planos
              </Link>
            </li>
            <li className="md:list-item flex">
              <Button
                onClick={() =>
                  whatsapp(
                    "Olá!%20Vim%20através%20do%20site%20e%20gostaria%20de%20obter%20mais%20informações.",
                  )
                }
                className="flex items-center justify-center gap-2 py-1 px-4 text-white bg-green-500! rounded-full -mt-1 cursor-pointer"
              >
                <FaWhatsapp className="size-6" /> Atendimento
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
