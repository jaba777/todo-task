import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { createListContext } from '../auth/DailyContext';
import {MoodEffectContext} from '../auth/MoodEffect';
import './Header.scss';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { BiMenu } from "react-icons/bi";

import Switch from "react-switch";



interface User {
  name: string | undefined;
  photo: string | FileList |undefined;
}

const Header = () => {
  const currentUser = useContext(AuthContext);
  const crrentList = useContext(createListContext);
  const [userData, setUserData] = useState<User>({ name: undefined, photo: undefined });
 const navigate = useNavigate();
 const useMoodEffect=useContext(MoodEffectContext)

  useEffect(() => {
    setUserData({
      ...userData,
      name: currentUser?.currentUser?.name,
      photo: currentUser?.currentUser?.photo
    });
  }, [currentUser?.currentUser?.name]);

  // set a default image URL or use a placeholder image if userData.photo is undefined or not a string
  const imageUrl = userData?.photo && typeof userData?.photo === 'string' ? userData.photo : 'default-image-url';


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const Logout=()=>{
    currentUser?.setCurrentUser(null);
    crrentList?.setCurrenList(null)
    useMoodEffect?.setEffect('light')
    navigate('/');
  }


  

  const [checked,setChecked]=useState(false);
  
  function effectchange(){
    
   useMoodEffect?.setEffect((curr:string)=>curr === 'light' ? 'dark' : 'light')
  }

  const menuHandler=()=>{
    setChecked(!checked)
  }
 

  return (
    <>
      <header className="header">
        <section className="header-section">
          <div className="logo">
            <h1>to do</h1>
          </div>
          <div className="menuIcon">
          <BiMenu onClick={menuHandler} />
          </div>
          <div className="lists">
           
            <ul className={`${checked ? 'visible' : 'hidden'}`}>
              <li>
              <Switch onChange={effectchange} checked={useMoodEffect?.effect==='dark'} />
              
              </li>
              <li>{userData?.name}</li>
              
              <li>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                >
                  <img src={imageUrl} alt="" className="nav-link dropdown-toggle" />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClick={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={Logout}>Logout</MenuItem>
              </Menu>
              </li>
              
            </ul>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;