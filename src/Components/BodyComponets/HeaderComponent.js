import React from "react";
import {Link} from 'react-router-dom'



export default function HeaderComponent (params) {
  const {title} = params;
  return(
    <header>
      <div className='bg-yellow-400 p-4'>
        <div className='w-4/5 mx-auto'>
          <div>
            <h1 className='text-white text-2xl'>{title}</h1>
          </div>
          <div className='float-right relative -top-7 text-white'>
            <ul className='float-right'>
              <li className='float-left mx-3'>
                <Link to='/home'>
                  Home
                </Link>
              </li>
              <li className='float-left mx-3'>
                <Link to='/'>
                  Login
                </Link>
              </li>
              <li className='float-left mx-3'>
                Contact
              </li>
            </ul>
          </div>
        </div>
      </div>  
    </header>
  )
}