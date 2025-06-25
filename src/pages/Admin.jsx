import { useEffect, useState } from "react";
import axios from "axios";
import Admin_layout from "../layouts/Admit_layout";
import Create_product from "../components/organisems/Create_product";
import Product_list from "../components/organisems/Product_list";
const Admin = () => {
    const timeStamp = Date.now()
    console.log(timeStamp)

    const [products, setProducts] = useState([]);
    const [productEdit, setProductEdit] = useState(null);
    const api_url = import.meta.env.VITE_API_URL;
    useEffect(() => {
        axios
            .get(`${api_url}/Products`)
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
            })
            .catch((error) => console.error(error));
    }, [api_url]);

    const handleAdd = () => {
        const newProduct = {
            ...product,
            // id:
        }
    };

    const handleEdit = (product) => {
        setProductEdit(product);
        // console.log(product)
    };

    const handleUpdate = () => {}

    const handleDelete = () => {};

    return (
        <Admin_layout>
            <div className="relative top-20 mb-16 grid py-7 px-5 gap-6 sm:max-w-[1440px] sm:mx-auto sm:px-30 sm:py-16">
                {/* Title & desc */}
                <div className="grid">
                    <h1 className="text-4xl font-bold">Admin Dashboard</h1>
                    <p>Welcome to admin dashboard</p>
                </div>
                {/* Table Create Item */}
                <Create_product
                    onSubmit={productEdit ? handleUpdate : handleAdd}
                    mauEdit={productEdit}
                    mauCancel={
                        productEdit ? () => setProductEdit(null) : undefined
                    }
                />
                {/* Product List */}
                <Product_list
                    products={products}
                    editProduct={handleEdit}
                    deleteProduct={``}
                />
            </div>
        </Admin_layout>
    );
};

export default Admin;
