import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white py-16 px-6 border-t border-gold/20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                <div className="text-center md:text-left">
                    <p className="font-display text-2xl tracking-widest text-secondary mb-2 uppercase">LA CIGALE</p>
                    <p className="text-slate-400 text-[10px] uppercase tracking-widest">© 1895 - 2024 La Cigale. Tous droits réservés.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-widest font-bold text-slate-500">
                    <a className="hover:text-primary transition" href="#">Mentions Légales</a>
                    <a className="hover:text-primary transition" href="#">CGV</a>
                    <a className="hover:text-primary transition" href="#">Confidentialité</a>
                    <a className="hover:text-primary transition" href="#">Presse</a>
                    <a className="hover:text-primary transition" href="#">Recrutement</a>
                </div>
                <div className="flex items-center space-x-6 opacity-60 hover:opacity-100 transition duration-500">
                    <img alt="Maître Restaurateur" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLIrEjAcvFbHCogBUMcDEszGGOeTW3d50yBiTcwMbxC-9uJQfMJilU6lPdM78wYeCL72Rrd9AKb1XXt-_X650lp2E6bJ0Rcx1IFHBsOcdFWcejkyZgZ8tAyQ5d5m88_Nze0WbzLZIPyWeWGlGZXPiux2D8NV6bokMCKsFwhu6dHDQ3MW0PSna-bO91L7x0y60RN9dnTukL0ihgZqfIw1eBzIxY4D07rUCW2ZvaDYD7xj0AQcDjWVJ7GcUjwu5RW1KKrlUb_s9lgRA" />
                    <img alt="Guide Michelin" className="h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi2hMQ_XfDHSCVh4BA5DK3ereBV6LEZYLE8ct4cidTxLMLbSZB92pgOZml1yh4t7eZO2rDw-kg_tivlbO5bxBKsZcRLTNs116YKAvKJVN9OEuBriLGWVuJDk2pZBYy_bO7nIhFyoXX3GZvBvXQr6yd9aAjoa2UbNdpfbeMedZt85XCFy9Jfnukr0Xa9Ufm1JWcOKTeyU_tpwSJ5gSC56Ua_svtLwJ6MWZrmfuRo1XR7nnEr0hr3KdvNmZcmLHQPc_6ubGinZG2gAE" />
                </div>
            </div>
            <div className="mt-12 text-center">
                <p className="text-[10px] text-slate-300 uppercase tracking-widest">Conception & Design — L'Atelier Numérique</p>
            </div>
        </footer>
    );
};
