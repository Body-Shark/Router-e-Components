import React from "react";


export default function FooterComponent (params) {
  const {author} = params;
  return(
    <footer className='absolute bottom-0 w-full bg-yellow-500 text-white p-1'>
      <div className='text-center'>
        <p>Direitos Reservados</p>
        <p>{author}</p>
      </div>
    </footer>
  )
}