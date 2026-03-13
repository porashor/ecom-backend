import {create} from 'zustand'

const useUserFunc = create((set) => ({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    image: null,
    setPhone: (phone) => set({phone}),
    setAddress: (address) => set({address}),
    setImage: (image) => set({image}),
    error1: false,
    error2: false,
    loading: false,
    setName: (name) => set({name}),
    setEmail: (email) => set({email}),
    setPassword: (password) => set({password}),
    register: async (e, name, email, password) => {
        e.preventDefault();
        set({loading: true})
        if (!name || !email || !password) {
            alert('Please fill in all fields');
            set({error: true});
            return;
        }
        //main function load here 
        try{
            const result = await fetch(import.meta.env.VITE_API + '/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'              
                },
                credentials: 'include',
                body: JSON.stringify({username: name, email, password})
                })
            const data = await result.json();
            console.log(data);
            if(result.ok){
                alert(data.message);
                set({name: '', email: '', password: '', error1: false});
                window.location.href = '/';
            }else{
                alert(data.message);
                set({error1: true});
            }
        }catch(err){
            console.log(err)
        }finally{
            set({loading: false})
        }
    },
    logIn: async (e, email, password) => {
        e.preventDefault();
        set({loading: true})
        if (!email || !password) {
            alert('Please fill in all fields');
            set({error2: true});
            return;
        }
        try {
            const result = await fetch(import.meta.env.VITE_API + '/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({ email, password })
            })
            const data = await result.json();
            if (data.success) {
                alert(data.message);
                set({email: '', password: '', error2: false});
                window.location.href = '/';
            } else {
                alert(data.message);
                set({error2: true});
            }
        } catch (error) {
            console.log(error);
        }finally{
            set({loading: false})
        }
    }, 
    accounted: {},
    getUserInfo: async() => {
        try {
            const result = await fetch(import.meta.env.VITE_API + '/auth/data', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
            })
            const data = await result.json();
            set({accounted: data})
        } catch (error) {
            console.log(error);
        }
    },
    updateUser: async (e, phone, address, image) => {
    e.preventDefault();
    set({loading: true})    
    try {
        const formData = new FormData();
        formData.append('phone', phone);
        formData.append('address', address);
        formData.append('photo', image);
        console.log(phone, address, image)
        const result = await fetch(import.meta.env.VITE_API + '/user_profile/update', {
            method: 'POST',
            body: formData,
            credentials: 'include',
        })
        const data = await result.json();
        if(data.success){
            alert(data.message);
            set({accounted: data.profile})
        }
        console.log(data);
    } catch (error) {
        console.log(error);
    }finally{
        set({loading: false})
    }
    },
    logOut: async() => {
        try {
            const result = await fetch(import.meta.env.VITE_API + '/auth', {
                method: 'DELETE',
                credentials: 'include',
            })
            const data = await result.json();
            if(data.success){
                alert(data.message);
                set({accounted: {}})
                window.location.href = '/';
            }
        } catch (error) {
            console.log(error);
        }   
    }
}))


export default useUserFunc