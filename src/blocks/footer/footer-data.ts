import type { NavItem, SocialIcon } from "./Footer";

import { FacebookIcon } from "./icons/FacebookIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { XIcon } from "./icons/XIcon";
import { YoutubeIcon } from "./icons/YoutubeIcon";

export const sectionsData: NavItem[] = [
  { key: "features-path", title: "Features", path: "/" },
  { key: "pricing-path", title: "Pricing", path: "/" },
  { key: "about-us-path", title: "About Us", path: "/" },
  { key: "contact-path", title: "Contact", path: "/" }
];

export const defaultIcons: SocialIcon[] = [
  {
    key: "youtube-icon",
    icon: YoutubeIcon,
    label: "Visit Youtube profile",
    href: "https://youtube.com"
  },
  {
    key: "instagram-icon",
    icon: InstagramIcon,
    label: "Visit Instagram profile",
    href: "https://instagram.com"
  },
  {
    key: "facebook-icon",
    icon: FacebookIcon,
    label: "Visit Facebook profile",
    href: "https://facebook.com"
  },
  {
    key: "github-icon",
    icon: GithubIcon,
    label: "Visit Github profile",
    href: "https://github.com"
  },
  { key: "x-icon", icon: XIcon, label: "Visit X profile", href: "https://x.com" }
];
