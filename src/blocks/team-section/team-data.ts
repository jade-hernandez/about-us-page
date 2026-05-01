import imageMobileJoe from "./images/joe-mobile-image.webp";
import imageTabletJoe from "./images/joe-tablet-image.webp";
import imageDesktopJoe from "./images/joe-desktop-image.webp";

import imageMobileAsh from "./images/ash-mobile-image.webp";
import imageTabletAsh from "./images/ash-tablet-image.webp";
import imageDesktopAsh from "./images/ash-desktop-image.webp";

import imageMobileFarias from "./images/farias-mobile-image.webp";
import imageTabletFarias from "./images/farias-tablet-image.webp";
import imageDesktopFarias from "./images/farias-desktop-image.webp";

import imageMobileSarah from "./images/sarah-mobile-image.webp";
import imageTabletSarah from "./images/sarah-tablet-image.webp";
import imageDesktopSarah from "./images/sarah-desktop-image.webp";

import {
  ASH_DESKTOP_BLUR,
  ASH_MOBILE_BLUR,
  ASH_TABLET_BLUR,
  FARIAS_DESKTOP_BLUR,
  FARIAS_MOBILE_BLUR,
  FARIAS_TABLET_BLUR,
  JOE_DESKTOP_BLUR,
  JOE_MOBILE_BLUR,
  JOE_TABLET_BLUR,
  SARAH_DESKTOP_BLUR,
  SARAH_MOBILE_BLUR,
  SARAH_TABLET_BLUR
} from "./images/blur-data";

export type TeamCardData = {
  name: string;
  role: string;
  supportingText: string;
  imageMobileUrl: string;
  imageTabletUrl: string;
  imageDesktopUrl: string;
  blurMobile: string;
  blurTablet: string;
  blurDesktop: string;
};

export type TeamCardProps = TeamCardData;

export const teamCardData: TeamCardData[] = [
  {
    name: "Joe Jackson",
    role: "Founder & CEO",
    supportingText:
      "Joe leads with a strategic vision for innovation and growth. With a passion for combining artistry with technology, he drives our mission to deliver cutting-edge solutions.",
    imageMobileUrl: imageMobileJoe,
    imageTabletUrl: imageTabletJoe,
    imageDesktopUrl: imageDesktopJoe,

    blurMobile: JOE_MOBILE_BLUR,
    blurTablet: JOE_TABLET_BLUR,
    blurDesktop: JOE_DESKTOP_BLUR
  },
  {
    name: "Ash Karter",
    role: "Founder & CFO",
    supportingText:
      "Ash brings financial acumen and a keen eye for detail to our operations. Her leadership ensures sustainable growth and operational excellence.",
    imageMobileUrl: imageMobileAsh,
    imageTabletUrl: imageTabletAsh,
    imageDesktopUrl: imageDesktopAsh,
    blurMobile: ASH_MOBILE_BLUR,
    blurTablet: ASH_TABLET_BLUR,
    blurDesktop: ASH_DESKTOP_BLUR
  },
  {
    name: "Farias Amed",
    role: "Front End AI Engineer",
    supportingText:
      "Farias is at the forefront of AI-driven design, developing interfaces that blend intuitive usability with advanced functionality.",
    imageMobileUrl: imageMobileFarias,
    imageTabletUrl: imageTabletFarias,
    imageDesktopUrl: imageDesktopFarias,
    blurMobile: FARIAS_MOBILE_BLUR,
    blurTablet: FARIAS_TABLET_BLUR,
    blurDesktop: FARIAS_DESKTOP_BLUR
  },
  {
    name: "Sarah Haust",
    role: "Dev Ops",
    supportingText:
      "Sarah orchestrates our development pipelines with precision, ensuring seamless deployment cycles and system reliability.",
    imageMobileUrl: imageMobileSarah,
    imageTabletUrl: imageTabletSarah,
    imageDesktopUrl: imageDesktopSarah,
    blurMobile: SARAH_MOBILE_BLUR,
    blurTablet: SARAH_TABLET_BLUR,
    blurDesktop: SARAH_DESKTOP_BLUR
  }
];
