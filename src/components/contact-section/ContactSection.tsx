import { cn } from "../../utils/utils";
import { RiBuildingLine, RiMailLine, RiPhoneLine } from "react-icons/ri";

import useContactForm from "./useContactForm";
import Button from "../ui/Button";
import FormSuccess from "./FormSuccess";
import Toast from "../ui/Toast";
import Textarea from "../ui/Textarea";

const contactItems = [
  { icon: RiBuildingLine, label: "123 Maple Street, Springfield, IL, USA" },
  { icon: RiPhoneLine, label: "+1 (650) 555-0198", href: "tel:16505550198" },
  { icon: RiMailLine, label: "hello@abstractly.com", href: "mailto:hello@abstractly.com" }
];

export default function ContactSection() {
  const { name, email, message, isLoading, errors, toast, setToast, setField, submitContactForm } =
    useContactForm();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContactForm();
  };

  return (
    <>
      {toast?.type === "error" && (
        <div
          className='fixed top-6 left-1/2 z-50 -translate-x-1/2'
          role='status'
          aria-live='assertive'
          aria-atomic='true'
          aria-label='Error message'
        >
          <Toast
            type={toast.type}
            message={toast.message}
            onClose={() => setToast(null)}
          />
        </div>
      )}
      <section
        className='flex w-full flex-col gap-16 rounded-md bg-white px-3 py-12 md:px-4 md:py-16 lg:flex-row lg:justify-center lg:p-24'
        aria-labelledby='contact-heading'
      >
        <div className='flex max-w-304 flex-col gap-12 md:gap-16 lg:flex-row lg:gap-8'>
          {/* Left column */}
          <div className='flex w-full flex-col items-start justify-between gap-10 md:gap-12 lg:max-w-[calc(50%-16px)] lg:py-2.75'>
            <div className='flex flex-col gap-5'>
              <h1
                id='contact-heading'
                className='text-4xl font-semibold text-neutral-900 md:text-5xl lg:text-6xl'
              >
                Talk to our team
              </h1>
              <p className='max-w-150 text-lg text-neutral-600 md:max-w-full md:text-xl'>
                We're committed to delivering the support you require to make your experience as
                smooth as possible.
              </p>
            </div>
            <section aria-label='Contact information'>
              <ul
                className='flex flex-col gap-6'
                role='list'
              >
                {contactItems.map(({ icon: Icon, label, href }) => (
                  <li
                    key={label}
                    className='flex items-center gap-3'
                  >
                    <div className='flex size-12 items-center justify-center rounded-full bg-white shadow-[0_1px_3px_rgba(0,0,0,0.10),0_1px_2px_rgba(0,0,0,0.06)]'>
                      <Icon className='size-6 text-indigo-700' />
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className='text-base font-medium text-neutral-600'
                      >
                        {label}
                      </a>
                    ) : (
                      <span className='max-w-36.5 text-base font-medium text-neutral-600 md:max-w-full'>
                        {label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right column */}
          {toast?.type === "success" ? (
            <FormSuccess onReset={() => setToast(null)} />
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className='flex w-full flex-col gap-10 rounded-lg border border-neutral-200 p-4 shadow-[0_1px_3px_rgba(0,0,0,0.10),0_1px_2px_rgba(0,0,0,0.06)] md:p-8 lg:max-w-[calc(50%-16px)]'
              aria-describedby='contact-heading'
            >
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-6 md:flex-row md:gap-8'>
                  <div className='flex w-full flex-col gap-1.5 md:max-w-[calc(50%-16px)]'>
                    <label
                      htmlFor='name'
                      className='text-sm font-medium text-neutral-700'
                    >
                      Name
                    </label>
                    <input
                      id='name'
                      type='text'
                      placeholder='Your name'
                      value={name}
                      onChange={e => setField("name", e.target.value)}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={cn(
                        "rounded-lg border bg-neutral-50 px-3.5 py-2.5 text-sm text-neutral-500 outline-none placeholder:text-neutral-500 focus:text-neutral-900 focus:shadow-[0_0px_0px_1px_rgba(68,76,231,1),0_0px_0px_4px_rgba(68,76,231,0.12)] disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:text-neutral-400",
                        errors.name ? "border-red-500" : "border-neutral-200"
                      )}
                    />
                    {errors.name && (
                      <span
                        id='name-error'
                        className='text-sm text-red-500'
                      >
                        {errors.name}
                      </span>
                    )}
                  </div>
                  <div className='flex w-full flex-col gap-1.5 md:max-w-[calc(50%-16px)]'>
                    <label
                      htmlFor='email'
                      className='text-sm font-medium text-neutral-700'
                    >
                      Email
                    </label>
                    <input
                      id='email'
                      type='email'
                      placeholder='example@example.com'
                      value={email}
                      onChange={e => setField("email", e.target.value)}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={cn(
                        "rounded-lg border bg-neutral-50 px-3.5 py-2.5 text-sm text-neutral-500 outline-none placeholder:text-neutral-500 focus:text-neutral-900 focus:shadow-[0_0px_0px_1px_rgba(68,76,231,1),0_0px_0px_4px_rgba(68,76,231,0.12)] disabled:cursor-not-allowed disabled:bg-neutral-50 disabled:text-neutral-400",
                        errors.email ? "border-red-500" : "border-neutral-200"
                      )}
                    />
                    {errors.email && (
                      <span
                        id='email-error'
                        className='text-sm text-red-500'
                      >
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>
                <Textarea
                  placeholder='Write your message...'
                  name='message'
                  label='Message'
                  value={message}
                  onChange={e => setField("message", e.target.value)}
                  hasError={!!errors.message}
                  errorMessage={errors.message}
                />
              </div>
              <Button
                type='submit'
                variant='primary'
                size='md'
                disabled={isLoading}
                className='w-full justify-center focus:shadow-[0_0px_0px_1px_rgba(68,76,231,1),0_0px_0px_4px_rgba(68,76,231,0.12)]'
              >
                {isLoading ? "Sending..." : "Submit"}
              </Button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
