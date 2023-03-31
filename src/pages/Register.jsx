import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { Step1, Step2, Step3 } from '../components/Register';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [hobby, setHobby] = useState('');
  const [interest, setInterest] = useState('');
  const [photo, setPhoto] = useState('');
  const [biography, setBiography] = useState('');
  const [formError, setFormError] = useState('');
  const [step, setStep] = useState(1);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, []);

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleBirthDateChange = (e) => {
    setBirthDate(e.target.value);
  };

  const handleHobbyChange = (e) => {
    setHobby(e.target.value);
  };

  const handleInterestChange = (e) => {
    setInterest(e.target.value);
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.value);
  };

  const handleBiographyChange = (e) => {
    setBiography(e.target.value);
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

    if (password.length < 6) {
      setFormError('Password requires at least 6 characters');
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
      {/* Register a new account */}
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
      {/* Personalize the account */}
      {step === 2 && (
        <Step2
          firstName={firstName}
          lastName={lastName}
          birthDate={birthDate}
          hobby={hobby}
          interest={interest}
          formError={formError}
          loading={loading}
          error={error}
          handleFirstNameChange={handleFirstNameChange}
          handleLastNameChange={handleLastNameChange}
          handleBirthDateChange={handleBirthDateChange}
          handleHobbyChange={handleHobbyChange}
          handleInterestChange={handleInterestChange}
          onSubmit={handlePersonalize}
        />
      )}
      {/* Add profile picture and bio */}
      {step === 3 && (
        <Step3
          photo={photo}
          biography={biography}
          formError={formError}
          loading={loading}
          error={error}
          handlePhotoChange={handlePhotoChange}
          handleBiographyChange={handleBiographyChange}
          onSubmit={handleComplete}
        />
      )}
    </>
  );
}
