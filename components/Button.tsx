import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = React.memo(({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-3 font-heading font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 rounded-sm";
  
  const variants = {
    primary: "bg-titan-gold text-black hover:bg-yellow-400 shadow-[0_0_15px_rgba(251,191,36,0.5)]",
    secondary: "bg-titan-red text-white hover:bg-red-700 shadow-[0_0_15px_rgba(220,38,38,0.5)]",
    outline: "border-2 border-titan-gold text-titan-gold hover:bg-titan-gold hover:text-black"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';