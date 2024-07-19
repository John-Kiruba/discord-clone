"use client";

import DiscordIcon from "./discordLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function ServerNavigation({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex text-gray-100 h-screen">
      <div className="bg-gray-900 p-3 space-y-2 overflow-y-scroll hidden-scrollbar">
        <div>
          <Navlink href="/">
            <DiscordIcon className="size-[30px]" />
          </Navlink>
        </div>

        <hr className="border-t-white/[.06] border-t-2 rounded mx-2"></hr>

        <div>
          <Navlink href="/servers/1">
            <img src="/assets/images/dustin.jpeg" />
          </Navlink>
        </div>
      </div>
      {children}
    </div>
  );
}

function Navlink({ href, children }: { href: string; children: ReactNode }) {
  let pathname = usePathname();
  return (
    <Link href={href} className="relative block group">
      <div className="absolute flex h-full items-center -left-3 ">
        <div
          className={`${
            pathname === href
              ? "h-10"
              : " h-5 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100"
          } bg-white w-1  rounded-r  transition-all duration-200  origin-left`}
        ></div>
      </div>

      <div className="group-active:translate-y-px ">
        <div
          className={`${
            pathname === href
              ? "text-white rounded-2xl bg-brand"
              : "text-gray-100 group-hover:text-white rounded-[24px]  bg-gray-700 group-hover:bg-brand group-hover:rounded-2xl"
          }    flex items-center justify-center size-12  transition-all duration-200 overflow-hidden`}
        >
          {children}
        </div>
      </div>
    </Link>
  );
}
