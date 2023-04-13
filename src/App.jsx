import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Home from './pages/Home';
import UnknownPage from './pages/404';
import Loading from './components/Loading';
import Header from './components/Header';
import Footer from './components/Footer';

const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

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
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/terms-of-service" element={<h1>TOS</h1>} />
            <Route
              exact
              path="/privacy-policy"
              element={<h1>PRIVACY POLICY</h1>}
            />
            <Route path="*" element={<UnknownPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
