import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { 
  Heart, 
  Utensils, 
  Stethoscope, 
  Sun, 
  Gift, 
  BookOpen, 
  ArrowLeft,
  CreditCard,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const SEVA_TYPES = [
  {
    id: "adopt",
    title: "Adopt a Mother Cow",
    description: "Support the complete care of one cow including food, shelter, and medical care",
    icon: Heart,
    color: "bg-orange-100 text-orange-600",
  },
  {
    id: "feed",
    title: "Feed the Gaumata",
    description: "Provide nutritious meals including fresh fodder, hay, and supplements",
    icon: Utensils,
    color: "bg-green-100 text-green-600",
  },
  {
    id: "medical",
    title: "Medical Emergency Fund",
    description: "Fund urgent medical treatments, surgeries, and specialized care",
    icon: Stethoscope,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "shraddha",
    title: "Shraddha / Pind Daan",
    description: "Honor your departed loved ones through sacred service and charity",
    icon: Sun,
    color: "bg-amber-100 text-amber-600",
  },
  {
    id: "birthday",
    title: "Birthday / Anniversary",
    description: "Celebrate your special occasions with the blessings of Gau Mata",
    icon: Gift,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: "pooja",
    title: "Gau Pooja & Yagya",
    description: "Participate in sacred rituals for spiritual blessings and peace",
    icon: BookOpen,
    color: "bg-red-100 text-red-600",
  },
];

const QUICK_AMOUNTS = [3000, 6000, 12000, 36000];

const Donation = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const initialSevaId = searchParams.get("seva");
  const initialSeva = SEVA_TYPES.find(s => s.id === initialSevaId) || SEVA_TYPES[0];

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("Donation page mounted");
  }, []);

  const [selectedSeva, setSelectedSeva] = useState(initialSeva);
  const [frequency, setFrequency] = useState("monthly");
  const [amount, setAmount] = useState(3000);
  const [customAmount, setCustomAmount] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pan: "",
  });

  useEffect(() => {
    const sevaId = searchParams.get("seva");
    if (sevaId) {
      const seva = SEVA_TYPES.find(s => s.id === sevaId);
      if (seva) {
        setSelectedSeva(seva);
      }
    }
  }, [searchParams]);

  const handleAmountSelect = (val: number) => {
    setAmount(val);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmount(val);
    if (val) setAmount(Number(val));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleDonate = () => {
    // Implement payment logic here
    console.log("Donating:", {
      seva: selectedSeva.title,
      frequency,
      amount,
      ...formData
    });
    alert(`Thank you for your donation of ₹${amount}!`);
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Button 
          variant="ghost" 
          className="mb-8 gap-2 hover:bg-stone-200"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar - Seva Selection */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-2xl font-bold text-stone-800 mb-6">Choose Your Seva</h2>
            {SEVA_TYPES.map((seva) => (
              <Card
                key={seva.id}
                className={cn(
                  "p-4 cursor-pointer transition-all border-2",
                  selectedSeva.id === seva.id 
                    ? "border-saffron bg-white shadow-md" 
                    : "border-transparent bg-white/50 hover:bg-white hover:border-stone-200"
                )}
                onClick={() => setSelectedSeva(seva)}
              >
                <div className="flex gap-4">
                  <div className={cn("p-2 rounded-lg shrink-0", seva.color)}>
                    <seva.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800">{seva.title}</h3>
                    <p className="text-xs text-stone-500 line-clamp-2 mt-1">
                      {seva.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Right Section - Donation Form */}
          <div className="lg:col-span-8">
            <Card className="p-6 md:p-8 bg-white border-none shadow-xl rounded-2xl">
              {/* Selected Seva Header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-stone-100">
                <div className={cn("p-3 rounded-xl", selectedSeva.color)}>
                  <selectedSeva.icon className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-stone-800">{selectedSeva.title}</h1>
                  <p className="text-stone-500 mt-1">{selectedSeva.description}</p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Frequency Selection */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold text-stone-700">Donation Frequency</Label>
                  <Tabs value={frequency} onValueChange={setFrequency} className="w-full">
                    <TabsList className="grid grid-cols-2 w-full max-w-md h-12 bg-stone-100 p-1">
                      <TabsTrigger 
                        value="monthly" 
                        className="rounded-md data-[state=active]:bg-saffron data-[state=active]:text-white"
                      >
                        Monthly
                      </TabsTrigger>
                      <TabsTrigger 
                        value="one-time"
                        className="rounded-md data-[state=active]:bg-saffron data-[state=active]:text-white"
                      >
                        One-time
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {/* Amount Selection */}
                <div className="space-y-4">
                  <Label className="text-base font-semibold text-stone-700">Select Amount</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {QUICK_AMOUNTS.map((val) => (
                      <Button
                        key={val}
                        variant={amount === val && !customAmount ? "default" : "outline"}
                        className={cn(
                          "h-12 text-lg font-bold",
                          amount === val && !customAmount 
                            ? "bg-saffron hover:bg-saffron-dark text-white border-saffron" 
                            : "bg-stone-50 text-stone-600 hover:bg-stone-100 border-stone-200"
                        )}
                        onClick={() => handleAmountSelect(val)}
                      >
                        ₹{val.toLocaleString()}
                      </Button>
                    ))}
                  </div>
                  <div className="relative mt-4">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400">₹</span>
                    <Input
                      type="number"
                      placeholder="Enter custom amount"
                      className="pl-8 h-12 bg-stone-50 border-stone-200 focus:ring-saffron focus:border-saffron"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                    />
                  </div>
                </div>

                {/* Impact Message */}
                <div className="bg-green-50 border border-green-100 rounded-xl p-4 flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-800">Your Impact</p>
                    <p className="text-sm text-green-700">
                      Provides complete care for {amount >= 36000 ? "multiple cows" : "1 cow"} for the selected duration
                    </p>
                  </div>
                </div>

                {/* Personal Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your name" className="h-11" value={formData.name} onChange={handleInputChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="h-11" value={formData.email} onChange={handleInputChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 98765 43210" className="h-11" value={formData.phone} onChange={handleInputChange} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pan">PAN Number (for 80G)</Label>
                    <Input id="pan" placeholder="ABCDE1234F" className="h-11 uppercase" value={formData.pan} onChange={handleInputChange} />
                  </div>
                </div>

                {/* Summary Card */}
                <div className="bg-orange-50/50 border border-orange-100 rounded-xl p-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm text-stone-500 uppercase tracking-wider font-semibold">Donation Amount</p>
                      <p className="text-sm text-stone-400 mt-1">Billed {frequency}. Cancel anytime.</p>
                    </div>
                    <p className="text-3xl font-bold text-saffron">₹{amount.toLocaleString()}</p>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  className="w-full h-14 text-xl font-bold bg-saffron hover:bg-saffron-dark text-white rounded-xl shadow-lg shadow-saffron/20 gap-3"
                  onClick={handleDonate}
                >
                  <CreditCard className="w-6 h-6" />
                  Donate ₹{amount.toLocaleString()}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
