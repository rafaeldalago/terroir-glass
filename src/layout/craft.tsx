import manufacturing from "../assets/manufacturing.jpg";

export const Craft = () => {
  return (
    <section id="features">
      <div className="craft-container">
        <div>
          <h3 className="heading">Craft & Purpose</h3>
          <p>
            Our wine glasses are crafted with intention, using high-transparency
            crystal glass to reveal the true color, clarity, and movement of the
            wine. Each form is carefully proportioned to guide aromas toward the
            nose, allowing the wine to fully express its character before the
            first sip. The result is a more precise, layered tasting
            experience—whether enjoyed slowly or shared at the table.
          </p>

          <p>
            The thin, refined rim is designed to disappear on the palate,
            creating a smooth and uninterrupted flow of wine. This subtle detail
            reduces distraction and enhances mouthfeel, letting texture and
            flavor take center stage. A finely balanced stem provides stability
            without excess weight, offering a comfortable, natural hold that
            feels effortless over long moments of use.
          </p>

          <p>
            Built for both ritual and reality, Terroir glasses combine elegance
            with durability. The crystal structure resists clouding and
            scratches over time, maintaining brilliance through repeated use.
            Fully dishwasher safe, they are suited not only for special
            occasions, but for everyday service in environments where quality
            cannot be compromised—restaurants, wine bars, and homes that value
            craftsmanship.
          </p>
          <em>Key Benefits:</em>
          <ul>
            <li>Enhances wine aroma, flavor, and visual clarity</li>
            <li>Ultra-clear crystal glass for precise tasting</li>
            <li>Thin, polished rim for a seamless drinking experience</li>
            <li>Balanced stem for comfort, control, and stability</li>
            <li>Dishwasher safe for practical daily use</li>
            <li>Resistant to scratches and long-term clouding</li>
          </ul>
        </div>
        <img
          src={manufacturing}
          alt="Glass manufacturing"
          className="glass-manufacture"
          loading="lazy"
        />
      </div>
    </section>
  );
};
