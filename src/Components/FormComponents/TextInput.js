import React from "react";


export default function TextInput (param) { 
  const {label, onChange, userName} = param;
  return(
    <div className='w-full'>
      <p>{label}</p>
      <input type='text' name='userName' className='w-full h-8 outline-none border border-gray-300 rounded-lg p-4 mb-8' onChange={onChange}
      value={userName}/>
    </div>
  )
}