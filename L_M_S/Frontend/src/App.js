import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/globals.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CourseList from './pages/CourseList';
import CourseDetail from './pages/CourseDetail';
import AllActivity from './pages/AllActivity';

function AppContent() {
  const location = useLocation();
  const isActivityPage = location.pathname === '/activity';

  return (
    <>
      {!isActivityPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CourseList isAdmin={false} />} />
        <Route path="/admin/courses" element={<CourseList isAdmin={true} />} />
        <Route path="/course/:courseId" element={<CourseDetail isAdmin={false} />} />
        <Route path="/admin/course/:courseId" element={<CourseDetail isAdmin={true} />} />
        <Route path="/activity" element={<AllActivity />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
