import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

export default function Row({ children }) {
  return (
    <div className="flex justify-between rounded-md shadow even:bg-melon even:shadow-melon odd:bg-glaucous odd:shadow-glaucous px-3 py-3 text-neutral-100">
      <p className="text-base text-white truncate w-1/2">{children}</p>
      <MdKeyboardDoubleArrowRight className="text-2xl text-white" />
    </div>
  );
}
