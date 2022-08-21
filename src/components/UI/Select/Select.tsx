import React, {FC} from "react";
import './Select.css'
import {BaseSelect} from "../../../types";

interface SelectProps {
    label: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    options: BaseSelect[];
}

export const Select: FC<SelectProps> = ({label, value, onChange, options}) => {
    const htmlFor = `${label} - ${Math.random()}`

    return (
        <div className={'Select'}>
            <label htmlFor={htmlFor}>{label}</label>
            <select
                id={htmlFor}
                value={value}
                onChange={onChange}
            >
                {options.map((option: any, index: number) => {
                    return (
                        <option
                            value={option.value}
                            key={option.value + index}
                        >
                            {option.text}
                        </option>
                    )
                })
                }
            </select>
        </div>
    )
}