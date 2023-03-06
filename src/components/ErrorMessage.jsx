import { MdError, MdClose } from 'react-icons/md';
import { useState } from 'react';

export default function ErrorMessage({ message }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50">
      <div className="text-red-500 border border-gray-100">
        <div className="flex justify-between items-center px-4 py-2">
          <MdError className="text-xl" />
          <MdClose className="text-xl cursor-pointer" onClick={handleClose} />
        </div>
        <div className="px-4 py-2">{message}</div>
      </div>
    </div>
  );
}
