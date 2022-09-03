import React, { useState } from "react";
import "./Navbar.css"
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { Link } from 'react-router-dom';
import logo from "../assets/favicon.png"

const Navbar = () => {

    return (
        <nav className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center font-body font-bold  ">
            <a class="flex title-font font-medium items-center text-black mb-4 md:mb-0">
                <img src={logo} ></img>
                <span class="ml-3 text-xl">SnowCore</span>
            </a>
            <ul class="md:ml-auto flex flex-wrap items-center text-base justify-center gap-10">
                <Link to="/" class="mr-5 hover:text-slate-400">Home</Link>
                <Link to="/profile" class="mr-5 hover:text-slate-400">Profile</Link>
                <Link to="/contact" class="mr-5 hover:text-slate-400">Contact</Link>
                <LoginButton />
                <LogoutButton />
            </ul>
        </nav>
    )

}

export default Navbar