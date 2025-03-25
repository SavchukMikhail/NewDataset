
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import NewsPage from "./pages/NewsPage/NewsPage";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import './App.css';



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
  
]);

function App() {
      return <RouterProvider router={router} />;
    
}

export default App;
