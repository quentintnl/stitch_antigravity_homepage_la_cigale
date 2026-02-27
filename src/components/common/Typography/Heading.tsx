import React from 'react';

interface HeadingProps {
    level?: 1 | 2 | 3 | 4;
    children: React.ReactNode;
    className?: string;
    light?: boolean;
}

/**
 * REUSABLE HEADING COMPONENT
 * SOURCE: UI_SPECS_HOME.md #2
 * H1: 72px (text-7xl), line-height tight, shadow (if light)
 * H2: 48px (text-5xl)
 * H3: 30px (text-3xl)
 */
export const Heading: React.FC<HeadingProps> = ({
    level = 2,
    children,
    className = '',
    light = false
}) => {
    const baseStyles = "font-display leading-tight";
    const colors = light ? "text-white" : "text-secondary";

    const levels = {
        1: `text-5xl md:text-7xl ${light ? 'text-shadow' : ''}`,
        2: "text-4xl md:text-5xl",
        3: "text-2xl md:text-3xl",
        4: "text-xl md:text-2xl",
    };

    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return (
        <Tag className={`${baseStyles} ${colors} ${levels[level]} ${className}`}>
            {children}
        </Tag>
    );
};
