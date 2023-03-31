import Loading from '../Loading';
import Layout from '../Layout';
import FormButton from '../FormButton';
import StyledLink from '../StyledLink';
import { BsCheckCircleFill } from 'react-icons/bs';

export default function Step3({
  photo,
  biography,
  formError,
  loading,
  error,
  handlePhotoChange,
  handleBiographyChange,
  onSubmit,
}) {
  return (
    <Layout>
      {loading && <Loading />}
      <div className="grid px-6 gap-6">
        <div className="flex gap-4 justify-center items-center pt-6">
          <BsCheckCircleFill className="text-4xl text-green-500" />
          <hr className="border-b-4 w-8 border-green-500" />
          <BsCheckCircleFill className="text-4xl text-green-500" />
          <hr className="border-b-4 w-8 border-orange-500" />
          <BsCheckCircleFill className="text-4xl text-orange-500" />
        </div>
        <div>
          <h1 className="text-xl">Complete your profile</h1>
          <p className="text-xs">The finishing step!</p>
        </div>
        <form className="grid gap-6" onSubmit={onSubmit}>
          <input
            type="file"
            value={photo}
            onChange={handlePhotoChange}
            className="file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
          />
          <textarea
            name=""
            id=""
            cols="3"
            rows="3"
            value={biography}
            onChange={handleBiographyChange}
            placeholder="Bio (Omschrijf jezelf)"
            className="border border-solid p-3 rounded-md"
          ></textarea>
          {formError && <p className="text-secondary">{formError}</p>}
          {error && <p className="text-secondary">{error.message}</p>}
          <FormButton variant="primary" text="Save" type="submit" />
        </form>
        <StyledLink to="/dashboard" className="text-center">
          Finish my profile later
        </StyledLink>
      </div>
    </Layout>
  );
}
