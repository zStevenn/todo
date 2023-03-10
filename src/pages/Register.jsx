import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import { auth } from '../firebase';
import { MdEmail, MdLock, MdLogin } from 'react-icons/md';
import Loading from '../components/Loading';
import Layout from '../components/Layout';
import Input from '../components/Input';
import Button from '../components/Button';
import FormButton from '../components/FormButton';
import { FaGoogle, FaList } from 'react-icons/fa';
import StyledLink from '../components/StyledLink';
import { SiPersonio } from 'react-icons/si';
import { FcHighPriority } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
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
      await createUserWithEmailAndPassword(email, password);
      navigate('/dashboard');
    } catch (error) {
      setFormError(error.message);
    }
  };

  return (
    <Layout>
      {loading && <Loading />}
      <div className="grid px-6 gap-6">
        <div>[Check progress]</div>
        <h1 className="text-xl">Maak een gratis account</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="grid gap-1">
            <FaList className="text-4xl" />
            <p className="text-sm">Krijg meer overzicht</p>
          </div>
          <div className="grid gap-1">
            <SiPersonio className="text-4xl" />
            <p className="text-sm">Verbeter je productiviteit</p>
          </div>
          <div className="grid gap-1">
            <FcHighPriority className="text-4xl" />
            <p className="text-sm">Stel je prioriteiten</p>
          </div>
        </div>
        {!user && (
          <form className="grid gap-6" onSubmit={handleFormSubmit}>
            <h1 className="text-xl">Register with email</h1>
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
              text="Register"
              type="submit"
              icon={<MdLogin />}
            />
          </form>
        )}
        <div className="gap-6 grid">
          <div className="flex items-center justify-center text-neutral-700 gap-4">
            <hr className="w-20 border-neutral-700 border-1" />
            <span className="text-sm font-semibold uppercase">or</span>
            <hr className="w-20 border-neutral-700 border-1" />
          </div>
          <Button
            variant="secondary"
            text="Register with Google"
            icon={<FaGoogle />}
          />
        </div>
        <div>
          <p className="text-xs">
            Door te registreren, ga je akkoord met onze{' '}
            <StyledLink to="/terms-of-service">Terms of Service</StyledLink> en{' '}
            <StyledLink to="/privacy">Privacy Policy</StyledLink>.
          </p>
        </div>
      </div>
    </Layout>
  );
}
