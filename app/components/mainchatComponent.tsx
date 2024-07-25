import data from "@/app/dummyData/data.json";
import { Params } from "@/app/servers/[serverId]/channels/[channelId]/page";
import * as Icons from "@/app/components/icons";
import { text } from "stream/consumers";

export function MainChatComponent({ params }: { params: Params }) {
  let serverId = params.serverId;
  let serverData = data[serverId as keyof typeof data];

  let channel = serverData.categories
    .map((c) => c.channels)
    .flat()
    .find((channelFlat) => +channelFlat.id === +params.channelId);

  return (
    <>
      <div className="px-2 h-12 flex items-center shadow-sm">
        <div className="flex items-center">
          <Icons.HashTag className="size-6 mx-2 font-semibold text-gray-400 " />
          <span className="mr-2 text-white font-title whitespace-nowrap ">
            {channel?.label}
          </span>
        </div>

        {channel?.description && (
          <>
            <div className="w-px h-6 mx-2 bg-white/[0.06]"></div>
            <div className="text-sm font-medium text-gray-200 mx-2 truncate">
              {channel.description}
            </div>
          </>
        )}

        <div className="flex items-center ml-auto">
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.HashTagSpeechBubble className="size-6 mx-2" />
          </button>

          <button className="text-gray-200 hover:text-gray-100">
            <Icons.NoNotification className="size-6 mx-2" />
          </button>

          <button className="text-gray-200 hover:text-gray-100">
            <Icons.PinnedMessages className="size-6 mx-2" />
          </button>

          <button className="text-gray-200 hover:text-gray-100">
            <Icons.MemberList className="size-6 mx-2" />
          </button>
          <div className="relative mx-2">
            <input
              type="text"
              className=" bg-gray-900 border-none h-6 w-36 rounded  text-sm font-medium placeholder-gray-400 px-1.5"
              placeholder="Search"
            />
            <div className="absolute right-0 inset-y-0 flex items-center">
              <Icons.SearchGoogle className="size-4 mr-1.5 text-gray-400" />
            </div>
          </div>
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.Inbox className="size-6 mx-2" />
          </button>
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.HelpQuestionMark className="size-6 mx-2" />
          </button>
        </div>
      </div>

      <div className="p-3 flex-1 overflow-y-scroll space-y-4">
        {[...Array(40)].map((_, index) => (
          <div className="">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              placeat iste quo aspernatur, soluta veritatis, deserunt maxime
              harum quisquam, eligendi in natus laboriosam dignissimos! Quod
              inventore aperiam dignissimos molestias temporibus.
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
