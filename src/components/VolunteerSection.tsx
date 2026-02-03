import React from "react";
import Volunteerimage1 from "@/assets/Volunteer-1.jpg";
import Volunteerimage2 from "@/assets/Volunteer-2.jpg";
import Volunteerimage3 from "@/assets/Volunteer-3.jpg";

// Volunteer role type
type VolunteerRole = {
  id: number;
  title: string;
  titleHi: string;
  description: string;
  image: string;
};

const volunteerRoles: VolunteerRole[] = [
  {
    id: 1,
    title: "Feeding & Care",
    titleHi: "गौसेवा और देखभाल",
    description: "Help feed cows and take care of their daily needs.",
    image: Volunteerimage1,
  },
  {
    id: 2,
    title: "Medical Assistance",
    titleHi: "चिकित्सा सहायता",
    description: "Assist during health checkups and medical care.",
    image: Volunteerimage2,
  },
  {
    id: 3,
    title: "Events & Awareness",
    titleHi: "सामुदायिक कार्यक्रम और जागरूकता",
    description: "Participate in awareness campaigns and community events.",
    image: Volunteerimage3,
  },
];

const VolunteerSection: React.FC = () => {
  return (
    <section id="volunteer" className="py-16 bg-[#FFF4E1] text-[#4B3F2F]">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl font-bold mb-2">
          Become a Volunteer
          <span className="block text-2xl text-[#E49B2C] mt-1">
            गौसेवा में सहभागी बनें
          </span>
        </h2>

        <p className="text-lg max-w-xl mx-auto mt-4">
          Join our team of dedicated volunteers and help care for cows, assist in
          feeding, and support gaushala activities.{" "}
          <span className="text-green-700 font-semibold">
            आपका योगदान, किसी गाय का जीवन बदल सकता है।
          </span>
        </p>
      </div>

      {/* Volunteer Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 mb-16">
        {volunteerRoles.map((role) => (
          <div
            key={role.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={role.image}
              alt={role.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2">{role.title}</h3>
              <p className="text-sm text-gray-600 mb-3">
                {role.description}
              </p>
              <p className="text-[#E49B2C] font-medium">{role.titleHi}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button (Same Color + Arrow) */}

    </section>
  );
};

export default VolunteerSection;
