import type { ComponentType } from "react";
import FacebookIcon from "./icons/FacebookIcon";
import GithubIcon from "./icons/GithubIcon";
import InstagramIcon from "./icons/InstagramIcon";
import XIcon from "./icons/XIcon";
import YoutubeIcon from "./icons/YoutubeIcon";

const ICON_SIZE = 24;
const ICON_COLOR = "#A3A3A3";

type TNavItem = {
  id: number;
  title: string;
  path: string;
};

type TSocialIcon = {
  id: string;
  icon: ComponentType<{ size: number; color: string }>;
  label: string;
};

export const sectionsData: TNavItem[] = [
  { id: 0, title: "Features", path: "/" },
  { id: 1, title: "Pricing", path: "/" },
  { id: 2, title: "About Us", path: "/" },
  { id: 3, title: "Contact", path: "/" }
];

export const defaultIcons: TSocialIcon[] = [
  { id: "youtube", icon: YoutubeIcon, label: "Visit Youtube profile" },
  { id: "instagram", icon: InstagramIcon, label: "Visit Instagram profile" },
  { id: "facebook", icon: FacebookIcon, label: "Visit Facebook profile" },
  { id: "github", icon: GithubIcon, label: "Visit Github profile" },
  { id: "x", icon: XIcon, label: "Visit X profile" }
];

export { ICON_SIZE, ICON_COLOR };
