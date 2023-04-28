import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';


export default function PrivateRoute(){
    const currentUser = JSON.parse(localStorage.getItem("user") || 'null') as boolean;

    useEffect(()=>{
        console.log(currentUser==null)
    },[currentUser])

    return currentUser !== null ? <Outlet /> : <Navigate to='/' />
}