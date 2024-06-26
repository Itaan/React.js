import { Pizza } from "./Pizza";
import { pizzaData } from "../API/Data";

export function Menu() {
  const numPizzas = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza key={pizza.name} pizzaData={pizza} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back alter :)</p>
      )}
    </main>
  );
}
