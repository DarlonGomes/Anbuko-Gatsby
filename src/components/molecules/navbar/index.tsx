import * as React from "react";
import './styles.scss'
import { Logo } from "../../atoms";
export default function NavBar () {
return(
    <div className="navbar">
        <Logo size={32}/>
    </div>
)
}