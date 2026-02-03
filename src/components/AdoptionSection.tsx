import { Heart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import cowPortrait1 from "@/assets/cow-portrait-1.jpg";
import cowPortrait2 from "@/assets/cow-portrait-2.jpg";
import cowPortrait3 from "@/assets/cow-portrait-3.jpg";

const animals = [
  {
    id: 1,
    name: "लक्ष्मी (Lakshmi)",
    breed: "Gir Cow",
    age: "8 Years",
    story: "Rescued from accident, now healthy and happy",
    storyHi: "दुर्घटना से बचाई गई, अब स्वस्थ और खुश",
    image: cowPortrait1,
    status: "Available",
    monthlySupport: 2500,
  },
  {
    id: 2,
    name: "गौरी (Gauri)",
    breed: "Sahiwal",
    age: "5 Years",
    story: "Abandoned after injury, fully recovered",
    storyHi: "चोट के बाद छोड़ी गई, पूरी तरह ठीक",
    image: cowPortrait2,
    status: "Adopted",
    monthlySupport: 2500,
  },
  {
    id: 3,
    name: "नंदिनी (Nandini)",
    breed: "Red Sindhi",
    age: "10 Years",
    story: "Senior cow needing special care",
    storyHi: "वृद्ध गाय जिसे विशेष देखभाल चाहिए",
    image: cowPortrait3,
    status: "Available",
    monthlySupport: 3000,
  },
];

const AdoptionCard = ({ animal }: { animal: typeof animals[0] }) => {
  const isAdopted = animal.status === "Adopted";
  const navigate = useNavigate();

  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-card card-seva border border-border">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={animal.image}
          alt={animal.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
              isAdopted
                ? "bg-hara text-secondary-foreground"
                : "bg-saffron text-primary-foreground"
            }`}
          >
            {isAdopted && <Check className="w-3 h-3" />}
            {animal.status}
          </span>
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
        {/* Name Badge */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display text-2xl font-bold text-cream">
            {animal.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Details */}
        <div className="flex items-center gap-4 mb-4">
          <div className="px-3 py-1 rounded-full bg-muted text-sm font-medium text-muted-foreground">
            {animal.breed}
          </div>
          <div className="px-3 py-1 rounded-full bg-muted text-sm font-medium text-muted-foreground">
            {animal.age}
          </div>
        </div>

        {/* Story */}
        <p className="text-muted-foreground mb-1">{animal.storyHi}</p>
        <p className="text-sm text-muted-foreground mb-4">{animal.story}</p>

        {/* Support Info */}
        <div className="flex items-center justify-between py-3 border-t border-border">
          <div>
            <div className="text-xs text-muted-foreground">Monthly Support</div>
            <div className="font-display text-xl font-bold text-saffron">
              ₹{animal.monthlySupport.toLocaleString('en-IN')}
            </div>
          </div>
          {isAdopted ? (
            <Button variant="hara" className="gap-2" disabled>
              <Check className="w-4 h-4" />
              Adopted
            </Button>
          ) : (
            <Button 
              variant="seva" 
              className="gap-2"
              onClick={() => navigate("/donate?seva=adopt")}
            >
              <Heart className="w-4 h-4" />
              गोद लें (Adopt)
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const AdoptionSection = () => {
  const navigate = useNavigate();
  return (
    <section id="adoption" className="py-20 md:py-26 bg-background pattern-mandala">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hara/10 border border-hara/20 mb-6">
            <span className="text-sm font-medium text-hara">गौ परिवार • Gau Parivar</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            गौ माता को अपनाएं -{" "}
            <span className="text-saffron">पुण्य कमाएं</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            एक गाय को गोद लेकर आप उसकी देखभाल, भोजन और चिकित्सा का खर्च वहन करते हैं।
            बदले में आपको नियमित अपडेट और विज़िट की सुविधा मिलती है।
          </p>
          <p className="text-base text-muted-foreground mt-2">
            By adopting a cow, you sponsor her care, food, and medical expenses.
            In return, you receive regular updates and visiting privileges.
          </p>
        </div>

        {/* Animal Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((animal, index) => (
            <div
              key={animal.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <AdoptionCard animal={animal} />
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-gradient-to-r from-saffron/10 via-saffron/5 to-hara/10 rounded-2xl p-8 md:p-12 animate-fade-up">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-saffron/20 flex items-center justify-center mb-4">
                <span className="text-3xl">📜</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Adoption Certificate</h3>
              <p className="text-sm text-muted-foreground">Receive a personalized certificate</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-hara/20 flex items-center justify-center mb-4">
                <span className="text-3xl">📸</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Regular Updates</h3>
              <p className="text-sm text-muted-foreground">Monthly photos and health reports</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-terracotta/20 flex items-center justify-center mb-4">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Visit Anytime</h3>
              <p className="text-sm text-muted-foreground">Free visits to meet your Gau Mata</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-gold/20 flex items-center justify-center mb-4">
                <span className="text-3xl">🧾</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Tax Benefits</h3>
              <p className="text-sm text-muted-foreground">80G tax exemption on donations</p>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            variant="sevaOutline" 
            size="lg"
            onClick={() => navigate("/donate?seva=adopt")}
          >
            View All Gau Mata
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AdoptionSection;
