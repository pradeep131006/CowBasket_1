import { Heart, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-gaushala.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleDonate = () => {
    navigate("/donate");
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-28 md:pt-24 pb-12 overflow-hidden"
    >
      {/* ================= Moving Sanskrit Strip ================= */}
      {/* Navbar z-index = 50 → Strip stays below it */}
      <div className="absolute top-20 md:top-18 left-0 w-full overflow-hidden bg-saffron/70 backdrop-blur-md border-b border-saffron/30 z-40 pointer-events-none">
        <div
          className="flex w-max py-1"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {[
            "गावो विश्वस्य मातरः।",
            "गौ सेवा परमो धर्मः।",
            "धर्मो रक्षति रक्षितः।",
            "जहाँ गौ माता का वास होता है, वहाँ समृद्धि स्वयं चलकर आती है।",
            "अन्नं बहु कुर्वीत।"
          ].map((text, index) => (
            <span
              key={index}
              className="mx-10 whitespace-nowrap text-cream text-sm md:text-base font-medium hindi-text"
            >
              {text}
            </span>
          ))}

          {/* duplicate for infinite loop */}
          {[
            "गावो विश्वस्य मातरः।",
            "गौ सेवा परमो धर्मः।",
            "धर्मो रक्षति रक्षितः।",
            "जहाँ गौ माता का वास होता है, वहाँ समृद्धि स्वयं चलकर आती है।",
            "अन्नं बहु कुर्वीत।"
          ].map((text, index) => (
            <span
              key={`dup-${index}`}
              className="mx-10 whitespace-nowrap text-cream text-sm md:text-base font-medium hindi-text"
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* ================= Background Image ================= */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Gaushala - Gau Mata in peaceful pasture"
          className="w-full h-full object-cover object-left md:object-center lg:object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-transparent md:from-foreground/80 md:via-foreground/40 md:to-transparent z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent z-0" />
      </div>

      {/* ================= Content ================= */}
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saffron/20 border border-saffron/30 mb-4 md:mb-6 mt-2 md:mt-7 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-saffron animate-pulse-soft" />
              <span className="text-xs md:text-sm font-medium text-cream uppercase tracking-wider">
                Since 1995 • 5000+ Gau Mata
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 md:mb-8 animate-fade-up delay-100 leading-[1.1] md:leading-tight">
              <span className="block hindi-text py-1">
                गौ माता की सेवा में
              </span>
              <span className="block mt-1 md:mt-3 hindi-text py-2 bg-gradient-to-r from-saffron via-saffron-light to-gold bg-clip-text text-transparent">
                समर्पित जीवन
              </span>
            </h1>

            {/* Hindi Subtitle */}
            <p className="text-base md:text-xl text-cream/80 mb-3 md:mb-4 max-w-2xl animate-fade-up delay-200 hindi-text leading-relaxed">
              हमारी गौशाला में हम बेसहारा, बीमार और वृद्ध गौवंश की सेवा करते हैं।
              आपका दान इनके जीवन में खुशियाँ ला सकता है।
            </p>

            {/* English Subtitle */}
            <p className="text-sm md:text-base text-cream/60 mb-8 md:mb-10 max-w-2xl animate-fade-up delay-200">
              Dedicated to the care and protection of abandoned, injured, and
              elderly cows. Your contribution can bring joy to their lives.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
              <Button
                variant="seva"
                size="xl"
                className="gap-2"
                onClick={handleDonate}
              >
                <Heart className="w-5 h-5" />
                दान करें (Donate Now)
              </Button>

              <Button
                variant="sevaOutline"
                size="xl"
                className="gap-2 border-cream/50 text-cream hover:bg-cream hover:text-foreground"
                onClick={() =>
                  window.open("https://youtube.com/@gauseva", "_blank")
                }
              >
                <Play className="w-5 h-5" />
                Watch Our Story
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-14 pt-6 md:pt-8 border-t border-cream/20 animate-fade-up delay-400">
              <div>
                <div className="font-display text-2xl md:text-4xl font-bold text-saffron">
                  5000+
                </div>
                <div className="text-[10px] md:text-sm text-cream/70 uppercase tracking-wider">
                  Gau Mata
                </div>
              </div>
              <div>
                <div className="font-display text-2xl md:text-4xl font-bold text-saffron">
                  28+
                </div>
                <div className="text-[10px] md:text-sm text-cream/70 uppercase tracking-wider">Years of Seva</div>
              </div>
              <div>
                <div className="font-display text-2xl md:text-4xl font-bold text-saffron">
                  50K+
                </div>
                <div className="text-[10px] md:text-sm text-cream/70 uppercase tracking-wider">
                  Donors
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Section */}
          <div className="relative animate-fade-in delay-500 hidden lg:block">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-saffron/20 rounded-full blur-3xl animate-pulse-soft" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gold/20 rounded-full blur-3xl animate-pulse-soft" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ArrowRight className="w-6 h-6 text-cream/60 rotate-90" />
      </div>
    </section>
  );
};

export default HeroSection;
