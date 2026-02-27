import React from 'react';

interface ButtonProps {
    variant?: 'primary' | 'ghost';
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

/**
 * REUSABLE BUTTON COMPONENT
 * SOURCE: UI_SPECS_HOME.md #4.1 & #4.2
 * Primary: Gold (#B4975A), White text
 * Ghost: White border, White text, Black background on hover
 */
export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    children,
    onClick,
    className = ''
}) => {
    const baseStyles = "px-6 py-3 uppercase tracking-widest font-body font-bold text-xs transition-all duration-300";

    const variants = {
        primary: "bg-primary text-white hover:opacity-90 shadow-sm hover:shadow-md",
        ghost: "border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4",
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};
