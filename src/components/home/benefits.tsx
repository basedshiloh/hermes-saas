import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonWhite } from '@/src/components/shared/ui/button';
import { BenefitCard, BenefitImageCard, BenefitRoiCard } from '@/src/components/shared/ui/card';
import Link from 'next/link';

const benefitCards = [
  { title: 'No servers to manage', iconClass: 'ns-shape-1' },
  { title: 'No Docker or terminal needed', iconClass: 'ns-shape-2' },
  { title: 'Always up-to-date agent', iconClass: 'ns-shape-3' },
  { title: 'Pay only when active', iconClass: 'ns-shape-4' },
  { title: 'Works with 200+ AI models', iconClass: 'ns-shape-5' },
];

const Benefits = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-18">
          <div className="space-y-8 text-center">
            <div className="space-y-5">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Benefits</BadgePrimary>
              </RevealAnimation>

              <div className="space-y-3">
                <TextReveal delay={0.2}>
                  <h2>Why managed Hermes beats self-hosting</h2>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <p className="text-background-14/60 mx-auto max-w-[520px]">
                    Skip the infrastructure headaches. We handle hosting, updates, security, and
                    scaling so you can focus on getting work done with your AI agent.
                  </p>
                </TextReveal>
              </div>
            </div>

            <RevealAnimation delay={0.4} className="flex items-center justify-center">
              <Link href="/pricing">
                <ButtonWhite
                  className="mx-auto w-[80%]! md:w-fit!"
                  textClassName="text-center text-nowrap max-sm:flex-1 max-sm:pr-8!"
                >
                  Get started
                </ButtonWhite>
              </Link>
            </RevealAnimation>
          </div>

          <div className="grid grid-cols-12 items-center justify-center gap-y-5 md:gap-4">
            <RevealAnimation delay={0.1} className="col-span-12 md:col-span-6 lg:col-span-3">
              <BenefitCard title={benefitCards[0].title} iconClass={benefitCards[0].iconClass} />
            </RevealAnimation>

            <RevealAnimation delay={0.2} className="col-span-12 md:col-span-6 lg:col-span-3">
              <BenefitCard title={benefitCards[1].title} iconClass={benefitCards[1].iconClass} />
            </RevealAnimation>

            <RevealAnimation delay={0.3} className="col-span-12 md:col-span-6 lg:col-span-3">
              <BenefitCard title={benefitCards[2].title} iconClass={benefitCards[2].iconClass} />
            </RevealAnimation>

            <RevealAnimation
              delay={0.4}
              className="col-span-12 row-span-2 md:col-span-6 lg:col-span-3"
            >
              <BenefitRoiCard />
            </RevealAnimation>

            <RevealAnimation delay={0.4} className="col-span-12 md:col-span-6 lg:col-span-3">
              <BenefitCard title={benefitCards[3].title} iconClass={benefitCards[3].iconClass} />
            </RevealAnimation>

            <RevealAnimation delay={0.5} className="col-span-12 md:col-span-6 lg:col-span-3">
              <BenefitImageCard />
            </RevealAnimation>

            <RevealAnimation delay={0.6} className="col-span-12 md:col-span-6 lg:col-span-3">
              <BenefitCard title={benefitCards[4].title} iconClass={benefitCards[4].iconClass} />
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
