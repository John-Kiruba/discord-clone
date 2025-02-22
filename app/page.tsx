export default function Home() {
  return (
    <>
      <div className="bg-gray-800 w-60 flex  flex-col">
        <div className="font-title font-bold px-3 h-12 flex items-center shadow-md">
          Dashboard
        </div>
        <div className="text-gray-300 p-3 flex-1 overflow-y-scroll space-y-2">
          <p className=" text-white ">Friends </p>
        </div>
      </div>
      <div className="bg-gray-700   flex-1 flex flex-col">
        <div className="px-3 h-12 flex items-center shadow-md">General</div>
        <div className="p-3 flex-1 overflow-y-scroll space-y-4"></div>
      </div>
    </>
  );
}
