import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import { auth } from '../firebase';
import { Step1, Step2, Step3 } from '../components/Register';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [formError, setFormError] = useState('');
  const [step, setStep] = useState(1);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async (e) => {
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
      // console.log('Submitting registration...');
      await createUserWithEmailAndPassword(email, password);
      // console.log('Registration submitted successfully.');

      if (user) {
        // console.log('Moving to step 2...');
        nextStep();
      } else {
        // console.log('No user found.');
        setStep(1);
      }
    } catch (error) {
      // console.error('Error submitting registration:', error);
      setFormError(JSON.stringify(error.message));
    }
  };

  const handlePersonalize = async (e) => {
    // Update user profile with first name, last name, and birthday
    // After profile update is successful, move to step 3
    nextStep();
  };

  const handleComplete = async (e) => {
    // Update user profile with profile picture and bio
    // After profile update is successful, redirect to desired page
    navigate('/dashboard');
  };

  return (
    <>
      {step === 1 && (
        <Step1
          email={email}
          password={password}
          formError={formError}
          loading={loading}
          error={error}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          onSubmit={handleRegister}
        />
      )}
      {step === 2 && <Step2 user={user} />}
      {step === 3 && <Step3 />}
    </>
  );
}
