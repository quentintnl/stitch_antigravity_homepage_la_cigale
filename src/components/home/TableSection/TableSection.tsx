import React from 'react';

const MENU_ITEMS = [
    {
        title: "Souris d'Agneau Confite",
        description: "Au thym et miel de Loire, purée de pommes de terre onctueuse au beurre salé.",
        price: "28.00 €",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDrjdUKOFYLXc5jNkzFn7aNaaKXyCpyPwDHy4Ld0g9x8gFNEaG3Khr4CacdHozuSDPM0LWE-m2v6iQQNCYTRANZnNMdnjr-ub34UNdalQfs-2K4YOMXLT0m4LAxBZ8R7DEmejIZZFj3vae_VMcp9ANT6OEaI14HNHxwmCdwtkGxu3dxV-kZIPF0jI9p7bxGtiRtnSbdNnTXp6dG3hUqEq7QvOlkdREeo0wjSBA5ZV2Njm_6vwn04sPKOyVpf_9gv95OBJOQr2_rCw"
    },
    {
        title: "Noix de Saint-Jacques",
        description: "Poêlées, émulsion de corail, tombée d'épinards frais et risotto de petit épeautre.",
        price: "32.00 €",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCddlUY84vkXIhoQG9lIc67QjccomolhGrXRb9Nwqlvab7mlrikTclzVaVLaUAMtdKBacUqcgswjcfJFqCkbmI2_HtYbuDBjsR3oOkakW29O2dB22Q0GTMDKVY0bV5WtUu7PcnysXkm1MRE7Pi6gvnbB2MJ_guDX6nLmjZExJ5kSHol-G2aanxfuAUYYjtxkq9zyPohOEp27iA5CZ8dBPcs6lr7lz9vIOvxkwLLLR8AGhHJZVrnWPg-FdINQUzbnH228IWd4PCdkfU"
    },
    {
        title: "Le Baba au Rhum",
        description: "Traditionnel, crème légère à la vanille bourbon et sirop aux agrumes de saison.",
        price: "14.00 €",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaPMzMSwBpbinAhKqV16rtc9hexKApUTdf_e_1o-AL9CQzeZ900rJIRayg4jbAJMZfEoWCVX-5RtgT8bZKxAV6GDGpIDv_1uCGjVCYhqn9rKteqT9SZKW9kHIHwM_L8DZ_TLSbKgjJDpmRcldQkATqoBnH6B-wNtRItkQ6jJDWxcAMpqd5_t369ipDqFyh1QenTAYfdlha_KHVWdoJcFpirfaYcHBccRjJoYsM1cxmw-yrIzWbCFpvsVXJF89F5ObcIwly0YiK5wQ"
    }
];

export const TableSection: React.FC = () => {
    return (
        <section className="bg-secondary py-24 px-6 text-white overflow-hidden" id="menus">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="text-primary uppercase tracking-[0.3em] text-sm font-bold block mb-4">La Carte</span>
                        <h2 className="font-display text-4xl md:text-5xl">Éveil des Papilles</h2>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <div className="flex space-x-8 text-sm uppercase tracking-widest border-b border-white/20 pb-2">
                            <button className="hover:text-primary border-b-2 border-primary pb-2 font-bold transition">Incontournables</button>
                            <button className="hover:text-primary pb-2 transition text-white/60">Écailler</button>
                            <button className="hover:text-primary pb-2 transition text-white/60">Douceurs</button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {MENU_ITEMS.map((item, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="overflow-hidden mb-6 aspect-[3/4]">
                                <img alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" src={item.img} />
                            </div>
                            <h4 className="font-display text-2xl mb-2 group-hover:text-primary transition">{item.title}</h4>
                            <p className="text-white/60 text-sm mb-4">{item.description}</p>
                            <span className="text-primary font-bold">{item.price}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <a className="inline-block bg-primary text-white px-10 py-4 uppercase tracking-[0.2em] text-xs font-bold hover:bg-opacity-90 transition shadow-xl" href="#">
                        Consulter la Carte Complète (PDF)
                    </a>
                </div>
            </div>
        </section>
    );
};
