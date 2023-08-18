import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/userContext';

const Home = () => {
  const { user } = useContext(UserContext);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (user) {
      setUserName(user.name);
    }
  }, [user]);

  return (
    <div className='bg-[#C8FFE0] h-[100vh] flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center p-10 rounded-2xl border-2 border-[#0B666A] bg-[#FFEBAD] shadow-lg shadow-black'>
        <h1 className='text-5xl font-bold p-4 text-[#071952]'>Dashboard</h1>
        {!!user && <h2 className='capitalize text-7xl font-extrabold text-[#071952]'>Hii {userName}!</h2>}
      </div>
    </div>
  );
};

export default Home;
