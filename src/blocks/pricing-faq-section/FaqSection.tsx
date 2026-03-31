import { Button } from "../../components/ui/Button";
import { Link } from "../../components/ui/Link";

import { FaqItem } from "./FaqItem";
import { faqContentData } from "./faq-data";

function FaqSection() {
  return (
    <section
      aria-labelledby='faq-heading'
      className='mx-auto flex max-w-304 flex-col gap-12 px-3 py-12 md:gap-16 md:px-4 md:py-16 lg:px-0 lg:py-24'
    >
      <div className='flex flex-col items-center gap-5 text-center'>
        <h2
          id='faq-heading'
          className='text-3xl font-semibold text-neutral-900 md:text-5xl'
        >
          Frequently asked questions
        </h2>
        <p className='text-lg text-neutral-600 md:text-xl'>Choose any questions you need</p>
      </div>
      <div className='flex flex-col'>
        {faqContentData.map((faqItem, index) => (
          <FaqItem
            key={faqItem.title}
            position={faqItem.position}
            title={faqItem.title}
            content={faqItem.content}
            isLast={index === faqContentData.length - 1}
          />
        ))}
        <div className='mt-7 flex h-fit w-full flex-col items-center justify-between gap-4 rounded-lg border border-neutral-200 bg-white p-4 shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)] md:flex-row md:p-8'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-xl font-semibold text-pretty text-neutral-900'>
              Can&apos;t find the answer you&apos;re looking for?
            </h3>
            <p className='text-base text-neutral-600'>
              Reach out to our{" "}
              <Link
                href='mailto:support@mail.com'
                variant='linkColor'
                size='lg-link'
                className='inline'
              >
                customer support
              </Link>{" "}
              team.
            </p>
          </div>
          <Button
            variant='primary'
            size='lg'
            className='w-full justify-center md:max-w-34.5'
          >
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
}

export { FaqSection };
