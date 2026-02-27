import React from 'react';

const PRODUCTS = [
    {
        title: "Carte Cadeau Gastronomique",
        price: "À partir de 50€",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsU5f-ELk5D2y7XY_SSW_RYIzKCG9L28qo4c4dE4za4m76DkdTAKNE3XsiOQNbjuDefpEQHU9fMtq6ZCIO4IbRqPZmjch7Rd-S9lfma_nzc7lQzHiwh87hdQiZH5AU-OABH_q_heeLCq4dlAow-Rqm64Rb_bmQoPAqKh1utGxmWDKIvin_IZp-FEJiPZvdjZwVAzln85NOq2G4BY24tAYO12NpDu-h4kxSXYuhA2iopqfJVEJxsOa5CdiHP1Lgb0N8DJQxhcfoVCY"
    },
    {
        title: "Cigale en Faïence de Quimper",
        price: "45.00€",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAK9bcPKjBLG5XStUwO20Z9WHeG1Pxp4Qo4eZpxjASeRrRqZsq4KKgx5s6RP4lhJk_6A4EF13nnM4eS_sFt5AGpVd6pgQjMsCp2NTIs_3wriwsslgcCTElrlzvMIrlXG2iZ7Jxc5l091dQ6j8qfASnAo4aZeJyRUTlh447OnqwQokV9x_hzBdjA0kbYMFFhHK5KG3QKPwk21txOG1elqeRXKqTPPnbXStCbw6EjZ4KPu_PeMa-XfLghKMgmG5WnxxS4WnNv6oalE3E"
    },
    {
        title: "Coffret Tea-Time Impérial",
        price: "32.00€",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAuFrrLHnOEhereqy4ROOVCUk4Xe0iU6ui825N8jdEzQkUTlRq7X-Bjm6JMJHLM-iloqWw06_YJEX72g1zVfqxPlA_HAg1O5sTpyUsKm9o9f_DmUjNQz3GGgPqL-fKiTUF_b5VTX4gwIvjN0mqQ3iU4-abqL8clR7f_QgaZaQfZkmPdvgjueFFvATSeEk1bObYID41r1ctTcauowHNiQx-tBfwfTrt-VHrvw4Y9IlNchOXU1ikTn0z2FhKu1CvUOiL_ngxf4diF4t0"
    },
    {
        title: "Livre : \"L'histoire de la Cigale\"",
        price: "24.90€",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLO7XFigeUpJAmyXSwB8FIfNlaetv62hqDNmhDZm6Bqi-NnaLwGCjAwrqHod37v9WcF5SlV5tmDc_ya5Nbgs7eu9eZMEYHO83iWmYTu3-L_SsbyFnnDbXzZreOH5X9-X6nKtdDh8O4_liZjBTBkBMku4wll1H97yfWB1FEzL1CqTw1cD3b6RDKYDmh6BN75YAlfuNKtiPobgY2nRVQ_0VQnthBqs7zFYsvhhQr4JAKM2HJcyFbKnylJlTrY06ZziLwPzLSQ6lPAx0"
    }
];

export const ShopSection: React.FC = () => {
    return (
        <section className="py-24 px-6 bg-slate-50" id="boutique">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="text-primary uppercase tracking-[0.3em] text-sm font-bold block mb-4">Coffrets & Souvenirs</span>
                        <h2 className="font-display text-4xl md:text-5xl text-secondary">La Boutique de la Cigale</h2>
                    </div>
                    <a className="hidden md:block text-sm uppercase tracking-widest font-bold text-primary hover:underline" href="#">Voir tout l'e-shop</a>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {PRODUCTS.map((product, i) => (
                        <div key={i} className="bg-white p-4 shadow-sm hover:shadow-xl transition duration-300">
                            <div className="aspect-square bg-slate-100 mb-4 overflow-hidden">
                                <img alt={product.title} className="w-full h-full object-cover" src={product.img} />
                            </div>
                            <h5 className="font-bold text-[10px] uppercase tracking-wider mb-1">{product.title}</h5>
                            <p className="text-primary font-semibold text-xs">{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
