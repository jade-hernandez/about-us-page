import { FeatureCard } from "./feature-card/FeatureCard";
import { teamCardData } from "./team-data";

function TeamSection() {
  return (
    <section
      aria-labelledby='team-heading'
      className='mx-auto flex max-w-[calc(100%-2rem)] flex-col items-center justify-center gap-12 py-12 md:gap-16 md:py-16 lg:py-24 xl:max-w-304'
    >
      <div className='flex flex-col gap-5 text-center'>
        <div className='flex flex-col gap-3'>
          <p className='text-base font-semibold text-indigo-700'>Team</p>
          <h2
            id='team-heading'
            className='text-3xl font-semibold text-neutral-900 md:text-5xl'
          >
            Meet our team
          </h2>
        </div>
        <p className='text-xl text-neutral-600'>
          From skilled designers to tech-savvy developers, each member brings a unique perspective
          and expertise to the table.
        </p>
      </div>
      <div className='flex flex-row flex-wrap justify-center justify-items-center gap-12 md:gap-8 md:gap-y-16 lg:max-w-360'>
        {teamCardData.map(
          ({
            name,
            role,
            supportingText,
            imageMobileUrl,
            imageTabletUrl,
            imageDesktopUrl,
            blurMobile,
            blurTablet,
            blurDesktop
          }) => (
            <FeatureCard
              key={name}
              name={name}
              role={role}
              supportingText={supportingText}
              imageMobileUrl={imageMobileUrl}
              imageTabletUrl={imageTabletUrl}
              imageDesktopUrl={imageDesktopUrl}
              blurMobile={blurMobile}
              blurTablet={blurTablet}
              blurDesktop={blurDesktop}
            />
          )
        )}
      </div>
    </section>
  );
}

export { TeamSection };
