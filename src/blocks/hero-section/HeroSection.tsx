import HeroDesktop from "./images/abstract-hero-desktop.webp";
import HeroTablet from "./images/abstract-hero-tablet.webp";
import HeroMobile from "./images/abstract-hero-mobile.webp";

import { ImageWithPlaceholder } from "../../components/image-with-placeholder/ImageWithPlaceholder";
import { Button } from "../../components/ui/Button";

import { useMediaQuery } from "../../hooks/useMediaQuery";

import { HERO_DESKTOP_BLUR, HERO_MOBILE_BLUR, HERO_TABLET_BLUR } from "./images/blur-data";

function HeroSection() {
  const breakpoint = useMediaQuery();
  return (
    <section
      aria-labelledby='hero-heading'
      className='mx-auto flex max-w-[calc(100%-2rem)] flex-col items-center justify-center gap-12 py-12 md:gap-8 md:py-16 xl:flex-row xl:py-24'
    >
      <div className='flex h-fit w-full flex-col justify-start gap-8 align-middle md:gap-16 xl:max-w-122'>
        <div className='flex h-fit w-full flex-col gap-8 md:gap-5'>
          <h1
            id='hero-heading'
            className='md:text-5 h-fit w-full text-4xl font-semibold text-neutral-900 md:text-5xl xl:text-6xl'
          >
            From a tiny desk to the entire world
          </h1>

          <p className='h-fit w-full text-xl text-neutral-700'>
            As a lean, passionate team, we've made something that most would think is impossible -
            premium abstract images for free and for all.
          </p>
        </div>
        <div className='flex w-full max-w-114.5 gap-4 md:gap-8 xl:max-w-95.75'>
          <Button
            variant='secondary'
            size={breakpoint !== "mobile" ? "2xl" : "xl"}
            className='order-2 md:order-1'
          >
            Learn more
          </Button>
          <Button
            variant='primary'
            size={breakpoint !== "mobile" ? "2xl" : "xl"}
            className='order-1 md:order-2'
          >
            See pricing
          </Button>
        </div>
      </div>
      <div className='lg:max-w-174'>
        <ImageWithPlaceholder
          altText='An abstract representation of creativity and design'
          images={{
            mobileImagePlaceholder: HERO_MOBILE_BLUR,
            tabletImagePlaceholder: HERO_TABLET_BLUR,
            desktopImagePlaceholder: HERO_DESKTOP_BLUR,
            mobileImage: HeroMobile,
            tabletImage: HeroTablet,
            desktopImage: HeroDesktop
          }}
        />
      </div>
    </section>
  );
}

export { HeroSection };
