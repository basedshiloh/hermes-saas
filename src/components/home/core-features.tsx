import autoRemindersImg from '@/public/images/ns-img-19.svg';
import scaleWithoutComplexityImg from '@/public/images/ns-img-20.svg';
import multiStepAutomationImg from '@/public/images/ns-img-21.png';
import timezoneImg from '@/public/images/ns-img-22.png';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import { TextReveal } from '@/src/components/animation/text-reveal';
import { GradientCircleIcon } from '@/src/components/shared/icon';
import { BadgePrimary } from '@/src/components/shared/ui/badge';
import { ButtonWhite } from '@/src/components/shared/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const CoreFeatures = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="space-y-10 lg:space-y-18">
          <div className="space-y-8">
            <div className="space-y-5 text-center">
              <RevealAnimation delay={0.1}>
                <BadgePrimary>Core features</BadgePrimary>
              </RevealAnimation>

              <div className="space-y-3">
                <TextReveal delay={0.2}>
                  <h2>Built for power, designed for simplicity</h2>
                </TextReveal>
                <TextReveal delay={0.3}>
                  <p className="text-background-14/60 mx-auto max-w-[400px]">
                    Every managed Hermes agent comes with enterprise-grade infrastructure and
                    features you would expect from a premium platform.
                  </p>
                </TextReveal>
              </div>

              <RevealAnimation delay={0.4}>
                <ul className="flex items-center justify-center gap-x-6">
                  <li className="flex items-center justify-center gap-x-1">
                    <GradientCircleIcon />
                    <span className="text-tagline-2 text-secondary font-inter-tight font-normal italic">
                      BYOK access.
                    </span>
                  </li>
                  <li className="flex items-center justify-center gap-x-1">
                    <GradientCircleIcon />
                    <span className="text-tagline-2 text-secondary font-inter-tight font-normal italic">
                      Auto-sleep.
                    </span>
                  </li>
                  <li className="flex items-center justify-center gap-x-1">
                    <GradientCircleIcon />
                    <span className="text-tagline-2 text-secondary font-inter-tight font-normal italic">
                      Full isolation.
                    </span>
                  </li>
                </ul>
              </RevealAnimation>
            </div>

            <RevealAnimation delay={0.5} className="flex items-center justify-center">
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
            <RevealAnimation delay={0.1} className="col-span-12 md:col-span-6 lg:col-span-5">
              <div className="h-[425px] space-y-5 rounded-[20px] bg-white p-5 md:space-y-8 lg:p-8 xl:h-[510px]">
                <figure className="h-[303px] w-full max-[376px]:h-[274px] md:h-[257px] lg:h-[272px] xl:h-[352px]">
                  <Image
                    src={autoRemindersImg}
                    alt="auto-reminders-and-notifications"
                    className="size-full object-cover"
                  />
                </figure>

                <div className="space-y-1">
                  <h3 className="text-heading-5">BYOK model access</h3>
                  <p className="text-background-14/60 line-clamp-1">
                    Bring your own key and access 200+ models via OpenRouter — use any LLM you want.
                  </p>
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2} className="col-span-12 md:col-span-6 lg:col-span-7">
              <div className="h-[425px] rounded-[20px] bg-white p-5 max-xl:space-y-8 lg:p-8 xl:h-[510px]">
                <figure className="h-[265px] w-full max-[376px]:h-[240px] lg:h-[275px] xl:h-[382px]">
                  <Image
                    src={multiStepAutomationImg}
                    alt="multi-step-automation-logic"
                    className="size-full object-cover"
                  />
                </figure>

                <div className="space-y-1">
                  <h3 className="text-heading-5">Auto-sleep containers</h3>
                  <p className="text-background-14/60">
                    Your agent sleeps when idle and wakes instantly — you only pay when it is active.
                  </p>
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.3} className="col-span-12 md:col-span-6 lg:col-span-7">
              <div className="lp:space-y-4 h-[425px] rounded-[20px] bg-white p-5 lg:p-8 xl:h-[510px]">
                <figure className="h-[325px] w-full lg:h-[288px] xl:h-[372px]">
                  <Image
                    src={scaleWithoutComplexityImg}
                    alt="scale-without-complexity"
                    className="size-full object-cover"
                  />
                </figure>

                <div className="space-y-1">
                  <h3 className="text-heading-5">Container isolation</h3>
                  <p className="text-background-14/60 line-clamp-1">
                    Every agent runs in its own secure, sandboxed container with dedicated resources.
                  </p>
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.4} className="col-span-12 md:col-span-6 lg:col-span-5">
              <div className="space-y-5 lp:space-y-8 h-[425px] rounded-[20px] bg-white p-5 lg:p-8 xl:h-[510px]">
                <figure className="h-[270px] w-full lg:h-[253px] xl:h-[352px]">
                  <Image
                    src={timezoneImg}
                    alt="automatically-identifies-timezone"
                    className="size-full object-cover"
                  />
                </figure>

                <div className="space-y-1">
                  <h3 className="text-heading-5">Extensible skill system</h3>
                  <p className="text-background-14/60 line-clamp-1">
                    Teach your agent new abilities with reusable skills that compound over time.
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
