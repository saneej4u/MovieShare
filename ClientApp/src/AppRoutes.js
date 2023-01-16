import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { VideoList } from "./components/VideoList";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
    {
        path: '/video',
        requireAuth: true,
        element: <VideoList />
    },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
