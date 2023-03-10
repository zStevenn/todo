import React from 'react';
import { Link } from 'react-router-dom';

export default function StyledLink({ to, children, className }) {
  return (
    <Link
      to={to}
      className={`${className} underline text-neutral-600 hover:text-neutral-900 underline-offset-4 pb-1 transition-colors duration-200`}
    >
      {children}
    </Link>
  );
}
