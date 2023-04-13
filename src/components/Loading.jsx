import { RiLoaderFill } from 'react-icons/ri';

export default function Loading() {
  return (
    <div className="h-screen w-screen grid place-content-center place-items-center">
      <RiLoaderFill className="text-6xl animate-spin-slow text-gray-700" />
      <h1 className="text-gray-700">Een moment geduld...</h1>
    </div>
  );
}
