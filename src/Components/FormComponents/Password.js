import React from "react";




export default function Password (params) {
  const {label, onChange, userPassword} = params
  return(
    <div>
      <p>{label}</p>
      <input type='password' name='userPassword' className='w-full h-8 outline-none border border-gray-300 rounded-lg p-4 mb-8' onChange={onChange} value={userPassword}></input>
    </div>
  )
}