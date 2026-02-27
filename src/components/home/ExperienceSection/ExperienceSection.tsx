import React from 'react';

export const ExperienceSection: React.FC = () => {
    return (
        <section className="py-24 px-6 overflow-hidden" id="experience">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="text-primary uppercase tracking-[0.3em] text-sm font-bold block mb-4">Patrimoine & Gastronomie</span>
                    <h2 className="font-display text-4xl md:text-5xl text-secondary">L'Art de Vivre Nantais</h2>
                </div>

                <div className="space-y-32">
                    {/* Row 1 */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <span className="text-primary font-display text-2xl italic mb-2 block">Brasserie de Spectacle</span>
                            <h3 className="text-3xl font-display mb-6 text-secondary">Face à l'Opéra Graslin</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Située sur la place Graslin, La Cigale est indissociable de la vie culturelle nantaise. Avant ou après le spectacle, nos tables s'animent dans une atmosphère unique où se croisent artistes et gourmets.
                            </p>
                            <a className="text-primary font-bold border-b border-primary pb-1 hover:text-secondary transition uppercase text-xs tracking-widest" href="#">En savoir plus</a>
                        </div>
                        <div className="order-1 md:order-2 relative group">
                            <div className="absolute -inset-4 border border-gold opacity-30 group-hover:opacity-100 transition duration-500"></div>
                            <img alt="Brasserie ambiance spectacle" className="w-full h-[500px] object-cover relative z-10 shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEu37I71_qNlNS34ydbs1Mih2bAQ9KvccYHirYn_YNgcNjeAMI9cz9uQpukizITqB36xvZu0Rd2l2-fJLAfEu5robYGo5SWFWdR3wSWOXVPWvrrK33C8fb8d0Hcnn_MVVITpmZnoSMhHcNO7rZMekIagFEsdxhSSgZ5LRu1A1ijtR6FE_pwFB-UhEYCrWw-ebO806iE-mqqT7-5MrGhwAdnY0nTcS-MD9JqiFmEaizXq-FCdpaDoTTVqn5mnFFKjz0ualuViSocc0" />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-4 border border-gold opacity-30 group-hover:opacity-100 transition duration-500"></div>
                            <img alt="Détails Art Nouveau" className="w-full h-[500px] object-cover relative z-10 shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6_nBgB3sHOpu7JxJtrC3vZubToDvKlLv11VguuJonWTYssP8Z92bPHMifNtC1S0aHr_ZVuzxi8zAhPdd-d61D8A6h_E69grdYRNCFTChUFKgtwThLcXe89R6KE5lTmjHBMrS7HfGdsalit_zYYpM_-eJM-Xj4DYE071T6fVDr83yQh21RjNZXXIs5yIEUB-y2YeTKjhgMrC30_golpIzXjnhXcMW1zEjHvbhF6VYQd0SpTiAgZ3jAJPliw-_zJ9gfIO9yaETXMWM" />
                        </div>
                        <div>
                            <span className="text-primary font-display text-2xl italic mb-2 block">Le Génie du Décor</span>
                            <h3 className="text-3xl font-display mb-6 text-secondary">L'Apogée de l'Art Nouveau</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Classée Monument Historique, chaque céramique, chaque dorure et chaque fresque de La Cigale raconte une histoire. Émile Libaudière a conçu ici un chef-d’œuvre total où la lumière danse sur les mosaïques.
                            </p>
                            <a className="text-primary font-bold border-b border-primary pb-1 hover:text-secondary transition uppercase text-xs tracking-widest" href="#">Visite Historique</a>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <span className="text-primary font-display text-2xl italic mb-2 block">Cuisine de Saison</span>
                            <h3 className="text-3xl font-display mb-6 text-secondary">La Fraîcheur des Océans</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Réputée pour ses bancs d’écailler, La Cigale célèbre les produits de la mer et le terroir nantais. Huîtres de Bretagne, poissons de la criée et pâtisseries maison font notre renommée depuis plus d'un siècle.
                            </p>
                            <a className="text-primary font-bold border-b border-primary pb-1 hover:text-secondary transition uppercase text-xs tracking-widest" href="#">Nos Producteurs</a>
                        </div>
                        <div className="order-1 md:order-2 relative group">
                            <div className="absolute -inset-4 border border-gold opacity-30 group-hover:opacity-100 transition duration-500"></div>
                            <img alt="Plateau de fruits de mer" className="w-full h-[500px] object-cover relative z-10 shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgZJOKnZ__YR2Hq0TQlRYm6fHZy5uw2U72gly4leK0VOjt9_DIlpa27nV8cRJ8ji5_PnKtHN-TpuLmzDbBuSotTyES3XRMgdi7-q64VNoi5MiFrE26exZ2xZF1lu1YrusZwmd9eEqtst0TxUZ448n6NNFzodv85XrhkhC4S6kILgCzEjNRYkCYMACoTLCRkXE5GVMkiWAl-LIeOhAzi-_T3Pplx9MLuaSdo25rE0IBh46LDA76loia9qY5ZuNB--EdDh3r-Wb-mg8" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
