import {
  MdAdd,
  MdList,
  MdKeyboardDoubleArrowRight,
  MdLogout,
} from 'react-icons/md';
import { BiTask } from 'react-icons/bi';
import { BsGear } from 'react-icons/bs';
import Layout from '../components/Layout.jsx';
import { useNavigate } from 'react-router-dom';
import { logout, auth } from '../firebase.jsx';
import { useEffect } from 'react';

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/');
      }
    });
    return unsubscribe;
  }, [navigate]);

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Layout>
      <div className="grid gap-8 px-6 pt-6 pb-12 text-gray-700">
        <div>
          <div className="flex justify-between">
            <h1 className="text-xl">Hee user,</h1>
            <MdLogout className="text-3xl" onClick={handleLogout} />
          </div>
          <p className="text-base mt-2">
            In één oogopslag kan je je lijsten, taken en nog veel meer bekijken!
          </p>
        </div>
        <div className="grid gap-4">
          <h3 className="text-lg">Snelmenu</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="p-2 grid place-items-center bg-glaucous">
              <MdAdd className="text-5xl text-white" />
            </div>
            <div className="p-2 grid place-items-center bg-melon">
              <MdList className="text-5xl text-white" />
            </div>
            <div className="p-2 grid place-items-center bg-glaucous">
              <BiTask className="text-5xl text-white" />
            </div>
            <div className="p-2 grid place-items-center bg-melon">
              <BsGear className="text-5xl text-white" />
            </div>
          </div>
        </div>
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
    </Layout>
  );
}
