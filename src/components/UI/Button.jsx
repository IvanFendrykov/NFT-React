function Btn({ children, className = "", type = "button", ...props }) {
  return (
    <button className={`Btn ${className}`} type={type} {...props}>
      {children}
    </button>
  );
}
export default Btn;
