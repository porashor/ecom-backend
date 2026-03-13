import {create} from 'zustand'

export const useProductStore = create((set) => ({
    title: '',
    setTitle: (title) => set({title}),
    desc: '',
    setDesc: (desc) => set({desc}),
    price: '',
    setPrice: (price) => set({price}),
    quantity: '',
    setQuantity: (quantity) => set({quantity}),
    image: null,
    setImage: (image) => set({image}),
    cetagory: '',
    setCetagory: (cetagory) => set({cetagory}),
    brand: '',
    setBrand: (brand) => set({brand}),
    badge: '',
    setBadge: (badge) => set({badge}),
    allProducts: [],
    loading: false,
    uploadProduct: async (e, title, price, cetagory, quantity, brand, badge, image, desc) => {
        e.preventDefault()
        console.log(image)
        if(!title || !price || !cetagory || !quantity || !brand || !badge || !desc){
            alert('Please fill all the fields')
            return
        }
        const formData = new FormData()
        formData.append('title', title)
        formData.append('price', price)
        formData.append('cetagory', cetagory)
        formData.append('quantity', quantity)
        formData.append('brand', brand)
        formData.append('badge', badge)
        formData.append('photo', image)
        formData.append('desc', desc)
        try {
        const response = await fetch(import.meta.env.VITE_API + `/products/upload`, {
            method: 'POST',
            body: formData
        })
        const data = await response.json()
        console.log(data)
        } catch (error) {
            console.log(error)
        }
    },
    getProducts: async () => {
        set({loading: true})
        try {
            const response = await fetch(import.meta.env.VITE_API + '/products')
            const data = await response.json()
            set({allProducts: data})
        } catch (error) {
            console.log(error)
        }finally{
            set({loading: false})
        }
    }
}))


export default useProductStore