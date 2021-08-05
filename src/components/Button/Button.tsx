import React from 'react';
import style from './Button.module.css'

type ButtonProps = {
    type: "button" | "submit" | "reset" | undefined,
    children: React.ReactNode;
    onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({type, children, onClick}) => {
    return (
        <button className={style.button} onClick={onClick} type={type} >
            {children}
        </button>
    )
};

