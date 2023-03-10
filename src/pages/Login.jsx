import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import { auth } from '../firebase';
import { MdEmail, MdLock, MdLogin } from 'react-icons/md';
import ErrorMessage from '../components/ErrorMessage';
import Loading from '../components/Loading';
import Layout from '../components/Layout';
import Input from '../components/Input';
import Button from '../components/Button';
import { FaGoogle } from 'react-icons/fa';
import StyledLink from '../components/StyledLink';

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
    <Layout>
      <form
        className="grid place-items-center gap-6 mt-16"
        onSubmit={handleFormSubmit}
      >
        <h1 className="text-xl font-semibold">Log in</h1>
        <Input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email..."
          icon={<MdEmail />}
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password..."
          icon={<MdLock />}
        />
        <Button variant="primary" text="Inloggen" icon={<MdLogin />} />
      </form>
      <div className="px-8 mt-6 gap-6 flex flex-col justify-center items-center">
        <div className="flex items-center justify-center text-neutral-700 gap-4">
          <hr className="w-16 border-neutral-700 border-1" />
          <span className="text-sm font-semibold uppercase">or</span>
          <hr className="w-16 border-neutral-700 border-1" />
        </div>
        <Button
          variant="secondary"
          text="Inloggen met Google"
          icon={<FaGoogle />}
        />
        <div className="flex flex-col gap-1">
          <StyledLink className="text-sm" to="login">
            Wachtwoord vergeten?
          </StyledLink>
          <StyledLink className="text-sm" to="register">
            Geen account? Registreer hier
          </StyledLink>
        </div>
      </div>
    </Layout>
  );
}
