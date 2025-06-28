import { create } from "zustand";
import axios from "axios";

const api_url = import.meta.env.VITE_API_URL;

export const useStore = create((set, get) => ({
    products: [],
    formData: {
        title: "",
        desc: "",
        price: "",
    },
    productEdit: null,

    fetchProduct: async () => {
        const response = await axios.get(`${api_url}/Products`);
        set({ products: response.data });
    },

    handleAdd: async () => {
        const newProduct = get().formData
        const res = await axios.post(`${api_url}/Products`, newProduct);
        set((state) => ({
            products: [ ...state.products, res.data],
            formData:{ title: "", desc: "", price: "" }
        }))
    },

    handleChange: (e) => {
        console.log(e.target.name, e.target.value)
        const { name, value } = e.target;
        set((state) => ({
            formData: { ...state.formData, [name]: value },
        }))
    },

    handleEdit: (product) =>{
        set({
            productEdit: product,
            formData: {
                title: product.title,
                desc: product.desc,
                price: product.price,
            }
        })
    },

    cancelEdit: () => {
        set({
            productEdit: null,
            formData:{
                title: "",
                desc: "",
                price: "",
            }
        })
    },

    handleDelete: async (id) =>  {
        try {
            await axios.delete(`${api_url}/Products/${id}`);
            set((state) => ({
                products: state.products.filter((p) => p.id !== id),
            }))
            console.log("Sukses hapus produk")
        } catch (err) {
            console.log("Gagal delete product:", err)
        }
    }
}));
