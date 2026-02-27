import React from 'react';

export const InfoSection: React.FC = () => {
    return (
        <section className="grid lg:grid-cols-2">
            <div className="bg-secondary p-12 lg:p-24 text-white flex flex-col justify-center">
                <h2 className="font-display text-4xl mb-12">Informations Pratiques</h2>
                <div className="space-y-10">
                    <div className="flex items-start space-x-6">
                        <span className="material-icons text-primary">location_on</span>
                        <div>
                            <h6 className="font-bold uppercase tracking-widest text-[10px] mb-2">Adresse</h6>
                            <p className="text-white/70 text-sm leading-relaxed">4 Place Graslin, 44000 Nantes<br />Face au Théâtre Graslin</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-6">
                        <span className="material-icons text-primary">schedule</span>
                        <div>
                            <h6 className="font-bold uppercase tracking-widest text-[10px] mb-2">Horaires d'Ouverture</h6>
                            <p className="text-white/70 text-sm">7j/7 — de 07h30 à 00h30</p>
                            <p className="text-white/50 text-[10px] mt-1 uppercase tracking-wide">Service continu : Brasserie, Salon de Thé, Bar</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-6">
                        <span className="material-icons text-primary">phone</span>
                        <div>
                            <h6 className="font-bold uppercase tracking-widest text-[10px] mb-2">Réservations</h6>
                            <p className="text-white/70 text-sm">+33 (0)2 51 84 94 94</p>
                        </div>
                    </div>
                </div>
                <div className="mt-16 flex space-x-4">
                    {/* Social Icons Placeholder */}
                    <div className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition group cursor-pointer">
                        <span className="material-icons text-white text-lg">camera_alt</span>
                    </div>
                    <div className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition group cursor-pointer">
                        <span className="material-icons text-white text-lg">facebook</span>
                    </div>
                </div>
            </div>
            <div className="h-[400px] lg:h-auto grayscale contrast-125 brightness-90 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-300 flex items-center justify-center overflow-hidden">
                    <img
                        alt="Plan de Nantes"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuARFrInU3aRf1MMT9CXHSVPp4Na8zGNgYM_Txz3Cb9li5fFYUgXUHhhKHVfgQpgkeVDgeC1tY134FoVP28liOEPF0JEN2uNWR2XD1Wlcn3UhL1afrV7sTiVhfHcr62RCCz2RO61OrfRSm7YX7093oKDG4UUX7NWLkYUsepMGNxfez7seT3px2N8qGOMBGvdlbuB8wU0YIkYCC2Zs6bjwX1D9Igd53L6hBTU58rnjQUfF47yw6UxS6pDSubsJiKFn5d3Hb-hWXGrJto"
                    />
                    <div className="absolute z-10 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-2xl border-4 border-white animate-pulse">
                        <span className="material-icons text-white">restaurant</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
