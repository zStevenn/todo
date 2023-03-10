import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-auto bg-primary">
      <p className="text-white text-sm text-center px-6 py-4">
        &copy; Copyright &nbsp;
        <Link
          to="/"
          className="text-white underline underline-offset-4 hover:text-white"
        >
          Steven's To-Do
        </Link>
      </p>
    </footer>
  );
}
