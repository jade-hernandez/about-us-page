import profileSarah from "./images/profile-thumbnail-1.webp";
import profileJohn from "./images/profile-thumbnail-2.webp";
import profileJean from "./images/profile-thumbnail-3.webp";
import profileJake from "./images/profile-thumbnail-4.webp";
import profileIgor from "./images/profile-thumbnail-5.webp";
import profileDeclan from "./images/profile-thumbnail-6.webp";
import profileMarcus from "./images/profile-thumbnail-7.webp";
import profileOliver from "./images/profile-thumbnail-8.webp";
import profileMark from "./images/profile-thumbnail-9.webp";

export type TestimonialCardData = {
  name: string;
  username: string;
  testimonial: string;
  imageUrl: string;
};

export type TestimonialCardProps = TestimonialCardData;

export const testimonialsData: TestimonialCardData[] = [
  {
    name: "Sarah Dole",
    username: "@sarahdole",
    testimonial:
      "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
    imageUrl: profileSarah
  },
  {
    name: "John Appleseed",
    username: "@johnaseed",
    testimonial:
      "As an artist, finding inspiration is crucial. This platform has become my go-to source for unique abstract images that ignite my creativity like never before.",
    imageUrl: profileJohn
  },
  {
    name: "Jean Gray",
    username: "@jeniic",
    testimonial:
      "I never thought I'd find such stunning abstract images for free! This platform has exceeded my expectations in every way.",
    imageUrl: profileJean
  },
  {
    name: "Jake Johnson",
    username: "@jakejohnshon",
    testimonial:
      "From corporate presentations to personal projects, the abstract images on this platform have added a touch of elegance and sophistication to everything I create.",
    imageUrl: profileJake
  },
  {
    name: "Igor Stravinsky",
    username: "@igorstrav",
    testimonial:
      "The subscription plans are worth every penny. Having unlimited access to premium abstract images has transformed my design workflow and elevated the quality of my work",
    imageUrl: profileIgor
  },
  {
    name: "Declan Rice",
    username: "@drice",
    testimonial:
      "I'm amazed by the attention to detail in every image on this platform. It's clear that a lot of thought and creativity goes into curating the collection.",
    imageUrl: profileDeclan
  },
  {
    name: "Marcus Thompson",
    username: "@mthompson",
    testimonial:
      "Using abstract images from this platform has helped me convey complex concepts in a visually engaging way. My clients are always impressed!",
    imageUrl: profileMarcus
  },
  {
    name: "Oliver Neverloved",
    username: "@olivernever",
    testimonial:
      "I appreciate how user-friendly the platform is. Browsing, downloading, and managing my image library couldn't be easier.",
    imageUrl: profileOliver
  },
  {
    name: "Mark Dennis",
    username: "@marked",
    testimonial:
      "The customer support team went above and beyond to help me with a subscription issue. Their dedication to customer satisfaction is truly commendable",
    imageUrl: profileMark
  }
];
