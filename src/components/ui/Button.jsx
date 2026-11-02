export default function Button({
  children,
  className = "",
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` px-[10px] py-[5px] rounded-sm backdrop-blur-[20px] inline-flex items-center justify-center cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}
