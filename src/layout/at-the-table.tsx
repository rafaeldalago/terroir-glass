import diningTable from "../assets/dining-table.jpg";

export const AtTheTable = () => {
  return (
    <section id="at-the-table" className="at-the-table">
      <h3 className="heading">At the Table</h3>
      <img
        src={diningTable}
        alt="Restaurant dining table"
        className="dining-table"
        loading="lazy"
      />
      <p>
        From fine dining rooms to intimate wine bars, Terroir exists to honor
        the ritual of wine itself. We believe every pour deserves intention, and
        that the glass should elevate—not distract from—the moment. That’s why
        Terroir is chosen for spaces where precision, atmosphere, and
        craftsmanship matter: environments designed to slow time, sharpen the
        senses, and let wine be experienced as it was meant to be.
      </p>
    </section>
  );
};
