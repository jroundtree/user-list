import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AnimateSharedLayout } from "framer-motion";
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListUsers from './components/ListUsers';
import ListUser from './components/ListUser';

function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <div className="container mx-auto flex flex-col m-4">
          <Link className="text-6xl md:text-8xl text-center md:text-left font-bold py-5 mb-4" to="/">UserList</Link>
          <br />
          <div className="flex flex-col lg:flex-row">
            <AnimateSharedLayout>
              <Routes>
                <Route exact path="/" element={<ListUsers />}></Route>
                <Route path="/users" element={<ListUsers />}></Route>
                <Route path="/user-edit/:id" element={<ListUsers />}></Route>
                <Route path="/users/:id" element={<ListUser />}></Route>
              </Routes>
            </AnimateSharedLayout>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
