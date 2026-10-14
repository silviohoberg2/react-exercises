export default function ProductCard({
  name,
  category,
  price,
  available,
  stock,
  featured,
  discount,
  manufacturer,
  rating
}) {
  const cardClass = featured
    ? "product-card product-card-featured"
    : "product-card";

  return (
    <article className={cardClass}>
      {featured && (
        <p className="badge">Empfohlen</p>
      )}

      <h2>{name}</h2>

      <p>Kategorie: {category}</p>
      <p>Hersteller: {manufacturer}</p>
      <p>Bewertung: {rating} / 5</p>

      <p>Preis: {price.toFixed(2)} €</p>

      {discount > 0 && (
        <p className="discount">
          Rabatt: {discount} %
        </p>
      )}

      {!available && (
        <p className="status unavailable">
          Nicht verfügbar
        </p>
      )}

      {available && stock === 0 && (
        <p className="status sold-out">
          Ausverkauft
        </p>
      )}

      {available && stock > 0 && stock <= 2 && (
        <p className="status low-stock">
          Nur noch wenige verfügbar
        </p>
      )}

      {available && stock > 2 && (
        <p className="status available">
          Verfügbar
        </p>
      )}
    </article>
  );
}