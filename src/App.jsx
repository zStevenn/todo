import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

function App() {
  // const [userData, setUserData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const querySnapshot = await getDocs(collection(db, 'users'));
  //     const users = [];
  //     querySnapshot.forEach((doc) => {
  //       users.push({
  //         id: doc.id,
  //         born: doc.data().born,
  //         first: doc.data().first,
  //         last: doc.data().last,
  //       });
  //     });
  //     setUserData(users);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" component={SignIn} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
