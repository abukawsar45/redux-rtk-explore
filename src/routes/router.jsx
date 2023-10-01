import { createBrowserRouter } from 'react-router-dom';
import App from './../App';
import Main from '../layout/Main';
import Feed from '../pages/Feed';
import SinglePostCard from '../component/singlePostCard/singlePostCard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <h3>Error: 404</h3>,
    children: [
      {
        path: '/',
        element: <Feed />,
      },
      {
        path: '/posts/:id',
        element: <SinglePostCard/>
      }
    ],
  },
]);

export default router;