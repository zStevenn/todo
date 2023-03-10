import { Link } from 'react-router-dom';

export default function Button({ variant, text, icon, to }) {
  let buttonClasses = 'bg-primary hover:bg-primary-hover text-white';
  if (variant === 'secondary') {
    buttonClasses = 'bg-secondary hover:bg-secondary-hover text-white';
  } else if (variant === 'melon') {
    buttonClasses = 'bg-melon hover:bg-melon-hover text-white';
  } else if (variant === 'glaucous') {
    buttonClasses = 'bg-glaucous hover:bg-glaucous-hover text-white';
  }

  return (
    <Link to={to}>
      <button
        className={`inline-flex items-center justify-center rounded-md px-4 py-2 cursor-pointer transition-colors duration-300 ${buttonClasses}
        `}
        type="button"
      >
        {icon && <span className="mr-2">{icon}</span>}
        {text}
      </button>
    </Link>
  );
}
