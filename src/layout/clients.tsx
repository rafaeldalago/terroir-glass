import restaurant1 from "../assets/restaurant-1.png";
import restaurant2 from "../assets/restaurant-2.png";
import restaurant3 from "../assets/restaurant-3.png";

const clients = [
  {
    id: "KQxxmGxasBxCd3",
    img: restaurant1,
    name: "Salty Sparrow",
  },
  {
    id: "NaeesdiqQn1mN",
    img: restaurant2,
    name: "Golden Hour",
  },
  {
    id: "k19weJQOn3xqw",
    img: restaurant3,
    name: "Mountain Standard",
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
          <div
            key={client.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={client.img}
              alt={client.name}
              className="restaurant-logo"
              loading="lazy"
            />
            <p>{client.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
