import { MdAdd, MdList, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { BiTask } from 'react-icons/bi';
import { BsGear } from 'react-icons/bs';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import StyledLink from '../components/StyledLink';
import Loading from '../components/Loading';
import Button from '../components/Button';

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
        <div className="grid gap-8 px-6 pt-6 pb-12 text-gray-700">
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
            <h3 className="text-lg">Snelmenu</h3>
            <div className="grid grid-cols-4 gap-4">
              <Link
                to="/lists/create"
                title="Creëer lijst"
                className="p-2 grid place-items-center bg-glaucous"
              >
                <MdAdd className="text-5xl text-white" />
              </Link>
              <Link
                to="/lists"
                title="Bekijk lijsten"
                className="p-2 grid place-items-center bg-melon"
              >
                <MdList className="text-5xl text-white" />
              </Link>
              <div className="p-2 grid place-items-center bg-glaucous">
                <BiTask className="text-5xl text-white" />
              </div>
              <div className="p-2 grid place-items-center bg-melon">
                <BsGear className="text-5xl text-white" />
              </div>
            </div>
          </div>
          {/* Eind snelmenu */}
          <div className="grid gap-4">
            <h3 className="text-lg">Openstaande taken voor vandaag</h3>
            <div className="grid gap-4">
              <div className="flex justify-between bg-melon rounded-md shadow-md px-3 py-2">
                <p className="text-base text-white">Boodschappen</p>
                <MdKeyboardDoubleArrowRight className="text-2xl text-white" />
              </div>
              <div className="flex justify-between bg-glaucous rounded-md shadow-md px-3 py-2">
                <p className="text-base text-white">Sporten</p>
                <MdKeyboardDoubleArrowRight className="text-2xl text-white" />
              </div>
              <div className="flex justify-between bg-melon rounded-md shadow-md px-3 py-2">
                <p className="text-base text-white">Eten</p>
                <MdKeyboardDoubleArrowRight className="text-2xl text-white" />
              </div>
              <div className="flex justify-between bg-glaucous rounded-md shadow-md px-3 py-2">
                <p className="text-base text-white">Willekeurig item</p>
                <MdKeyboardDoubleArrowRight className="text-2xl text-white" />
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <h3 className="text-lg">Openstaande lijsten</h3>
            <div className="grid gap-4">
              <div className="flex justify-between bg-melon rounded-md shadow-md px-3 py-2">
                <p className="text-base text-white">Boodschappen</p>
                <MdKeyboardDoubleArrowRight className="text-2xl text-white" />
              </div>
              <div className="flex justify-between bg-glaucous rounded-md shadow-md px-3 py-2">
                <p className="text-base text-white">Sporten</p>
                <MdKeyboardDoubleArrowRight className="text-2xl text-white" />
              </div>
              <div className="flex justify-between bg-melon rounded-md shadow-md px-3 py-2">
                <p className="text-base text-white">Eten</p>
                <MdKeyboardDoubleArrowRight className="text-2xl text-white" />
              </div>
              <div className="flex justify-between bg-glaucous rounded-md shadow-md px-3 py-2">
                <p className="text-base text-white">Willekeurig item</p>
                <MdKeyboardDoubleArrowRight className="text-2xl text-white" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
