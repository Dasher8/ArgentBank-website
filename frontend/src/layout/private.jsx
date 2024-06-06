import React from "react";
import HeaderPrivate from "../components/header/private";
import Footer from "../components/footer";
import { useDispatch } from 'react-redux';
import { fetchUser } from '../redux/slices/userSlice';
import { useEffect } from "react";

export default function LayoutPrivate({children}) {
    const dispatch = useDispatch();

    useEffect(() => {
      const token = localStorage.getItem('authToken');
      if (token) {
        dispatch(fetchUser(token));
      }
    }, [dispatch]);
    return (
        <>
        <HeaderPrivate/>
        {children}
        <Footer/>
        </>
    )
}