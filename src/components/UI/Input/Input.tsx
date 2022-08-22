import React, {FC} from "react";
import "./Input.css"

interface InputProps {
    value: string;
    type: string;
    onChange: React.ChangeEvent<HTMLInputElement>;
}

export const Input: FC<InputProps> = ({value, type, onChange}) =>  {
    const inputType = type
    const htmlFor = `${inputType}-${Math.random()}`

    return (
            <input className={'InputFind'}
                type={inputType}
                id={htmlFor}
                value={value}
                onChange={onChange}
            />
    )
}
