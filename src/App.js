import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Upload from './pages/Upload';

function App() {
  const [users, setUsers] = useState([])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home users={users} setUsers={setUsers} />} />
        <Route path="/upload" exact element={<Upload />} />
      </Routes>
    </Router>
  );
}

export default App;
