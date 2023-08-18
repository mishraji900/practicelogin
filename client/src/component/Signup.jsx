import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  })
  const initialState = {
    name: '',
    email: '',
    password: ''
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = data
    try {
      const { data } = await axios.post('/register', { name, email, password })
      if (data.error) {
        toast.error(data.error)
      } else {
        setData(initialState)
        toast.success('Register Successful. Welcome!')
        navigate('/Home')
      }
    } catch (error) {
      console.log(error)
    }


  }
  return (
    <div className='bg-[#C8FFE0] p-6 flex flex-col justify-center items-center'>
      <div className='m-4 p-1 text-2xl font-bold border-b-2 border-[#0B666A] text-[#071952]'>
        <h1>Register</h1>
      </div>
      <div className='flex flex-col bg-[#FFEBAD] justify-center items-center px-10 py-5 rounded-2xl border-2 border-[#0B666A] shadow-lg shadow-black '>
        <form action="" onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-6 w-5/6 border-b-2 border-[#0B666A] p-2'>
          <div className='flex flex-col'>
            <label htmlFor="email" className='text-xl py-2 text-[#071952]'>
              <strong>Name</strong>
            </label>
            <input type="text" placeholder='Enter Name'
              autoComplete='off'
              name='email' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} className=' p-2 rounded-xl ' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="email" className='text-xl py-2 text-[#071952]'>
              <strong>email</strong>
            </label>
            <input type="email" placeholder='Enter email'
              autoComplete='off'
              value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className=' p-2 rounded-xl ' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="email" className='text-xl py-2 text-[#071952]'><strong>Password</strong></label>
            <input type="password" name="password" placeholder='password'
              value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} className=' p-2 rounded-xl ' />
          </div>
          <button type="submit" className='bg-[#33BBC5] p-2 px-4 rounded-full w-full hover:bg-[#0B666A] hover:cursor-pointer text-lg font-medium text-white'>Register</button>
        </form>
        <div className='flex flex-col items-center justify-center gap-6 w-5/6 p-2'>
          <p className='text-base font-medium text-center'>Already Have an Account</p>
          <Link to={'/'} className='bg-[#33BBC5] p-2 px-4 rounded-full w-full hover:bg-[#0B666A] hover:cursor-pointer text-lg font-medium text-white text-center'>
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
