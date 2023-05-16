import NavBar from './components/NavBar';
import AllUsers from './components/AllUsers';
import AddUsers from './components/AddUsers';
import EditUser from './components/EditUser';


import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUsers />} />
        <Route path="/edit/:id" element={<EditUser />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;