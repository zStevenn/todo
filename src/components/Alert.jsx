import { MdCheckCircle, MdDangerous } from 'react-icons/md';

export default function Alert({
  title,
  status,
  message,
  errorStatus,
  handleClick,
}) {
  return (
    // Backdrop
    <div className="flex flex-col justify-center items-center bg-neutral-900/30 z-[900] h-screen w-screen absolute">
      {/* Alert */}
      <div className="bg-neutral-100 rounded-md border-b-8 border-red-800 p-8 mx-8 text-neutral-900 flex flex-col gap-8 justify-center items-center">
        {title && <h1 className="text-lg font-semibold">{title}</h1>}
        {status === 'success' && (
          <MdCheckCircle className="text-9xl text-green-800" />
        )}
        {status === 'danger' && (
          <MdDangerous className="text-9xl text-red-800" />
        )}
        {errorStatus && <div>{errorStatus}</div>}
        {message && <div className="">{message}</div>}
        <div className="w-full flex flex-row justify-between">
          <button
            className="inline-flex items-center justify-center rounded-md px-4 py-2 cursor-pointer transition-colors duration-300 w-full bg-red-800 hover:bg-red-800-hover text-white"
            type="button"
            onClick={handleClick}
          >
            Sluit bericht
          </button>
        </div>
      </div>
    </div>
  );
}
