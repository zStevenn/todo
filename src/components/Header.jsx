import { MdMenu } from 'react-icons/md';

export default function Header() {
  return (
    <nav className="px-4 py-2 bg-primary text-white relative flex justify-between items-center">
      <MdMenu className="text-4xl" />
      <div className="flex justify-center items-center">
        <p className="text-sm">Steven's<br/>To-Do</p>
      </div>
    </nav>
  );
}
