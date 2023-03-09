import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ThemeWrapperProvider from './containers/Provider/Theme';
import AppRoutes from './routes/AppRoutes';
import { store } from './stores';

function App() {
  return (
    <Provider store={store}>
      <ThemeWrapperProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeWrapperProvider>
    </Provider>
  );
}

export default App;
