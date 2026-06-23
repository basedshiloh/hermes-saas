import slideImg8 from '@/public/images/ns-avatar-10.jpg';
import avatar3 from '@/public/images/ns-avatar-14.jpg';
import slideImg2 from '@/public/images/ns-avatar-4.jpg';
import slideImg3 from '@/public/images/ns-avatar-5.jpg';
import slideImg4 from '@/public/images/ns-avatar-6.jpg';
import slideImg5 from '@/public/images/ns-avatar-7.jpg';
import { default as avatar1, default as slideImg6 } from '@/public/images/ns-avatar-8.jpg';
import { default as avatar2, default as slideImg7 } from '@/public/images/ns-avatar-9.jpg';
import slideImg1 from '@/public/images/ns-img-2.jpg';
import CounterNumberOnScroll from '@/src/components/animation/counter-number-on-scroll';
import RevealAnimation from '@/src/components/animation/reveal-animation';
import {
  SlideContent,
  SlideImg,
  SlideItem,
  SlideNavigation,
  SlideNext,
  SlidePrev,
  SplitSlide,
} from '@/src/components/animation/split-slide';
import { ArrowDotLeftIcon, ArrowDotRightIcon, StarIcon } from '@/src/components/shared/icon';
import AvatarItem from '@/src/components/shared/ui/avatar-reveal/avatar-item';
import AvatarReveal from '@/src/components/shared/ui/avatar-reveal/avatar-reveal';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <section className="pt-20 md:pt-25 lg:pt-39">
      <div className="main-container">
        <div className="grid grid-cols-12 items-start justify-center gap-x-5 gap-y-5 lg:gap-y-0 xl:gap-x-14">
          <div className="col-span-12 lg:col-span-4">
            <div className="flex h-[300px] flex-col items-center justify-between lg:h-[355px]">
              <div className="flex flex-row items-center gap-x-4 gap-y-4 md:flex-col lg:flex-row lg:gap-y-0">
                <div className="flex items-center -space-x-4">
                  <AvatarReveal
                    className="flex items-center justify-center -space-x-3.5"
                    direction="left"
                    offset={50}
                    stagger={0.1}
                  >
                    {[avatar1, avatar2, avatar3].map((avatar, index) => (
                      <AvatarItem
                        key={avatar.src}
                        className="outline-background-2 size-11 overflow-hidden rounded-full outline-2"
                      >
                        <Image
                          src={avatar}
                          alt={`avatar-${index + 1}`}
                          className="size-full rounded-full object-cover"
                        />
                      </AvatarItem>
                    ))}
                    <AvatarItem className="font-inter-tight text-tagline-3 text-secondary flex size-11 items-center justify-center rounded-full bg-white font-normal">
                      +243
                    </AvatarItem>
                  </AvatarReveal>
                </div>

                <RevealAnimation delay={0.5} direction="right" offset={50}>
                  <div>
                    <span className="flex items-center justify-start gap-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} className="fill-primary-500 size-4" />
                      ))}
                    </span>
                    <p className="text-background-14/60 text-tagline-2">
                      Loved by <CounterNumberOnScroll value={20} />
                      k+ users
                    </p>
                  </div>
                </RevealAnimation>
              </div>

              <div className="w-full space-y-4">
                <RevealAnimation
                  asChild={false}
                  delay={0.4}
                  className="w-full rounded-xl bg-white p-4 text-center"
                >
                  <p className="text-tagline-3">User Satisfaction</p>
                  <div className="text-secondary font-medium">
                    <CounterNumberOnScroll value={91} duration={1.2} />%
                  </div>
                </RevealAnimation>

                <div className="flex items-center gap-x-4">
                  <RevealAnimation
                    asChild={false}
                    delay={0.5}
                    className="w-1/2 rounded-xl bg-white p-4 text-center"
                  >
                    <p className="text-tagline-3">Deploy Success Rate</p>
                    <div className="text-secondary font-medium">
                      <CounterNumberOnScroll value={100} duration={1.2} />%
                    </div>
                  </RevealAnimation>

                  <RevealAnimation
                    asChild={false}
                    delay={0.6}
                    className="w-1/2 rounded-xl bg-white p-4 text-center"
                  >
                    <p className="text-tagline-3">Tasks Automated</p>
                    <div className="text-secondary font-medium">
                      <CounterNumberOnScroll value={87} duration={1.2} />%
                    </div>
                  </RevealAnimation>
                </div>
              </div>
            </div>
          </div>

          <RevealAnimation delay={0.6}>
            <div className="col-span-12 lg:col-span-8">
              <SplitSlide>
                <SlideItem>
                  <SlideImg src={slideImg1} alt="testimonial one" />
                  <SlideContent>
                    <p className="text-secondary">
                      &ldquo;I run an SEO agency and had zero experience with AI agents or servers.
                      I picked the SEO Manager Pack, clicked deploy, and had my agent running in
                      under a minute.
                      <span className="mt-5 inline-block">
                        It now handles keyword research and content briefs while I focus on
                        clients.&rdquo;
                      </span>
                    </p>
                  </SlideContent>
                </SlideItem>

                <SlideItem>
                  <SlideImg src={slideImg2} alt="testimonial two" />
                  <SlideContent>
                    <p className="text-secondary">
                      &ldquo;As a freelance social media manager, I needed help writing captions and
                      scheduling posts across platforms.
                      <span className="mt-5 inline-block">
                        My Hermes Agent drafts a full week of content in minutes. The BYOK model
                        access means I can use whichever AI writes best for my niche.&rdquo;
                      </span>
                    </p>
                  </SlideContent>
                </SlideItem>

                <SlideItem>
                  <SlideImg src={slideImg3} alt="testimonial three" />
                  <SlideContent>
                    <p className="text-secondary">
                      &ldquo;I tried self-hosting Hermes Agent and gave up after fighting Docker
                      configs for a weekend. Found this platform, deployed in one click, and
                      never looked back.
                      <span className="mt-5 inline-block">
                        The auto-sleep feature means I only pay when I actually use it, which is
                        way cheaper than keeping a VPS running 24/7.&rdquo;
                      </span>
                    </p>
                  </SlideContent>
                </SlideItem>

                <SlideItem>
                  <SlideImg src={slideImg4} alt="testimonial four" />
                  <SlideContent>
                    <p className="text-secondary">
                      &ldquo;I am a grad student using the Researcher Pack. My agent summarizes
                      papers, extracts key findings, and even writes literature review drafts.
                      <span className="mt-5 inline-block">
                        It saved me easily 15 hours a week during thesis season. The chat
                        interface is so simple — just ask and it does the work.&rdquo;
                      </span>
                    </p>
                  </SlideContent>
                </SlideItem>

                <SlideItem>
                  <SlideImg src={slideImg5} alt="testimonial five" />
                  <SlideContent>
                    <p className="text-secondary">
                      &ldquo;The cron scheduling changed everything for me. I set my agent to pull
                      competitor pricing every morning and compile a report before I wake up.
                      <span className="mt-5 inline-block">
                        As a solo e-commerce founder, having an AI analyst that runs on autopilot
                        feels like having a full-time employee.&rdquo;
                      </span>
                    </p>
                  </SlideContent>
                </SlideItem>

                <SlideItem>
                  <SlideImg src={slideImg6} alt="testimonial six" />
                  <SlideContent>
                    <p className="text-secondary">
                      &ldquo;What sold me was the container isolation. Each agent runs in its own
                      sandbox, so I feel safe letting it execute code and manage files.
                      <span className="mt-5 inline-block">
                        I use the Engineer Pack and it helps me prototype scripts, debug APIs,
                        and write documentation faster than I ever could alone.&rdquo;
                      </span>
                    </p>
                  </SlideContent>
                </SlideItem>

                <SlideItem>
                  <SlideImg src={slideImg7} alt="testimonial seven" />
                  <SlideContent>
                    <p className="text-secondary">
                      &ldquo;Being able to switch between 200+ models with my own API key is
                      incredible. I test different models for different tasks — Claude for
                      writing, GPT for coding, Gemini for analysis.
                      <span className="mt-5 inline-block">
                        No other platform gives you this kind of flexibility without locking you
                        into their own pricing.&rdquo;
                      </span>
                    </p>
                  </SlideContent>
                </SlideItem>

                <SlideItem>
                  <SlideImg src={slideImg8} alt="testimonial eight" />
                  <SlideContent>
                    <p className="text-secondary">
                      &ldquo;I manage a small marketing team and set up agents for everyone using
                      different Packs. Our SEO lead, content writer, and social manager each
                      have their own agent tuned for their role.
                      <span className="mt-5 inline-block">
                        The skill system lets them teach their agents new tricks without any
                        coding. Productivity across the board went through the roof.&rdquo;
                      </span>
                    </p>
                  </SlideContent>
                </SlideItem>

                {/* upper md  */}
                <SlideNavigation className="absolute right-5 bottom-10 z-20 mx-auto mt-6 hidden w-full max-w-[180px] max-[376px]:max-w-[140px] md:flex md:max-w-[220px] lg:max-w-[300px] xl:max-w-[446px]">
                  <SlidePrev>
                    <button type="button" aria-label="Previous testimonial">
                      <ArrowDotLeftIcon className="fill-secondary group-hover:fill-accent size-6 transition-colors duration-500" />
                    </button>
                  </SlidePrev>
                  <SlideNext>
                    <button type="button" aria-label="Next testimonial">
                      <ArrowDotRightIcon className="fill-secondary group-hover:fill-accent size-6 transition-colors duration-500" />
                    </button>
                  </SlideNext>
                </SlideNavigation>

                {/* lower md and below */}
                <SlideNavigation className="mx-auto mt-6 flex w-[220px] md:hidden">
                  <SlidePrev>
                    <button type="button" aria-label="Previous testimonial">
                      <ArrowDotLeftIcon className="fill-secondary group-hover:fill-accent size-6 transition-colors duration-500" />
                    </button>
                  </SlidePrev>
                  <SlideNext>
                    <button type="button" aria-label="Next testimonial">
                      <ArrowDotRightIcon className="fill-secondary group-hover:fill-accent size-6 transition-colors duration-500" />
                    </button>
                  </SlideNext>
                </SlideNavigation>
              </SplitSlide>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
