import './Input.css'

interface InputProps {
  size: string
  placeHolder: string
}

function Input({ size = 'medium', placeHolder, ...rest }: InputProps) {
  return (
    <>
      <input
        type="text"
        className={`input ${size} `}
        placeholder={placeHolder}
        {...rest}
      />
    </>
  )
}

export default Input
