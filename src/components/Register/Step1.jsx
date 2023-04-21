import { MdEmail, MdLock, MdLogin } from 'react-icons/md';
import Loading from '../Loading';
import Input from '../Input';
import Button from '../Button';
import FormButton from '../FormButton';
import { FaGoogle, FaList } from 'react-icons/fa';
import StyledLink from '../StyledLink';
import { SiPersonio } from 'react-icons/si';
import { FcHighPriority } from 'react-icons/fc';
import { BsFillCircleFill, BsCheckCircleFill } from 'react-icons/bs';

export default function Step1({
  email,
  password,
  formError,
  loading,
  error,
  handleEmailChange,
  handlePasswordChange,
  onSubmit,
}) {
  return (
    <>
      {loading && <Loading />}
      <div className="grid px-6 gap-6">
        <div className="flex gap-4 justify-center items-center pt-6">
          <BsCheckCircleFill className="text-4xl text-orange-500" />
          <hr className="border-b-4 w-8 border-orange-500" />
          <BsFillCircleFill className="text-4xl text-neutral-800" />
          <hr className="border-b-4 w-8 border-neutral-800" />
          <BsFillCircleFill className="text-4xl text-neutral-800" />
        </div>
        <h1 className="text-xl">Create a new account</h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="grid gap-1">
            <FaList className="text-4xl" />
            <p className="text-sm">Increase your insight</p>
          </div>
          <div className="grid gap-1">
            <SiPersonio className="text-4xl" />
            <p className="text-sm">Improve your productivity</p>
          </div>
          <div className="grid gap-1">
            <FcHighPriority className="text-4xl" />
            <p className="text-sm">Set your priorities</p>
          </div>
        </div>
        <form className="grid gap-6" onSubmit={onSubmit}>
          <h1 className="text-xl">Register with email</h1>
          <Input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter Email..."
            icon={<MdEmail />}
          />
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter Password..."
            icon={<MdLock />}
          />
          {formError && <p className="text-secondary">{formError}</p>}
          {error && <p className="text-secondary">{error.message}</p>}
          <FormButton
            variant="primary"
            text="Register"
            type="submit"
            icon={<MdLogin />}
          />
        </form>
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
            By registering your account, you agree with our{' '}
            <StyledLink to="/terms-of-service">Terms of Service</StyledLink> and{' '}
            <StyledLink to="/privacy">Privacy Policy</StyledLink>.
          </p>
        </div>
      </div>
    </>
  );
}
