import React from "react";
import {useEffect, useState,useContext } from "react";
import { ShopContext } from "../context/shopContext";
import {Link} from 'react-router-dom'
import axios from "axios";
import { toast } from "react-toastify";
const SignUp = () => {
  const [currentState,setCurrentState]=useState('signUp');
   const {token ,setToken,navigate ,backendUrl}=useContext(ShopContext);
  const [signupData, setFormData] = useState({
    name:"",
    email: "",
    password:""
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: type === "checkbox" ? checked : value };
    });
  }
  const submitHandler=async(event)=>
  {
    event.preventDefault();
   try {
    if(currentState==="signUp"){
      
      const response= await axios.post(backendUrl+'/api/user/register',{name:signupData.name, email: signupData.email, password: signupData.password })
       if(response.data.success){
                  setToken(response.data.token)
                  localStorage.setItem('token',response.data.token)
                  toast.success('Registration Successful and Logged In')
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
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={submitHandler}>
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={signupData.name}
              onChange={changeHandler}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email Address Field */}
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
              value={signupData.email}
              onChange={changeHandler}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password Field */}
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
              value={signupData.password}
              onChange={changeHandler}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Sign-Up Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Footer Link */}
        <p className="mt-6 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link onClick={()=>setCurrentState('login')} to="/login" className="text-blue-600 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignUp;
