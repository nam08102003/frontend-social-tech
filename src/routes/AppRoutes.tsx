import { Route, Routes } from 'react-router-dom';
import Auth from 'pages/auth';
import Homepage from 'pages/home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default AppRoutes;
