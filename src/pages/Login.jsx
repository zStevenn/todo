import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { MdLogin } from 'react-icons/md';
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleFormSubmit = (e) => {
    e.preventDefault;
    signInWithEmailAndPassword(email, password);
  };

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }

  return (
    <>
      <form class="grid place-items-center" onSubmit={handleFormSubmit}>
        <MdLogin className="text-3xl" />
        <label for="email">
          <span className="block text-sm font-medium text-slate-700">
            Email
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
          />
        </label>
        <label for="password">
          <span className="block text-sm font-medium text-slate-700">
            Wachtwoord
          </span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
          />
        </label>
        <button className="bg-red-500 my-4 px-4 py-2">Inloggen</button>
      </form>
      <div className="grid place-items-center">
        <Link className="bg-blue-500 px-4 py-2" to="/register">
          Ga naar registreren
        </Link>
      </div>
    </>
  );
}
