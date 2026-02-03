import { Heart, Users, Shield, Leaf } from "lucide-react";
import sevaFeeding from "@/assets/seva-feeding.jpg";

const features = [
  {
    icon: Heart,
    title: "गौ सेवा (Gau Seva)",
    description: "Daily care, nutritious food, and love for every cow in our shelter.",
  },
  {
    icon: Shield,
    title: "चिकित्सा सेवा (Medical Care)",
    description: "24/7 veterinary care with modern facilities and expert doctors.",
  },
  {
    icon: Users,
    title: "गोद लेना (Adoption)",
    description: "Sponsor a cow and receive regular updates about your adopted Gau Mata.",
  },
  {
    icon: Leaf,
    title: "प्राकृतिक उत्पाद (Natural Products)",
    description: "Pure cow-based products: Ghee, Gobar items, and organic fertilizers.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background pattern-mandala">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-up">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={sevaFeeding}
                alt="Seva - Feeding Gau Mata"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-card">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron to-saffron-light flex items-center justify-center">
                    <span className="text-2xl">🙏</span>
                  </div>
                  <div>
                    <div className="font-display text-lg font-semibold text-foreground">
                      हमारा संकल्प
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Compassionate care for every Gau Mata
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-hara/20 to-hara/5 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-saffron/20 to-saffron/5 rounded-full -z-10" />
          </div>

          {/* Content Side */}
          <div className="animate-fade-up delay-200">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hara/10 border border-hara/20 mb-6">
              <span className="text-sm font-medium text-hara">हमारे बारे में • About Us</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              गौशाला ट्रस्ट -{" "}
              <span className="text-saffron">सेवा का संकल्प</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              1995 में स्थापित, हमारी गौशाला ने हजारों बेसहारा गौवंश को आश्रय दिया है।
              हम न केवल उनकी देखभाल करते हैं, बल्कि उन्हें प्यार और सम्मान भी देते हैं।
            </p>

            <p className="text-base text-muted-foreground mb-8">
              Established in 1995, our Gaushala has sheltered thousands of abandoned cattle.
              We not only care for them but also give them love and respect they deserve.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors card-seva"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-saffron to-saffron-light flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">{feature.title}</div>
                    <div className="text-sm text-muted-foreground">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
