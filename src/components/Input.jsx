const Input = ({ type, value, onChange, className, placeholder, icon }) => {
  const inputClasses = `bg-transparent text-neutral-700 focus:outline-none placeholder-neutral-700 invalid:border-secondary invalid:text-secondary m-0 w-full ${className}`;

  return (
    <label className="flex items-center border-b border-neutral-700 p-1 required:border-red-500 w-full">
      {icon && <span className="mr-3 text-xl text-neutral-700">{icon}</span>}
      <span className="sr-only">{placeholder}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClasses}
      />
    </label>
  );
};

export default Input;
