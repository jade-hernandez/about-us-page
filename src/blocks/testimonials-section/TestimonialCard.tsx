import type { TestimonialCardData } from "./testimonials-data";

function TestimonialCard({ name, username, testimonial, imageUrl }: TestimonialCardData) {
  return (
    <article className='w-full rounded-lg border border-neutral-200 bg-white p-6 leading-6 shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)]'>
      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-4'>
          <img
            src={imageUrl}
            alt={`Profile picture of ${name}`}
            width={48}
            height={48}
            className='aspect-square w-12 shrink-0 rounded-full bg-gray-100 object-cover'
          />
          <div className='flex flex-col gap-px'>
            <h3 className='truncate text-lg font-semibold text-neutral-900'>{name}</h3>
            <p className='truncate text-sm text-neutral-600'>{username}</p>
          </div>
        </div>
        <p className='wrap-break-words text-base leading-6 text-neutral-600'>{testimonial}</p>
      </div>
    </article>
  );
}

export { TestimonialCard };
