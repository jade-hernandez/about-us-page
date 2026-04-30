import { SkeletonCard } from "./skeleton-card/SkeletonCard";

import { useStats } from "../../hooks/useStats";

import { ImageWithPlaceholder } from "../../components/image-with-placeholder/ImageWithPlaceholder";
import { Button } from "../../components/ui/Button";

import AbstractStatisticsDesktop from "./images/abstract-statistics-desktop.webp";
import AbstractStatisticsMobile from "./images/abstract-statistics-mobile.webp";
import AbstractStatisticsTablet from "./images/abstract-statistics-tablet.webp";

import {
  STATISTICS_DESKTOP_BLUR,
  STATISTICS_MOBILE_BLUR,
  STATISTICS_TABLET_BLUR
} from "./images/blur-data";

type FeatureCardProps = {
  value: number;
  metric: string;
};

function MetricsCard({ value, metric }: FeatureCardProps) {
  const formattedValue = value.toLocaleString();
  const formattedMetric = () => {
    // This below is a special case where the API returns a different naming than what's expected by the final design
    if (metric == "library_images") return "Images in library";
    return metric.replace(/_/g, " ").replace(/\b\w/, char => char.toUpperCase());
  };

  return (
    <div className='flex flex-col items-center gap-4 rounded-lg py-6 shadow-[0_1px_3px_0px_rgba(0,0,0,0.1),0_1px_2px_0px_rgba(0,0,0,0.06)]'>
      <span className='text-4xl font-bold text-indigo-700 md:text-5xl'>{formattedValue}</span>
      <p className='text-xl text-neutral-600'>{formattedMetric()}</p>
    </div>
  );
}

export { MetricsCard };

function StatisticsSection() {
  const { data, loading, error, refetch } = useStats();
  const cardData = data ? data.data : [];

  return (
    <section
      aria-labelledby='statistics-heading'
      className='mx-auto flex max-w-[calc(100%-2rem)] flex-col items-center justify-center gap-12 py-12 md:gap-16 md:py-16 lg:py-24 xl:max-w-304'
    >
      <div className='flex flex-col gap-5 text-center'>
        <div className='flex flex-col gap-3'>
          <span className='text-base font-semibold text-indigo-700'>Statistics</span>
          <h2
            id='statistics-heading'
            className='text-3xl font-semibold text-neutral-900 md:text-5xl'
          >
            More than premium abstract imagery
          </h2>
        </div>
        <p className='mx-auto text-xl text-neutral-600'>
          Our platform is more than just as a service to us – it is a catalyst for enriching lives
          through premium abstract imagery.
        </p>
      </div>
      <div className='mx-auto flex w-full flex-col items-center justify-between gap-12 md:gap-16 lg:flex-row lg:gap-8'>
        <ImageWithPlaceholder
          altText='An abstract representation of creativity and design'
          images={{
            mobileImagePlaceholder: STATISTICS_MOBILE_BLUR,
            tabletImagePlaceholder: STATISTICS_TABLET_BLUR,
            desktopImagePlaceholder: STATISTICS_DESKTOP_BLUR,
            mobileImage: AbstractStatisticsMobile,
            tabletImage: AbstractStatisticsTablet,
            desktopImage: AbstractStatisticsDesktop
          }}
        />

        <div className='max-w-[calc(100% - 96px)] flex w-full flex-col gap-6 md:gap-8'>
          <p className='text-left text-lg text-neutral-600'>Our mission, in numbers</p>
          {error && (
            <div
              role='alert'
              className='flex flex-col gap-3 rounded-md bg-red-100 p-4 text-center text-sm font-medium text-red-800'
            >
              Failed to load statistics.
              <Button
                onClick={refetch}
                variant='destructive'
                size='md-link'
                className='mx-auto max-w-32'
              >
                Réessayer
              </Button>
            </div>
          )}

          {loading && <SkeletonCard number={3} />}

          {cardData.map((card, index) => (
            <MetricsCard
              key={`feature-card-${index}`}
              value={card.value}
              metric={card.metric}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export { StatisticsSection };
