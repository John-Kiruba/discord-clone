import * as Icons from "@/app/components/icons";
import data from "../../../../dummyData/data.json";
import Link from "next/link";

type Channel = {
  id: number;
  label: string;
  icon?: string;
};

type Params = {
  serverId: string;
  channelId: string;
};
export default function ServerID({ params }: { params: Params }) {
  return (
    <>
      <div className="bg-gray-800 w-60 flex  flex-col">
        <button>
          <div className="font-title font-bold px-4 h-12 flex items-center shadow-sm text-[15px] hover:bg-gray-550/[0.16] transition">
            <div className="relative size-4 mr-1">
              <Icons.Verified className="absolute w-4 h-4 text-gray-550" />
              <Icons.World className="absolute size-2.5 left-[3px] top-[3px]" />
            </div>
            Server {params.serverId}
            <Icons.Chevron className={`size-[18px] text-white ml-auto `} />
          </div>
        </button>

        <div className="text-gray-300 font-medium flex-1 space-y-[21px] overflow-y-scroll mt-3">
          {data["1"].categories.map((category) => (
            <div key={category.id}>
              {category.label && (
                <button className="flex items-center px-0.5 uppercase font-bold font-title text-xs tracking-wide">
                  <Icons.ArrowDown className="size-3 mr-0.5" />
                  {category.label}
                </button>
              )}

              <div className="space-y-0.5 mt-[5px]">
                {category.channels.map((channel) => (
                  <ChannelLink channel={channel} params={params} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-700   flex-1 flex flex-col">
        <div className="px-3 h-12 flex items-center shadow-sm">General</div>
        <div className="p-3 flex-1 overflow-y-scroll space-y-4">
          {[...Array(40)].map((_, index) => (
            <div className="">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus placeat iste quo aspernatur, soluta veritatis,
                deserunt maxime harum quisquam, eligendi in natus laboriosam
                dignissimos! Quod inventore aperiam dignissimos molestias
                temporibus.
              </p>
            </div>
          ))}
        </div>
      </div>
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

  return (
    <Link
      href={`/servers/${params.serverId}/channels/${channel.id}`}
      key={channel.id}
      className={` ${
        active
          ? "text-white bg-gray-550/[0.32]"
          : " text-gray-300 hover:text-gray-100 hover:bg-gray-550/[0.16]"
      } flex items-center px-2 mx-1 py-1 rounded group `}
    >
      <Icon className="size-5 mr-1.5 text-gray-400" />
      {channel.label}
      <Icons.AddFriends className="opacity-0 group-hover:opacity-100 size-4 ml-auto hover:text-gray-100 text-gray-200" />
    </Link>
  );
}
