import { Verified, World, Chevron } from "@/app/components/icons";
import { CategoryComponent } from "@/app/components/categoryComponent";
import { MainChatComponent } from "@/app/components/mainchatComponent";

export type Channel = {
  id: number;
  label: string;
  icon?: string;
  unread?: boolean;
  messages: Messages[];
};

export interface Messages {
  id: string;
  user: string;
  avatarUrl: string;
  date: string;
  text: string;
}

export type Params = {
  serverId: string;
  channelId: string;
};

export default function ServerID({ params }: { params: Params }) {
  return (
    <>
      <div className="bg-gray-800 w-60 md:flex flex-col hidden ">
        <button>
          <div className="font-title font-bold px-4 h-12 flex items-center shadow-sm text-[15px] hover:bg-gray-550/[0.16] transition">
            <div className="relative size-4 mr-1">
              <Verified className="absolute w-4 h-4 text-gray-550" />
              <World className="absolute size-2.5 left-[3px] top-[3px]" />
            </div>
            Server {params.serverId}
            <Chevron className={`size-[18px] text-white ml-auto `} />
          </div>
        </button>

        <div className="text-gray-300 font-medium flex-1 space-y-[21px] overflow-y-scroll mt-3">
          <CategoryComponent params={params} />
        </div>
      </div>

      <div className="bg-gray-700 flex-shrink min-w-0  flex-1 flex flex-col">
        <MainChatComponent params={params} />
      </div>
    </>
  );
}
