import Image from "next/image";
export default function Home() {
  return (
    <div className="w-3/5 mx-auto flex flex-col">
      <div className="font-bold text-center py-28">
        <div className="w-5/6  mx-auto py24">
          <p className="text-5xl font-normal mt-4 ">Welcome to the Script Maker app, where you can create automated scripts interactively!</p>
        </div>
        <p className="text-2xl mt-4 mb-7">Unleash Your Productivity with Script Maker!</p>
        <a
          href="start"
          className="bg-white  font-normal text-black text-base rounded-full mt-8 px-7 py-2.5 hover:bg-gray-100 transition duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start now
        </a>

      </div>
    </div>
  );
}