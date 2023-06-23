import Link from "next/link";

export function Card() {
  const cardData = [
    {
      title: "Algorithmique",
      description: "Introduction à l'Algorithmique",
      link: "/semestre1/algo-python/Algorithmique",
    },
    {
      title: "Python",
      description: "Introduction à la programmation Python",
      link: "/semestre1/algo-python/Python",
    },
    {
      title: "TP - Td5",
      description: "Introduction aux structures de données",
      link: "/semestre1/algo-python/TP/Td5-structures-de-donnees",
    },
    {
      title: "TP1",
      description: "Premier exercice pratique",
      link: "/semestre1/algo-python/TP/tp1",
    },
    {
      title: "TP6",
      description: "Sixième exercice pratique",
      link: "/semestre1/algo-python/TP/tp6",
    },
    {
      title: "TP7",
      description: "Septième exercice pratique",
      link: "/semestre1/algo-python/TP/tp7",
    },
  ];

  return (
    <div className="grid gap-4 py-6 lg:grid-cols-2">
      {cardData.map((card, index) => (
        <div key={index} className="space-y-4 border shadow-xl card border-blue-500/30">
          <div className="card-body">
            <h2 className="text-blue-500 card-title">{card.title}</h2>
            <p>{card.description}</p>
            <div className="w-full">
              <Link
                href={card.link}
                className="w-full btn-outline btn-primary btn"
              >
                Voir
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
