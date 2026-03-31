import { TestimonialCard } from "./TestimonialCard";
import { testimonialsData } from "./testimonials-data";

function TestimonialsSection() {
  const firstColumn = testimonialsData.filter((_, i) => i % 3 === 0);
  const secondColumn = testimonialsData.filter((_, i) => i % 3 === 1);
  const thirdColumn = testimonialsData.filter((_, i) => i % 3 === 2);

  return (
    <section
      className='mx-auto flex max-w-304 flex-col gap-12 px-3 py-12 md:gap-16 md:px-4 md:py-16 lg:px-0 lg:py-24'
      aria-labelledby='testimonials-heading'
    >
      <div className='flex flex-col gap-5 px-8 text-center'>
        <div className='flex flex-col gap-3'>
          <p className='text-xl font-semibold text-indigo-700'>Testimonials</p>
          <h2
            id='testimonials-heading'
            className='text-3xl font-semibold text-neutral-900 md:text-5xl'
          >
            Countless users, countless smiles
          </h2>
        </div>
        <p className='text-lg text-neutral-600 md:text-xl'>
          Explore our community's journey and discover why satisfaction defines us.
        </p>
      </div>

      <div className='flex flex-col gap-6 md:hidden'>
        {testimonialsData.map(testimonial => (
          <TestimonialCard
            key={testimonial.username}
            name={testimonial.name}
            username={testimonial.username}
            testimonial={testimonial.testimonial}
            imageUrl={testimonial.imageUrl}
          />
        ))}
      </div>

      <div className='hidden gap-8 md:grid md:grid-cols-2 lg:hidden'>
        {[
          testimonialsData.filter((_, i) => i % 2 === 0),
          testimonialsData.filter((_, i) => i % 2 === 1)
        ].map((column, colIndex) => (
          <div
            key={colIndex}
            className='flex flex-col gap-8'
          >
            {column.map(testimonial => (
              <TestimonialCard
                key={testimonial.username}
                name={testimonial.name}
                username={testimonial.username}
                testimonial={testimonial.testimonial}
                imageUrl={testimonial.imageUrl}
              />
            ))}
          </div>
        ))}
      </div>

      <div className='hidden gap-8 lg:grid lg:grid-cols-3'>
        {[firstColumn, secondColumn, thirdColumn].map((column, colIndex) => (
          <div
            key={colIndex}
            className='flex flex-col gap-8'
          >
            {column.map(testimonial => (
              <TestimonialCard
                key={testimonial.username}
                name={testimonial.name}
                username={testimonial.username}
                testimonial={testimonial.testimonial}
                imageUrl={testimonial.imageUrl}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export { TestimonialsSection };
