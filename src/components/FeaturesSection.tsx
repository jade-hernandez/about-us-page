import BrushIcon from "./BrushIcon";
import CopyrightIcon from "./CopyrightIcon";
import DollarIcon from "./DollarIcon";
import DownloadIcon from "./DownloadIcon";
import LoopIcon from "./LoopIcon";
import PeopleIcon from "./PeopleIcon";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

interface FeaturesSectionProps {
  cards: CardProps[];
}

const cardsData: CardProps[] = [
  {
    icon: <DownloadIcon />,
    title: "Infinite Download",
    content:
      "Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more."
  },
  {
    icon: <BrushIcon />,
    title: "Purely Handcrafted",
    content:
      "No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust."
  },
  {
    icon: <CopyrightIcon />,
    title: "All Are Under licensed",
    content:
      "The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper)."
  },
  {
    icon: <DollarIcon />,
    title: "Cancel Anytime",
    content: "Subscribe at your own pace, and cancel when you feel it's enough."
  },
  {
    icon: <PeopleIcon />,
    title: "Empowering For Team",
    content: "We support multiple seats at once, requiring only a single payment."
  },
  {
    icon: <LoopIcon />,
    title: "No Limitations",
    content: "Use as many as you want, from Dribbble presentations to PowerPoint presentations."
  }
];

const Card = ({ icon, title, content }: CardProps) => {
  return (
    <div className='mx-auto flex w-full max-w-md flex-col items-center justify-center gap-5 md:max-w-[calc(50%-16px)] lg:max-w-[384px]'>
      {icon}
      <div className='flex flex-col gap-2 text-center'>
        <span className='text-xl font-semibold text-neutral-900'>{title}</span>
        <p className='text-base text-neutral-600'>{content}</p>
      </div>
    </div>
  );
};

const FeaturesSection = ({ cards }: FeaturesSectionProps) => {
  return (
    <div className='flex flex-col items-start justify-center gap-8 md:flex-row md:flex-wrap lg:gap-y-12'>
      {cards.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          content={card.content}
        />
      ))}
    </div>
  );
};

function App() {
  return (
    <main className='mx-auto flex min-h-screen w-full min-w-dvw flex-col items-center justify-center bg-linear-to-b from-gray-50 to-gray-300 p-4'>
      <section className='mx-auto flex max-w-full flex-col gap-12 rounded-md bg-white px-3 py-12 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] md:gap-16 md:px-4 md:py-16 lg:p-24'>
        <div className='flex flex-col gap-5 text-center lg:mx-auto lg:max-w-4xl'>
          <div className='flex flex-col gap-3'>
            <span className='text-base font-semibold text-indigo-700'>Premium abstract images</span>
            <h1 className='text-3xl font-semibold text-neutral-900 md:text-5xl'>
              Easy access to top quality images
            </h1>
          </div>
          <p className='mx-auto text-lg text-pretty text-neutral-600 md:max-w-167.5 md:text-xl lg:max-w-4xl'>
            In a world where storytelling constantly evolves, we lead with groundbreaking images
            designed for your presentation excellence.
          </p>
        </div>
        <FeaturesSection cards={cardsData} />
      </section>
    </main>
  );
}

export default App;
