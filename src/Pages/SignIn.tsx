import React,{useContext, useEffect} from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm,Controller } from "react-hook-form";
import BlackBackground from '../Components/BlackBackground';
import './SignIn.scss';
import AddPhoto from '../Images/add_a_photo_FILL0_wght400_GRAD0_opsz48.png';
import {userSchema} from '../Validations/UserValidation';
import {AuthContext} from '../auth/AuthContext';

type login = {
    photo: string;
    username: string;
  }

const SignIn = () => {

    const login = useContext(AuthContext);

    const {register,handleSubmit,reset,formState: { errors }} = useForm<login>({
        resolver: yupResolver(userSchema)
      });

      const LoginHandler= async (event: any)=>{
        
        try {
            console.log()
        } catch (error) {
            console.log(error)
        }
      }

      



  return (
    <BlackBackground>
      <div className="sign-container">
       <form onSubmit={handleSubmit(LoginHandler)}>
            <h1>get started</h1>
            <div className="photo-container">
                <h5>add a photo</h5>
                <label>
                 <img src={AddPhoto} alt="" />
                <input type="file" hidden
                {...register('photo')}/>
              </label>
            </div>
            <p>{errors.photo?.message}</p>
            <div className="username-container">
              <label>
                fill in your name
               </label>
                <input type="text"  placeholder='your name' 
                 {...register('username')} />
            </div>
            <p>{errors.username?.message}</p>

            <div className="sign-btn">
                <button>sign in</button>
            </div>
       </form>
      </div>
    </BlackBackground>
  )
}

export default SignIn
