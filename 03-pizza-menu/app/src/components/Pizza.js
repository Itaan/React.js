export function Pizza({ pizzaData }) {
  if (pizzaData.soldOut) return null;
  return (
    <li className="pizza">
      <img src={pizzaData.photoName} alt={pizzaData.name} />
      <div>
        <h3>{pizzaData.name}</h3>
        <p>{pizzaData.ingredients}</p>
        <span>{pizzaData.price}</span>
      </div>
    </li>
  );
}
