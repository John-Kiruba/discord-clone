import {
  VerifiedIcon,
  WorldIcon,
  ChevronIcon,
  BookIcon,
  AnnouncementIcon,
  AddFriendsIcon,
  ArrowDownIcon,
  HashTagIcon,
} from "@/app/components/icons";

export default function ServerID({ params }: { params: { serverId: number } }) {
  return (
    <>
      <div className="bg-gray-800 w-60 flex  flex-col">
        <button>
          <div className="font-title font-bold px-4 h-12 flex items-center shadow-sm text-[15px] hover:bg-gray-550/[0.16] transition">
            <div className="relative size-4 mr-1">
              <VerifiedIcon className="absolute w-4 h-4 text-gray-550" />
              <WorldIcon className="absolute size-2.5 left-[3px] top-[3px]" />
            </div>
            Server {params.serverId}
            <ChevronIcon className={`size-[18px] text-white ml-auto `} />
          </div>
        </button>

        <div className="text-gray-300 font-medium flex-1 overflow-y-scroll mt-[17px]">
          <div className="space-y-0.5">
            <a
              href="#"
              className="flex items-center px-2 mx-1 py-1 text-gray-300 hover:bg-gray-550/[0.16] rounded group hover:text-gray-100"
            >
              <BookIcon className="size-5 mr-1.5 text-gray-400" />
              welcome
              <AddFriendsIcon className="opacity-0 group-hover:opacity-100 size-4 ml-auto hover:text-gray-100 text-gray-200" />
            </a>

            <a
              href="#"
              className="flex items-center px-2 mx-1 py-1 text-gray-300 hover:bg-gray-550/[0.16] rounded group hover:text-gray-100"
            >
              <AnnouncementIcon className="size-5 mr-1.5 text-gray-400" />
              announcements
              <AddFriendsIcon className="opacity-0 group-hover:opacity-100 size-4 ml-auto hover:text-gray-100 text-gray-200" />
            </a>
          </div>

          <div className="mt-[21px]">
            <button className="flex items-center px-0.5 uppercase font-bold font-title text-xs tracking-wide">
              <ArrowDownIcon className="size-3 mr-0.5" />
              Tailwind CSS
            </button>

            <div className="space-y-0.5 mt-[5px]">
              <a
                href="#"
                className="flex items-center px-2 mx-1 py-1 text-gray-300 hover:bg-gray-550/[0.16] rounded group hover:text-gray-100"
              >
                <HashTagIcon className="size-5 mr-1.5 text-gray-400" />
                generals
                <AddFriendsIcon className="opacity-0 group-hover:opacity-100 size-4 ml-auto hover:text-gray-100 text-gray-200" />
              </a>

              <a
                href="#"
                className="flex items-center px-2 mx-1 py-1 text-gray-300 hover:bg-gray-550/[0.16] rounded group hover:text-gray-100"
              >
                <HashTagIcon className="size-5 mr-1.5 text-gray-400" />
                plugins
                <AddFriendsIcon className="opacity-0 group-hover:opacity-100 size-4 ml-auto hover:text-gray-100 text-gray-200" />
              </a>
              <a
                href="#"
                className="flex items-center px-2 mx-1 py-1 text-gray-300 hover:bg-gray-550/[0.16] rounded group hover:text-gray-100"
              >
                <HashTagIcon className="size-5 mr-1.5 text-gray-400" />
                plughelpins
                <AddFriendsIcon className="opacity-0 group-hover:opacity-100 size-4 ml-auto hover:text-gray-100 text-gray-200" />
              </a>
              <a
                href="#"
                className="flex items-center px-2 mx-1 py-1 text-gray-300 hover:bg-gray-550/[0.16] rounded group hover:text-gray-100"
              >
                <HashTagIcon className="size-5 mr-1.5 text-gray-400" />
                plugins
                <AddFriendsIcon className="opacity-0 group-hover:opacity-100 size-4 ml-auto hover:text-gray-100 text-gray-200" />
              </a>
            </div>
          </div>
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
