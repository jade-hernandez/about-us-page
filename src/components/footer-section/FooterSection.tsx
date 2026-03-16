import { Footer } from "./Footer";
import { defaultIcons, sectionsData } from "./footer-data";

export default function FooterSection() {
  return (
    <section className='flex w-full items-center justify-center bg-white px-8 py-12 md:py-16 lg:px-80 lg:py-24'>
      <div className='flex flex-col items-center justify-center p-4'>
        <Footer
          companyName='Abstractly, Inc.'
          navItems={sectionsData}
          socialIcons={defaultIcons}
        />
      </div>
    </section>
  );
}
