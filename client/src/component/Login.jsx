import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast'

import { useNavigate } from 'react-router-dom'
const initialState = {

  email: '',
  password: ''
};
const Login = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const submitHandlerLogin = async (e) => {
    e.preventDefault()
    const { email, password } = data;
    try {
      const { data } = await axios.post('/', {
        email,
        password
      });
      if (data.error) {
        toast.error(data.error)
      } else {
        setData(initialState)
        toast.success('Login Successful. Welcome!')
        navigate('/Home')
      }

    } catch (error) {
      console.log(error)
    }

    console.log(data)

  }
  return (
    <div className=' bg-[#C8FFE0] h-[100vh] flex flex-col justify-center items-center '>
      <div className='m-4 p-1 text-2xl font-bold border-b-2 border-[#0B666A] text-[#071952]'>
        <h1>Welcome to this Login page!</h1>
      </div>
      <div className='flex flex-col justify-center items-center p-10 rounded-2xl border-2 border-[#0B666A] bg-[#FFEBAD] shadow-lg shadow-black  '>
        <form action="" onSubmit={submitHandlerLogin} className='flex flex-col items-center justify-center gap-6 w-5/6 border-b-2 border-[#0B666A] p-2'>
          <div className='flex flex-col'>
            <label htmlFor="email" className='text-xl py-2 text-[#071952]' ><strong>Email</strong></label>
            <input type="email" name="email" placeholder='Enter email...' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className=' p-2 rounded-xl ' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="email" className='text-xl py-2 text-[#071952]'><strong>Password</strong></label>
            <input type="password" name="password" placeholder='password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} className=' p-2 rounded-xl '/>
          </div>
          <button className='bg-[#33BBC5] p-2 px-4 rounded-full w-full hover:bg-[#0B666A] hover:cursor-pointer text-lg font-medium text-white'>LogIn</button>
        </form>
        <div className='flex flex-col items-center justify-center gap-6 w-5/6 p-2'>
        <Link to={'/register'} className='bg-[#33BBC5] p-2 px-4 rounded-full w-full hover:bg-[#0B666A] hover:cursor-pointer text-lg font-medium text-white text-center'><button>SignUp</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Login
