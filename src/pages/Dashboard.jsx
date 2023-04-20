import { MdAdd, MdList } from 'react-icons/md';
import { BiTask } from 'react-icons/bi';
import { BsGear } from 'react-icons/bs';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import StyledLink from '../components/StyledLink';
import Loading from '../components/Loading';
import Button from '../components/Button';
import { Row, Title, QuickButton } from '../components/Dashboard';

export default function Dashboard() {
  const [user, loading] = useAuthState(auth);

  // Display if not an active user
  if (!user) {
    return (
      <>
        {loading && <Loading />}
        <div className="flex flex-col mt-8 px-8 gap-8 items-center text-center">
          <h1>Je moet eerst inloggen om je eigen dashboard te bekijken.</h1>
          <Button text="Naar inloggen" to="/login" />
          <StyledLink className="text-sm" to="/register">
            Geen account? Registreer hier
          </StyledLink>
        </div>
      </>
    );
  }

  if (user) {
    return (
      <>
        <div className="grid gap-8 px-8 pt-6 pb-12 text-neutral-900 md:max-w-screen-md md:mx-auto">
          <div>
            <div className="flex justify-between">
              <h1 className="text-xl">Hee, {user.email}</h1>
            </div>
            <p className="text-base mt-2">
              In één oogopslag kan je je lijsten, taken en nog veel meer
              bekijken!
            </p>
          </div>

          {/* Snelmenu */}
          <div className="grid gap-4">
            <Title>Snelmenu</Title>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <QuickButton to="/lists/create" title="Creëer lijst">
                <MdAdd className="text-4xl text-white" />
              </QuickButton>
              <QuickButton to="/lists" title="Bekijk lijsten">
                <MdList className="text-4xl text-white" />
              </QuickButton>
              <QuickButton to="/lists" title="Bekijk lijsten">
                <BiTask className="text-4xl text-white" />
              </QuickButton>
              <QuickButton to="/lists" title="Bekijk lijsten">
                <BsGear className="text-4xl text-white" />
              </QuickButton>
            </div>
          </div>

          {/* Openstaande taken */}
          <div className="grid gap-4">
            <Title>Openstaande taken voor vandaag</Title>
            <div className="grid gap-4">
              <Row>Boodschappen</Row>
              <Row>Sporten</Row>
              <Row>Eten</Row>
              <Row>Willekeurig</Row>
            </div>
          </div>

          {/* Openstaande lijsten */}
          <div className="grid gap-4">
            <Title>Openstaande lijsten</Title>
            <div className="grid gap-4">
              <Row>Lijst 1</Row>
              <Row>Lijst 2</Row>
              <Row>Lijst 3</Row>
              <Row>Lijst 4</Row>
            </div>
          </div>
        </div>
      </>
    );
  }
}
