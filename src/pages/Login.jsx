import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import { auth } from '../firebase';
import { MdEmail, MdLock, MdLogin } from 'react-icons/md';
import Loading from '../components/Loading';
import Layout from '../components/Layout';
import Input from '../components/Input';
import Button from '../components/Button';
import FormButton from '../components/FormButton';
import { FaGoogle } from 'react-icons/fa';
import StyledLink from '../components/StyledLink';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setFormError('Email is required');
      return;
    }

    if (!password) {
      setFormError('Password is required');
      return;
    }

    if (password && email) {
      setFormError('');
    }

    try {
      await signInWithEmailAndPassword(email, password);
      navigate('/dashboard');
    } catch (error) {
      setFormError(error.message);
    }
  };

  return (
    <Layout>
      {loading && <Loading />}
      {!user && (
        <form
          className="grid place-items-center gap-6 mt-16 px-6"
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
          {formError && <p className="text-secondary">{formError}</p>}
          <FormButton
            variant="primary"
            text="Inloggen"
            type="submit"
            icon={<MdLogin />}
          />
        </form>
      )}
      <div className="px-6 mt-6 gap-6 grid">
        <div className="flex items-center justify-center text-neutral-700 gap-4">
          <hr className="w-20 border-neutral-700 border-1" />
          <span className="text-sm font-semibold uppercase">or</span>
          <hr className="w-20 border-neutral-700 border-1" />
        </div>
        <Button
          variant="secondary"
          text="Inloggen met Google"
          icon={<FaGoogle />}
        />
        <div className="flex flex-col gap-1">
          <StyledLink className="text-sm" to="/">
            Wachtwoord vergeten?
          </StyledLink>
          <StyledLink className="text-sm" to="/register">
            Geen account? Registreer hier
          </StyledLink>
        </div>
      </div>
    </Layout>
  );
}
