import React from "react";
import './Button.css'

export const Button = (props:any) => {
    const htmlFor = `${props.label} - ${Math.random()}`

    return (
        <div className={'Button'} onClick={props.onClick}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <div
                id={htmlFor}
                onChange={props.onChange}
            >
               search
            </div>
        </div>
    )
}
