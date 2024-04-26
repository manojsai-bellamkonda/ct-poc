'use client'
import { twMerge } from 'tailwind-merge'
export interface ButtonProps {
  buttonStyle?: string
  textStyle?: string
  label: string
  type?: 'primary' | 'secondary'
  onClick: any
}
export const Button = ({
  buttonStyle,
  textStyle,
  label,
  onClick,
  type = 'primary',
}: ButtonProps): React.ReactElement => {
  let defaultButtonStyle =
    type && type == 'secondary'
      ? 'bg-black text-white text-xl'
      : 'bg-white text-grey text-base'
  return (
    <button
      className={twMerge(
        `rounded-[6px] px-24 py-[2px] ${defaultButtonStyle} ${buttonStyle}`
      )}
      type="button"
      onClick={onClick}
    >
      {label && (
        <span
          className={twMerge(
            `leading-[50px] font-semibold text-transform: capitalize ${textStyle}`
          )}
        >
          {label}
        </span>
      )}
    </button>
  )
}
