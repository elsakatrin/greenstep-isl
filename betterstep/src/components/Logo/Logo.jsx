import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/logo-small.svg";
import style from "./Logo.module.css"














const Logo = () => {
    return ( 
        <>
            <Image className={ style.styleme} src={logo} alt="logo" width={45} height={45}/>
        </>
     );
}
 
export default Logo;