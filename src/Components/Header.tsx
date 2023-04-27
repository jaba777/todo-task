import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import './Header.scss';

interface User {
  name: string | undefined;
  photo: string | FileList |undefined;
}

const Header = () => {
  const currentUser = useContext(AuthContext);
  const [userData, setUserData] = useState<User>({ name: undefined, photo: undefined });

  useEffect(() => {
    setUserData({
      ...userData,
      name: currentUser?.currentUser?.name,
      photo: currentUser?.currentUser?.photo
    });
  }, [currentUser?.currentUser?.name]);

  // set a default image URL or use a placeholder image if userData.photo is undefined or not a string
  const imageUrl = userData?.photo && typeof userData?.photo === 'string' ? userData.photo : 'default-image-url';
  useEffect(()=>{
    console.log( userData?.photo)
  },[])

  return (
    <>
      <header className="header">
        <section className="header-section">
          <div className="logo">
            <h1>to do</h1>
          </div>
          <div className="lists">
            <ul>
              <li>{userData?.name}</li>
              <li><img src={imageUrl} alt="" /></li>
            </ul>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;