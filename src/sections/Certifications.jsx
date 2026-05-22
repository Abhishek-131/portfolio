import { useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, BadgeCheck, CalendarDays, ChevronLeft, ChevronRight, ExternalLink, Sparkles } from 'lucide-react';
import Section from '../components/Section.jsx';
import { certificateIcon, certifications } from '../data/portfolio.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Certifications() {
  const Icon = certificateIcon;
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // duplicate items until a minimum length to avoid Swiper loop issues
  const carouselCertifications = useMemo(() => {
    const base = certifications ?? [];
    if (base.length === 0) return [];
    let arr = [...base];
    while (arr.length < 9) arr = [...arr, ...base];
    return arr;
  }, []);

  return (
    <Section id="certifications" eyebrow="Certifications" title="Certifications & Achievements">
      <motion.div
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative"
      >
        <div className="pointer-events-none absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/20" />

        <div className="-mt-4 mb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm dark:text-blue-300 dark:shadow-glow">
            <Sparkles size={16} />
            Verified Learning Milestones
          </div>

          <div className="mt-6 h-px max-w-xl bg-gradient-to-r from-blue-500/60 via-indigo-500/50 to-transparent" />
        </div>

        <div className="relative overflow-hidden px-1 sm:px-2 lg:px-14">
          <button
            type="button"
            aria-label="Previous certificate"
            className="cert-prev absolute -left-1 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-2xl border border-gray-200 bg-white/90 text-slate-700 shadow-lg backdrop-blur transition hover:-translate-x-1 hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:bg-white/10 dark:text-white dark:shadow-glow dark:hover:text-blue-300 lg:grid"
          >
            <ChevronLeft size={23} />
          </button>

          <Swiper
            modules={[Autoplay, FreeMode, Navigation, Pagination, A11y]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex % (certifications.length || 1));
            }}
            loop
            freeMode={{ enabled: true, momentum: false }}
            slidesPerView={3}
            spaceBetween={28}
            speed={5200}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              reverseDirection: true,
            }}
            navigation={{
              prevEl: '.cert-prev',
              nextEl: '.cert-next',
            }}
            pagination={{ el: '.cert-pagination', clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 18 },
              768: { slidesPerView: 2, spaceBetween: 22 },
              1024: { slidesPerView: 3, spaceBetween: 26 },
            }}
            className="cert-swiper !overflow-hidden px-1 pb-14 pt-5"
          >
            {carouselCertifications.map((certificate, index) => (
              <SwiperSlide key={`${certificate.name}-${index}`} className="!h-auto">
                <motion.article
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
                  whileHover={{ y: -8 }}
                  className="cert-card glass-card group relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-2xl transition duration-500"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
                    <img
                      src={certificate.image}
                      alt={`${certificate.name} certificate preview`}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />

                    <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-2xl border border-white/15 bg-slate-950/40 text-blue-200 shadow-lg backdrop-blur-xl">
                      <Icon size={22} />
                    </div>

                    <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-300/30 bg-emerald-400/15 px-3 py-1.5 text-xs font-bold text-emerald-100 backdrop-blur-xl">
                      <BadgeCheck size={14} />
                      Verified
                    </div>
                  </div>

                  <div className="relative flex flex-1 flex-col p-5 sm:p-6">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="inline-flex min-w-0 items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 dark:text-blue-300">
                        <Award size={14} />
                        <span className="truncate">{certificate.issuer}</span>
                      </div>
                      <div className="flex shrink-0 items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-300">
                        <CalendarDays size={14} />
                        {certificate.date ?? certificate.year}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold leading-tight text-slate-950 dark:text-white sm:text-2xl">
                      {certificate.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      Recognized proof of practical learning and applied developer skills.
                    </p>

                    <a
                      href={certificate.credentialUrl ?? certificate.image}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:-translate-y-1 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-400/25"
                    >
                      View Certificate
                      <ExternalLink size={17} />
                    </a>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            aria-label="Next certificate"
            className="cert-next absolute -right-1 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-2xl border border-gray-200 bg-white/90 text-slate-700 shadow-lg backdrop-blur transition hover:translate-x-1 hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:bg-white/10 dark:text-white dark:shadow-glow dark:hover:text-blue-300 lg:grid"
          >
            <ChevronRight size={23} />
          </button>

          <div className="flex items-center justify-center gap-2 pb-1">
            {certifications.map((certificate, index) => (
              <button
                key={certificate.name}
                type="button"
                aria-label={`Show ${certificate.name}`}
                aria-current={activeIndex === index ? 'true' : 'false'}
                onClick={() => swiperRef.current?.slideToLoop(index)}
                className={`h-2.5 rounded-full transition-all focus:outline-none focus:ring-4 focus:ring-blue-500/20 ${
                  activeIndex === index
                    ? 'w-8 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-glow'
                    : 'w-2.5 bg-slate-400/50 hover:bg-blue-400 dark:bg-white/25 dark:hover:bg-blue-300'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
