import { useEffect, useState } from "react";

const testimonials = [
  {
    id: "1",
    quote:
      "An extraordinary collection. Each piece feels like a true celebration of craftsmanship — elegant, refined, and enduring.",
    author: "Sophie Laurent",
    title: "Wine Enthusiast",
  },
  {
    id: "2",
    quote:
      "Glassware that truly honors the ritual. A quiet, refined beauty that allows the wine to speak for itself.",
    author: "James Chen",
    title: "Sommelier",
  },
  {
    id: "3",
    quote:
      "The attention to detail is exceptional. With every pour, it creates a moment filled with intention and care.",
    author: "Elena Rossi",
    title: "Restaurant Owner",
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const animation = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(animation);
  }, [isAutoPlaying]);

  const handleSelectIndex = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="testimonials">
      <h3 className="heading">What They Say</h3>

      <div className="testimonials-carousel">
        <div className="testimonials-track">
          {testimonials.map((testimonial, index) => (
            <div
              key={`${String(testimonial.id)}_${testimonial.title}`}
              className={`testimonial-card ${index === activeIndex ? "active" : ""}`}
              aria-hidden={index !== activeIndex}
            >
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-meta">
                <span className="testimonial-author">{testimonial.author}</span>
                <span className="testimonial-title">{testimonial.title}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="dots" aria-label="Testimonial navigation">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`dot ${index === activeIndex ? "active" : ""} ${index === activeIndex && isAutoPlaying ? "progress-active" : ""}`}
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => handleSelectIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
