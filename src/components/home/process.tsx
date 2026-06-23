import processCardOneImg from '@/public/images/ns-img-1.png';
import processCardOneOverlay from '@/public/images/ns-img-12.svg';
import processCardTwoOverlay from '@/public/images/ns-img-13.png';
import processCardThreeOverlay from '@/public/images/ns-img-14.svg';
import processCardFourOverlay from '@/public/images/ns-img-15.svg';
import processCardFourImg from '@/public/images/ns-img-16.jpg';
import processCardThreeImg from '@/public/images/ns-img-17.jpg';
import processCardTwoImg from '@/public/images/ns-img-18.jpg';
import {
  CardRevealWithProcess,
  CardsWrapper,
  ProcessCard,
  ProcessContent,
  ProcessImg,
  ProcessImgWrapper,
  ProcessStep,
  ProcessTimeline,
} from '@/src/components/animation/card-reveal-with-process';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonWhite } from '@/src/components/shared/ui/button';
import { StaticImageData } from 'next/image';
import Link from 'next/link';

type ProcessCardData = {
  image: StaticImageData | string;
  imageAlt: string;
  overlay: StaticImageData | string;
  overlayAlt: string;
  title: string;
  description: string;
  details: { title: string; description: string }[];
};

const processCards: ProcessCardData[] = [
  {
    image: processCardOneImg,
    imageAlt: 'process-card-1',
    overlay: processCardOneOverlay,
    overlayAlt: 'process-card-1-img',
    title: 'Pick your Pack',
    description:
      'Choose a pre-built agent configuration designed for your profession — SEO, social media, research, engineering, or start blank.',
    details: [
      {
        title: 'Profession-Specific Configs',
        description: 'Each Pack comes with tools, prompts, and skills tailored to your role.',
      },
      {
        title: 'Or Start From Scratch',
        description: 'Use the General Pack and configure everything yourself.',
      },
    ],
  },
  {
    image: processCardTwoImg,
    imageAlt: 'process-card-2',
    overlay: processCardTwoOverlay,
    overlayAlt: 'process-card-2-img',
    title: 'Deploy your agent',
    description:
      'One click and your Hermes Agent is live in a secure container — no servers to manage, no terminal needed.',
    details: [
      {
        title: 'One-Click Deploy',
        description: 'Your agent spins up in seconds with everything pre-configured.',
      },
      {
        title: 'Isolated Container',
        description: 'Every agent runs in its own secure, sandboxed environment.',
      },
    ],
  },
  {
    image: processCardThreeImg,
    imageAlt: 'process-card-3',
    overlay: processCardThreeOverlay,
    overlayAlt: 'process-card-3-img',
    title: 'Start chatting',
    description:
      'Talk to your agent through a simple chat dashboard. Ask it to browse the web, write code, manage files, and more.',
    details: [
      {
        title: 'Chat Interface',
        description: 'Interact naturally — just type what you need done.',
      },
      {
        title: '40+ Built-In Tools',
        description: 'Your agent can browse, code, search, write, and analyze out of the box.',
      },
    ],
  },
  {
    image: processCardFourImg,
    imageAlt: 'process-card-4',
    overlay: processCardFourOverlay,
    overlayAlt: 'process-card-4-img',
    title: 'Automate everything',
    description:
      'Set up cron schedules, teach your agent new skills, and let it handle recurring tasks while you focus on what matters.',
    details: [
      {
        title: 'Cron Scheduling',
        description: 'Run tasks on autopilot — daily, weekly, or any custom interval.',
      },
      {
        title: 'Skill System',
        description: 'Extend your agent with reusable skills that grow over time.',
      },
    ],
  },
];

const Process = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-18">
          <div className="flex w-auto flex-col items-center justify-center gap-x-18 md:mx-auto md:w-[500px] lg:w-auto lg:flex-row">
            <div className="space-y-5 text-center lg:w-1/2 lg:text-left">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Process</BadgePrimary>
              </RevealAnimation>
              <TextReveal delay={0.2}>
                <h2>From zero to AI agent — in 4 simple steps</h2>
              </TextReveal>
            </div>
            <div className="space-y-8 text-center lg:w-1/2 lg:text-left">
              <TextReveal delay={0.3}>
                <p>
                  Go from choosing your profession to chatting with a fully deployed AI agent in
                  under two minutes.
                </p>
              </TextReveal>
              <RevealAnimation delay={0.4} className="inline-block w-full md:w-auto">
                <Link href="/process">
                  <ButtonWhite className="mx-auto w-[80%]! md:w-fit!">See how it works</ButtonWhite>
                </Link>
              </RevealAnimation>
            </div>
          </div>

          <RevealAnimation delay={0.5}>
            <CardRevealWithProcess cardCount={processCards.length}>
              <ProcessTimeline className="flex w-full flex-row items-center justify-center md:hidden">
                {processCards.map((card, index) => (
                  <ProcessStep
                    key={card.title}
                    index={index}
                    label={String(index + 1).padStart(2, '0')}
                  />
                ))}
              </ProcessTimeline>

              <CardsWrapper>
                {processCards.map((card, index) => (
                  <ProcessCard key={card.title} index={index}>
                    <ProcessImgWrapper>
                      <ProcessImg
                        index={index}
                        image={card.image}
                        imageAlt={card.imageAlt}
                        overlay={card.overlay}
                        overlayAlt={card.overlayAlt}
                      />
                    </ProcessImgWrapper>
                    <ProcessContent
                      index={index}
                      title={card.title}
                      description={card.description}
                      details={card.details}
                    />
                  </ProcessCard>
                ))}
              </CardsWrapper>

              <ProcessTimeline className="hidden w-[5%] flex-col items-center justify-center md:flex">
                {processCards.map((card, index) => (
                  <ProcessStep
                    key={card.title}
                    index={index}
                    label={String(index + 1).padStart(2, '0')}
                  />
                ))}
              </ProcessTimeline>
            </CardRevealWithProcess>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Process;
