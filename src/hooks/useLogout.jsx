import { logout } from '../firebase';

export const handleLogout = async (e) => {
  e.preventDefault();

  try {
    await logout();
    navigate('/');
  } catch (error) {
    console.log(error.message);
  }
};
