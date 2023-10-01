import { createBrowserRouter } from 'react-router-dom';
import App from './../App';
import PostCard from '../component/PostCard';
import Main from '../layout/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <h3>Error: 404</h3>,
    children: [
      {
        path: '/',
        element: <PostCard />,
      },
    ],
  },
]);

export default router;