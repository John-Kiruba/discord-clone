export default function ServerID({ params }: { params: { serverId: number } }) {
  return (
    <>
      <div className="bg-gray-800 w-60 flex  flex-col">
        <div className="font-title font-bold px-3 h-12 flex items-center shadow-md">
          Server {params.serverId}
        </div>
        <div className="text-gray-300 p-3 flex-1 overflow-y-scroll space-y-2">
          <p className=" text-white ">Channel (unread)</p>
          <p className="text-white">Channel (unread)</p>
          {[...Array(40)].map((_, index) => (
            <div className="">
              <p>Channel {index}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-700   flex-1 flex flex-col">
        <div className="px-3 h-12 flex items-center shadow-md">General</div>
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
