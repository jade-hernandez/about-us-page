import { FeatureIcon } from "./FeatureIcon";

function FeatureListItem({ content }: { content: string }) {
  return (
    <li className='flex gap-3'>
      <div className='flex shrink-0 items-center justify-center'>
        <FeatureIcon />
      </div>
      <span className='text-neutral-600'>{content}</span>
    </li>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className='flex h-full flex-col gap-5 md:min-h-44'>
      {items.map(item => (
        <FeatureListItem
          key={item}
          content={item}
        />
      ))}
    </ul>
  );
}

export { FeatureList };
