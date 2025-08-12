import React from 'react';

interface InputProps {
  type?: 'text' | 'email' | 'tel' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  error?: string;
  className?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  error,
  className = '',
  required = false,
}) => {
  const baseClasses = 'w-full px-4 py-3 border-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#E4412E] focus:ring-offset-2';
  const normalClasses = 'border-[#6D3434]/30 focus:border-[#E4412E]';
  const errorClasses = 'border-[#E4412E] focus:border-[#E4412E]';
  
  const classes = `${baseClasses} ${error ? errorClasses : normalClasses} ${className}`;
  
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-[#6D3434]">
          {label}
          {required && <span className="text-[#E4412E] ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classes}
        required={required}
      />
      {error && (
        <p className="text-sm text-[#E4412E]">{error}</p>
      )}
    </div>
  );
};

export default Input; 