"use client";

import { useState } from "react";
import {
  Channel,
  Params,
} from "@/app/servers/[serverId]/channels/[channelId]/page";
import { data } from "@/app/dummyData/data";
import Link from "next/link";
import * as Icons from "@/app/components/icons";

export function CategoryComponent({ params }: { params: Params }) {
  let [closedCategory, setClosedCategory] = useState<number[]>([]);

  function toggleCategory(categoryId: number) {
    setClosedCategory((closedCategories) =>
      closedCategories.includes(categoryId)
        ? closedCategories.filter((id) => id !== categoryId)
        : [...closedCategories, categoryId]
    );
  }
  return (
    <>
      {data[params.serverId as keyof typeof data].categories.map((category) => (
        <div key={category.id}>
          {/* categorytitle - renders if category.label is present  */}
          {category.label && (
            <button
              onClick={() => toggleCategory(category.id)}
              className="flex items-center px-0.5 uppercase font-bold font-title text-xs tracking-wide hover:text-gray-100 w-full"
            >
              <Icons.ArrowDown
                className={`${
                  closedCategory.includes(category.id) ? "-rotate-90" : ""
                } size-3 mr-0.5 transition duration-200`}
              />
              {category.label}
            </button>
          )}

          {/* channel list  under the category */}
          <div className="space-y-0.5 mt-[5px]">
            {category.channels
              .filter((channel) => {
                let categoryIsOpen = !closedCategory.includes(category.id);
                return categoryIsOpen || channel.unread;
              })
              .map((channel) => (
                <ChannelLink
                  channel={channel}
                  params={params}
                  key={channel.id}
                />
              ))}
          </div>
        </div>
      ))}
    </>
  );
}

function ChannelLink({
  channel,
  params,
}: {
  channel: Channel;
  params: Params;
}) {
  let Icon = channel.icon
    ? Icons[channel.icon as keyof typeof Icons]
    : Icons.HashTag;

  // Active condition of channels
  let active = +params.channelId === +channel.id;

  // Active / inactive state of channels
  let state: keyof typeof classes = active
    ? "active"
    : channel.unread
    ? "inactiveUnread"
    : "inactiveRead";

  let classes = {
    active: "text-white bg-gray-550/[0.32]",
    inactiveUnread:
      "text-white hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]",
    inactiveRead:
      "text-gray-300 hover:text-gray-100 hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]",
  };

  return (
    <Link
      href={`/servers/${params.serverId}/channels/${channel.id}`}
      className={` ${classes[state]} flex items-center px-2 mx-1 py-1 rounded group relative `}
    >
      {state === "inactiveUnread" && (
        <div className="bg-white w-1 h-2 absolute rounded-r-md -left-1"> </div>
      )}

      <Icon className="size-5 mr-1.5 text-gray-400" />
      {channel.label}
      <Icons.AddFriends className="opacity-0 group-hover:opacity-100 size-4 ml-auto hover:text-gray-100 text-gray-200" />
    </Link>
  );
}
