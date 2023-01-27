import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { store } from './store';
import GlobalStyle from './styles/globalStyle';
import { Loading } from './components/Loading';
import { Layout } from './components/Layout';
import { ListUsers } from './pages/ListUsers';
import { AddUser } from './pages/AddUser';
import { NotFound } from './pages/NotFound';

export function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyle />
        <ToastContainer />
        <Loading />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ListUsers />} />
            <Route path="add_user" element={<AddUser />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}
