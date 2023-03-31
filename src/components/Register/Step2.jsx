import Loading from '../Loading';
import Layout from '../Layout';
import Input from '../Input';
import FormButton from '../FormButton';
import StyledLink from '../StyledLink';
import { BsFillCircleFill, BsCheckCircleFill } from 'react-icons/bs';

export default function Step2({
  firstName,
  lastName,
  birthDate,
  hobby,
  interest,
  formError,
  loading,
  error,
  handleFirstNameChange,
  handleLastNameChange,
  handleBirthDateChange,
  handleHobbyChange,
  handleInterestChange,
  onSubmit,
}) {
  return (
    <Layout>
      {loading && <Loading />}
      <div className="grid px-6 gap-6">
        <div className="flex gap-4 justify-center items-center pt-6">
          <BsCheckCircleFill className="text-4xl text-green-500" />
          <hr className="border-b-4 w-8 border-orange-500" />
          <BsCheckCircleFill className="text-4xl text-orange-500" />
          <hr className="border-b-4 w-8 border-neutral-800" />
          <BsFillCircleFill className="text-4xl text-neutral-800" />
        </div>
        <div>
          <h1 className="text-xl">Personalize your account</h1>
          <p className="text-xs">Help us improve your experience!</p>
        </div>
        <form className="grid gap-6" onSubmit={onSubmit}>
          <Input
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="Firstname"
          />
          <Input
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Lastname"
          />
          <Input
            type="date"
            value={birthDate}
            onChange={handleBirthDateChange}
            placeholder="Birthdate (mm-dd-yyyy)"
          />
          <Input
            type="text"
            value={hobby}
            onChange={handleHobbyChange}
            placeholder="Hobby's"
          />
          <Input
            type="text"
            value={interest}
            onChange={handleInterestChange}
            placeholder="Interests"
          />
          {formError && <p className="text-secondary">{formError}</p>}
          {error && <p className="text-secondary">{error.message}</p>}
          <FormButton variant="primary" text="Save" type="submit" />
        </form>
        <StyledLink to="/dashboard" className="text-center">
          Personalize later
        </StyledLink>
      </div>
    </Layout>
  );
}
