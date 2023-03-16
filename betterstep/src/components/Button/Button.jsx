import styles from './Button.module.css'
const Button = ({ children, onClick, type, className }) => {
  return (
    <button
      className={[styles.button, className].join(' ')}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
