import { RiLoaderFill } from 'react-icons/ri';

export default function Loading() {
  return (
    <div className="absolute h-screen w-screen flex justify-center items-center bg-gray-700/60 z-40">
      <div className="grid gap-4 place-items-center w-5/6 py-16 px-8 bg-white border-primary rounded-md z-50">
        <RiLoaderFill className="text-6xl animate-spin-slow text-gray-700" />
        <h1 className="text-gray-700">Laden...</h1>
      </div>
    </div>
  );
}
