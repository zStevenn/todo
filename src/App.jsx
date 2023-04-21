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
const Lists = lazy(() => import('./pages/Lists'));
const CreateList = lazy(() => import('./pages/CreateList'));
const EditList = lazy(() => import('./pages/EditList'));
const ViewList = lazy(() => import('./pages/ViewList'));

function App() {
  return (
    <div className="app flex flex-col min-h-screen">
      <Router>
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/lists" element={<Lists />} />
              <Route exact path="/lists/:listId" element={<ViewList />} />
              <Route exact path="/lists/edit/:listId" element={<EditList />} />
              <Route exact path="/lists/create" element={<CreateList />} />
              <Route exact path="/terms-of-service" element={<h1>TOS</h1>} />
              <Route
                exact
                path="/privacy-policy"
                element={<h1>PRIVACY POLICY</h1>}
              />
              <Route path="*" element={<UnknownPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
