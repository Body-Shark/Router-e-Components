import React, { Component } from "react";
import Password from "../Components/FormComponents/Password";
import TextInput from "../Components/FormComponents/TextInput";
import ButtonComponent from "../Components/FormComponents/ButtonComponent";

class LoginPage extends Component{

  intialState = {
    userName:'',
    userPassword:''
  }

  state = this.intialState

  handleChange = (event) => {
    const {name, value} = event.target;

    this.setState({
      [name]:value
    })
  }

  handleSubmitForm = (event) => {
    this.props.handleSubmit(this.state);
    this.setState(this.intialState);
  }


  render() { 
    const {userName, userPassword} = this.state;
    return( 
      <div className='w-screen '>
        <div className='flex items-center justify-center p-8 w-full'>
          <i className='bx bxs-user-badge text-4xl' ></i>
          <h1 className='text-3xl'>User Login</h1>
        </div>
        <form className='w-1/2 p-16 grid mx-auto'>
          <TextInput label='Nome:' userName={userName} onChange={this.handleChange}/>
          <Password label='Senha:' userPassword={userPassword} onChange={this.handleChange}/>
          <ButtonComponent label='Entrar' handleSubmitForm={this.handleSubmitForm} link='/home'/>
        </form>
      </div>
    )
  }
  
}


export default LoginPage;