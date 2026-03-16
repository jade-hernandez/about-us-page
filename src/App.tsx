import FaqSection from "./components/pricing-faq-section/FaqSection";
import Navbar from "./components/navigation/Navbar";
import { PricingTiers } from "./components/pricing-tiers-section/PricingTiers";
import FeaturesSection from "./components/features-section/FeaturesSection";
import TestimonialsSection from "./components/testimonials-section/TestimonialsSection";
import ContactSection from "./components/contact-section/ContactSection";

function App() {
  return (
    <div className='mx-auto flex min-h-screen w-full min-w-dvw flex-col items-center bg-linear-to-r from-[#F9FAFB] to-[#D2D6DB] pt-4'>
      <Navbar />
      <main className='m-4 flex flex-col rounded-md bg-white'>
        <PricingTiers />
        <FaqSection />
        <FeaturesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
