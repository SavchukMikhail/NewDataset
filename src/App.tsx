
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import NewsPage from "./pages/NewsPage/NewsPage";
import MainPage from "./pages/MainPage/MainPage";
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
  
]);

function App() {
      return <RouterProvider router={router} />;
    
}

export default App;
