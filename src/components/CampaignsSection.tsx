import { Heart, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import sevaFeeding from "@/assets/seva-feeding.jpg";
import medicalCare from "@/assets/medical-care.jpg";

const campaigns = [
  {
    id: 1,
    title: "दैनिक भोजन अभियान",
    titleEn: "Daily Feeding Campaign",
    description: "प्रतिदिन 5000+ गायों को पौष्टिक आहार",
    descriptionEn: "Nutritious food for 5000+ cows daily",
    image: sevaFeeding,
    goal: 500000,
    raised: 385000,
    donors: 1240,
    sevaId: "feed"
  },
  {
    id: 2,
    title: "चिकित्सा सेवा कोष",
    titleEn: "Medical Care Fund",
    description: "बीमार और घायल गौवंश की चिकित्सा",
    descriptionEn: "Treatment for sick and injured cattle",
    image: medicalCare,
    goal: 300000,
    raised: 195000,
    donors: 856,
    sevaId: "medical"
  },
  {
    id: 3,
    title: "शेल्टर विस्तार परियोजना",
    titleEn: "Shelter Expansion Project",
    description: "नए शेड और बाड़े का निर्माण",
    descriptionEn: "Construction of new sheds and enclosures",
    image: sevaFeeding,
    goal: 1000000,
    raised: 620000,
    donors: 2150,
    sevaId: "adopt"
  },
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

const CampaignCard = ({ campaign }: { campaign: typeof campaigns[0] }) => {
  const progress = (campaign.raised / campaign.goal) * 100;
  const navigate = useNavigate();

  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-card card-seva border border-border">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={campaign.image}
          alt={campaign.titleEn}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-saffron text-primary-foreground text-xs font-semibold">
            Active
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-foreground mb-1">
          {campaign.title}
        </h3>
        <p className="text-sm text-saffron font-medium mb-2">{campaign.titleEn}</p>
        <p className="text-muted-foreground text-sm mb-4">
          {campaign.description}
          <br />
          <span className="text-xs">{campaign.descriptionEn}</span>
        </p>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Raised</span>
            <span className="font-semibold text-foreground">{Math.round(progress)}%</span>
          </div>
          <div className="progress-seva h-3">
            <div
              className="progress-seva-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-4 py-3 border-y border-border">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-muted-foreground" />
            <div>
              <div className="text-xs text-muted-foreground">Goal</div>
              <div className="text-sm font-semibold text-foreground">
                {formatCurrency(campaign.goal)}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-hara" />
            <div>
              <div className="text-xs text-muted-foreground">Raised</div>
              <div className="text-sm font-semibold text-hara">
                {formatCurrency(campaign.raised)}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-saffron" />
            <div>
              <div className="text-xs text-muted-foreground">Donors</div>
              <div className="text-sm font-semibold text-foreground">{campaign.donors}</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Button 
          variant="seva" 
          className="w-full gap-2" 
          onClick={() => navigate(`/donate?seva=${campaign.sevaId}`)}
        >
          <Heart className="w-4 h-4" />
          दान करें (Donate)
        </Button>
      </div>
    </div>
  );
};

const CampaignsSection = () => {
  const navigate = useNavigate();
  return (
    <section id="campaigns" className=" md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saffron/10 border border-saffron/20 mb-6">
            <Heart className="w-4 h-4 text-saffron" />
            <span className="text-sm font-medium text-saffron">दान अभियान • Donation Campaigns</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            आपका दान -{" "}
            <span className="text-saffron">उनकी जिंदगी</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            हर छोटा दान बड़ा बदलाव ला सकता है। अपने योगदान से गौ माता की सेवा में भागीदार बनें।
          </p>
          <p className="text-base text-muted-foreground mt-2">
            Every small donation can bring a big change. Join us in serving Gau Mata with your contribution.
          </p>
        </div>

        {/* Campaign Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <div
              key={campaign.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CampaignCard campaign={campaign} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="sevaOutline" size="lg" onClick={() => navigate("/donate")}>
            View All Campaigns
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CampaignsSection;
