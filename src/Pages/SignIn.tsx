import React,{useContext} from 'react'
import { useForm } from "react-hook-form";
import BlackBackground from '../Components/BlackBackground';
import './SignIn.scss';
import AddPhoto from '../Images/add_a_photo_FILL0_wght400_GRAD0_opsz48.png';
import {AuthContext} from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';


type login = {
    photo: FileList;
    name: string;
  }

const SignIn = () => {

    const login = useContext(AuthContext);
    const navigate=useNavigate();

    const {register,handleSubmit,formState: { errors }} = useForm<login>();

      const LoginHandler= async (event: any)=>{
        
        try {

            login?.login({
              photo: event.photo[0],
              name: event?.name
            })
            navigate('/profile')
           
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
                {...register("photo", { required: true })}/>
              </label>
            </div>
            {errors?.photo && <p className='error'>Please select a file.</p>}
            <div className="username-container">
              <label>
                fill in your name
               </label>
                <input type="text"  placeholder='your name' 
                {...register("name",{ required: true })}/>
            </div>
            {errors?.name && errors?.name.type === "required" &&<p className='error'>Please fill name</p>}

            <div className="sign-btn">
                <button>sign in</button>
            </div>
       </form>
      </div>
    </BlackBackground>
  )
}

export default SignIn
