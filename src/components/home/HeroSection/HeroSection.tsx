import React from 'react';

export const HeroSection: React.FC = () => {
    return (
        <header className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    alt="Intérieur majestueux Art Nouveau"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDehs7gCAiWE-YcT7jEFv-_W2CilfxkRAVeDHtAe2TaVFgF6ZdNLaTXM8JlWr8ZnTlk9VMBwfbI37PFmRPoUKCOfEb8Fk5uV3W6ATMzyz-uSQfICTYLeX28g9EZjh976auZGpjh8vQ4tgbgeD_pw7BcmqW2t_DoqAK6q0-_35zyEpzo638FpY1zRABSprfxz2a53AgU6wAKyhGodb6IcxRfAj1Qt0xWD5EP-t2MJphvdFnKhqMF0FtB2FtiBg1VRur-w9wXxiZ-OIU"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="relative z-10 text-center px-4 max-w-4xl">
                <h1 className="font-display text-5xl md:text-7xl text-white mb-6 leading-tight text-shadow">
                    La Cigale : Un monument vivant au cœur de Nantes
                </h1>
                <p className="text-white text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto italic">
                    Depuis 1895, le plus beau décor de Brasserie au monde vous accueille face à l'Opéra Graslin.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 uppercase tracking-widest text-sm font-bold transition" href="#menus">
                        Découvrir la Carte
                    </a>
                    <a className="bg-primary text-white hover:bg-opacity-90 px-8 py-4 uppercase tracking-widest text-sm font-bold transition" href="#experience">
                        Visite Virtuelle
                    </a>
                </div>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <span className="material-icons text-white text-3xl">expand_more</span>
            </div>
        </header>
    );
};
