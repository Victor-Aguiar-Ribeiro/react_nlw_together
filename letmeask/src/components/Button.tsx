import { ButtonHTMLAttributes } from "react"

import '../styles/buttons.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button( props: ButtonProps ) {
  return (
    <button id="btn" {...props} />
  )
}