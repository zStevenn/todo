import { Link } from 'react-router-dom';

export default function QuickButton({ to, title, children }) {
  return (
    <Link
      to={to}
      title={title}
      className="p-2 grid place-items-center shadow odd:bg-glaucous even:bg-melon odd:shadow-glaucous even:shadow-melon"
    >
      {children}
    </Link>
  );
}
