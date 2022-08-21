import React from "react";
import './Button.css'

export const Button = (props:any) => {
    const htmlFor = `${props.label} - ${Math.random()}`

    return (
        <div className={'Button'} onClick={props.onClick}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <div
                id={htmlFor}
            ></div>
        </div>
    )
}


// import React, {FC} from "react";
// import './Button.css'
//
// interface ButtonProps {
//     label: string;
//     onClick: React.MouseEventHandler<HTMLDivElement>;
// }
//
// export const Button: FC<ButtonProps> = ({label, onClick}) => {
//     const htmlFor = `${label} - ${Math.random()}`
//     return (
//         <div className={'Button'} onClick={onClick}>
//             <label htmlFor={htmlFor}>{label}</label>
//             <div
//                 id={htmlFor}
//             ></div>
//         </div>
//     )
// }