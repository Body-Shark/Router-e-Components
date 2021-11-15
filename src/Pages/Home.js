import React from "react";
import HeaderComponent from "../Components/BodyComponets/HeaderComponent";
import FooterComponent from "../Components/BodyComponets/FooterComponent";

function Home (params) {
  const {userData} = params;
  return(
    <div>
      <HeaderComponent title='Titulo do meu site'/>
      <div className='text-center p-16'>
        <h2 className='text-3xl'>Welcome {userData.userName}</h2>
      </div>
      <FooterComponent author='fernandonunesjs@hotmail.com'/>
    </div>
  )
}

export default Home;