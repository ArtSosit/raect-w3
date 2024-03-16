import "./App.css";
import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/loginPage";
import IndexPage from "./pages/indexPage";

const routers = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/index", element: <IndexPage /> },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
