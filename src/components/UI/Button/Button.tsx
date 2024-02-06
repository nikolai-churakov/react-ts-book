import React, {FC} from "react";
import './Button.css'

interface ButtonProps {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const Button: FC<ButtonProps> = ({onClick}) => {
  const htmlFor = `${Math.random()}`
  return (
    <div className={'Button'} onClick={onClick}>
      <div
        id={htmlFor}
      ></div>
    </div>
  )
}