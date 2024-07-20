"use client";

import DiscordIcon from "./discordLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

let servers = [
  { id: 1, img: "/assets/images/dustin.jpeg" },
  { id: 2, img: "/assets/images/recordplayer.jpg" },
  { id: 3, img: "/assets/images/records.jpeg" },
  { id: 4, img: "/assets/images/volk.jpeg" },
];

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

        {servers.map((server) => (
          <div>
            <Navlink href={`/servers/${server.id}`} key={server.id}>
              <img src={server.img} />
            </Navlink>
          </div>
        ))}
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
        {/* selection white bar near the server icon */}
        <div
          className={`${
            pathname === href
              ? "h-10"
              : " h-5 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100"
          } bg-white w-1  rounded-r  transition-all duration-200  origin-left`}
        ></div>
      </div>

      {/* server icon with image as children  */}
      <div className="group-active:translate-y-px ">
        <div
          className={`${
            pathname === href
              ? "text-white rounded-2xl bg-brand"
              : "text-gray-100 group-hover:text-white rounded-[24px]  bg-gray-700 group-hover:bg-brand group-hover:rounded-2xl"
          }    flex items-center justify-center size-12 transition-all duration-200 overflow-hidden`}
        >
          {children}
        </div>
      </div>
    </Link>
  );
}
