import { Route, Routes } from 'react-router-dom';
import Login from '../pages/auth';
import Homepage from '../pages/home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
