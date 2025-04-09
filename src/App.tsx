
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import NewsPage from "./pages/NewsPage/NewsPage";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import './App.css';
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
  },
  {
    path: "/news",
    element: <NewsPage/>,
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/registration",
    element: <RegistrationPage/>,
  },
  
]);

function App() {
      return <RouterProvider router={router} />;
    
}

export default App;
