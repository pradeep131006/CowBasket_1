import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube, Linkedin, Heart, ArrowUp, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import footerPainting from "@/assets/bg-footer-1.png";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .004 5.412.001 12.049a11.82 11.82 0 001.574 5.93L0 24l6.107-1.604a11.845 11.845 0 005.937 1.598h.005c6.637 0 12.048-5.414 12.051-12.051a11.818 11.818 0 00-3.415-8.52z"/>
  </svg>
);

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Campaigns", href: "#campaigns" },
  { name: "Gau Parivar", href: "#adoption" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/gausevagaushala", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/gausevagaushala", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/gausevagaushala", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@gauseva", label: "Youtube" },
  { icon: Linkedin, href: "https://linkedin.com/company/gauseva", label: "LinkedIn" },
  { icon: WhatsAppIcon, href: "https://wa.me/919166315765", label: "WhatsApp" },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDonate = () => {
    navigate("/donate");
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <footer id="contact" className="relative bg-foreground text-cream overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden blur-sm">
        <img 
          src={footerPainting} 
          alt="Cow grazing in greenery" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/20 to-foreground/25" />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10 pt-16 md:pt-24">
        {/* Newsletter Section */}
        <div className="max-w-4xl mx-auto mb-16 bg-gradient-to-r from-saffron/30 to-hara/30 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-saffron/40 shadow-elevated">
          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex-1">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-saffron mb-2 hindi-text">
                समाचार पत्र से जुड़ें
              </h3>
              <p className="text-cream/90">
                Subscribe to our newsletter for updates on our seva activities
              </p>
            </div>
            <div className="flex-1 flex gap-3 mt-4 md:mt-0">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg bg-cream/10 border border-cream/30 text-cream placeholder:text-cream/60 focus:outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all"
              />
              <Button type="submit" variant="seva" size="lg" className="gap-2 whitespace-nowrap">
                <Send className="w-4 h-4" />
                Subscribe
              </Button>
            </div>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron to-saffron-light flex items-center justify-center">
                <span className="text-xl">🙏</span>
              </div>
              <div>
                <span className="font-display text-xl font-bold text-saffron block hindi-text">गौ सेवा</span>
                <span className="text-xs text-cream/80">Gaushala Trust</span>
              </div>
            </div>
            <p className="text-cream/90 mb-4 hindi-text leading-relaxed">
              गौवंश की सेवा, संरक्षण और कल्याण के लिए समर्पित एक गैर-लाभकारी संगठन।
            </p>
            <p className="text-sm text-cream/80">
              A non-profit organization dedicated to the service, protection, and welfare of cattle.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-cream/10 hover:bg-saffron flex items-center justify-center transition-all hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold text-saffron mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-cream/90 hover:text-saffron transition-colors hover:pl-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-bold text-saffron mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-cream/90">
                  Gaushala Road,<br />
                  Jaipur, Rajasthan 302022
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+919166315765" className="text-cream/90 hover:text-saffron transition-colors">
                  +91 91663 15765
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:info@gauseva.org" className="text-cream/90 hover:text-saffron transition-colors">
                  info@gauseva.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span className="text-cream/90">
                  Mon - Sun: 6:00 AM - 7:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Donate CTA */}
          <div>
            <h4 className="font-display text-lg font-bold text-saffron mb-6">Support Us</h4>
            <div className="bg-cream/5 backdrop-blur-sm rounded-xl p-6 border border-cream/10">
              <div className="text-center mb-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-saffron to-saffron-light flex items-center justify-center mb-3">
                  <Heart className="w-8 h-8 text-primary-foreground" />
                </div>
                <h5 className="font-semibold text-cream">Make a Donation</h5>
                <p className="text-sm text-cream/60 mt-1">Every rupee counts</p>
              </div>
              <Button 
                variant="seva" 
                className="w-full gap-2"
                onClick={handleDonate}
              >
                <Heart className="w-4 h-4" />
                Donate Now
              </Button>
              <p className="text-xs text-cream/50 text-center mt-3">
                80G Tax Exemption Available
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-cream/50 text-center md:text-left">
            © 2025 गौ सेवा Gaushala Trust. All rights reserved. | Registration No: XXXX
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-cream/50 hover:text-cream transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-cream/50 hover:text-cream transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-saffron/20 hover:bg-saffron flex items-center justify-center transition-all hover:scale-110"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
