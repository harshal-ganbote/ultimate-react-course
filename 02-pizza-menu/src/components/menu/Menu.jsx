import { pizzaData } from "../../data";
import Pizza from "../Pizza/Pizza";

const Menu = () => {
  const message = "We're still working on our menu. Please come back later :)";

  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzaData.length ? (
        <ul className="pizzas">
          {pizzaData.map((pizza, index) => (
            <Pizza key={index} {...pizza} />
          ))}
        </ul>
      ) : (
        <p>{message}</p>
      )}
    </main>
  );
};

export default Menu;
