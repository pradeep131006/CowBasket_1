import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const DonateSticky = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/donate") return;
    
    const intersectingElements = new Set();
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            intersectingElements.add(entry.target);
          } else {
            intersectingElements.delete(entry.target);
          }
        });
        setIsVisible(intersectingElements.size === 0);
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
  }, [location.pathname]);

  if (location.pathname === "/donate") {
    return null;
  }

  return (
    <button
      onClick={() => navigate("/donate")}
      className={cn(
        "fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full bg-saffron text-white shadow-elevated flex flex-col items-center justify-center gap-1 transition-all duration-500 hover:scale-110 hover:bg-saffron-dark group",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
      )}
    >
      <Heart className="w-6 h-6 animate-pulse-soft fill-current" />
      <span className="text-[10px] font-bold uppercase tracking-tighter">Donate</span>
    </button>
  );
};

export default DonateSticky;
