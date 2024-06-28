"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function SearchBox() {
    const [search, setSearch] = useState();
    const router = useRouter();
    const handleSubmit = (e)=>{
        e.preventDefault();
        router.push(`/search/${search}`);
    }
  return (
    <form className='flex justify-between max-w-6xl px-5 mx-auto' onSubmit={handleSubmit}>
        <input type="text" placeholder='Search keywords...' className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1' onChange={(e)=>setSearch(e.target.value)} value={search} />
        <button className='text-amber-600 disabled:text-gray-600 disabled:cursor-not-allowed' disabled={!search}>Search</button>
    </form>
  )
}

export default SearchBox