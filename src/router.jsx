import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import api from './api';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/:id',
    element: <DetailPage />,
    loader: async ({ params }) => {
      const res = await api.details(params.id).catch(() => null);

      if (!res) {
        return null;
      }

      return res.data;
    },
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
  {
    path: '/404',
    element: <NotFoundPage />,
  },
]);

export default router;
