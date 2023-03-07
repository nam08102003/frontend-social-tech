import { Box, CircularProgress } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ThemeWrapperProvider from './containers/Provider/Theme';
import DevPage from './pages/Dev';
import { store } from './stores';

function App() {
  return (
    <Provider store={store}>
      <ThemeWrapperProvider>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<DevPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeWrapperProvider>
    </Provider>
  );
}

export default App;
