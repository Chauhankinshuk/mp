import React, { useContext, useEffect } from 'react'
import { useState } from "react";
import {Link} from 'react-router-dom'
import { ShopContext } from '../context/shopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [loginData, setFormData] = useState({
    email: "",
    password:""
  });
  const [currentState,seCurrentState]=useState('login');
  const {token ,setToken,navigate ,backendUrl}=useContext(ShopContext);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  }
  const submitHandler = async(event)=>
  {
    event.preventDefault();
    try {
        if(currentState==="login"){
          const response= await axios.post(backendUrl+'/api/user/login',{ email: loginData.email, password: loginData.password })
        
          if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem('token',response.data.token)
            toast.success('Login success')
          }else{
            toast.error(response.data.message)
          }
        }
    } catch (error) {
              console.log(error);
              toast.error(error.message);
    }
  }
  useEffect(()=>{
       if(token) {
        navigate('/')
      }
  },[token])
  return (
   <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              value={loginData.email}
              onChange={changeHandler}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={changeHandler}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-600">
          Do not have an account?{" "}
          <Link onClick={()=>seCurrentState('signUp')} to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
        <p>Forgot your password?</p>
      </div>
    </div> 
  )
}

export default Login