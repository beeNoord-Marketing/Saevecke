import { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import material2 from '../../assets/material-2.jpg';

const cdn = 'https://cdn.beenoordmarketing.de/Saevecke/images/';

const slides = [
  material2,
  `${cdn}buero-1.jpg`,
  `${cdn}empfang-1.jpg`,
  `${cdn}material-3.jpg`,
  `${cdn}halle-1.jpg`,
  `${cdn}daemmwolle-1.jpg`,
  `${cdn}empfang-6.jpg`,
  `${cdn}material-5.jpg`,
  `${cdn}telefonat.jpg`,
  `${cdn}material-6.jpg`,
  `${cdn}material-7.jpg`,
  `${cdn}empfang-7.jpg`,
];

export function ImageSlideshow() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -width * 0.8 : width * 0.8,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const t = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      const items = Array.from(
        el.querySelectorAll<HTMLElement>('[data-slide]'),
      );
      if (items.length === 0) return;

      const containerRect = el.getBoundingClientRect();
      let currentIndex = 0;
      items.forEach((item, i) => {
        if (item.getBoundingClientRect().left <= containerRect.left + 5) {
          currentIndex = i;
        }
      });

      const nextIndex = currentIndex + 1;
      if (nextIndex >= items.length) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        items[nextIndex].scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
          block: 'nearest',
        });
      }
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-brand-cta/5 py-16 relative">
      <div
        ref={scrollRef}
        className="overflow-x-auto snap-x snap-mandatory scroll-smooth"
      >
        <div className="flex gap-4 px-6 md:px-16">
          {slides.map((src) => (
            <div
              key={src}
              data-slide
              className="snap-start shrink-0 h-48 md:h-64 lg:h-80 bg-white shadow-lg overflow-hidden"
            >
              <img src={src} alt="" className="h-full w-auto block" />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => scrollBy('left')}
        aria-label="Vorheriges Bild"
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 hover:opacity-90 transition-opacity"
      >
        <ChevronLeft size={24} className="text-brand-cta" />
      </button>
      <button
        type="button"
        onClick={() => scrollBy('right')}
        aria-label="Nächstes Bild"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 hover:opacity-90 transition-opacity"
      >
        <ChevronRight size={24} className="text-brand-cta" />
      </button>
    </section>
  );
}
