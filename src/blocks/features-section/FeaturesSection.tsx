import { cardsData } from "./features-data";
import { FeatureCard } from "./FeatureCard";

function FeaturesSection() {
  return (
    <section
      className='mx-auto flex max-w-304 flex-col gap-12 px-3 py-12 md:gap-16 md:px-4 md:py-16 lg:px-0 lg:py-24'
      aria-labelledby='features-heading'
    >
      <div className='flex flex-col gap-5 text-center lg:mx-auto lg:max-w-4xl'>
        <div className='flex flex-col gap-3'>
          <p className='text-base font-semibold text-indigo-700'>Premium abstract images</p>
          <h2
            id='features-heading'
            className='text-3xl font-semibold text-neutral-900 md:text-5xl'
          >
            Easy access to top quality images
          </h2>
        </div>
        <p className='mx-auto text-lg text-pretty text-neutral-600 md:max-w-167.5 md:text-xl lg:max-w-4xl'>
          In a world where storytelling constantly evolves, we lead with groundbreaking images
          designed for your presentation excellence.
        </p>
      </div>

      <div className='flex flex-col items-start justify-center gap-8 md:flex-row md:flex-wrap lg:gap-y-12'>
        {cardsData.map(card => (
          <FeatureCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            content={card.content}
          />
        ))}
      </div>
    </section>
  );
}

export { FeaturesSection };
