import { RouterProvider, BrowserRouter, Routes, Route } from "react-router";
import Login from "./layouts/Login_layout";
import Register from "./pages/Register";
import Beranda from "./layouts/Beranda_layout";
import SemuaProduk from "./layouts/Kategori_layout";
import {router} from './routes';
import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
