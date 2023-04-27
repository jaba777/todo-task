import React from 'react'
import BlackBackground from '../Components/BlackBackground';
import TodoIcon from '../Images/Group3.png';
import './Index.scss'
import { useNavigate } from 'react-router-dom';

const Index = () => {

  const navigate=useNavigate();

  const moveSignPage=()=>{
    navigate('/sign-in')
  }

  return (
    <BlackBackground>
      <div className='container'>
        <div className='box'>
            <div className="image">
                <img src={TodoIcon} alt="Todo Icon" />
            </div>
            <div className="text">
                <h1>keep track of daily tasks in life</h1>
            </div>
        </div>
        <div className="box">
              <button onClick={moveSignPage}>get started</button>
            
        </div>
      </div>
    </BlackBackground>
  )
}

export default Index;
