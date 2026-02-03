import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

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

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/gausevagaushala", label: "Facebook", color: "hover:bg-saffron" },
  { icon: Twitter, href: "https://twitter.com/gausevagaushala", label: "Twitter", color: "hover:bg-saffron" },
  { icon: Instagram, href: "https://instagram.com/gausevagaushala", label: "Instagram", color: "hover:bg-saffron" },
  { icon: Youtube, href: "https://youtube.com/@gauseva", label: "Youtube", color: "hover:bg-saffron" },
  { icon: Linkedin, href: "https://linkedin.com/company/gauseva", label: "LinkedIn", color: "hover:bg-saffron" },
  { icon: WhatsAppIcon, href: "https://wa.me/919166315765", label: "WhatsApp", color: "hover:bg-saffron" },
];

const SocialSticky = () => {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (location.pathname === "/donate") return;
    
    const intersectingElements = new Set<Element>();
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            intersectingElements.add(entry.target);
          } else {
            intersectingElements.delete(entry.target);
          }
        });

        const isFooterVisible = Array.from(intersectingElements).some(el => el.tagName === "FOOTER");
        const isHeroVisible = Array.from(intersectingElements).some(el => el.id === "home");

        if (isFooterVisible) {
          setIsVisible(false);
        } else if (isHeroVisible) {
          setIsVisible(!isMobile);
        } else {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector("footer");
    const hero = document.getElementById("home");
    
    if (footer) observer.observe(footer);
    if (hero) observer.observe(hero);

    return () => {
      if (footer) observer.unobserve(footer);
      if (hero) observer.unobserve(hero);
    };
  }, [location.pathname, isMobile]);

  if (location.pathname === "/donate") {
    return null;
  }

  return (
    <div className={cn(
      "fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1 transition-all duration-500",
      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12 pointer-events-none"
    )}>
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative flex items-center justify-center w-10 h-10 bg-white/90 backdrop-blur-sm shadow-md border-y border-r border-saffron/20 transition-all duration-300 hover:w-12 ${social.color} hover:text-white text-saffron-dark first:rounded-tr-md last:rounded-br-md`}
          aria-label={social.label}
        >
          <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          <span className="absolute left-full ml-2 px-2 py-1 bg-foreground text-cream text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
            {social.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialSticky;
