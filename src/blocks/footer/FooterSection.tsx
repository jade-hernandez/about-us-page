import { Footer } from "./Footer";
import { defaultIcons, sectionsData } from "./footer-data";

function FooterSection() {
  return (
    <section
      className='flex w-full items-center justify-center px-8 py-12 md:py-16 lg:py-24'
      aria-labelledby='footer-heading'
    >
      <h2
        id='footer-heading'
        className='sr-only'
      >
        Footer
      </h2>
      <Footer
        companyName='Abstractly, Inc.'
        navItems={sectionsData}
        socialIcons={defaultIcons}
      />
    </section>
  );
}

export { FooterSection };
