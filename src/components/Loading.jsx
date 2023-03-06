import { FaSpinner } from 'react-icons/fa';

export default function Loading() {
  return (
    <div className="absolute h-screen w-screen flex justify-center items-center">
      <FaSpinner className="text-6xl animate-spin" />
    </div>
  );
}
