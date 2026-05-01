import type { TeamCardProps } from "../team-data";
import { ImageWithPlaceholder } from "../../../components/image-with-placeholder/ImageWithPlaceholder";

function FeatureCard({
  name,
  role,
  supportingText,
  imageMobileUrl,
  imageTabletUrl,
  imageDesktopUrl,
  blurMobile,
  blurTablet,
  blurDesktop
}: TeamCardProps) {
  return (
    <div className='flex max-w-77.75 flex-col md:max-w-78 lg:w-70'>
      <div className='flex flex-col gap-6'>
        <ImageWithPlaceholder
          altText={name}
          images={{
            mobileImage: imageMobileUrl,
            tabletImage: imageTabletUrl,
            desktopImage: imageDesktopUrl,
            mobileImagePlaceholder: blurMobile,
            tabletImagePlaceholder: blurTablet,
            desktopImagePlaceholder: blurDesktop
          }}
        />
        <div className='flex flex-col justify-items-start gap-4'>
          <div className='flex flex-col justify-items-start gap-1 text-xl'>
            <p className='font-semibold text-neutral-900'>{name}</p>
            <p className='font-medium text-indigo-700'>{role}</p>
          </div>
          <p className='text-base font-normal text-neutral-600'>{supportingText}</p>
        </div>
      </div>
    </div>
  );
}

export { FeatureCard };
