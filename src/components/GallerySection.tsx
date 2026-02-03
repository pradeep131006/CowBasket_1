// import heroImage from "@/assets/hero-gaushala.jpg";
// import sevaFeeding from "@/assets/seva-feeding.jpg";
// import medicalCare from "@/assets/medical-care.jpg";
// import cowPortrait1 from "@/assets/cow-portrait-1.jpg";
// import cowPortrait2 from "@/assets/cow-portrait-2.jpg";
// import cowPortrait3 from "@/assets/cow-portrait-3.jpg";

// const galleryImages = [
//   { src: heroImage, alt: "Gaushala - Peaceful Pasture", span: "col-span-2 row-span-2" },
//   { src: sevaFeeding, alt: "Seva - Feeding Gau Mata", span: "" },
//   { src: medicalCare, alt: "Medical Care", span: "" },
//   { src: cowPortrait1, alt: "Lakshmi - Our beloved Gir Cow", span: "" },
//   { src: cowPortrait2, alt: "Gauri - Sahiwal breed", span: "" },
//   { src: cowPortrait3, alt: "Nandini - Red Sindhi", span: "col-span-2" },
// ];

// const GallerySection = () => {
//   return (
//     <section id="gallery" className="py-20 md:py-32 bg-muted/30">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terracotta/10 border border-terracotta/20 mb-6">
//             <span className="text-sm font-medium text-terracotta">चित्र दीर्घा • Gallery</span>
//           </div>

//           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
//             हमारी गौशाला -{" "}
//             <span className="text-saffron">एक झलक</span>
//           </h2>

//           <p className="text-lg text-muted-foreground">
//             हमारी गौशाला की गतिविधियों और उत्सवों की तस्वीरें देखें।
//           </p>
//           <p className="text-base text-muted-foreground mt-2">
//             A glimpse into our Gaushala's daily activities and celebrations.
//           </p>
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up">
//           {galleryImages.map((image, index) => (
//             <div
//               key={index}
//               className={`relative overflow-hidden rounded-xl group cursor-pointer ${image.span}`}
//             >
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="w-full h-full object-cover min-h-[200px] transition-transform duration-500 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//                 <p className="text-cream text-sm font-medium">{image.alt}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GallerySection;

import heroImage from "@/assets/hero-gaushala.jpg";
import sevaFeeding from "@/assets/seva-feeding.jpg";
import medicalCare from "@/assets/medical-care.jpg";
import cowPortrait1 from "@/assets/cow-portrait-1.jpg";
import cowPortrait2 from "@/assets/cow-portrait-2.jpg";
import cowPortrait3 from "@/assets/cow-portrait-3.jpg";
import galleryVideo from "@/assets/hero-video.mp4";

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 md:py-25 bg-muted/30">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-terracotta/10 border border-terracotta/20 mb-6">
            <span className="text-sm font-medium text-terracotta">
              चित्र दीर्घा • Gallery
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            हमारी गौशाला – <span className="text-saffron">एक झलक</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            हमारी गौशाला की गतिविधियों और उत्सवों की तस्वीरें देखें।
          </p>
          <p className="text-base text-muted-foreground mt-2">
            A glimpse into our Gaushala&apos;s daily activities and celebrations.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-up">

          {/* LEFT SIDE (50%) */}
          <div className="grid grid-rows-2 gap-4">
            {[heroImage, cowPortrait3].map((src, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl group"
              >
                <img
                  src={src}
                  alt="Gaushala"
                  className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {/* RIGHT SIDE (50%) */}
          <div className="grid grid-cols-2 gap-4">

            {[sevaFeeding, medicalCare, cowPortrait1, cowPortrait2].map(
              (src, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-xl group"
                >
                  <img
                    src={src}
                    alt="Gaushala Activity"
                    className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )
            )}

            {/* VIDEO (aligned with grid end) */}
            <a
              href="https://youtube.com/@gauseva"
              target="_blank"
              rel="noopener noreferrer"
              className="
                col-span-2
                relative
                aspect-[4/3]
                rounded-xl
                overflow-hidden
                shadow-xl
                group
              "
            >
              <video
                src={galleryVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-cream text-sm font-medium">
                  Watch our Gaushala in action
                </p>
                <p className="text-cream/80 text-xs">
                  Click to watch on YouTube
                </p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;



