import "./App.css";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/loginPage";
import IndexPage from "./pages/index/indexPage";
import AllUserPage from "./pages/all/alluser";
import AllLandmarkPage from "./pages/all/alllandmark";
const routers = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/index", element: <IndexPage /> },
  { path: "/allUser", element: <AllUserPage /> },
  { path: "/allLandmark", element: <AllLandmarkPage /> },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
