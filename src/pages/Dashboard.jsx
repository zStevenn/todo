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
          <h1>You must sign in to view this page.</h1>
          <Button text="Naar inloggen" to="/login" />
          <StyledLink className="text-sm" to="/register">
            Don't have an account yet? Sign up here
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
              <h1 className="text-xl">Hey, {user.email} !</h1>
            </div>
            <p className="text-base mt-2">
              View your tasks, lists and more all in one place!
            </p>
          </div>

          {/* Snelmenu */}
          <div className="grid gap-4">
            <Title>Quick Menu</Title>
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
            <Title>Open tasks</Title>
            <div className="grid gap-4">
              <Row>Groceries</Row>
              <Row>Gym</Row>
              <Row>Dinner</Row>
              <Row>Free time</Row>
            </div>
          </div>

          {/* Openstaande lijsten */}
          <div className="grid gap-4">
            <Title>Open Lists</Title>
            <div className="grid gap-4">
              <Row>List 1</Row>
              <Row>List 2</Row>
              <Row>List 3</Row>
              <Row>List 4</Row>
            </div>
          </div>
        </div>
      </>
    );
  }
}
