import React from "react";
import HeaderPrivate from "../components/header/private";
import Footer from "../components/footer";

export default function LayoutPrivate({children}) {
    return (
        <>
        <HeaderPrivate/>
        {children}
        <Footer/>
        </>
    )
}