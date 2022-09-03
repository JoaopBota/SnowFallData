import React from "react";
import logo from "../assets/logo.png"

function Footer() {

    return (
        <>
            <div className="flex justify-center px-4 gap-4 font-body">
                <div className="mt-10"><img src={logo} alt="" width="110" height="60"></img></div>
            </div>
            <div className="flex justify-center py-4 gap-4 font-body">
                <div><h1 className="w-full text-m font-bold px-5 py-2">© 2021 Copyright: Joao Bota</h1></div>
            </div>

        </>
    )

}

export default Footer;
