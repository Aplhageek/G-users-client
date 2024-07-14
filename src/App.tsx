import { Toaster } from 'react-hot-toast';
import './App.css';
import HomePage from './pages/Home/Home';
import RepositoryPage from './pages/RepositoryPage/RepositoryPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FriendsPage from './pages/FriendsPage/FriendsPage';

function App() {
  return (
    <div className='app_container'>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/repository/:username/:repoName" element={<RepositoryPage />} />
          <Route path="/friends/:username" element={<FriendsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
