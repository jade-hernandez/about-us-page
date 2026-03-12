import Navbar from "./components/navigation/Navbar";
import { PricingTiers } from "./components/pricing-tiers/PricingTiers";

function App() {
  return (
    <div className='mx-auto flex min-h-screen w-full min-w-dvw flex-col items-center bg-linear-to-r from-[#F9FAFB] to-[#D2D6DB] pt-4'>
      <Navbar />
      <main className='m-4 flex flex-col rounded-md bg-white'>
        <PricingTiers />
      </main>
    </div>
  );
}

export default App;
