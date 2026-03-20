import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  children: React.ReactNode;
}

export default function Button({ variant = 'secondary', children, className = '', ...props }: ButtonProps) {
  if (variant === 'primary') {
    return (
      <button
        // className={`group relative bg-[#6E00CC] hover:bg-[#000000] text-white pl-8 pr-2 py-3 rounded-full font-medium flex items-center gap-3 transition-all duration-260 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg overflow-hidden ${className}`}
        className={`group relative bg-[#6E00CC] hover:bg-[#000000] text-white pl-8 pr-2 py-2 rounded-full font-medium flex items-center gap-3 transition-all duration-260 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:shadow-lg overflow-hidden ${className}`}
        {...props}
      >
        {children}
        {/* <div className="flex items-center right-4"> */}
        <span className="relative flex h-9 w-9 shrink-0 items-center justify-center bg-white rounded-full text-[#6E00CC] group-hover:text-[#0E524F] transition-colors duration-260">
          {/* Original arrow – slides out to top-right */}
          <svg
            className="absolute w-5 h-6 transition-transform duration-260 ease-in-out group-hover:translate-x-[200%] group-hover:-translate-y-[200%]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>

          {/* Incoming arrow – slides in from bottom-left */}
          <svg
            className="absolute w-6 h-6 translate-x-[-200%] translate-y-[200%] transition-transform duration-260 ease-in-out delay-100 group-hover:translate-x-0 group-hover:translate-y-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </span>
        {/* </div> */}
      </button>
    );
  }

  const baseStyles = "px-8 py-3 rounded-full font-medium transition-all transform hover:-translate-y-0.5 active:translate-y-0";
  const variants = {
    secondary: "bg-gray-100 text-[#1A1A1A] hover:bg-gray-200",
    outline: "bg-white text-[#1A1A1A] border border-gray-200 hover:border-black",
    dark: "bg-black text-white hover:bg-[#222] shadow-sm",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant as keyof typeof variants] || variants.secondary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
