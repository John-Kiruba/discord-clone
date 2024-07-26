import { data } from "@/app/dummyData/data";
import {
  Params,
  Messages,
} from "@/app/servers/[serverId]/channels/[channelId]/page";
import * as Icons from "@/app/components/icons";

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
            <div className="hidden md:block w-px h-6 mx-2 bg-white/[0.06]"></div>
            <div className="hidden md:block text-sm font-medium text-gray-200 mx-2 truncate">
              {channel.description}
            </div>
          </>
        )}

        {/* desktop buttons */}
        <div className="items-center ml-auto hidden md:flex  md:max-w-min ">
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.HashTagSpeechBubble className="size-6  mx-2" />
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
              className=" bg-gray-900 border-none h-6 lg:w-36 md:w-12 md:placeholder-transparent lg:placeholder-current rounded  text-sm font-medium placeholder-gray-400 px-1.5"
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

        {/* mobilebuttons */}
        <div className="flex items-center ml-auto md:hidden">
          <button className="text-gray-200 hover:text-gray-100">
            <Icons.HashTagSpeechBubble className="size-6 mx-2" />
          </button>

          <button className="text-gray-200 hover:text-gray-100">
            <Icons.MemberList className="size-6 mx-2" />
          </button>
        </div>
      </div>

      <div className=" flex-1 overflow-y-scroll ">
        {channel?.messages.map((message, index) => (
          <div key={message.id}>
            {index === 0 ||
            message.user !== channel.messages[index - 1].user ? (
              <MessageWithUser message={message} />
            ) : (
              <MessageOnly message={message} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

function MessageWithUser({ message }: { message: Messages }) {
  return (
    <div className="leading-[22px] flex pl-4 pr-16 py-1 hover:bg-gray-950/[.07] hover:bg-opacity-30 mt-[17px]">
      <img
        className="mr-4 rounded-full size-10 mt-0.5"
        src={message.avatarUrl}
        alt="displayImage"
      />
      <div>
        <p className="flex items-baseline">
          <span className="mr-2 font-medium text-green-500">
            {message.user}
          </span>{" "}
          <span className="text-xs font-medium text-gray-400">
            {message.date}
          </span>
        </p>
        <p className="text-gray-100 ">{message.text}</p>
      </div>
    </div>
  );
}

function MessageOnly({ message }: { message: Messages }) {
  return (
    <div className="leading-[22px] pl-4 pr-16 py-0.5 hover:bg-gray-950/[.07]">
      <p className="text-gray-100 pl-14">{message.text}</p>
    </div>
  );
}
