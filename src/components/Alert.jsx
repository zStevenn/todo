import { useEffect, useState } from 'react';
import { MdCheckCircle, MdDangerous, MdClose } from 'react-icons/md';

export default function Alert({ title, status, message, errorStatus }) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((progress) => progress - 1);
    }, 30);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [visible]);

  if (!visible) {
    return null;
  }

  return (
    // Backdrop
    <div className="flex flex-col justify-center items-center bg-neutral-900/30 z-[900] h-screen w-screen absolute inset-0">
      {/* Alert */}
      <div
        className={`transition-all duration-300 bg-neutral-100 rounded-md border-b-8 p-8 mx-8 text-neutral-900 flex flex-col gap-4 justify-center items-center ${
          status === 'success' ? 'border-green-800' : 'border-red-800'
        }`}
      >
        {/* Close button centered top right */}
        {/* <div className="flex w-full justify-end">
          <MdClose className="text-3xl" onClick={() => setVisible(false)} />
        </div> */}

        {/* Title */}
        {title && <h1 className="text-lg font-semibold">{title}</h1>}

        {/* Success or danger icon */}
        {status === 'success' && (
          <MdCheckCircle className="text-9xl text-green-800" />
        )}
        {status === 'danger' && (
          <MdDangerous className="text-9xl text-red-800" />
        )}

        {/* Error status */}
        {errorStatus && <div>{errorStatus}</div>}

        {/* Message */}
        {message && <div className="">{message}</div>}

        {/* Progress bar */}
        <div className="relative w-full h-4 rounded-full bg-neutral-200">
          <div
            className={`absolute top-0 left-0 h-full rounded-md ${
              status === 'success' ? 'bg-green-800' : 'bg-red-800'
            } `}
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Buttons */}
        {/* <div className="w-full flex flex-row justify-between">
          {status === 'danger' && (
            <button
              className="inline-flex items-center justify-center rounded-md px-4 py-2 cursor-pointer transition-colors duration-300 w-full bg-red-800 hover:bg-red-800-hover text-white"
              type="button"
              onClick={() => setVisible(false)}
            >
              Sluit bericht
            </button>
          )}
          {status === 'success' && (
            <button
              className="inline-flex items-center justify-center rounded-md px-4 py-2 cursor-pointer transition-colors duration-300 w-full bg-green-800 hover:bg-green-800-hover text-white"
              type="button"
              onClick={() => setVisible(false)}
            >
              Sluit bericht
            </button>
          )}
        </div> */}

        {/* Small text notifying automatic redirect */}
        <p className="text-neutral-400 text-sm">Automatisch doorsturen...</p>
      </div>
    </div>
  );
}
