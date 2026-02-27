import React from 'react';

export const Header: React.FC = () => {
    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gold transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <a className="text-2xl font-display font-bold tracking-widest text-secondary" href="#">LA CIGALE</a>
                        <div className="hidden lg:flex space-x-6 text-xs uppercase tracking-widest font-semibold">
                            <a className="hover:text-primary transition" href="#experience">L'Expérience</a>
                            <a className="hover:text-primary transition" href="#menus">Menus</a>
                            <a className="hover:text-primary transition" href="#salons">Privatisations</a>
                            <a className="hover:text-primary transition" href="#boutique">La Boutique</a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-1 text-xs uppercase tracking-widest font-semibold text-secondary">
                            <span className="material-icons text-sm">language</span>
                            <span>FR</span>
                        </button>
                        <a className="bg-primary hover:bg-opacity-90 text-white px-6 py-3 text-xs uppercase tracking-widest font-bold transition shadow-lg" href="#reservation">
                            Réserver
                        </a>
                    </div>
                </div>
            </nav>

            {/* Right side floating booking button */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
                <a className="bg-secondary text-white py-6 px-2 [writing-mode:vertical-lr] rotate-180 uppercase tracking-widest text-xs font-bold hover:bg-primary transition-all duration-300 flex items-center gap-2" href="#reservation">
                    <span className="material-icons rotate-90">event</span>
                    Réservations
                </a>
            </div>
        </>
    );
};
