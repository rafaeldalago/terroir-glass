import restaurant1 from "../assets/restaurant-1.png";
import restaurant2 from "../assets/restaurant-2.png";
import restaurant3 from "../assets/restaurant-3.png";

const clients = [
  {
    id: "KQxxmGxasBxCd3",
    img: restaurant1,
  },
  {
    id: "NaeesdiqQn1mN",
    img: restaurant2,
  },
  {
    id: "k19weJQOn3xqw",
    img: restaurant3,
  },
];

export const Clients = () => {
  return (
    <section className="clients">
      <h2 style={{ textAlign: "center", fontWeight: "500" }}>
        Trusted by restaurants that take wine seriously
      </h2>
      <div>
        {clients.map((client) => (
          <img
            key={client.id}
            src={client.img}
            alt="logo1"
            className="restaurant-logo"
          />
        ))}
      </div>
    </section>
  );
};
