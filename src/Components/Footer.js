import React from 'react'
import { Link } from 'react-router-dom'
import './CssFiles/Game.css'

export default function Footer() {
  return (
    <div className='bg-dark py-5'>
        <h1 className='text-light text-center'>Games<span className='text-warning'>Wallah</span></h1>
        <div className="line"></div>
        <div className="others">
          <Link className='text-white fs-5 text-decoration-none' to='/'>Home</Link>
          <Link className='text-white fs-5 text-decoration-none' to='/'>About Us</Link>
          <Link className='text-white fs-5 text-decoration-none' to='/'>Contact</Link>
          <Link className='text-white fs-5 text-decoration-none' to='/'>FAQ</Link>
          <Link className='text-white fs-5 text-decoration-none' to='/'>Blog</Link>
          <Link className='text-white fs-5 text-decoration-none' to='/'>News</Link>
        </div>
    </div>
  )
}
