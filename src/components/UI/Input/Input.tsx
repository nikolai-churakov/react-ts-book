import React, {FC} from "react";
import "./Input.css"

interface InputProps {
    value: string;
    type?: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input: FC<InputProps> = ({value, onChange}) =>  {
    // const inputType = type
    const htmlFor = `${Math.random()}`

    return (
            <input className={'InputFind'}
                // type={inputType}
                id={htmlFor}
                value={value}
                onChange={onChange}
            />
    )
}
