import * as React from "react";
import './styles.scss';
import AnbukoLogo from '../../../assets/anbuko.svg';

interface LogoProps {
    size: number,
    color?: string
}

export default function Logo ({size} : LogoProps) {
return(
    <img style={{width: size}} src={AnbukoLogo} alt='Anbuko Logo'/>
) 
}