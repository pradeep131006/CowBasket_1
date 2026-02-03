import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";

import dhoop from "@/assets/dhoop.jpg";
import vermicompost from "@/assets/vermicompost.jpg";
import ghee from "@/assets/ghee.jpg";
import dungcake from "@/assets/Dung-cake.jpg";
import dungpot from "@/assets/dung-pot.jpg";

const PRODUCTS = [
  {
    id: "curd",
    name: "A2 Desi Cow Curd",
    description: "Pure, thick and creamy curd made from A2 milk of our native cows.",
    price: "₹80",
    unit: "500g",
    image: "https://images.unsplash.com/photo-1571212515416-fef01fc43637?q=80&w=1600&auto=format&fit=crop",
    category: "Dairy",
  },
  {
    id: "ghee",
    name: "Vedic Bilona Ghee",
    description: "Traditional hand-churned ghee made from curd using the Vedic Bilona process.",
    price: "₹1,200",
    unit: "1L",
    image: ghee,
    category: "Dairy",
  },
  {
    id: "dung-cake",
    name: "Gau May Dust (Dung Cake)",
    description: "Sun-dried cow dung cakes for Agnihotra and traditional havan.",
    price: "₹150",
    unit: "12 pcs",
    image: dungcake,
    category: "Havan Essentials",
  },
  {
    id: "dung-pots",
    name: "Cow Dung Plant Pots",
    description: "Eco-friendly, biodegradable plant pots made from cow dung and natural binders.",
    price: "₹45",
    unit: "per pc",
    image: dungpot,
    category: "Garden",
  },
  {
    id: "manure",
    name: "Organic Vermicompost",
    description: "Rich organic manure processed by earthworms from cow dung.",
    price: "₹300",
    unit: "10kg",
    image: vermicompost,
    category: "Garden",
  },
  {
    id: "dhoop",
    name: "Natural Cow Dung Dhoop",
    description: "Chemical-free incense sticks made from cow dung and herbal extracts.",
    price: "₹120",
    unit: "20 sticks",
    image: dhoop,
    category: "Essentials",
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
            alt="Gaushala fields"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-cream mb-6">
            <span className="hindi-text block mb-2 text-saffron">गौ उत्पाद</span>
            Panchgavya Products
          </h1>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto">
            Pure and organic products derived from our protected cows. Every purchase supports our Gaushala.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-cream/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, index) => (
              <Card
                key={product.id}
                className="overflow-hidden border-none shadow-elevated hover:scale-[1.02] transition-transform"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* IMAGE FIXED SECTION */}
                <div className="h-72 md:h-80 bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    style={{ imageRendering: "auto" }}
                    className="
                      max-w-full max-h-full
                      object-contain
                      transition-transform duration-500
                      hover:scale-105
                    "
                  />
                  <span className="absolute top-4 right-4 px-3 py-1 bg-saffron text-white text-xs font-bold rounded-full uppercase">
                    {product.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {product.name}
                    </h3>
                    <span className="text-saffron font-bold text-lg">
                      {product.price}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      Unit: {product.unit}
                    </span>
                    <Button variant="seva" size="sm" className="gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Buy Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20 p-10 rounded-3xl bg-gradient-to-r from-saffron to-saffron-light text-white text-center shadow-elevated">
            <Heart className="w-12 h-12 mx-auto mb-6 animate-pulse-soft" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Support Our Seva
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-white/90">
              Every purchase helps feed, shelter, and care for 5,000+ cows.
            </p>
            <Button variant="outline" size="xl" className="bg-white text-saffron">
              Learn More About Our Mission
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
