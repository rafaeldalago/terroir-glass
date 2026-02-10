import { useEffect, useState } from "react";
import bordeauxGlassImg from "../assets/bordeaux-glass.jpg";
import champagneGlassImg from "../assets/champagne-glass.jpg";
import whiteGlassImg from "../assets/white-glass.jpg";

const cards = [
  {
    id: "KQxxmGBxCd3",
    title: "Bordeaux",
    description:
      "Designed for full-bodied red wines with structure and depth. The generous bowl maximizes oxygen contact, allowing complex aromas to fully unfold while softening tannins. The shape directs wine to the back of the palate, enhancing balance and length. Ideal for Cabernet Sauvignon, Merlot, Syrah, and other powerful reds that benefit from aeration.",
    img: bordeauxGlassImg,
    profiles: {
      Body: 4,
      Aroma: 5,
      Aeration: 4,
      Elegance: 3,
    },
  },
  {
    id: "NasdiqQn1mN",
    title: "White",
    description:
      "A slimmer, more refined profile crafted to preserve freshness, tension, and natural acidity. The narrower bowl concentrates delicate aromas while limiting oxidation, keeping the wine vibrant and precise. The shape helps maintain a cooler temperature for longer, enhancing clarity and mouthfeel. Ideal for Sauvignon Blanc, Chardonnay, and other aromatic or mineral-driven whites.",
    img: whiteGlassImg,
    profiles: {
      Body: 2,
      Aroma: 4,
      Freshness: 5,
      Precision: 4,
    },
  },
  {
    id: "k19JQOn3xqw",
    title: "Champagne",
    description:
      "A tall, narrow silhouette designed to preserve effervescence and elevate visual elegance. The shape slows the release of bubbles while guiding aromas upward, enhancing both texture and aromatic expression. Lightweight and finely balanced, it delivers precision with every sip. Ideal for Champagne, Prosecco, and all sparkling wines where finesse and energy matter.",
    img: champagneGlassImg,
    profiles: {
      Body: 1,
      Aroma: 3,
      Freshness: 5,
      Elegance: 5,
    },
  },
];

export const TheCollection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const animation = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 8000);

    return () => clearInterval(animation);
  }, [isAutoPlaying]);

  const handleSelectIndex = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="the-collection" className="the-collection">
      <h3 className="heading">The Collection</h3>
      <div className="collection-carousel">
        <div className="collection-track">
          {cards.map((item, index) => (
            <div
              key={item.id}
              className={`product-card ${index === activeIndex ? "active" : ""}`}
              aria-hidden={index !== activeIndex}
            >
              <div className="card-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <table>
                  <tbody>
                    {Object.entries(item.profiles).map(([key, value]) => (
                      <tr key={`${key}_${value}_${item.id}`}>
                        <td style={{ paddingRight: "16px" }}>{key}</td>
                        <td>
                          <Progressbar value={value} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="profile-disclaimer">
                  Not a specification, but a reference. A way to understand
                  balance, character, and purpose at a glance.
                </p>
              </div>
              <img src={item.img} className="card-image" alt={item.title} />
            </div>
          ))}
        </div>

        <div className="dots" aria-label="Collection navigation">
          {cards.map((_, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={index}
                type="button"
                className={`dot ${isActive ? "active" : ""} ${isActive && isAutoPlaying ? "progress-active" : ""}`}
                aria-label={`Go to ${cards[index].title}`}
                onClick={() => handleSelectIndex(index)}
              ></button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Progressbar = ({ value }: { value: string | number }) => {
  if (value === undefined || value === null) return null;

  return (
    <div className="progress-bar">
      <div
        className="inner-progress-bar"
        style={{
          width: `${(Number(value) * 100) / 5}%`,
        }}
      />
    </div>
  );
};
