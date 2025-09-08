import { ProductHeader } from "./components/ProductHeader";
import { HeroSection } from "./components/HeroSection";
import { ImageGallery } from "./components/ImageGallery";
import { SpecificationsSection } from "./components/SpecificationsSection";
import { PricingSection } from "./components/PricingSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { RelatedCarsSection } from "./components/RelatedCarsSection";
import { Footer } from "./components/Footer";

export default function App() {
  // Gallery images with categories
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1639244170226-d91781fb4952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25kYSUyMGNpdmljJTIwbW9kZXJuJTIwY2FyfGVufDF8fHx8MTc1NzM0MDI3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Honda Civic Exterior Front View",
      category: "exterior"
    },
    {
      src: "https://images.unsplash.com/photo-1648799833118-c989da6907d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBpbnRlcmlvciUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTcyOTU2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Honda Civic Interior Dashboard",
      category: "interior"
    },
    {
      src: "https://images.unsplash.com/photo-1610743231615-b027c8b74610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjB3aGVlbCUyMGRldGFpbHxlbnwxfHx8fDE3NTczNDAyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Honda Civic Wheel Detail",
      category: "details"
    },
    {
      src: "https://images.unsplash.com/photo-1717068341709-df1e2ec06ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXIlMjBlbmdpbmV8ZW58MXx8fHwxNTczNDAyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Honda Civic Engine",
      category: "performance"
    },
    {
      src: "https://images.unsplash.com/photo-1652727719719-3c43c7dc54cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjByZWFyJTIwdmlld3xlbnwxfHx8fDE3NTczNDAyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Honda Civic Rear View",
      category: "exterior"
    }
  ];

  return (
    <div className="min-h-screen bg-background dark">
      <ProductHeader />
      
      <main>
        <HeroSection 
          mainImage="https://images.unsplash.com/photo-1639244170226-d91781fb4952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25kYSUyMGNpdmljJTIwbW9kZXJuJTIwY2FyfGVufDF8fHx8MTc1NzM0MDI3N3ww&ixlib=rb-4.1.0&q=80&w=1080" 
        />
        
        <ImageGallery images={galleryImages} />
        
        <SpecificationsSection />
        
        <PricingSection />
        
        <ReviewsSection />
        
        <RelatedCarsSection />
      </main>
      
      <Footer />
    </div>
  );
}