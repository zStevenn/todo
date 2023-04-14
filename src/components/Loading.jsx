import { RiLoaderFill } from 'react-icons/ri';

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center bg-neutral-900/30 z-[900] h-screen w-screen absolute inset-0">
      <RiLoaderFill className="text-6xl animate-spin-slow text-neutral-800" />
    </div>
  );
}
