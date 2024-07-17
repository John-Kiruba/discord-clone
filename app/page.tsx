export default function Home() {
  return (
    <div className="bg-gray-700 text-white min-h-screen justify-center flex items-center ">
      <div className="max-w-lg">
        <div className="flex hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1">
          <img
            className="size-10 rounded-full mr-4"
            src="/assets/images/dustin.jpeg"
            alt="dustin"
          />
          <div>
            <p className="flex items-baseline">
              <span className="text-green-500 mr-2 text-sm font-medium">
                dustinpoirier
              </span>{" "}
              <span className="text-xs  text-gray-500">01/01/2024</span>
            </p>
            <p className="text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident ad vero quo dolor rerum eum inventore, accusamus iure
              voluptatibus harum fuga deserunt quas rem ea. Alias neque minus
              odio cupiditate!
            </p>
          </div>
        </div>
        <div className="mt-1 px-4 py-1 hover:bg-gray-800 hover:bg-opacity-30">
          <p className="text-gray-300 pl-14">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            molestias! Numquam magni velit reiciendis cum dolores eos eveniet
            sapiente amet ipsum sit dignissimos voluptatibus, corrupti enim odio
            ipsam doloremque sequi.
          </p>
        </div>

        <div className="mt-1 px-4 py-1 hover:bg-gray-800 hover:bg-opacity-30">
          <p className="text-gray-300 pl-14">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            molestias!
          </p>
        </div>
      </div>
    </div>
  );
}
