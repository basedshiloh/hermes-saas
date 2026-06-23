import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionIcon,
  AccordionItem,
  AccordionTitle,
} from '@/src/components/shared/ui/accordion';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonWhite } from '@/src/components/shared/ui/button';
import Link from 'next/link';

const faqItems = [
  {
    value: 'what-is-hermes-agent',
    question: 'What is Hermes Agent?',
    answer:
      'Hermes Agent is an open-source AI agent created by Nous Research. It can browse the web, execute code, manage files, run on schedules, and perform 40+ actions — all through a chat interface. We host and manage it for you so you never need to touch a server.',
  },
  {
    value: 'do-i-need-technical-knowledge',
    question: 'Do I need technical knowledge?',
    answer:
      'Not at all. Our platform is designed for non-technical professionals. Just pick a Pack for your profession, click deploy, and start chatting with your agent. No terminal, no Docker, no server configuration required.',
  },
  {
    value: 'what-models-can-i-use',
    question: 'What models can I use?',
    answer:
      'You can access 200+ AI models through OpenRouter using your own API key (BYOK). This includes models from OpenAI, Anthropic, Google, Meta, Mistral, and many more. Switch models anytime from your dashboard.',
  },
  {
    value: 'how-does-byok-work',
    question: 'How does BYOK work?',
    answer:
      'BYOK stands for Bring Your Own Key. You provide your own OpenRouter API key, and your agent uses it to access any supported model. You pay model providers directly at their rates — we never mark up model costs.',
  },
  {
    value: 'what-are-packs',
    question: 'What are Packs?',
    answer:
      'Packs are pre-built agent configurations tailored to specific professions. Each Pack comes with optimized prompts, tools, and skills for roles like SEO Manager, Social Media Manager, Engineer, Student/Researcher, or a blank General Pack you can customize from scratch.',
  },
  {
    value: 'can-i-cancel-anytime',
    question: 'Can I cancel anytime?',
    answer:
      'Yes. There are no long-term contracts or cancellation fees. You can cancel your subscription at any time from your dashboard and your agent will remain active until the end of your billing period.',
  },
];

const FAQ = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="flex flex-col items-start justify-center gap-y-6 overflow-hidden lg:flex-row lg:gap-x-18 lg:gap-y-0">
          <RevealAnimation delay={0.1} direction="left" offset={100} className="w-full lg:w-1/2">
            <div className="space-y-14 text-center lg:text-left">
              <div className="space-y-5">
                <RevealAnimation delay={0.1}>
                  <BadgePrimary>Frequently Asked Questions</BadgePrimary>
                </RevealAnimation>

                <div className="space-y-3">
                  <TextReveal delay={0.2}>
                    <h2>Frequently asked questions</h2>
                  </TextReveal>
                  <TextReveal delay={0.3}>
                    <p className="text-background-14/60 mx-auto max-w-[450px] lg:mx-0">
                      Everything you need to know about managed Hermes Agent — from setup and
                      pricing to models and cancellation.
                    </p>
                  </TextReveal>
                </div>
              </div>

              <Link href="/contact" className="flex justify-center lg:justify-start">
                <ButtonWhite
                  className="mx-auto w-[80%]! md:mx-0 md:w-fit!"
                  textClassName="text-center max-sm:flex-1 max-sm:px-0! max-sm:pr-8!"
                >
                  Contact Us
                </ButtonWhite>
              </Link>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2} direction="right" offset={100} className="w-full lg:w-1/2">
            <Accordion defaultOpen={faqItems[0].value} className="space-y-4" aria-label="FAQ">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="group rounded-[20px] bg-white px-4 md:px-6"
                >
                  <AccordionAction
                    showIcon={false}
                    className="flex w-full cursor-pointer items-center justify-between gap-x-4 pt-6 transition-all duration-400 ease-in-out group-data-[state=closed]:pb-6 group-data-[state=open]:pb-4 md:pt-8 md:group-data-[state=closed]:pb-8"
                  >
                    <AccordionTitle>{item.question}</AccordionTitle>
                    <AccordionIcon className="shrink-0" />
                  </AccordionAction>
                  <AccordionContent contentClassName="text-tagline-3 sm:text-tagline-2 font-inter-tight cursor-text pb-8 text-left">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
