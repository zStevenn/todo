import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

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
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
