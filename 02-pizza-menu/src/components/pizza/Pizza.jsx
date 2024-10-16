import PropTypes from "prop-types";

const Pizza = ({ name, photoName, ingredients, price, soldOut }) => {
  // if (soldOut) {
  //   return null;
  // }

  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
};

Pizza.propTypes = {
  name: PropTypes.string,
  photoName: PropTypes.any,
  ingredients: PropTypes.string,
  price: PropTypes.number,
  soldOut: PropTypes.bool,
};

export default Pizza;
