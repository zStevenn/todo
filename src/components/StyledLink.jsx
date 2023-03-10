import React from 'react';
import { Link } from 'react-router-dom';

export default function StyledLink({ to, children, className }) {
  return (
    <Link
      to={to}
      className={`underline text-neutral-600 hover:text-neutral-900 pb-1 transition-colors duration-200 ${className}`}
    >
      {children}
    </Link>
  );
}
