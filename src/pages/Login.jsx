import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { useState, useEffect } from 'react';
import { MdEmail, MdLock, MdLogin } from 'react-icons/md';
import Loading from '../components/Loading';
import Input from '../components/Input';
import FormButton from '../components/FormButton';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { FaGoogle } from 'react-icons/fa';
import StyledLink from '../components/StyledLink';
import Alert from '../components/Alert';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState('');
  const [popupStatus, setPopupStatus] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [popupRedir, setPopupRedir] = useState();

  useEffect(() => {
    if (user) {
      setPopupTitle('Welcome back!');
      setPopupStatus('success');
      setPopupMessage('You have signed in successfully.');
      setPopup(true);
      setPopupRedir(true);
      setTimeout(() => {
        setPopup(false);
        navigate('/dashboard');
      }, 3000);
    }
  }, [user]);

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
    } catch (err) {
      setFormError(err.message);
    }
  };

  return (
    <>
      {popup && (
        <Alert
          title={popupTitle}
          status={popupStatus}
          message={popupMessage}
          redir={popupRedir}
        />
      )}
      {loading && <Loading />}
      <form
        className="grid place-items-center gap-6 mt-16 px-6"
        onSubmit={handleFormSubmit}
      >
        <h1 className="text-xl font-semibold">Sign in</h1>
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
        {error && <p className="text-secondary">{error.message}</p>}
        <FormButton
          variant="primary"
          text="Sign in"
          type="submit"
          icon={<MdLogin />}
        />
      </form>
      <div className="px-6 mt-6 gap-6 grid">
        <div className="flex items-center justify-center text-neutral-700 gap-4">
          <hr className="w-20 border-neutral-700 border-1" />
          <span className="text-sm font-semibold uppercase">or</span>
          <hr className="w-20 border-neutral-700 border-1" />
        </div>
        <Button
          variant="secondary"
          text="Sign in with Google"
          icon={<FaGoogle />}
        />
        <div className="flex flex-col gap-1">
          <StyledLink className="text-sm" to="/">
            Forgot password?
          </StyledLink>
          <StyledLink className="text-sm" to="/register">
            Don't have an account? Register here
          </StyledLink>
        </div>
      </div>
    </>
  );
}
