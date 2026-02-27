import React from 'react';

export const EventsSection: React.FC = () => {
    return (
        <section className="relative py-32 overflow-hidden" id="salons">
            <div className="absolute inset-0">
                <img
                    alt="Salons privés luxueux"
                    className="w-full h-full object-cover grayscale-[30%]"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_JPGlBV3lqtG0el71jkS_NQULyIlXaWBKVZSMIHayU24kTFsDXLLjWTX3bI7_I3MwHYJ40FBg17gsjaqDzq6C1IJOhjn8aFLj6RTG09yBbMoyyiZ2Aou0QcuKR03DxmP1Io3k6lz02_489uU-BY527mh94ri9QEOVmmLx3e95_P1BG3yDKKPlukQ1k0xG7szQSlO5MkJmCMQZRkHSouv2zRN2sxwrtvIVCrkBRIWxk9_m5m4JrEKw5NYW3P1yDoRJT8m8PlnkKBg"
                />
                <div className="absolute inset-0 bg-secondary/80"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <h2 className="font-display text-4xl md:text-6xl text-white mb-8">Vos événements dans un cadre classé</h2>
                <p className="text-white/80 max-w-2xl mx-auto mb-12 font-light text-xl">
                    Séminaires, mariages, déjeuners d'affaires ou dîners de gala : nos salons historiques offrent un prestige incomparable à vos réceptions.
                </p>
                <a className="inline-block bg-white text-secondary hover:bg-primary hover:text-white px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold transition shadow-xl" href="#">
                    Demander un devis personnalisé
                </a>
            </div>
        </section>
    );
};
