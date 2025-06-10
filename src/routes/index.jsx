import { createBrowserRouter } from "react-router";
import Beranda from "../pages/Beranda";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Kategori from "../pages/Kategori";
import DetailProduk from "../pages/DetailProduk";
import Metode from "../pages/Metode";
import Bayar from "../pages/Bayar";
import UbahMetodePembayaran from "../pages/UbahMetodePembayaran";
import Selesai from "../pages/Selesai";
import Pesanan from "../pages/Pesanan";
import Kelas from "../pages/Kelas";
import Profil from "../pages/Profil";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Beranda />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/kategori",
        element: <Kategori />,
    },
    {
        path: "/detailProduk",
        element: <DetailProduk />,
    },
    {
        path: "/metode",
        element: <Metode />,
    },
    {
        path: "/bayar",
        element: <Bayar />,
    },
    {
        path: "/ubahMetode",
        element: <UbahMetodePembayaran />,
    },
    {
        path: "/selesai",
        element: <Selesai />,
    },
    {
        path: "/pesanan",
        element: <Pesanan />,
    },
    {
        path: "/kelas",
        element: <Kelas />,
    },
    {
        path: "/profil",
        element: <Profil />,
    },
]);
