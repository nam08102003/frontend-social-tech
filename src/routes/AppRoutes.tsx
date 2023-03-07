import { Route, Routes } from 'react-router-dom';
import DevPage from '../pages/Dev';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index path="/" element={<DevPage />} />
    </Routes>
  );
};

export default AppRoutes;
