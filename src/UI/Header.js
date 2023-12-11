import React from 'react'
import { Logo } from '../Assets'

export default function Header() {
  return (
    <header className='bg-accent py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img src={Logo} alt='Logo' className='w-40'/>
          </a>
          <button className='btn btn-sm text-black font-bold uppercase'>Work with me</button>
        </div>
      </div>
    </header>
  )
}
