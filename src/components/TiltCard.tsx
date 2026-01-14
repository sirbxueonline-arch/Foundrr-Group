'use client';

import { useRef, useState, MouseEvent } from 'react';

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
}

export default function TiltCard({ children, className = '' }: TiltCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateXValue = ((y - centerY) / centerY) * -5; // Max 5 deg tilt
        const rotateYValue = ((x - centerX) / centerX) * 5;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setOpacity(0);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: 'transform 0.1s ease-out',
            }}
            className={`relative transform-gpu ${className}`}
        >
            {/* Spotlight Effect */}
            <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-20 rounded-[inherit]"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${50 + (rotateY * 10)}% ${50 + (rotateX * -10)}%, rgba(255,255,255,0.06), transparent 40%)`
                }}
            />
            {children}
        </div>
    );
}
