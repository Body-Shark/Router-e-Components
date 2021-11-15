import React from "react";
import {Link} from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function ButtonComponent (params) {
  const {label, handleSubmitForm, link} = params;
  return(
    <div>
      <Stack spacing={2} direction="row">
        <Link to={link} className='w-full'>
          <Button variant="contained" className='w-full' sx={{
          backgroundColor:'gold',
          color:'black',
          "&:hover":{
            backgroundColor:'gold'
          }
          }} onClick={handleSubmitForm}>{label}</Button>
        </Link>
      </Stack>
    </div>
  )
}