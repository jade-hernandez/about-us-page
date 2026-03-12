import FeatureIcon from "./FeatureIcon";
import { cn } from "../../utils/utils";

export interface IFeatureListItemProps {
  content: string;
  className?: string;
}

export const FeatureListItem = ({ content, className }: IFeatureListItemProps) => {
  return (
    <li className={cn("flex gap-3", className)}>
      <div className='flex shrink-0 items-center justify-center'>
        <FeatureIcon />
      </div>
      <span className='text-neutral-600'>{content}</span>
    </li>
  );
};

export interface IFeatureListProps {
  items: string[];
}

export const FeatureList = ({ items }: IFeatureListProps) => {
  return (
    <ul className={cn("flex flex-col gap-5 md:min-h-45")}>
      {items.map((item, index) => (
        <FeatureListItem
          key={index}
          content={item}
        />
      ))}
    </ul>
  );
};
