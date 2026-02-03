import { Quote } from "lucide-react";
import sevaFeeding from "@/assets/testimonial-2.jpg";
import medicalCare from "@/assets/testimonial-3.jpg";
import heroImage from "@/assets/testimonial-1.jpg";
import cowPortrait1 from "@/assets/cow-portrait-1.jpg";

const testimonials = [
  {
    name: "Shri Bhajanlal Sharma Ji",
    role: "Chief Minister of Rajasthan",
    quote:
      "हिंगोनिया गौ पुनर्वास केंद्र अद्भुत कार्य कर रहा है, 16,000 से अधिक जरूरतमंद गायों को सुरक्षित और स्नेहपूर्ण घर प्रदान कर रहा है।",
    image: cowPortrait1,
  },
  {
    name: "Priya Patel",
    role: "Weekly Volunteer",
    quote:
      "गायों के साथ समय बिताना मेरे सप्ताह का सबसे अच्छा हिस्सा है। यहां की सकारात्मक ऊर्जा और सेवा की भावना प्रेरणादायक है।",
    image: sevaFeeding,
  },
  {
    name: "Amrita Verma",
    role: "Animal Lover",
    quote:
      "मैंने कई गौशालाओं का दौरा किया है, लेकिन यहां का प्रबंधन अनोखा है। मुझे बीमार गायों के लिए विशेष चिकित्सा सुविधाओं से प्रभावित किया गया।",
    image: heroImage,
  },
  {
    name: "Ram Singh",
    role: "Local Farmer",
    quote:
      "यह गौशाला हमारे गांव के लिए एक आशीर्वाद है। न केवल हमें यहाँ से शुद्ध उत्पाद मिलते हैं, बल्कि जैविक खेती के लिए भी उत्कृष्ट मार्गदर्शन मिलता है।",
    image: medicalCare,
  },
];

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="bg-background pattern-mandala py-16"
      style={{
        backgroundImage: "url('/assets/mandala-pattern.png')",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saffron/10 border border-saffron/20 mb-6">
            <Quote className="w-4 h-4 text-saffron" />
            <span className="text-sm font-medium text-saffron">
              प्रशंसा पत्र • Testimonials
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            गौ भक्तों के <span className="text-saffron">अनुभव</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            हमारे दाताओं, स्वयंसेवकों और आगंतुकों के शब्द हमारे लिए प्रेरणा का स्रोत हैं।
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden shadow-card border border-border
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-48 object-cover"
              />

              {/* Quote Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* <Quote className="w-6 h-6 text-saffron/30 mb-2" /> */}
                <div className="space-y-2">
                  <p className="text-sm italic text-foreground leading-relaxed tracking-wide">
                    {t.quote}
                  </p>
                </div>

                {/* Footer: Name & Role */}
                <div className="mt-auto pt-4 border-t border-border">
                  <div className="text-base font-semibold tracking-wide text-foreground">
                    {t.name}
                  </div>
                  <div className="text-sm text-saffron uppercase tracking-wider">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

